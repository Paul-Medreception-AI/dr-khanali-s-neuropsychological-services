import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Expert neuropsychological evaluations and therapy tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Providing evidence-based assessments and therapy in English and Farsi to serve diverse communities across Arlington, VA and beyond
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Neuropsychological Evaluations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive assessments to evaluate cognitive functioning, memory, attention, and executive skills. These evaluations help diagnose conditions affecting brain function and provide guidance for treatment planning.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                ADHD Testing
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Thorough diagnostic evaluations for attention-deficit/hyperactivity disorder in adolescents and adults. Our assessments include clinical interviews, standardized testing, and behavioral observations to provide accurate diagnosis and treatment recommendations.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Disability Evaluations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Detailed psychological assessments for disability determination and documentation. We provide comprehensive reports that can support applications for accommodations and disability benefits.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Pre-Bariatric Surgery Evaluations
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Required psychological assessments for individuals preparing for weight loss surgery. Our evaluations examine readiness, mental health status, and support systems to optimize surgical outcomes.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Individual Therapy
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Evidence-based psychotherapy for adolescents and adults addressing trauma, anxiety, depression, grief, and adjustment concerns. We offer culturally sensitive treatment tailored to each client's unique needs and background.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Bilingual Services
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                All psychological services available in both English and Persian/Farsi. Dr. Khanali provides culturally competent care that respects linguistic and cultural preferences throughout the assessment and treatment process.
              </p>
              <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Our streamlined process ensures you receive comprehensive care from consultation to treatment
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:pr-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Initial Consultation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact our office to schedule your first appointment. We'll discuss your concerns, answer questions about our services, and determine which type of evaluation or therapy best fits your needs.
              </p>
            </div>

            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:px-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Participate in thorough testing and clinical interviews conducted by our experienced psychologists. We use evidence-based assessment tools and take the time to understand your unique situation and background.
              </p>
            </div>

            <div className="text-center lg:text-left lg:pl-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Results and Recommendations
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive a detailed report with findings, diagnosis, and personalized recommendations. We'll meet to review results, answer questions, and create a clear path forward for treatment or accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule your consultation today and take the first step toward comprehensive neuropsychological care
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}