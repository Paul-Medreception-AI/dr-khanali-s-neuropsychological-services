import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Near Bethesda, MD | Dr. Khanali\'s Neuropsychological Services',
  description: 'Serving patients from Bethesda and surrounding MD communities. Expert neuropsychological care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Mental Health Near Bethesda, MD | Dr. Khanali\'s Neuropsychological Services',
    description: 'Serving patients from Bethesda and surrounding MD communities. Expert neuropsychological care is closer than you think.',
  },
}

export default function BethesdaMDPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Bethesda, MD</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Mental Health Near Bethesda, MD
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl animate-fade-up">
            Serving patients from Bethesda and surrounding MD communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Bethesda
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 text-center animate-fade-up">
            Serving the Bethesda Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 animate-fade-up">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Dr. Khanali's Neuropsychological Services is conveniently located in Arlington, VA, just a short drive from Bethesda, MD. Many of our patients travel from Bethesda and surrounding Montgomery County communities because they value our specialized expertise in neuropsychological assessment and mental health care. The commute from Bethesda typically takes 30-45 minutes via I-495 and I-66, making our practice an accessible option for comprehensive psychiatric services.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Patients from Bethesda choose our practice for our depth of clinical experience, personalized approach to care, and commitment to evidence-based treatment. Whether you're seeking diagnostic evaluation, therapy, or ongoing mental health support, we provide the specialized services that may be difficult to find locally. For those who prefer not to travel, we also offer secure telehealth appointments that bring expert care directly to your home in Bethesda.
            </p>
          </div>
          
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-muted)] font-medium">Bethesda, MD to Arlington, VA</p>
            <p className="text-[var(--color-ink)] text-sm">Approximately 30-45 minutes via I-495 & I-66</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Services Available to Bethesda Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Neuropsychological Assessment
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive cognitive and psychological evaluation to diagnose conditions affecting memory, attention, and executive function.
              </p>
              <Link href="/services/neuropsychological-assessment" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Individual Therapy
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Evidence-based psychotherapy for anxiety, depression, trauma, and other mental health concerns tailored to your unique needs.
              </p>
              <Link href="/services/individual-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Diagnostic Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Thorough psychiatric evaluation to accurately diagnose mental health conditions and develop personalized treatment plans.
              </p>
              <Link href="/services/diagnostic-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="flex items-start gap-6 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <div>
                <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-4">
                  Can't Make the Drive? We Offer Telehealth
                </h2>
                <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                  For Bethesda residents who prefer the convenience of virtual appointments, we offer secure telehealth services that bring expert neuropsychological care directly to your home. Our video sessions provide the same quality care as in-person visits, eliminating travel time and offering flexible scheduling options.
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Telehealth appointments are ideal for therapy sessions, follow-up consultations, and medication management. Most major insurance plans cover telehealth services, and we're happy to verify your coverage before your first appointment. Experience professional mental health care from the comfort of your Bethesda home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is your Arlington office from Bethesda, MD?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Arlington, VA office is approximately 15-20 miles from Bethesda, typically a 30-45 minute drive depending on traffic. Most patients from Bethesda take I-495 to I-66 East. Many find the drive worthwhile for our specialized neuropsychological services, and we offer flexible scheduling including early morning and evening appointments to accommodate your commute.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What's the best route from Bethesda to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Bethesda, take I-495 South (Capital Beltway) to I-66 East toward Arlington. The office is easily accessible from major Bethesda neighborhoods including Downtown Bethesda, Bethesda Chevy Chase, and North Bethesda. We recommend using GPS navigation for real-time traffic updates, and we're happy to provide detailed directions when you schedule your appointment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Bethesda patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure telehealth appointments for Maryland residents, including those in Bethesda. Telehealth is perfect for therapy sessions, follow-up appointments, and consultations. While some services like initial neuropsychological assessments may require in-person visits, many of our services can be effectively delivered via video. Contact us to discuss which appointment type is best for your needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available at your Arlington location?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient parking for all patients at our Arlington office. Our location is fully accessible with ground-level entry and ADA-compliant facilities. We understand that traveling from Bethesda requires some planning, and we strive to make your visit as comfortable and stress-free as possible from the moment you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Get Expert Care from Bethesda
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up">
            Schedule your appointment today and experience compassionate, specialized mental health care that's worth the short drive.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium text-lg transition-all hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}