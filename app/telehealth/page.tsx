import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telehealth Services | Dr. Khanali\'s Neuropsychological Services',
  description: 'Expert neuropsychological evaluations and therapy available via secure telehealth. Serving clients across 38 states through PSYPACT with bilingual English and Farsi services.',
}

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert neuropsychological care from the comfort of your home
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-16">
            How Telehealth Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Schedule Your Session
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact our office to book your telehealth appointment. We will send you a secure link and instructions for your virtual visit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Connect Securely
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your session through our HIPAA-compliant platform from any device. No special software required—just click the link we provide.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-semibold text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Get Expert Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive the same high-quality neuropsychological services you would in person, with the convenience of being in your own space.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm animate-fade-up">
            <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-primary)] mb-8 text-center">
              Services Available Via Telehealth
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Individual Therapy</h4>
                  <p className="text-sm text-[var(--color-muted)]">Evidence-based treatment for anxiety, depression, trauma, and adjustment concerns</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">ADHD Testing</h4>
                  <p className="text-sm text-[var(--color-muted)]">Comprehensive diagnostic evaluations for adolescents and adults</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Initial Consultations</h4>
                  <p className="text-sm text-[var(--color-muted)]">Discuss your concerns and determine the best evaluation approach</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Pre-Bariatric Surgery Evaluations</h4>
                  <p className="text-sm text-[var(--color-muted)]">Required psychological assessments for weight loss surgery candidates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Follow-Up Appointments</h4>
                  <p className="text-sm text-[var(--color-muted)]">Review test results and discuss recommendations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Bilingual Services</h4>
                  <p className="text-sm text-[var(--color-muted)]">All services available in English and Persian/Farsi</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm text-center">
                <strong className="text-[var(--color-ink)]">Note:</strong> Full neuropsychological evaluations requiring in-person cognitive testing are not available via telehealth but can be scheduled at our office location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-16">
            Multi-State Telehealth Access
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] text-white rounded-2xl p-10 shadow-lg">
                <h3 className="font-cormorant text-3xl font-semibold mb-6">PSYPACT Authorization</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Dr. Khanali is authorized through PSYPACT (Psychology Interjurisdictional Compact) to provide telepsychology services to clients in 38 participating states.
                </p>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-sm text-white/80 mb-4">This means you can receive expert neuropsychological services regardless of your location in participating states, without Dr. Khanali needing separate licenses in each state.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors">
                    <span>Check if your state is included</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-up">
              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4">
                  Benefits of PSYPACT
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Access care while traveling or relocating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Maintain continuity of care across state lines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Connect with specialized providers not available locally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Receive culturally-competent bilingual services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-xl p-6">
                <p className="text-sm text-[var(--color-muted)]">
                  <strong className="text-[var(--color-ink)]">Currently serving clients in:</strong> Alabama, Arizona, Arkansas, Colorado, Delaware, District of Columbia, Georgia, Idaho, Illinois, Indiana, Kansas, Kentucky, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Nebraska, Nevada, New Hampshire, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, Rhode Island, South Carolina, Tennessee, Texas, Utah, Virginia, Washington, West Virginia, Wisconsin, and Wyoming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-16">
            Technology Requirements
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-sm animate-fade-up">
            <p className="text-[var(--color-muted)] leading-relaxed mb-8 text-center">
              Telehealth sessions are simple to join and require minimal technical setup. Here is what you need:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">Device Options</h3>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)]">Computer or Laptop</h4>
                    <p className="text-sm text-[var(--color-muted)]">Desktop or laptop with webcam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)]">Tablet or Smartphone</h4>
                    <p className="text-sm text-[var(--color-muted)]">iPad, iPhone, Android tablet or phone</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">Internet & Audio</h3>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)]">Stable Internet Connection</h4>
                    <p className="text-sm text-[var(--color-muted)]">Broadband or reliable WiFi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)]">Working Microphone & Speakers</h4>
                    <p className="text-sm text-[var(--color-muted)]">Built-in or headphones with mic</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-6 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Private Space Recommended
              </h4>
              <p className="text-sm text-[var(--color-muted)]">
                For confidentiality and to minimize distractions, please join your session from a private, quiet location where you can speak freely.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--color-muted)] mb-4">
                We will test your connection before your first session to ensure everything works smoothly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors">
                <span>Schedule Your Telehealth Appointment</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-16">
            Privacy & Security
          </h2>
          <div className="space-y-8 animate-fade-up">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] text-white rounded-2xl p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-10 h-10 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-3xl font-semibold mb-3">HIPAA-Compliant Platform</h3>
                  <p className="text-white/90 leading-relaxed">
                    All telehealth sessions are conducted through a secure, encrypted video platform that meets or exceeds HIPAA standards for protecting your health information.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Encrypted Connections
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  End-to-end encryption ensures that your video, audio, and any shared documents remain completely private and secure.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  No Recording or Storage
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Sessions are not recorded or stored on any servers. Your privacy is protected throughout and after each appointment.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  Secure Authentication
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Unique session links and passwords ensure that only you and Dr. Khanali can access your appointment.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Protected Records
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Clinical notes and test results are stored in our secure, HIPAA-compliant electronic health record system.
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-xl p-8">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Your privacy matters.</strong> We adhere to all federal and state regulations regarding telehealth and patient confidentiality. Before your first session, we will review informed consent for telehealth services and answer any questions you have about security and privacy protections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your telehealth consultation today and experience expert neuropsychological care from wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg">
              <span>Book Telehealth Appointment</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
              <span>View All Services</span>
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Questions about telehealth? Call us at <a href="tel:+19728011919" className="text-white hover:underline font-semibold">(972) 801-1919</a>
          </p>
        </div>
      </section>
    </main>
  )
}