import { NextRequest, NextResponse } from 'next/server'
import { PRACTICE_NAME, PHONE_DISPLAY } from '@/lib/practice'

// Server-side proxy for the public contact form.
//
// NOTE: this is the CONTACT-FORM webhook. The patient-access widget posts to a
// DIFFERENT trigger on the same GHL sub-account (.../webhook-trigger/Vx3zdtk9rVyjRHcI2EPY,
// configured in medreception-qa-api lambdaWidget.js). Do not collapse them.
//
// The GHL webhook URL is deliberately kept server-side so it never ships in the
// browser bundle. A client-side-only check would be trivially bypassed by
// POSTing the webhook directly, which is how another practice on this stack
// started receiving gibberish-name opportunities in July 2026.
//
// Defence in depth, cheapest check first:
//   1. honeypot      — hidden field only a bot fills
//   2. submit timing — humans cannot complete this form in under 1.5s
//   3. field validation
const GHL_WEBHOOK_URL =
  process.env.GHL_CONTACT_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/hq6E68lqDoyHSEzkzAfA/webhook-trigger/rtJXrGhXYesc5fcf4gRH'

// Humans do not fill in name, email and a message and hit submit this fast.
const MIN_SUBMIT_MS = 1500

// The <select> posts codes; GHL should receive the human label, not "neuropsych".
const SERVICE_LABELS: Record<string, string> = {
  neuropsych: 'Neuropsychological Evaluation',
  adhd: 'ADHD Testing',
  disability: 'Disability Evaluation',
  bariatric: 'Pre-Bariatric Surgery Evaluation',
  therapy: 'Individual Therapy',
  general: 'General Inquiry',
}

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  pageUrl?: string
  // Hidden in the UI. Real users never fill this; bots that stuff every input do.
  company_website?: string
  // Milliseconds between form mount and submit.
  timeElapsedMs?: number
}

/** Matches the widget backend's splitName(): first token is the first name. */
function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean)
  return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') || '' }
}

export async function POST(request: NextRequest) {
  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // 1) Honeypot. Return a fake success so the bot does not learn it was caught
  //    and retry with the field cleared.
  if (body.company_website && body.company_website.trim()) {
    console.warn('[contact] honeypot triggered — dropped')
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // 2) Submit timing. Same silent-drop rationale. A MISSING value is treated as
  //    a bot too: our own form always sends it, so absence means the caller is
  //    not our form and simply omitted the field to skip the check.
  if (typeof body.timeElapsedMs !== 'number' || body.timeElapsedMs < MIN_SUBMIT_MS) {
    console.warn(`[contact] bad/missing timing (${body.timeElapsedMs}) — dropped`)
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // 3) Field validation. Mirrors the required attributes on the form.
  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const message = (body.message || '').trim()
  const missing: string[] = []
  if (!name) missing.push('name')
  if (!email) missing.push('email')
  if (!message) missing.push('message')
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 },
    )
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const { firstName, lastName } = splitName(name)
  const serviceCode = (body.service || '').trim()

  // Canonical flat camelCase payload. Both `name` AND `firstName`/`lastName` are
  // sent so the GHL field mapping works either way, and nothing is nested —
  // Bland templates only resolve top-level keys.
  const payload = {
    event: 'website_message',
    source: 'Website Contact Form',
    clientId: 'dr-khanali-s-neuropsychological-services',
    practiceName: PRACTICE_NAME,
    name,
    firstName,
    lastName,
    email,
    phone: (body.phone || '').trim() || null,
    service: SERVICE_LABELS[serviceCode] || serviceCode || null,
    reason: SERVICE_LABELS[serviceCode] || 'General Inquiry',
    message,
    submittedAt: new Date().toISOString(),
    pageUrl: body.pageUrl || null,
  }

  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error(`[contact] GHL ${res.status}`)
      return NextResponse.json(
        { error: `We could not send your message. Please call us at ${PHONE_DISPLAY}.` },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('[contact]', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: `We could not send your message. Please call us at ${PHONE_DISPLAY}.` },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
