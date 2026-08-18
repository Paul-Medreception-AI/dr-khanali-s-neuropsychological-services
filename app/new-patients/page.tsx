import Link from 'next/link'

export const metadata = {
  title: 'New Patients',
  description: 'Everything you need to know before your first visit. Learn about our intake process, what to bring, patient forms, telehealth services, and office policies.',
}

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            New Patients
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up">
            Everything you need to know before your first visit
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Your First Visit
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our contact form or call our office directly. We'll find a time that works for your schedule.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete intake forms, or request them in advance. Forms are available in English and Farsi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive assessment lasting 60-90 minutes. We'll discuss your concerns, medical history, and goals for treatment.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="font-cormorant text-6xl font-light text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Together we'll create a personalized care plan tailored to your unique needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            What to Bring
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Photo ID & Insurance */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Photo ID & Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Valid government-issued ID and current insurance information. We'll make copies for your file.
                </p>
              </div>
            </div>

            {/* Medication List */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Medication List</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Complete list of current medications including dosages, supplements, and over-the-counter medications.
                </p>
              </div>
            </div>

            {/* Prior Records */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Prior Medical & Psychological Records</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Any previous psychological evaluations, psychiatric records, or relevant medical documentation.
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Name and phone number of someone we can contact in case of emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Forms */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Patient Forms
            </h2>
            
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Forms are available at our office and can be completed at your first appointment. Arriving 15 minutes early allows time to complete all necessary paperwork before your evaluation begins.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)]">Patient Intake Form</h4>
                  <p className="text-[var(--color-muted)]">Demographic information, contact details, and reason for visit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)]">Consent for Treatment</h4>
                  <p className="text-[var(--color-muted)]">Authorization for psychological services and treatment agreement</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)]">HIPAA Authorization</h4>
                  <p className="text-[var(--color-muted)]">Privacy practices notice and acknowledgment of receipt</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)]">Financial Policy & Insurance Information</h4>
                  <p className="text-[var(--color-muted)]">Payment terms, insurance coverage, and billing procedures</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)]">Medical & Psychological History</h4>
                  <p className="text-[var(--color-muted)]">Comprehensive health background and previous treatment information</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-[var(--color-border)]">
              <p className="text-[var(--color-muted)]">
                <strong className="text-[var(--color-ink)]">Language Options:</strong> All forms are available in both English and Persian/Farsi. Please let us know your preference when scheduling your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Info */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-6 animate-fade-up">
              Telehealth Services
            </h2>
            <p className="text-xl text-center text-[var(--color-muted)] mb-16 animate-fade-up">
              We offer secure video appointments available in 38 states through PSYPACT
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Device Requirements</h3>
                </div>
                <ul className="space-y-2 text-[var(--color-muted)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Computer, tablet, or smartphone with camera and microphone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Reliable high-speed internet connection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Updated web browser (Chrome, Firefox, or Safari recommended)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Headphones or earbuds for privacy and audio clarity</span>
                  </li>
                </ul>
              </div>

              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Privacy Tips</h3>
                </div>
                <ul className="space-y-2 text-[var(--color-muted)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Choose a quiet, private space where you won't be interrupted</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Close doors and inform household members of your appointment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Turn off notifications on your device during the session</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent)] font-semibold">•</span>
                    <span>Use a secure, password-protected Wi-Fi connection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--color-light)] rounded-xl p-8 animate-fade-up">
              <h4 className="font-semibold text-lg text-[var(--color-ink)] mb-4">How It Works</h4>
              <div className="space-y-3 text-[var(--color-muted)]">
                <p>
                  <strong className="text-[var(--color-ink)]">Before Your Appointment:</strong> You'll receive a secure video link via email. Test your connection 10-15 minutes before your scheduled time to ensure everything works properly.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">During Your Appointment:</strong> Click the link at your appointment time to join the secure video session. Your session is private, encrypted, and HIPAA-compliant.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">After Your Appointment:</strong> You'll receive any necessary follow-up information and documentation through our secure patient portal.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--color-accent)] animate-fade-up">
              <p className="text-[var(--color-muted)]">
                <strong className="text-[var(--color-ink)]">Note:</strong> While many services can be provided via telehealth, some comprehensive neuropsychological evaluations may require in-person testing. We'll discuss the best format for your specific needs during scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Office Policies
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We require 24-hour advance notice for appointment cancellations or rescheduling.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Cancellations made with less than 24 hours notice may be subject to a cancellation fee. This allows us to offer your appointment time to other patients in need of services.
              </p>
            </div>

            {/* Late Arrivals */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Late Arrivals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Please arrive 15 minutes early for your first appointment to complete paperwork.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                If you arrive late, we will accommodate you for the remaining appointment time. However, the full session fee will still apply as your time slot was reserved specifically for you.
              </p>
            </div>

            {/* No-Show Policy */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">No-Show Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Missing an appointment without prior notice is considered a no-show.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                No-show appointments will be charged the full session fee. Repeated no-shows may result in difficulty scheduling future appointments. We understand emergencies happen—please contact us as soon as possible.
              </p>
            </div>
          </div>

          {/* Additional Policies */}
          <div className="max-w-4xl mx-auto mt-16 space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Insurance & Payment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                We accept most major insurance plans and will verify your coverage prior to your first appointment. Co-pays and deductibles are due at the time of service.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For patients without insurance or those seeking out-of-network services, we offer self-pay options and can provide you with a superbill for potential reimbursement from your insurance company.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Confidentiality</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                Your privacy is of utmost importance. All information shared during sessions is confidential and protected by HIPAA regulations and professional ethical standards.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Exceptions to confidentiality include situations involving imminent danger to yourself or others, suspected abuse of children or vulnerable adults, or court orders. We will discuss these limits during your first session.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Communication Between Sessions</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                For brief questions or scheduling matters, you may contact our office by phone or through our secure patient portal. We typically respond within one business day.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For urgent clinical matters, please call our office directly. If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up">
            Schedule your initial evaluation today and take the first step toward comprehensive neuropsychological care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-lg transition-all hover:scale-105"
            >
              Schedule an Evaluation
            </Link>
            <Link 
              href="/services" 
              className="inline-block bg-white hover:bg-white/90 text-[var(--color-primary)] font-semibold px-10 py-4 rounded-lg transition-all hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}