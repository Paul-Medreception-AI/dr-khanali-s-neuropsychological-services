import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Value of Comprehensive Psychological Reports',
  description: 'Discover how comprehensive psychological reports provide critical insights for diagnosis, treatment planning, and long-term care in mental health and neuropsychological assessment.',
  keywords: 'psychological reports, neuropsychological assessment, mental health evaluation, psychological testing Fredericksburg VA, comprehensive assessment',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Value of Comprehensive Psychological Reports
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Khanali's Services Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine trying to navigate a complex medical condition without a clear diagnosis, treatment plan, or understanding of what lies ahead. For many individuals facing cognitive, emotional, or behavioral challenges, this uncertainty is a daily reality—until they receive a comprehensive psychological report. These detailed documents serve as roadmaps, transforming ambiguity into actionable insights and empowering patients, families, and providers to make informed decisions about care.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In the field of neuropsychology and mental health, comprehensive psychological reports are far more than paperwork. They represent hours of careful assessment, analysis, and clinical expertise distilled into a format that can guide treatment, support accommodations, and improve quality of life. Whether you're a patient considering an evaluation, a family member supporting a loved one, or simply curious about the process, understanding the value of these reports can help you appreciate their profound impact.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is a Comprehensive Psychological Report?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive psychological report is a detailed written summary of a psychological or neuropsychological evaluation. It integrates information from multiple sources—including clinical interviews, standardized tests, behavioral observations, and relevant medical or educational records—to provide a holistic picture of an individual's cognitive, emotional, and behavioral functioning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These reports typically include several key components:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Background Information:</strong> A summary of the referral reason, relevant history, and presenting concerns</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Test Results:</strong> Detailed findings from standardized assessments measuring areas like memory, attention, language, mood, and personality</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Clinical Impressions:</strong> The psychologist's interpretation of the data, including diagnostic conclusions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Recommendations:</strong> Specific, tailored suggestions for treatment, accommodations, and next steps</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The depth and specificity of these reports set them apart from brief screening tools or informal assessments. They provide a nuanced understanding that respects the complexity of human cognition and emotion.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Comprehensive Reports Matter for Diagnosis and Treatment
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One of the most critical functions of a comprehensive psychological report is its role in accurate diagnosis. Many cognitive and emotional conditions present with overlapping symptoms. For example, difficulty concentrating could stem from ADHD, anxiety, depression, a learning disorder, or even early cognitive decline. Without thorough assessment, these conditions can be misdiagnosed or overlooked entirely.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A well-constructed report clarifies the diagnostic picture by documenting specific patterns of strengths and weaknesses. This precision enables treatment providers—whether psychiatrists, therapists, educators, or medical specialists—to tailor interventions to the individual's unique needs. Rather than relying on trial-and-error approaches, clinicians can design evidence-based treatment plans grounded in objective data.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "A comprehensive psychological report transforms uncertainty into clarity, giving patients and providers the information they need to move forward with confidence."
            </p>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond initial diagnosis, these reports serve as valuable baseline documentation. They allow providers to track progress over time, assess the effectiveness of interventions, and adjust care plans as needed. For conditions that evolve—such as dementia, traumatic brain injury recovery, or developmental disorders—having detailed reports from multiple time points creates a longitudinal record that captures change and informs ongoing care.
          </p>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Supporting Educational and Workplace Accommodations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For students and employees with cognitive or emotional challenges, comprehensive psychological reports can be life-changing. These documents provide the formal documentation required to secure accommodations under laws such as the Individuals with Disabilities Education Act (IDEA), Section 504 of the Rehabilitation Act, and the Americans with Disabilities Act (ADA).
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In educational settings, a detailed report can support:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Individualized Education Programs (IEPs) or 504 plans</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Extended time on tests or assignments</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Modified classroom environments or teaching strategies</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Access to specialized support services</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In workplace settings, comprehensive reports help employers understand an employee's needs and implement reasonable accommodations such as flexible schedules, modified duties, or assistive technology. These adjustments not only improve job performance but also foster a more inclusive and supportive work environment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The specificity of recommendations in a comprehensive report is crucial here. Rather than vague suggestions, the report provides concrete, evidence-based strategies that institutions can implement effectively.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Empowering Patients and Families with Knowledge
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Perhaps one of the most underappreciated values of comprehensive psychological reports is their role in patient and family education. Receiving a diagnosis or learning about cognitive difficulties can be overwhelming. Reports translate complex clinical findings into understandable language, helping individuals and their loved ones grasp what is happening and why.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When patients understand their own cognitive and emotional profiles, they gain insight into their experiences. They learn that their struggles are not character flaws or personal failures but symptoms of identifiable conditions. This knowledge reduces stigma, validates experiences, and fosters self-compassion.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For families, especially those supporting children or aging parents, comprehensive reports offer clarity and direction. They answer difficult questions: Why is my child struggling in school despite being bright? Why is my parent becoming forgetful and confused? What can we do to help? Armed with this information, families can advocate more effectively, access appropriate resources, and provide informed support.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Legal and Disability Considerations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Comprehensive psychological reports also play important roles in legal and disability contexts. They may be used to support applications for Social Security Disability Insurance (SSDI), veterans' benefits, or other forms of disability compensation. In legal proceedings—such as custody evaluations, personal injury cases, or competency hearings—these reports provide objective, expert testimony about an individual's psychological functioning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The thoroughness and credibility of a comprehensive report can be decisive in these settings. Courts and administrative bodies require documentation that meets rigorous standards of evidence, and well-prepared psychological reports fulfill this need.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect During the Evaluation Process
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding what goes into creating a comprehensive psychological report can help demystify the evaluation process. Typically, the process involves:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Initial Consultation:</strong> Discussion of concerns, history, and goals for the evaluation</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Testing Sessions:</strong> Administration of standardized psychological and neuropsychological tests, which may take several hours spread across multiple appointments</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Scoring and Analysis:</strong> The psychologist carefully scores tests, interprets results, and integrates findings</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Feedback Session:</strong> A meeting to review findings, discuss the report, answer questions, and outline recommendations</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Written Report:</strong> Delivery of the comprehensive written document, which can be shared with other providers or used for advocacy</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The entire process is collaborative, with the psychologist working closely with the patient and family to ensure the evaluation addresses the most pressing concerns. In Fredericksburg, VA and surrounding areas, experienced clinicians like those at Dr. Khanali's Neuropsychological Services take pride in creating reports that are not only thorough but also compassionate and accessible.
          </p>

          {/* Closing */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Comprehensive psychological reports are powerful tools that transform abstract concerns into clear, actionable understanding. They provide the foundation for accurate diagnosis, effective treatment, meaningful accommodations, and informed decision-making. For patients and families navigating the often confusing landscape of mental health and cognitive care, these reports offer a sense of direction and hope.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you or a loved one is facing challenges that could benefit from a thorough psychological evaluation, consider reaching out to a qualified provider. A comprehensive report may be the key to unlocking better care, improved quality of life, and a clearer path forward. The investment of time and resources in a detailed assessment often yields dividends that last a lifetime.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Dr. Khanali's Neuropsychological Services, we are committed to providing thorough, compassionate evaluations that empower our patients and their families. Whether you're seeking answers, support, or simply peace of mind, our team is here to help you every step of the way.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner, delivering compassionate, evidence-based neuropsychological services in Fredericksburg, VA.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.8 1.8m-4.5-4.5l4.5 4.5m-9-9l9 9" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Neuropsychological Testing
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn what to expect during a neuropsychological evaluation and how testing can provide insights into cognitive functioning.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Educational Accommodations and IEPs
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how psychological evaluations support academic success through individualized education plans and accommodations.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Supporting Loved Ones Through Assessment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Tips for families navigating the psychological evaluation process with compassion and understanding.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fade-up"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}