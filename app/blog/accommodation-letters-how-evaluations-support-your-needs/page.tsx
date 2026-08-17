import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accommodation Letters: How Evaluations Support Your Needs | Dr. Khanali\'s Neuropsychological Services',
  description: 'Learn how comprehensive neuropsychological evaluations lead to effective accommodation letters that support your academic, workplace, and testing needs in Arlington, VA.',
  keywords: 'accommodation letters, neuropsychological evaluation, academic accommodations, workplace accommodations, testing accommodations, Arlington VA, disability services',
}

export default function AccommodationLettersBlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Accommodation Letters: How Evaluations Support Your Needs
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span>Dr. Khanali's Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Whether you're navigating college coursework, preparing for standardized tests, or managing workplace responsibilities, having the right support can make all the difference. For individuals with learning disabilities, ADHD, anxiety disorders, or other neuropsychological conditions, accommodation letters serve as essential tools that bridge the gap between challenges and success. But how exactly do these letters come to be, and why is a comprehensive evaluation so crucial to obtaining meaningful accommodations?
            </p>
            <p className="mb-6">
              Understanding the connection between neuropsychological evaluations and accommodation letters empowers you to advocate for yourself and access the support you deserve. Let's explore how this process works and why it matters for your academic, professional, and personal growth.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Accommodation Letters?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Accommodation letters are formal documents that outline specific modifications or supports recommended to help individuals with documented disabilities perform to their fullest potential. These letters are used in various settings—educational institutions, testing organizations, and workplaces—to ensure equal access and opportunity.
            </p>
            <p className="mb-6">
              Common accommodations include extended time on exams, quiet testing environments, use of assistive technology, flexible deadlines, or modified work schedules. The specific recommendations depend entirely on your unique cognitive profile and how your condition impacts your daily functioning.
            </p>
            <p className="mb-6">
              Crucially, these letters are not simply requests based on self-report. They must be supported by objective, comprehensive evaluation data that clearly documents the presence of a qualifying condition and explains how it substantially limits one or more major life activities. This is where neuropsychological evaluations become indispensable.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Comprehensive Evaluations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A neuropsychological evaluation is a systematic assessment of cognitive functioning across multiple domains including attention, memory, executive functioning, processing speed, language skills, and emotional regulation. Through standardized testing, clinical interviews, and behavioral observations, clinicians gather objective data about your strengths and areas of difficulty.
            </p>
            <p className="mb-6">
              This depth of assessment serves multiple purposes. First, it provides diagnostic clarity—identifying specific conditions such as ADHD, learning disabilities, autism spectrum disorder, or mood disorders. Second, it reveals the functional impact of these conditions on your daily life, academic performance, or work productivity. Third, it establishes a baseline against which to measure progress and treatment effectiveness over time.
            </p>
            <p className="mb-6">
              For accommodation letters specifically, evaluation results provide the evidence base that institutions require. Rather than vague statements about difficulty concentrating or reading, a comprehensive report quantifies these challenges with standardized scores, percentile ranks, and clear explanations of how specific deficits impact performance in real-world settings.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The most effective accommodation letters don't just list supports—they connect specific documented deficits to individualized recommendations that level the playing field."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Benefits from Accommodation Letters?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Accommodation letters support a wide range of individuals across different life stages and settings. Students with learning disabilities or ADHD may need extended time and reduced-distraction environments for exams. Individuals with anxiety disorders might benefit from flexible attendance policies or the ability to take breaks during long assessments.
            </p>
            <p className="mb-6">
              Graduate students and professionals preparing for licensing exams (MCAT, LSAT, GRE, bar exams, medical boards) often require documentation for testing accommodations. Adults in the workplace may seek accommodations under the Americans with Disabilities Act (ADA), such as modified schedules, task restructuring, or assistive technology.
            </p>
            <p className="mb-6">
              Even individuals who have managed without formal support in the past may find that increasing academic rigor, workplace demands, or life stressors make previously compensated difficulties more pronounced. Seeking evaluation and accommodations isn't about gaining unfair advantage—it's about accessing the support needed to demonstrate your true capabilities.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Makes an Accommodation Letter Effective?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Not all accommodation letters carry equal weight. The most effective letters share several key characteristics that increase their likelihood of acceptance and implementation:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Current Documentation:</span>
                  <span className="text-[var(--color-ink)]"> Most institutions require evaluations completed within the past 3-5 years, with some requiring more recent data for ADHD or conditions that may change over time.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Qualified Evaluator:</span>
                  <span className="text-[var(--color-ink)]"> Letters must come from licensed professionals with expertise in the relevant area—typically psychologists, neuropsychologists, or psychiatrists.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Clear Diagnosis:</span>
                  <span className="text-[var(--color-ink)]"> The letter must include specific DSM-5 diagnoses with supporting test data and clinical observations.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Functional Impact:</span>
                  <span className="text-[var(--color-ink)]"> The letter must explain how the condition substantially limits major life activities in the specific setting where accommodations are requested.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Specific Recommendations:</span>
                  <span className="text-[var(--color-ink)]"> Rather than generic suggestions, effective letters provide tailored accommodations directly linked to documented deficits.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Professional Formatting:</span>
                  <span className="text-[var(--color-ink)]"> Letters should be on professional letterhead, clearly written, and free of jargon while maintaining clinical precision.</span>
                </div>
              </div>
            </div>

            <p className="mb-6">
              In Arlington, VA, where academic and professional standards are high, having documentation that meets these criteria is essential for successful accommodation requests at local universities, testing centers, and workplaces.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evaluation-to-Accommodation Process
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The journey from evaluation to implemented accommodations typically follows several steps. First, you'll complete a comprehensive neuropsychological assessment that may take 4-8 hours across multiple sessions. This includes cognitive testing, questionnaires, clinical interviews, and review of relevant records.
            </p>
            <p className="mb-6">
              After testing, your clinician will score and interpret results, integrating all data into a detailed report. This report includes your diagnostic profile, cognitive strengths and weaknesses, and specific recommendations for accommodations and interventions. A feedback session helps you understand the findings and how to use them effectively.
            </p>
            <p className="mb-6">
              Armed with your comprehensive report and accommodation letter, you'll then submit these materials to the appropriate disability services office or human resources department. These offices review documentation to ensure it meets their criteria and determine which accommodations are reasonable and appropriate. You may need to meet with disability coordinators to discuss implementation.
            </p>
            <p className="mb-6">
              Once approved, accommodations are typically valid for a specific period and must be renewed with updated documentation as needed. Your clinician remains available for consultation if questions arise or if accommodation needs change over time.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Beyond Accommodations: The Full Value of Evaluation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While obtaining an accommodation letter may be your immediate goal, comprehensive evaluations offer benefits that extend far beyond documentation. Understanding your cognitive profile provides insight into learning styles, career fit, and personal strengths you can leverage in various life domains.
            </p>
            <p className="mb-6">
              Evaluation results inform treatment planning, helping you and your providers select interventions most likely to be effective. They can guide decisions about medication management, therapy approaches, academic planning, and career choices. For many individuals, simply having a clear explanation for longstanding difficulties brings relief and reduces self-blame.
            </p>
            <p className="mb-6">
              The self-knowledge gained through evaluation empowers you to make informed decisions and advocate effectively for your needs—skills that serve you throughout life, not just in the specific setting where accommodations are initially requested.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If you're struggling in academic, testing, or workplace settings and suspect an underlying condition may be contributing, seeking a comprehensive neuropsychological evaluation is an important step toward accessing the support you need. With proper documentation, accommodation letters open doors to equal opportunity and allow you to demonstrate your true abilities.
            </p>
            <p className="mb-6">
              At Dr. Khanali's Neuropsychological Services in Arlington, VA, our team provides thorough evaluations that meet institutional standards while honoring your individual experience. We work collaboratively with you to ensure you have the documentation and understanding needed to advocate for accommodations and make informed decisions about your future. If you're ready to explore how evaluation can support your goals, we invite you to reach out and begin the conversation.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, serving the Arlington, VA community with comprehensive neuropsychological evaluations and evidence-based care.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Neuropsychological Testing
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn what to expect during a comprehensive evaluation and how testing reveals your cognitive strengths and challenges.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                ADHD in Adults: Recognition and Support
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover how ADHD presents in adulthood and why proper evaluation is essential for effective management and accommodations.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Workplace Accommodations Under the ADA
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore your rights as an employee with a disability and how neuropsychological documentation supports workplace accommodations.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you obtain the comprehensive evaluation and documentation you need for accommodations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all hover:gap-3 shadow-lg"
          >
            Schedule Your Evaluation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}