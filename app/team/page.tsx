import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Dr. Khanali\'s Neuropsychological Services',
  description: 'Meet the experienced team at Dr. Khanali\'s Neuropsychological Services providing expert bilingual care in Arlington, VA.',
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl leading-relaxed opacity-90">
            Dedicated professionals providing compassionate, culturally sensitive neuropsychological care
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-16">Our Providers & Staff</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={1.5} 
                  className="w-20 h-20 opacity-40 text-[var(--color-primary)]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Our Provider Team</h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-2">Clinical Staff</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule your comprehensive neuropsychological evaluation or therapy consultation today
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}