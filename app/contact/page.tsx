import { OFFICES, formatOffice, PHONE_DISPLAY, PHONE_TEL, FAX_DISPLAY, EMAIL_MAIN, EMAIL_ADMIN, HOURS } from '@/lib/practice'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Dr. Khanali\'s practice in Fredericksburg, VA. Schedule a neuropsychological evaluation, ADHD testing, or therapy appointment. Bilingual services available in English and Farsi.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div id="form" className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] animate-fade-up">
              <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Send Us a Message</h2>
              
              <form method="POST" action="https://formspree.io/f/placeholder">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="neuropsych">Neuropsychological Evaluation</option>
                      <option value="adhd">ADHD Testing</option>
                      <option value="disability">Disability Evaluation</option>
                      <option value="bariatric">Pre-Bariatric Surgery Evaluation</option>
                      <option value="therapy">Individual Therapy</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white py-4 rounded-xl font-semibold transition-colors mt-2"
                  >
                    Send Message
                  </button>

                  <p className="text-[var(--color-muted)] text-xs mt-4">
                    Note: Please do not include confidential health information in this form. This is not a secure method of communication for sensitive medical details. We will contact you to discuss your needs privately.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8 animate-fade-up">
              {/* Visit Us */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg className="w-8 h-8 mb-4 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">Our Offices</h3>
                <ul className="space-y-4 text-[var(--color-ink)]">
                  {OFFICES.map(o => (
                    <li key={o.slug}>
                      <a href={`/locations/${o.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                        <span className="font-medium">{o.city}, {o.state}</span>
                        <br />
                        <span className="text-sm text-[var(--color-muted)]">{formatOffice(o)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call or Fax */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg className="w-8 h-8 mb-4 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">Call or Fax</h3>
                <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-1">
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--color-primary)] transition-colors">{PHONE_DISPLAY}</a>
                </p>
                <p className="text-[var(--color-muted)] text-sm mb-3">Fax: {FAX_DISPLAY}</p>
                <p className="text-[var(--color-muted)] text-sm break-all">
                  <a href={`mailto:${EMAIL_MAIN}`} className="hover:text-[var(--color-primary)] transition-colors">{EMAIL_MAIN}</a>
                </p>
                <p className="text-[var(--color-muted)] text-sm break-all">
                  <a href={`mailto:${EMAIL_ADMIN}`} className="hover:text-[var(--color-primary)] transition-colors">{EMAIL_ADMIN}</a>
                </p>
              </div>

              {/* Hours */}
              <div className="bg-[var(--color-light)] rounded-2xl p-8">
                <svg className="w-8 h-8 mb-4 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">Office Hours</h3>
                <dl className="space-y-2 text-[var(--color-ink)]">
                  {HOURS.map(h => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <dt className="font-medium">{h.days}</dt>
                      <dd className="text-[var(--color-muted)]">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Book Appointment */}
              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8">
                <svg className="w-8 h-8 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold mb-3">Book an Appointment</h3>
                <p className="mb-6 text-white/90">
                  Ready to get started? Fill out the contact form and we'll reach out to schedule your evaluation or therapy session.
                </p>
                <a
                  href="#form"
                  className="inline-block bg-white text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Contact Us Today
                </a>
              </div>

              {/* Telehealth Notice */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg className="w-8 h-8 mb-4 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">Telehealth Available</h3>
                <p className="text-[var(--color-ink)]">
                  Dr. Khanali is licensed via PSYPACT and can provide telehealth services in 38 states. Ask about virtual evaluation and therapy options when you contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}