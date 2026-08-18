import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'Learn about our culturally sensitive neuropsychological care, bilingual services, and commitment to evidence-based assessment and therapy in Fredericksburg, VA.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-cormorant text-6xl font-light mb-4">
            Culturally Sensitive Neuropsychological Care
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Providing comprehensive evaluations and therapy grounded in rigorous scientific training and cultural understanding
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Text */}
            <div className="lg:col-span-3 lg:pr-12">
              <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed">
                <p>
                  Dr. Khanali's Neuropsychological Services was founded on the principle that mental health care should be accessible, culturally sensitive, and grounded in rigorous scientific training. Our practice specializes in comprehensive psychological and neuropsychological evaluations, along with evidence-based therapy for adolescents and adults. With expertise in serving culturally diverse populations, we understand the unique challenges faced by individuals from different backgrounds and provide care that honors each person's cultural identity and values.
                </p>
                <p>
                  Our team is led by Dr. Roya Khanali, a bilingual clinical psychologist who brings extensive training from an APA-accredited program and a unique background in English-Farsi translation. This linguistic expertise allows us to provide seamless services in both languages, ensuring that language is never a barrier to receiving quality mental health care. Through PSYPACT authorization, we are able to serve clients across 38 states via secure telehealth platforms, expanding access to specialized neuropsychological services for individuals who might otherwise face geographic limitations.
                </p>
                <p>
                  We believe that thorough assessment is the foundation of effective treatment. Our neuropsychological evaluations go beyond simple testing to provide a comprehensive understanding of cognitive strengths and challenges, informing personalized treatment recommendations. Whether conducting ADHD assessments, disability evaluations, pre-surgical psychological clearances, or providing therapy for mental health concerns, we approach each client with compassion, respect, and a commitment to delivering the highest standard of care. Our practice is dedicated to helping individuals understand their cognitive and emotional functioning so they can make informed decisions about their health and well-being.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Credentials & Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">APA-Accredited Doctoral Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Licensed Clinical Psychologist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">PSYPACT Authorization - 38 States</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Bilingual Provider - English & Farsi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Neuropsychological Assessment Specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Evidence-Based Practice Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Cultural Competency Training</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Evidence-Based Practice */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Evidence-Based Practice
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We utilize scientifically validated assessment tools and therapeutic approaches backed by rigorous research. Our commitment to evidence-based practice ensures you receive interventions proven to be effective for your specific concerns.
              </p>
            </div>

            {/* Cultural Sensitivity */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Cultural Sensitivity
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We honor the diverse backgrounds and cultural identities of our clients through bilingual services and culturally informed care. Our practice recognizes that cultural context shapes mental health experiences and treatment needs.
              </p>
            </div>

            {/* Comprehensive Understanding */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Understanding
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We take the time to thoroughly understand your cognitive strengths, challenges, and unique circumstances through detailed assessment. This comprehensive approach allows us to provide personalized recommendations tailored to your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today to schedule your comprehensive evaluation or therapy consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}