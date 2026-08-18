'use client'

import { useEffect, useRef, useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/practice'

const SERVICES = [
  { value: 'neuropsych', label: 'Neuropsychological Evaluation' },
  { value: 'adhd', label: 'ADHD Testing' },
  { value: 'disability', label: 'Disability Evaluation' },
  { value: 'bariatric', label: 'Pre-Bariatric Surgery Evaluation' },
  { value: 'therapy', label: 'Individual Therapy' },
  { value: 'general', label: 'General Inquiry' },
]

const inputClass =
  'border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none'
const labelClass = 'block text-sm font-semibold text-[var(--color-ink)] mb-2'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  // Set on mount, not on first keystroke, so the timing check measures how long
  // the form was actually on screen.
  const mountedAt = useRef(0)

  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: data.get('service'),
          message: data.get('message'),
          company_website: data.get('company_website'),
          timeElapsedMs: Date.now() - mountedAt.current,
          pageUrl: window.location.href,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(json.error || `Something went wrong. Please call us at ${PHONE_DISPLAY}.`)
        setStatus('error')
        return
      }
      form.reset()
      setStatus('sent')
    } catch {
      setError(`We could not reach the server. Please call us at ${PHONE_DISPLAY}.`)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12" role="status">
        <svg
          className="w-14 h-14 mx-auto mb-6 stroke-[var(--color-primary)]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="font-cormorant text-3xl mb-3 text-[var(--color-ink)]">Thank you</h2>
        <p className="text-[var(--color-ink)] mb-6">
          Your message has been sent. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold text-sm underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <>
      <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Send Us a Message</h2>

      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name *
            </label>
            <input type="text" id="name" name="name" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email *
            </label>
            <input type="email" id="email" name="email" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input type="tel" id="phone" name="phone" className={inputClass} />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              Service Interest
            </label>
            <select id="service" name="service" className={inputClass} defaultValue="">
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message *
            </label>
            <textarea id="message" name="message" rows={5} required className={inputClass}></textarea>
          </div>

          {/* Honeypot. Hidden from people and from screen readers; only bots fill it. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
              {error}{' '}
              <a href={`tel:${PHONE_TEL}`} className="underline font-semibold">
                {PHONE_DISPLAY}
              </a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-colors mt-2"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <p className="text-[var(--color-muted)] text-xs mt-4">
            Note: Please do not include confidential health information in this form. This is not a
            secure method of communication for sensitive medical details. We will contact you to
            discuss your needs privately.
          </p>
        </div>
      </form>
    </>
  )
}
