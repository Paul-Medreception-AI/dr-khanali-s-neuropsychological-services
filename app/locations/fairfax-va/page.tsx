import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Near Fairfax, VA | Dr. Khanali\'s Neuropsychological Services',
  description: 'Serving patients from Fairfax and surrounding VA communities. Expert neuropsychological care is closer than you think. Schedule your consultation today.',
  openGraph: {
    title: 'Mental Health Near Fairfax, VA | Dr. Khanali\'s Neuropsychological Services',
    description: 'Serving patients from Fairfax and surrounding VA communities. Expert neuropsychological care is closer than you think.',
    url: 'https://www.drkhanalineuropsychologicalservicesllc.com/locations/fairfax-va',
    siteName: 'Dr. Khanali\'s Neuropsychological Services',
    locale: 'en_US',
    type: 'website',
  },
}

export default function FairfaxVAPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Fairfax, VA</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 animate-fade-up">
            Mental Health Near Fairfax, VA
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl animate-fade-up leading-relaxed">
            Serving patients from Fairfax and surrounding VA communities. Expert neuropsychological care is closer than you think.
          </p>

          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-up"
          >
            Schedule in Fairfax
          </Link>
        </div>
      </section>

      {/* Serving Fairfax Area */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 animate-fade-up">
            Serving the Fairfax Area
          </h2>

          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12 animate-fade-up">
            <p>
              Our practice in Arlington, VA is conveniently located just a short drive from Fairfax, making comprehensive neuropsychological services easily accessible to residents throughout Fairfax County. Whether you are coming from downtown Fairfax, Fair Oaks, or nearby communities like Vienna and Annandale, patients typically find the commute straightforward via I-66 or Route 50, with ample parking available at our Arlington location.
            </p>

            <p>
              Patients from Fairfax choose Dr. Khanali&apos;s Neuropsychological Services for our specialized expertise in comprehensive neuropsychological assessment, cognitive evaluation, and evidence-based mental health care. Unlike general practices, we focus exclusively on understanding brain-behavior relationships, offering thorough diagnostic clarity for ADHD, learning disabilities, memory concerns, and complex psychological conditions. For those with scheduling constraints or transportation challenges, we also provide secure telehealth options that bring expert care directly to your home in Fairfax.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center text-[var(--color-primary)] animate-fade-up border border-[var(--color-border)]">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-lg font-medium">Arlington, VA to Fairfax, VA</p>
            <p className="text-sm text-[var(--color-muted)] mt-2">Easy access via I-66 and Route 50</p>
          </div>
        </div>
      </section>

      {/* Services Available to Fairfax Patients */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Fairfax Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <div className="text-[var(--color-accent)] mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Neuropsychological Assessment
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive cognitive and psychological evaluations to identify ADHD, learning disabilities, memory concerns, and other neurological conditions.
              </p>
              <Link href="/services/neuropsychological-assessment" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <div className="text-[var(--color-accent)] mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Cognitive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Detailed assessment of memory, attention, executive function, and processing speed to guide treatment and educational planning.
              </p>
              <Link href="/services/cognitive-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <div className="text-[var(--color-accent)] mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Secure virtual appointments available for Fairfax residents who prefer remote consultations or have difficulty traveling.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Why Fairfax Patients Choose Dr. Khanali
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Specialized Expertise
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Dr. Khanali brings specialized training in neuropsychology, offering assessments and insights that go beyond standard psychological evaluations. Her expertise helps uncover the root causes of cognitive and behavioral challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Comprehensive Assessments
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We conduct thorough evaluations that examine all aspects of cognitive functioning, providing a complete picture to guide diagnosis and treatment planning for ADHD, learning disabilities, and more.
                </p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Personalized Care
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Every patient receives individualized attention and tailored recommendations. We take the time to understand your unique situation and provide guidance that fits your specific needs and goals.
                </p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Convenient Access
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Located in nearby Arlington with easy highway access from Fairfax, plus telehealth options for added flexibility. We work to make expert neuropsychological care as accessible as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities We Serve */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Fairfax County Communities We Serve
          </h2>

          <p className="text-lg text-[var(--color-muted)] text-center mb-12 animate-fade-up">
            In addition to Fairfax, we proudly serve patients from surrounding communities throughout Fairfax County and beyond.
          </p>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-up">
            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Vienna</h3>
              <p className="text-sm text-[var(--color-muted)]">Just minutes from Fairfax</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Annandale</h3>
              <p className="text-sm text-[var(--color-muted)]">Easy access via Route 50</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Fair Oaks</h3>
              <p className="text-sm text-[var(--color-muted)]">Convenient location nearby</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Oakton</h3>
              <p className="text-sm text-[var(--color-muted)]">Short drive to Arlington</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Burke</h3>
              <p className="text-sm text-[var(--color-muted)]">Accessible via I-495</p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 text-center border border-[var(--color-border)]">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Centreville</h3>
              <p className="text-sm text-[var(--color-muted)]">Straightforward route via I-66</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up leading-relaxed">
            Schedule your consultation today and take the first step toward clarity and expert neuropsychological care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Appointment
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
            >
              Learn More About Dr. Khanali
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}