import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  OFFICES, formatOffice, PRACTICE_SHORT, SITE_URL,
  PHONE_DISPLAY, PHONE_TEL, HOURS, PSYPACT, POPULATION, BRAND_SHORT,
} from '@/lib/practice'

// One page per REAL office. Every fact here comes from lib/practice.ts, which is
// transcribed from the practice's own site. Deliberately no invented driving
// directions, drive times, parking claims, transit lines or neighbourhood lists —
// the autobuild's version of this page fabricated all of those.

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return OFFICES.map(o => ({ slug: o.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const office = OFFICES.find(o => o.slug === slug)
  if (!office) return {}
  const title = `${office.city}, ${office.state} Office | ${BRAND_SHORT}`
  const description = `${PRACTICE_SHORT} in ${office.city}, ${office.state}. Therapy, neuropsychological and ADHD evaluations for adolescents and adults, in English and Persian/Farsi. ${formatOffice(office)}.`
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/locations/${office.slug}` },
    openGraph: { title, description },
  }
}

export default async function OfficePage({ params }: Props) {
  const { slug } = await params
  const office = OFFICES.find(o => o.slug === slug)
  if (!office) notFound()

  const others = OFFICES.filter(o => o.slug !== office.slug)

  const services = [
    { href: '/services/neuropsychological-evaluations', title: 'Neuropsychological Evaluations', body: 'Objective measurement of memory, attention, reasoning and verbal ability using multiple test batteries.' },
    { href: '/services/adhd-testing', title: 'ADHD Testing', body: 'Comprehensive ADHD evaluation for adolescents and adults, including assessment of executive function.' },
    { href: '/services/individual-therapy', title: 'Individual Therapy', body: 'Evidence-based therapy for adults, young adults and adolescents, available in English and Persian/Farsi.' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-8 text-sm opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <span className="mx-2">›</span>
            <span>{office.city}, {office.state}</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Our {office.city}, {office.state} Office
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl opacity-95 leading-relaxed">
            {PRACTICE_SHORT} provides therapy and psychological, ADHD, neuropsychological, disability
            and pre-bariatric surgery evaluations to adolescents and adults, in both English and Persian/Farsi.
          </p>
          <p className="text-lg mb-10 max-w-3xl opacity-90">{formatOffice(office)}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Request an Appointment
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="inline-block bg-white/10 hover:bg-white/20 border border-white/40 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-5">Address</h2>
            <address className="not-italic text-lg text-[var(--color-ink)] leading-relaxed">
              {office.street}<br />
              {office.suite}<br />
              {office.city}, {office.state} {office.zip}
            </address>
            <p className="mt-6 text-[var(--color-ink)]">
              Phone: <a href={`tel:${PHONE_TEL}`} className="text-[var(--color-primary)] underline">{PHONE_DISPLAY}</a>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-5">Office Hours</h2>
            <dl className="space-y-3 text-lg text-[var(--color-ink)]">
              {HOURS.map(h => (
                <div key={h.days} className="flex justify-between gap-6">
                  <dt className="font-medium">{h.days}</dt>
                  <dd className="text-[var(--color-muted)]">{h.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-[var(--color-muted)]">{POPULATION}.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center">
            Services at Our {office.city} Office
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.href} className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-ink)] mb-4 leading-relaxed">{s.body}</p>
                <Link href={s.href} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/services" className="text-[var(--color-primary)] underline">View all services</Link>
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto border border-[var(--color-border)]">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            {PSYPACT.blurb} If travelling to our {office.city} office is difficult, contact us to ask
            whether your care can be delivered remotely; whether a particular evaluation can be
            conducted by telehealth depends on the measures it requires.
          </p>
          <div className="text-center mt-8">
            <Link href="/telehealth" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300">
              About Telehealth
            </Link>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-10 text-center">
              Our Other Offices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map(o => (
                <Link key={o.slug} href={`/locations/${o.slug}`} className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{o.city}, {o.state}</h3>
                  <p className="text-[var(--color-ink)]">{formatOffice(o)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Schedule at Our {office.city} Office
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Contact us to ask about availability, insurance, or whether an evaluation is the right step.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
