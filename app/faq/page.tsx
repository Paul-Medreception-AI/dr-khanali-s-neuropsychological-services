import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about neuropsychological evaluations, ADHD testing, therapy services, insurance, appointments, and telehealth options at Dr. Khanali\'s practice in Fredericksburg, VA.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-up">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            
            {/* Question 1 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Are you accepting new patients?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, Dr. Khanali's practice is currently accepting new patients for neuropsychological evaluations, ADHD testing, disability evaluations, pre-bariatric surgery assessments, and individual therapy. We welcome adolescents and adults seeking comprehensive psychological services. Our practice offers bilingual services in English and Persian/Farsi, and we are licensed to provide telehealth services in 38 states through PSYPACT. To schedule your initial consultation, please contact our office directly through our contact page or by phone.
              </div>
            </details>

            {/* Question 2 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you accept insurance?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage varies by service type and individual plan. Many insurance plans cover neuropsychological evaluations and therapy services, though coverage for specific assessment types (such as pre-bariatric surgery evaluations) may differ. We recommend contacting your insurance provider directly to verify your mental health benefits, including coverage for psychological testing and therapy services. Our office can provide you with the necessary documentation and diagnostic codes to submit for reimbursement if you choose to pay out-of-pocket and seek reimbursement from your insurance company. We are happy to discuss payment options during your initial consultation.
              </div>
            </details>

            {/* Question 3 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What should I expect during my first appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Your first appointment will typically be an initial consultation where we discuss your concerns, reasons for seeking services, and relevant background information. Dr. Khanali will review your medical and psychological history, current symptoms, and goals for assessment or treatment. This session allows us to determine which services best fit your needs and answer any questions you may have about the evaluation or therapy process. For neuropsychological evaluations, we will schedule additional testing sessions following this initial meeting. Please bring any relevant medical records, previous psychological reports, or documentation that may be helpful in understanding your situation.
              </div>
            </details>

            {/* Question 4 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How long does a neuropsychological evaluation take?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                A comprehensive neuropsychological evaluation typically requires 4-6 hours of testing time, which is usually divided into multiple sessions to prevent fatigue and ensure accurate results. The process includes an initial clinical interview, standardized testing of various cognitive domains (memory, attention, executive functioning, language, visual-spatial skills), and behavioral observations. After testing is complete, Dr. Khanali needs additional time to score tests, interpret results, and prepare a detailed written report. The entire process from initial appointment to feedback session typically takes 3-4 weeks, though urgent cases may be accommodated when possible.
              </div>
            </details>

            {/* Question 5 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you offer telehealth appointments?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, we offer secure telehealth services for eligible patients. Dr. Khanali is licensed through PSYPACT, which allows us to provide telepsychology services to clients in 38 participating states. Telehealth is available for individual therapy sessions and initial consultations. However, some types of neuropsychological testing require in-person administration to ensure validity and accuracy of results. During your initial consultation, we will discuss whether telehealth is appropriate for your specific needs or if in-person visits are necessary. All telehealth sessions are conducted through a HIPAA-compliant video platform to protect your privacy and confidentiality.
              </div>
            </details>

            {/* Question 6 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What is ADHD testing and who needs it?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                ADHD testing is a comprehensive diagnostic evaluation designed to assess for attention-deficit/hyperactivity disorder in adolescents and adults. The assessment includes clinical interviews, standardized rating scales, cognitive testing of attention and executive functions, and review of developmental history. This testing is recommended if you experience persistent difficulties with attention, concentration, organization, time management, impulsivity, or hyperactivity that interfere with work, school, or daily functioning. Many adults seek ADHD testing after years of struggling without understanding why certain tasks feel exceptionally difficult. A thorough evaluation can provide clarity, accurate diagnosis, and recommendations for effective treatment strategies including therapy, accommodations, and medication management when appropriate.
              </div>
            </details>

            {/* Question 7 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can you prescribe medication?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                As a clinical psychologist, Dr. Khanali does not prescribe medication. Psychologists provide psychological assessment, diagnosis, and psychotherapy services, while medication management is handled by psychiatrists, primary care physicians, or other medical doctors. However, if our evaluation indicates that medication may be beneficial as part of your treatment plan, we can provide recommendations and referrals to trusted psychiatrists or other prescribing providers in the community. We also work collaboratively with your existing medical providers to ensure coordinated, comprehensive care. Many clients benefit from a combination of therapy and medication, and we support integrated treatment approaches.
              </div>
            </details>

            {/* Question 8 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What is your cancellation policy?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                We require at least 24 hours advance notice for appointment cancellations or rescheduling. This policy allows us to offer your appointment time to other clients who may be waiting for services. Cancellations made with less than 24 hours notice, or missed appointments without prior notification, may be subject to a cancellation fee. We understand that unexpected emergencies and illnesses occur, and we handle these situations on a case-by-case basis with compassion and flexibility. To cancel or reschedule your appointment, please contact our office as soon as possible by phone or through the contact method provided during scheduling.
              </div>
            </details>

            {/* Question 9 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What is a pre-bariatric surgery evaluation?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                A pre-bariatric surgery psychological evaluation is a required assessment for individuals preparing for weight loss surgery. This evaluation examines your mental health status, understanding of the surgical procedure and lifestyle changes required, readiness for surgery, eating behaviors and relationship with food, support systems, and history of any psychological conditions that may impact surgical outcomes. The goal is not to prevent surgery, but rather to identify any factors that should be addressed before surgery to optimize your success and wellbeing. Dr. Khanali will provide a comprehensive report to your surgical team with findings and recommendations. This evaluation typically takes 1-2 sessions to complete.
              </div>
            </details>

            {/* Question 10 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do I need a referral to schedule an appointment?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                In most cases, you do not need a referral to schedule an appointment with Dr. Khanali. You can contact our office directly to request services. However, some insurance plans require a referral from your primary care physician for mental health services or psychological testing to be covered, so we recommend checking with your insurance provider about their specific requirements. Additionally, if you are seeking a disability evaluation or pre-bariatric surgery evaluation, these are typically requested by another provider or organization, though you can still contact us directly to initiate the process. We are happy to coordinate with your other healthcare providers as needed.
              </div>
            </details>

            {/* Question 11 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What types of therapy do you offer?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dr. Khanali provides evidence-based individual therapy for adolescents and adults using approaches tailored to each client's unique needs and presenting concerns. Treatment approaches may include cognitive-behavioral therapy (CBT), trauma-focused interventions, grief and loss counseling, and culturally sensitive therapeutic techniques. We address a range of concerns including anxiety, depression, trauma, adjustment difficulties, grief, stress management, and life transitions. All therapy services are available in both English and Persian/Farsi, and we emphasize cultural competence in understanding how cultural background, values, and experiences shape mental health and healing. Therapy frequency and duration are individualized based on your specific goals and needs.
              </div>
            </details>

            {/* Question 12 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What languages do you speak?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dr. Khanali is fluent in both English and Persian/Farsi and provides all psychological services in both languages. This includes neuropsychological evaluations, ADHD testing, disability evaluations, pre-bariatric surgery assessments, and individual therapy. Being able to communicate in your preferred language during psychological assessment and treatment is important for accurate diagnosis, comfort, and therapeutic effectiveness. Our bilingual services ensure that language is not a barrier to receiving high-quality, culturally sensitive psychological care. You can choose to conduct your entire evaluation and treatment in English, Farsi, or a combination of both languages based on your comfort and preference.
              </div>
            </details>

            {/* Question 13 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How much do services cost?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Service fees vary depending on the type of evaluation or therapy being provided. Comprehensive neuropsychological evaluations typically involve more extensive testing time and detailed report writing, while individual therapy sessions are billed per session. We provide transparent pricing information during the initial consultation so you understand the costs before beginning services. Payment is typically expected at the time of service, and we accept various payment methods. If you plan to use insurance, we recommend verifying your coverage and benefits before your first appointment. Our office can provide you with detailed invoices and documentation needed for insurance submission if you are seeking reimbursement. We are committed to making our services accessible and will discuss payment options during scheduling.
              </div>
            </details>

            {/* Question 14 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What should I do if I'm experiencing a mental health crisis?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you are experiencing a mental health emergency or crisis, please call 911 or go to your nearest emergency room immediately. You can also contact the National Suicide Prevention Lifeline at 988 (call or text) or the Crisis Text Line by texting HOME to 741741. These services are available 24/7 and provide immediate support. Our practice provides scheduled evaluation and therapy services, but we are not equipped to handle acute crisis situations or provide emergency services. If you are having thoughts of harming yourself or others, experiencing severe mental health symptoms, or are in immediate danger, emergency services are the appropriate and fastest way to get the help you need right away.
              </div>
            </details>

            {/* Question 15 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Will my information be kept confidential?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, confidentiality is a fundamental aspect of the therapeutic relationship and is protected by law and professional ethics. All information you share during evaluations and therapy sessions is kept strictly confidential, with limited exceptions required by law. These exceptions include situations where there is imminent risk of harm to yourself or others, suspected abuse or neglect of a child or vulnerable adult, or when records are subpoenaed by a court. We maintain secure, HIPAA-compliant record-keeping practices to protect your privacy. During your first session, Dr. Khanali will review confidentiality limits and answer any questions you have about privacy protections. You have the right to know how your information will be used and who may have access to your records.
              </div>
            </details>

            {/* Question 16 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What conditions do you treat?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dr. Khanali provides evaluation and treatment for a wide range of psychological and neuropsychological conditions affecting adolescents and adults. Common areas of focus include attention-deficit/hyperactivity disorder (ADHD), anxiety disorders, depression, trauma and PTSD, grief and loss, adjustment disorders, and cognitive concerns related to medical conditions, aging, or brain injury. Our neuropsychological evaluations can assess conditions affecting memory, attention, executive functioning, and other cognitive abilities. We also work with individuals facing life transitions, stress management challenges, and cultural adjustment issues. During your initial consultation, we will discuss your specific concerns and determine whether our services are a good fit for your needs, or provide appropriate referrals if specialized treatment is needed.
              </div>
            </details>

            {/* Question 17 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How do I prepare for a neuropsychological evaluation?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                To prepare for your neuropsychological evaluation, get a good night's sleep before testing sessions and eat a healthy meal beforehand to ensure optimal cognitive performance. Take any prescribed medications as usual unless directed otherwise by your physician. Bring your glasses, hearing aids, or other assistive devices you normally use. Gather any relevant medical records, previous psychological or educational testing reports, and a list of current medications. If possible, have a family member or close friend available to provide observations about your functioning, as collateral information can be valuable. Avoid alcohol or recreational substances for at least 24 hours before testing. We will provide specific instructions when scheduling your evaluation, and you can always contact our office with questions about preparation.
              </div>
            </details>

            {/* Question 18 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you work with adolescents or only adults?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dr. Khanali provides services to both adolescents and adults. Our practice works with teenagers, young adults, and adults of all ages seeking neuropsychological evaluations, ADHD testing, disability evaluations, and individual therapy. Adolescents typically benefit from developmentally appropriate assessment techniques and age-appropriate therapeutic approaches. For clients under 18, parental consent is required for treatment, and we often involve family members in the treatment process when clinically appropriate. We understand that adolescence presents unique challenges and developmental considerations, and we tailor our assessment and treatment approaches accordingly. Whether you are seeking services for yourself or for an adolescent family member, we provide compassionate, age-appropriate care.
              </div>
            </details>

            {/* Question 19 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What is a disability evaluation used for?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                A disability evaluation is a comprehensive psychological assessment used to document the presence, severity, and functional impact of mental health or cognitive conditions for disability determination purposes. These evaluations can support applications for Social Security Disability benefits, workplace accommodations under the Americans with Disabilities Act (ADA), educational accommodations, veterans' disability claims, or other disability-related documentation needs. The evaluation includes clinical interviews, review of medical and psychological history, standardized testing when appropriate, and assessment of how symptoms affect your daily functioning, work capacity, and quality of life. Dr. Khanali provides a detailed written report documenting findings and functional limitations that can be submitted to the requesting agency or organization.
              </div>
            </details>

            {/* Question 20 */}
            <details className="border border-[var(--color-border)] rounded-xl bg-white group animate-fade-up">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Where is your office located?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dr. Khanali's practice is based in Fredericksburg, VA, serving the greater Washington, D.C. metropolitan area. We offer both in-person and telehealth services depending on the type of evaluation or therapy being provided. Through PSYPACT licensure, Dr. Khanali is authorized to provide telepsychology services to clients in 38 participating states, which expands access to our bilingual neuropsychological and therapy services for clients who may not be able to travel to our Fredericksburg office. When you contact our office to schedule services, we will provide detailed location information for in-person appointments or technical instructions for telehealth sessions. We strive to make our services accessible and convenient for all clients we serve.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Still Have Questions?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto animate-fade-up">
            Our team is here to help. Contact us today to discuss your needs and learn how we can support your mental health journey.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}