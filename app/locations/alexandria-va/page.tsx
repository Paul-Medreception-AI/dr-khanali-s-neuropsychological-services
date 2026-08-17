import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Near Alexandria, VA | Dr. Khanali\'s Neuropsychological Services',
  description: 'Serving patients from Alexandria and surrounding VA communities. Expert neuropsychological care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Mental Health Near Alexandria, VA | Dr. Khanali\'s Neuropsychological Services',
    description: 'Serving patients from Alexandria and surrounding VA communities. Expert neuropsychological care is closer than you think.',
  },
}

export default function AlexandriaVAPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Alexandria, VA</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Mental Health Near Alexandria, VA
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95 animate-fade-up">
            Serving patients from Alexandria and surrounding VA communities. Expert neuropsychological care is closer than you think.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-10 py-4 rounded-full transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Alexandria
          </Link>
        </div>
      </section>

      {/* Serving Alexandria Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 text-center animate-fade-up">
            Serving the Alexandria Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 animate-fade-up">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Our Arlington practice is conveniently located just a short drive from Alexandria, VA. Whether you're commuting from Old Town, Del Ray, or the West End, Dr. Khanali's Neuropsychological Services provides accessible, comprehensive mental health care for Alexandria residents. The drive typically takes 15-25 minutes via Route 1 or I-395, making it easy to fit appointments into your busy schedule.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Many Alexandria patients choose our practice over local alternatives because of our specialized expertise in neuropsychological assessment and evidence-based treatment approaches. We understand the unique needs of Northern Virginia families and professionals, and we offer flexible scheduling options including telehealth services for those who prefer virtual appointments or have transportation challenges.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">
                Convenient access from Alexandria, VA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available to Alexandria Patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Services Available to Alexandria Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-4">
                Neuropsychological Assessment
              </h3>
              <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
                Comprehensive cognitive and psychological testing to diagnose ADHD, learning disorders, memory concerns, and other neurological conditions.
              </p>
              <Link href="/services/neuropsychological-assessment" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-4">
                Cognitive Behavioral Therapy
              </h3>
              <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
                Evidence-based therapy for anxiety, depression, trauma, and stress management tailored to your individual needs and goals.
              </p>
              <Link href="/services/cognitive-behavioral-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-4">
                Educational Consultation
              </h3>
              <p className="text-[var(--color-ink)] mb-6 leading-relaxed">
                Expert guidance for students, parents, and schools on accommodations, IEP planning, and academic success strategies.
              </p>
              <Link href="/services/educational-consultation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth for Alexandria */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-6">
            We understand that travel to our Arlington office isn't always convenient for Alexandria residents. That's why we offer secure, HIPAA-compliant telehealth services for many of our appointments. Virtual sessions allow you to receive the same high-quality care from the comfort of your home or office.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed">
            Telehealth is ideal for therapy sessions, follow-up consultations, and certain types of assessments. Most major insurance plans cover telehealth appointments at the same rate as in-person visits. Contact us to learn more about which services are available via telehealth and whether it's a good fit for your needs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                How far is your office from Alexandria?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our Arlington office is approximately 4-7 miles from most Alexandria neighborhoods, typically a 15-25 minute drive depending on traffic and your starting point. We're easily accessible via Route 1, George Washington Memorial Parkway, or I-395.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                What are the best directions from Alexandria?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                From Old Town Alexandria, take Route 1 North (Jefferson Davis Highway) directly into Arlington. From West Alexandria, I-395 North is often the fastest route. We recommend using GPS for real-time traffic updates, and we're happy to provide detailed directions when you schedule your appointment.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Do you offer telehealth for Alexandria residents?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes! We offer secure telehealth appointments for therapy, consultations, and certain assessment follow-ups. Telehealth is a convenient option for Alexandria patients who prefer virtual care or have scheduling constraints. Most insurance plans cover telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Is parking available at your Arlington location?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes, we provide convenient parking for all patients. Our office is fully accessible, with ground-level entry and accommodations for individuals with mobility needs. Detailed parking instructions will be provided when you schedule your first appointment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Alexandria
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Schedule your appointment today and experience compassionate, evidence-based mental health care.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-10 py-4 rounded-full transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  )
}