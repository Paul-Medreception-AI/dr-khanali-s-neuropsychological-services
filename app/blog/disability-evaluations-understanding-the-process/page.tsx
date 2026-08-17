import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disability Evaluations: Understanding the Process | Dr. Khanali\'s Neuropsychological Services',
  description: 'Comprehensive guide to disability evaluations in Arlington, VA. Learn about the neuropsychological assessment process, eligibility criteria, and what to expect during your evaluation.',
  keywords: 'disability evaluation, neuropsychological assessment, disability benefits, SSI evaluation, SSDI, cognitive assessment, Arlington VA',
}

export default function BlogPost() {
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

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Disability Evaluations: Understanding the Process
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            Navigating the disability evaluation process can feel overwhelming, especially when you're already managing the challenges of a cognitive, emotional, or neurological condition. Whether you're seeking Social Security Disability Insurance (SSDI), Supplemental Security Income (SSI), or workplace accommodations, understanding what to expect from a neuropsychological disability evaluation can help reduce anxiety and empower you to advocate for the support you need.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            At Dr. Khanali's Neuropsychological Services in Arlington, VA, we specialize in comprehensive disability evaluations that provide objective, evidence-based documentation of cognitive and psychological functioning. This guide will walk you through the entire process, from initial referral to final report, helping you prepare for what lies ahead.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is a Disability Evaluation?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A disability evaluation is a comprehensive assessment designed to determine whether an individual's cognitive, emotional, or behavioral impairments significantly limit their ability to work or perform daily activities. These evaluations are typically requested by the Social Security Administration (SSA), insurance companies, employers, or legal representatives to establish eligibility for disability benefits or accommodations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Neuropsychological disability evaluations go beyond standard medical exams by examining how brain function affects real-world capabilities. They assess multiple domains including:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Memory and learning:</strong> Short-term, long-term, and working memory capabilities</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Attention and concentration:</strong> Ability to focus, sustain attention, and resist distraction</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Executive functioning:</strong> Planning, organization, problem-solving, and decision-making</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Processing speed:</strong> How quickly you can understand and respond to information</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Emotional functioning:</strong> Mood regulation, anxiety levels, and psychological symptoms</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Adaptive functioning:</strong> Daily living skills and social functioning</span>
            </li>
          </ul>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "A comprehensive neuropsychological evaluation provides objective evidence that can make the difference between approval and denial of disability benefits."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Needs a Disability Evaluation?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Disability evaluations are appropriate for individuals experiencing cognitive or psychological impairments that interfere with their ability to maintain employment or function independently. Common conditions that may warrant a disability evaluation include:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Traumatic brain injury (TBI) or concussion</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Stroke or other cerebrovascular conditions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Dementia or mild cognitive impairment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>ADHD or learning disabilities affecting work performance</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Severe mental health conditions (depression, anxiety, PTSD, schizophrenia)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Autism spectrum disorder</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Epilepsy with cognitive effects</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic pain conditions affecting cognition</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you've been unable to work for several months due to cognitive or psychological symptoms, or if you've received repeated feedback about work performance issues related to memory, attention, or emotional regulation, a disability evaluation may provide the documentation you need to access benefits and support services.
          </p>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evaluation Process: What to Expect
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive neuropsychological disability evaluation typically unfolds in several stages:
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            1. Clinical Interview (1-2 hours)
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The evaluation begins with a detailed interview covering your medical history, educational background, work history, current symptoms, and daily functioning. Your clinician will ask about the onset and progression of your symptoms, what makes them better or worse, and how they impact your ability to work and manage daily tasks. This interview also includes questions about mood, sleep, social relationships, and any substance use.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            2. Standardized Testing (3-6 hours)
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The core of the evaluation involves administering a battery of validated neuropsychological tests. These are not pass/fail tests—they're designed to measure your cognitive abilities compared to others of similar age and educational background. Testing may include paper-and-pencil tasks, computerized measures, puzzle-like activities, and questionnaires. You'll be asked to remember word lists, solve problems, complete visual patterns, and answer questions about your emotional state.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Testing can be mentally tiring, and that's expected. Your clinician will provide breaks as needed and will note any fatigue, frustration, or other factors that may affect performance.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            3. Validity Testing
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Because disability evaluations have significant consequences, psychologists include measures to assess the validity of test results. These aren't meant to "catch" anyone—they simply ensure that the data accurately reflects your true abilities. Valid results strengthen your case and provide confidence to decision-makers reviewing your claim.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            4. Scoring, Interpretation, and Report Writing (1-2 weeks)
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            After testing is complete, your psychologist will score all measures, analyze patterns of strengths and weaknesses, integrate findings with your history and symptoms, and prepare a comprehensive written report. This report will include a summary of your background, test results, diagnostic impressions, and specific opinions regarding your functional limitations and ability to work.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            5. Feedback Session (Optional)
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many clinicians offer a feedback session to review findings, answer questions, and discuss recommendations. This is an opportunity to understand how your cognitive profile relates to real-world functioning and what accommodations or interventions might be helpful.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Preparing for Your Evaluation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            To get the most accurate and helpful results from your disability evaluation, consider these preparation tips:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Get adequate rest:</strong> Being well-rested helps ensure test results reflect your true abilities, not fatigue</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Take your medications as prescribed:</strong> Unless instructed otherwise, continue your normal medication routine</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Bring necessary items:</strong> Glasses, hearing aids, and any assistive devices you normally use</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Gather relevant documents:</strong> Medical records, previous test results, work performance reviews</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Give your best effort:</strong> Try your hardest on all tasks—this ensures accurate results that truly reflect your abilities</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Be honest:</strong> Provide accurate information about symptoms, history, and functioning</span>
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Results and Next Steps
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your evaluation report will provide a comprehensive picture of your cognitive and emotional functioning, including specific opinions about your ability to perform work-related activities. The report typically addresses:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cognitive strengths and weaknesses across multiple domains</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Emotional and psychological functioning</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Diagnostic impressions and their relationship to functioning</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Specific functional limitations (e.g., limitations in sustained concentration, memory, social interaction)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Opinions regarding work capacity and disability status</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Recommendations for treatment, accommodations, or support services</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This report becomes part of your disability application and is reviewed by decision-makers at the SSA, insurance companies, or other relevant entities. A well-documented neuropsychological evaluation significantly strengthens your case by providing objective, standardized evidence of your functional limitations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            It's important to remember that receiving disability benefits is not just about having a diagnosis—it's about demonstrating that your condition prevents you from performing substantial gainful activity. Your neuropsychological evaluation provides the critical link between your diagnosis and your real-world functional limitations.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Choose Specialized Neuropsychological Services?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When it comes to disability evaluations, the expertise of your evaluator matters. Board-certified neuropsychologists bring specialized training in brain-behavior relationships, standardized assessment procedures, and the specific documentation requirements of disability agencies. At Dr. Khanali's Neuropsychological Services in Arlington, VA, we understand what decision-makers look for in disability documentation and how to present findings in a clear, compelling manner.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Our evaluations are thorough, evidence-based, and tailored to each individual's unique circumstances. We take the time to understand your complete history, administer appropriate measures, and provide detailed reports that address the specific questions raised by your disability claim.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Navigating the disability process is challenging, but you don't have to do it alone. A comprehensive neuropsychological evaluation can provide the documentation and clarity you need to access the benefits and support you deserve. Whether you're applying for SSDI, SSI, long-term disability insurance, or workplace accommodations, professional evaluation is an investment in your future security and wellbeing.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're considering a disability evaluation or have been asked to complete one as part of your benefits application, we encourage you to reach out. Our team is here to answer your questions, explain the process in detail, and provide the compassionate, expert care you need during this important time.
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
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Mental Health
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
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Neuropsychological Testing
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn what to expect from comprehensive cognitive assessment and how it can help diagnose and guide treatment.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Social Security Disability: A Guide for Mental Health Conditions
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Navigate the SSDI and SSI application process with insights specific to cognitive and psychological impairments.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-8 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Workplace Accommodations for Cognitive Impairments
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover reasonable accommodations under the ADA that can help you succeed at work despite cognitive challenges.
                </p>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Evaluation
          </a>
        </div>
      </section>
    </main>
  )
}