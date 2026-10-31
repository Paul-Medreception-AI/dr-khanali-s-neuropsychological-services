import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  OFFICES,
  formatOffice,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_ADMIN,
  HOURS,
  PSYPACT,
  PROVIDERS,
  PRIMARY_OFFICE,
  PRACTICE_NAME,
  SITE_URL,
  INSURANCE_POLICY,
  INSURANCE_NOT_ACCEPTED,
  OUT_OF_POCKET_SERVICES,
} from '@/lib/practice'
import { FARSI_EN_PATH, FARSI_FA_PATH, FARSI_LANGUAGE_ALTERNATES, FARSI_SERVICES } from '@/lib/farsi'

// Every fact on this page is read from lib/practice.ts (taken from the
// practice's own site) or lib/farsi.ts. Nothing here is new. The Persian
// version at /fa/farsi-speaking-psychologist is a translation of THIS page.

export const metadata: Metadata = {
  title: 'Farsi-Speaking Psychologist, Fredericksburg VA | Dr. Khanali',
  description:
    'Therapy and psychological, ADHD and neuropsychological evaluations in Persian/Farsi or English with Dr. Roya Khanali, PsyD, in Fredericksburg and Woodbridge, VA.',
  alternates: {
    canonical: `${SITE_URL}${FARSI_EN_PATH}`,
    languages: FARSI_LANGUAGE_ALTERNATES,
  },
}

const dr = PROVIDERS[0]

/** "Monday – Friday" reads as a dash on this page; spell the range out. */
const spell = (s: string) => s.replace(/\s*–\s*/g, ' to ')

export default function FarsiSpeakingPsychologistPage() {
  const schemaPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: dr.name,
    honorificSuffix: dr.credentials,
    jobTitle: dr.role,
    knowsLanguage: ['en', 'fa'],
    image: `${SITE_URL}${dr.photo!.src}`,
    url: `${SITE_URL}${FARSI_EN_PATH}`,
    worksFor: {
      '@type': 'MedicalBusiness',
      name: PRACTICE_NAME,
      url: SITE_URL,
      telephone: PHONE_TEL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${PRIMARY_OFFICE.street}, ${PRIMARY_OFFICE.suite}`,
        addressLocality: PRIMARY_OFFICE.city,
        addressRegion: PRIMARY_OFFICE.state,
        postalCode: PRIMARY_OFFICE.zip,
        addressCountry: 'US',
      },
    },
  }
  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Farsi-Speaking Psychologist', item: `${SITE_URL}${FARSI_EN_PATH}` },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero: copy on the gradient, photo beside it (never text over a photo). */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <nav className="text-sm text-white/80">
                  <Link href="/" className="hover:underline">Home</Link>
                  <span className="mx-2">›</span>
                  <span className="text-white">Farsi-Speaking Psychologist</span>
                </nav>
                <Link
                  href={FARSI_FA_PATH}
                  hrefLang="fa"
                  lang="fa"
                  dir="rtl"
                  className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-base text-white hover:bg-white/20 transition-colors"
                >
                  این صفحه به زبان فارسی
                </Link>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">Persian/Farsi and English</p>
              <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-6">
                Farsi-Speaking Psychologist in Fredericksburg, VA
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Dr. Roya Khanali, PsyD, is a bilingual clinical psychologist fluent in English and Persian/Farsi.
                She provides therapy and psychological, ADHD, neuropsychological, disability, and pre-bariatric
                surgery evaluations to adolescents and adults in both Persian/Farsi and English.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={`tel:${PHONE_TEL}`} className="text-center bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                  Call {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="text-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Request an Appointment
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={dr.photo!.src}
                alt={dr.photo!.alt}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 28rem, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for + about Dr. Khanali */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-[color-mix(in_srgb,var(--color-ink)_80%,transparent)]">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">For Patients and Families Who Speak Farsi</h2>
            <p>
              This page is for adults, young adults and adolescents who speak Persian/Farsi, and for family members
              looking for care for them.
            </p>
            <p>
              You can have your appointments with Dr. Khanali in Persian/Farsi or in English.
            </p>
            <p>
              Dr. Khanali has extensive experience working with culturally diverse clients. She holds a bachelor’s
              degree in English-Farsi Translation and completed her doctorate at the APA-accredited program at the
              Chicago School of Professional Psychology in Washington, DC.
            </p>
          </div>
          <aside className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">
                {dr.name}<span className="text-[var(--color-muted)]">, {dr.credentials}</span>
              </p>
              <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">{dr.role}</p>
              <p className="mt-4 text-[var(--color-ink)]">Languages: English and Persian/Farsi</p>
              <Link href="/team" className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
                Meet our team →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">Care Available in Persian/Farsi</h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-12">
            Dr. Khanali provides each of these in Persian/Farsi or English.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FARSI_SERVICES.map((s) => (
              <li key={s.en} className="relative bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    {s.href ? (
                      <Link href={s.href} className="stretch-link font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                        {s.en}
                      </Link>
                    ) : (
                      <span className="font-semibold text-[var(--color-ink)]">{s.en}</span>
                    )}
                    {s.outOfPocket && (
                      <p className="text-sm text-[var(--color-muted)] mt-1">Billed out of pocket, not through insurance</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-[var(--color-muted)] mt-8 max-w-2xl mx-auto">
            Medication management at this practice is provided by Anais Schultz, MSN, in English and Spanish.
          </p>
        </div>
      </section>

      {/* Offices + telehealth */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Our Offices</h2>
            <ul className="space-y-4">
              {OFFICES.map((o) => (
                <li key={o.slug}>
                  <Link href={`/locations/${o.slug}`} className="font-semibold text-[var(--color-primary)] hover:underline">
                    {o.city}, {o.stateName}
                  </Link>
                  <p className="text-[var(--color-muted)]">{formatOffice(o)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Telehealth</h2>
            <p className="text-[var(--color-ink)] leading-relaxed">{PSYPACT.blurb}</p>
            <p className="text-[var(--color-ink)] leading-relaxed mt-4">
              Ask the office which appointments can be held by video.
            </p>
            <Link href="/telehealth" className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
              About telehealth →
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-8">Insurance</h2>
          <p className="text-lg text-center text-[var(--color-ink)]">{INSURANCE_POLICY}</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">Not accepted</h3>
              <ul className="space-y-1 text-[var(--color-muted)]">
                {INSURANCE_NOT_ACCEPTED.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">Billed out of pocket</h3>
              <ul className="space-y-1 text-[var(--color-muted)]">
                {OUT_OF_POCKET_SERVICES.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
              See the plans we accept →
            </Link>
          </p>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8">How to Book in Farsi</h2>
            <ol className="space-y-6">
              {[
                <>Call <a href={`tel:${PHONE_TEL}`} className="whitespace-nowrap font-semibold text-[var(--color-primary)] hover:underline">{PHONE_DISPLAY}</a> or send a message through our <Link href="/contact" className="font-semibold text-[var(--color-primary)] hover:underline">contact form</Link>.</>,
                <>Tell us you would like your appointment in Persian/Farsi.</>,
                <>We will reach out to schedule your evaluation or therapy session.</>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-semibold flex items-center justify-center">{i + 1}</span>
                  <p className="text-lg text-[var(--color-ink)] pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[var(--color-muted)]">
              Our contact form is in English. If it is easier, write “Farsi” in your message so we know your preference.
            </p>
          </div>
          <aside className="lg:col-span-2 bg-white rounded-2xl p-8 border border-[var(--color-border)] h-fit">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Office Hours</h3>
            <dl className="space-y-1 text-[var(--color-ink)]">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt>{spell(h.days)}</dt>
                  <dd className="text-[var(--color-muted)]">{spell(h.hours)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 break-all">
              <a href={`mailto:${EMAIL_ADMIN}`} className="text-[var(--color-primary)] hover:underline">{EMAIL_ADMIN}</a>
            </p>
          </aside>
        </div>
      </section>

      {/* Further reading */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-3">Further reading</p>
          <Link
            href="/blog/bilingual-therapy-the-benefits-of-treatment-in-your-native-l"
            className="font-cormorant text-2xl text-[var(--color-primary)] hover:underline"
          >
            Bilingual Therapy: The Benefits of Treatment in Your Native Language
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">Book an Appointment in Persian/Farsi</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Call {PHONE_DISPLAY} or send us a message, and tell us you would like to be seen in Farsi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_TEL}`} className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
