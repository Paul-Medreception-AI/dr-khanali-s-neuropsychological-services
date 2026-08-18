import Link from 'next/link'
import Image from 'next/image'
import { CONDITIONS } from '@/lib/data/conditions'

export default function ConditionsPage() {
  // Generated from lib/data/conditions.ts — the 25 conditions that actually have
  // a page. The autobuild hardcoded a different 12-item list in which 10 slugs
  // had no page at all (bipolar-disorder, ocd, eating-disorders,
  // addiction-substance-use, schizophrenia-psychosis, insomnia-sleep-disorders,
  // personality-disorders, grief-bereavement, adhd, ptsd-trauma), and several
  // named conditions outside this practice's stated scope.
  const conditions = CONDITIONS.map((c) => ({
    name: c.title,
    slug: c.slug,
    description: c.description,
    image: c.heroImage,
  }))

  const warningSigns = [
    {
      title: "Emotional Changes",
      description: "Persistent sadness, hopelessness, irritability, or mood swings that last weeks or interfere with daily activities and relationships.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
    },
    {
      title: "Behavioral Signs",
      description: "Withdrawal from friends and family, changes in sleep or eating patterns, loss of interest in activities you once enjoyed, or increased substance use.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
    },
    {
      title: "Physical Symptoms",
      description: "Unexplained physical problems like headaches, digestive issues, chronic pain, or fatigue that don't respond to medical treatment and may have psychological roots.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    }
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <Image src="/images/pages/hub-conditions.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="hero-panel inline-block text-center px-8 py-10 sm:px-14 sm:py-12">
            <h1 className="font-cormorant text-5xl font-light mb-6">Conditions We Treat</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Evidence-based care for a full range of mental health and behavioral health conditions
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 text-lg max-w-3xl mx-auto">
            Dr. Khanali provides expert assessment and treatment for adolescents and adults across a wide spectrum of psychological and neuropsychological conditions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Link
                key={index}
                href={`/conditions/${condition.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {condition.image && (
                  <div className="relative h-44 w-full bg-[var(--color-light)]">
                    <Image
                      src={condition.image.src}
                      alt={condition.image.alt}
                      fill
                      sizes="(min-width: 1024px) 22rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                    {condition.name}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed flex-1">
                    {condition.description}
                  </p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-4 group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">
            When to Seek Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="stroke-[var(--color-primary)] inline-block mb-6">
                  {sign.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)] max-w-4xl mx-auto animate-fade-up">
            <div className="text-center mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 stroke-[var(--color-accent)] inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] text-center mb-4">
              Crisis Resources
            </h3>
            <p className="text-[var(--color-muted)] text-center mb-6">
              If you or someone you know is in crisis or experiencing thoughts of suicide, help is available 24/7:
            </p>
            <div className="space-y-3 text-center">
              <div>
                <p className="font-semibold text-[var(--color-ink)]">988 Suicide & Crisis Lifeline</p>
                <p className="text-[var(--color-muted)] text-sm">Call or text 988 for immediate support</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--color-ink)]">Crisis Text Line</p>
                <p className="text-[var(--color-muted)] text-sm">Text HOME to 741741</p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-[var(--color-muted)]">
                  For non-crisis appointments, contact our office during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white font-light mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule a comprehensive evaluation with Dr. Khanali to receive expert care tailored to your unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Schedule an Evaluation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/30"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}