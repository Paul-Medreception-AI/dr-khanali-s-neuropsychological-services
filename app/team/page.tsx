import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PROVIDERS, PRACTICE_SHORT, SITE_URL, POPULATION } from '@/lib/practice'

export const metadata: Metadata = {
  title: `Meet Our Team | ${PRACTICE_SHORT}`,
  description:
    'Meet Dr. Roya Khanali, PsyD, Dr. Nicole Carey, PsyD, and Anais Schultz, MSN. Bilingual psychological care in English, Persian/Farsi and Spanish for adolescents and adults.',
  alternates: { canonical: `${SITE_URL}/team` },
}

// Real providers only, sourced from lib/practice.ts (transcribed from the
// practice's own site). The autobuild shipped a single silhouette card reading
// "Full provider profiles are coming soon" while three real, fully-written bios
// existed on the live site.

// Real headshots, scraped from the practice's own site. Fixed height rather than
// aspect-ratio: `aspect-[X/Y]` breaks `Image fill` in this template.
function Portrait({ provider }: { provider: (typeof PROVIDERS)[number] }) {
  if (!provider.photo) {
    const initials = provider.name
      .replace(/^Dr\.\s*/, '')
      .split(/\s+/)
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
    return (
      <div className="relative bg-[var(--color-light)] h-80 flex items-center justify-center">
        <span className="font-cormorant text-6xl text-[var(--color-primary)] opacity-70" aria-hidden="true">
          {initials}
        </span>
      </div>
    )
  }
  return (
    <div className="relative h-80 md:h-full md:min-h-[22rem] bg-[var(--color-light)]">
      <Image
        src={provider.photo.src}
        alt={provider.photo.alt}
        fill
        sizes="(min-width: 768px) 16rem, 100vw"
        className="object-cover object-top"
      />
    </div>
  )
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl opacity-95 leading-relaxed">
            Clinical psychology, neuropsychological assessment and psychiatric medication management,
            delivered in English, Persian/Farsi and Spanish. {POPULATION}.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {PROVIDERS.map(p => (
            <article
              key={p.name}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-200 md:flex"
            >
              <div className="md:w-64 md:shrink-0">
                <Portrait provider={p} />
              </div>
              <div className="p-8">
                <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">
                  {p.name}
                  {p.credentials ? <span className="text-[var(--color-muted)] text-2xl">, {p.credentials}</span> : null}
                </h2>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-2">
                  {p.role}
                </p>
                {p.languages && p.languages.length > 0 && (
                  <p className="mt-3 text-sm text-[var(--color-muted)]">
                    Speaks {p.languages.join(' and ')}
                  </p>
                )}
                <div className="mt-5 space-y-4 text-[var(--color-ink)] leading-relaxed">
                  {p.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact the office to ask about an evaluation, therapy, or medication management.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
