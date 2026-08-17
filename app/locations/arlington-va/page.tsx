import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Services Near Arlington, VA | Dr. Khanali\'s Neuropsychological Services',
  description: 'Expert mental health care serving Arlington, VA and surrounding communities. Comprehensive neuropsychological services with telehealth options available.',
  openGraph: {
    title: 'Mental Health Services Near Arlington, VA | Dr. Khanali\'s Neuropsychological Services',
    description: 'Expert mental health care serving Arlington, VA and surrounding communities. Comprehensive neuropsychological services with telehealth options available.',
  },
}

export default function ArlingtonVAPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Arlington, VA</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Mental Health Near Arlington, VA
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl opacity-95 leading-relaxed">
            Serving patients from Arlington and surrounding VA communities. Expert psychiatric care is closer than you think.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule in Arlington
          </Link>
        </div>
      </section>

      {/* Serving Arlington Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 text-center">
            Serving the Arlington Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Dr. Khanali's Neuropsychological Services is conveniently located to serve patients throughout Arlington, VA and the surrounding communities. Whether you're coming from Rosslyn, Clarendon, Ballston, or Crystal City, our practice is easily accessible with ample parking and convenient appointment times designed to fit your busy schedule. Many Arlington residents choose our practice for the short commute and personalized, expert care that's hard to find at larger facilities.
            </p>
            <p>
              We understand that finding the right mental health provider is about more than just proximity—it's about trust, expertise, and a therapeutic relationship built on compassion. Our patients from Arlington consistently tell us they appreciate our evidence-based approach, our commitment to thorough assessment, and our dedication to creating individualized treatment plans. For those who prefer to avoid the drive altogether, we also offer secure telehealth appointments that bring the same quality care directly to your home.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center border-2 border-[var(--color-border)] animate-fade-up">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)] mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-muted)] text-lg">Serving Arlington, VA and surrounding areas</p>
          </div>
        </div>
      </section>

      {/* Services Available to Arlington Patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center">
            Services Available to Arlington Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Comprehensive Psychological Assessment
              </h3>
              <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
                In-depth neuropsychological evaluations to diagnose cognitive, emotional, and behavioral conditions with precision and care.
              </p>
              <Link href="/services/psychological-assessment" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Cognitive Therapy
              </h3>
              <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
                Evidence-based therapeutic interventions designed to address anxiety, depression, trauma, and cognitive challenges.
              </p>
              <Link href="/services/cognitive-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Treatment Planning & Consultation
              </h3>
              <p className="text-[var(--color-ink)] mb-4 leading-relaxed">
                Personalized treatment strategies and professional consultation services for individuals, families, and other healthcare providers.
              </p>
              <Link href="/services/treatment-planning" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors duration-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth for Arlington */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up border border-[var(--color-border)]">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              For Arlington residents who prefer the convenience of receiving care from home, we offer secure, HIPAA-compliant telehealth appointments. Our virtual sessions provide the same comprehensive, high-quality care as in-person visits—without the commute or time away from work and family.
            </p>
            <p>
              Telehealth is ideal for follow-up appointments, therapy sessions, and certain types of consultations. Most major insurance plans cover telehealth services, and our team will work with you to verify your benefits and ensure a seamless experience. Whether you're managing a busy schedule, have mobility concerns, or simply prefer the comfort of your own space, telehealth brings expert mental health care directly to you.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
            >
              Ask About Telehealth
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                How far is your practice from Arlington, VA?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our practice is conveniently located to serve Arlington residents, with easy access from major routes including I-66, Route 50, and the George Washington Parkway. Most patients from Arlington neighborhoods like Rosslyn, Clarendon, Ballston, and Pentagon City can reach us within 10-20 minutes depending on traffic. We also offer flexible appointment scheduling to help you avoid rush hour.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                What are the best directions from Arlington?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                From central Arlington, take I-66 or Route 50 depending on your starting point. GPS directions are reliable, and we're located in a well-marked professional building with clear signage. If you're using public transportation, several Metro lines serve the Arlington area with connections nearby. Feel free to call our office for detailed directions tailored to your specific location.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Do you offer telehealth for Arlington patients?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes! We offer secure telehealth appointments for Arlington residents who prefer virtual care. Telehealth is perfect for follow-ups, therapy sessions, and consultations—and it's covered by most insurance plans. You'll receive the same expert, personalized care without leaving your home or office. Contact us to schedule a telehealth appointment or ask any questions about the process.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">
                Is parking available, and is your office accessible?
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Yes, we provide ample free parking for all patients, with accessible spaces close to the entrance. Our office is fully accessible, with elevator access and accommodations for individuals with mobility needs. We strive to make every visit as comfortable and stress-free as possible. If you have specific accessibility questions or requirements, please let us know when scheduling your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Arlington
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Convenient, compassionate mental health care for Arlington residents. Schedule your appointment today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] font-medium px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}