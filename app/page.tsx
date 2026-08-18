import Link from 'next/link'
import Image from 'next/image'
import { OFFICES } from '@/lib/practice'

export default function HomePage() {
  return (
    <main>
      {/* Hero — an ORIGINAL composition generated for this practice, not stock.
          Source geometry and build script: see the repo history / scratch notes.
          Topographic iso-lines traced by marching squares over a radial value-
          noise field, layered with translucent strata, sweeping pathway curves
          and film grain, in the practice's own palette.

          Two reasons it is vector-generated rather than photographic: there is
          no licensing question of any kind (the practice asked whether the
          previous image came from another site — it was licensed Pexels, but
          this one is wholly ours), and the quiet low-contrast centre the panel
          needs is enforced by a mask rather than hoped for. Rendered at 3840x2160. */}
      <section className="relative min-h-[90vh] flex items-center text-white">
        <Image
          src="/images/hero-editorial.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="hero-scrim"
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <div className="hero-panel text-center px-5 py-10 sm:px-12 sm:py-14">
            {/* "Comprehensive" led the headline and made the reader work before
                they knew what the practice does; it now sits in the supporting
                line, where the service already implies it. */}
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] [hyphens:auto] break-words">
              <span className="block">Neuropsychological Evaluations &amp; Therapy</span>
              <span className="block">for Adolescents and Adults</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
              Comprehensive, personalized care in English and Persian/Farsi.
            </p>

            {/* Five lines, grouped so related evaluations share one row rather than
                listing every service page. Hand-written rather than mapped from
                SERVICES: the hero is a summary, not an index. */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left max-w-xl mx-auto">
              {[
                'ADHD & neuropsychological evaluations',
                'Disability evaluations',
                'Immigration evaluations',
                'Pre-bariatric evaluations',
                'Therapy & medication management',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/95">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-base sm:text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                Schedule an Evaluation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Explore Our Services
              </Link>
            </div>

            {/* Offices as tags along the bottom of the panel, generated from
                lib/practice.ts so they cannot drift from the real address list. */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {OFFICES.map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-sm text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                >
                  {o.city}, {o.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Licensed Across Multiple States via PSYPACT</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Bilingual Services in English and Persian/Farsi</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">APA-Accredited Doctoral Training</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm text-[var(--color-ink)]">Telehealth Available in 38 States</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            We offer comprehensive neuropsychological evaluations and therapeutic services tailored to your unique needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Neuropsychological Evaluations */}
            <div className="relative animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Neuropsychological Evaluations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive assessments to evaluate cognitive functioning, memory, attention, and executive skills. These evaluations help diagnose conditions affecting brain function and provide guidance for treatment planning.
              </p>
              <Link href="/services" className="stretch-link inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            {/* Service 2: ADHD Testing */}
            <div className="relative animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                ADHD Testing
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Thorough diagnostic evaluations for attention-deficit/hyperactivity disorder in adolescents and adults. Our assessments include clinical interviews, standardized testing, and behavioral observations to provide accurate diagnosis and treatment recommendations.
              </p>
              <Link href="/services" className="stretch-link inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            {/* Service 3: Disability Evaluations */}
            <div className="relative animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Disability Evaluations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Detailed psychological assessments for disability determination and documentation. We provide comprehensive reports that can support applications for accommodations and disability benefits.
              </p>
              <Link href="/services" className="stretch-link inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Culturally Sensitive Neuropsychological Care
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Dr. Khanali's Neuropsychological Services was founded on the principle that mental health care should be accessible, culturally sensitive, and grounded in rigorous scientific training. Our practice specializes in comprehensive psychological and neuropsychological evaluations, along with evidence-based therapy for adolescents and adults. With expertise in serving culturally diverse populations, we understand the unique challenges faced by individuals from different backgrounds and provide care that honors each person's cultural identity and values.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Our team is led by Dr. Roya Khanali, a bilingual clinical psychologist who brings extensive training from an APA-accredited program and a unique background in English-Farsi translation. This linguistic expertise allows us to provide seamless services in both languages, ensuring that language is never a barrier to receiving quality mental health care. Through PSYPACT authorization, we are able to serve clients across 38 states via secure telehealth platforms, expanding access to specialized neuropsychological services for individuals who might otherwise face geographic limitations.
              </p>
              <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 stroke-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-4">Initial Consultation</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Contact our office to schedule your first appointment. We'll discuss your concerns, answer questions about our services, and determine which type of evaluation or therapy best fits your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-4">Comprehensive Assessment</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Participate in thorough testing and clinical interviews conducted by our experienced psychologists. We use evidence-based assessment tools and take the time to understand your unique situation and background.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-4">Results and Recommendations</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Receive a detailed report with findings, diagnosis, and personalized recommendations. We'll meet to review results, answer questions, and create a clear path forward for treatment or accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">
            Expert Neuropsychological Care in English and Farsi
          </h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}