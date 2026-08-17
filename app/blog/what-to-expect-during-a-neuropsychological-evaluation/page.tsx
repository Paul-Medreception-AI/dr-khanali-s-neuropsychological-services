import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect During a Neuropsychological Evaluation | Dr. Khanali\'s Neuropsychological Services',
  description: 'Learn what happens during a neuropsychological evaluation, how to prepare, and what the results mean. Expert guidance from Dr. Khanali\'s Neuropsychological Services in Arlington, VA.',
  keywords: 'neuropsychological evaluation, cognitive testing, brain function assessment, neuropsychology, Arlington VA, mental health evaluation',
}

export default function BlogPost() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            {' › '}
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            {' › '}
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            What to Expect During a Neuropsychological Evaluation
          </h1>
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              If you've been referred for a neuropsychological evaluation, you might feel uncertain about what lies ahead. Perhaps you're experiencing memory difficulties, struggling with attention after a concussion, or noticing changes in your thinking abilities. Understanding the evaluation process can ease anxiety and help you prepare for this important step in your care journey.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is a Neuropsychological Evaluation?
            </h2>
            <p className="mb-6">
              A neuropsychological evaluation is a comprehensive assessment that examines how your brain functions across multiple cognitive domains. Unlike a standard medical exam or brief office screening, this evaluation uses scientifically validated tests to measure specific abilities including memory, attention, language, problem-solving, visual-spatial skills, and executive functions.
            </p>
            <p className="mb-6">
              These evaluations serve many purposes: diagnosing cognitive disorders, establishing a baseline after brain injury, guiding treatment planning, determining educational accommodations, or tracking changes over time. The results provide a detailed picture of your cognitive strengths and challenges, helping you and your healthcare team make informed decisions about your care.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Before Your Appointment: How to Prepare
            </h2>
            <p className="mb-6">
              Preparation begins well before you walk into the office. Getting adequate sleep the night before is crucial—fatigue can significantly affect test performance and may not accurately reflect your true abilities. Plan to eat a balanced meal before your appointment, as hunger and low blood sugar can impair concentration.
            </p>
            <div className="bg-[var(--color-light)] rounded-xl p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What to Bring
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>List of current medications and dosages</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Medical records, previous test results, or brain imaging reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Eyeglasses or hearing aids if you use them</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insurance information and referral documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Written questions or concerns you want to address</span>
                </li>
              </ul>
            </div>
            <p className="mb-6">
              If you take medications that affect alertness or concentration, discuss timing with your provider beforehand. Avoid alcohol for at least 24 hours prior to testing. Plan for a lengthy appointment—most evaluations take 3-6 hours, though complex cases may require multiple sessions.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Evaluation Day: What Happens During Testing
            </h2>
            <p className="mb-6">
              Your evaluation typically begins with a clinical interview. The neuropsychologist will ask detailed questions about your medical history, current symptoms, medications, education, work history, and daily functioning. This conversation helps contextualize test results and may reveal patterns that inform the assessment approach.
            </p>
            <p className="mb-6">
              Testing itself involves a variety of tasks administered one-on-one with the psychologist or a trained technician. You might be asked to remember word lists, solve puzzles, copy designs, answer questions, or complete timed tasks. Some tests use paper and pencil; others involve physical materials like blocks or cards. Many people find the experience similar to taking academic tests, though the content focuses on cognitive abilities rather than learned knowledge.
            </p>
            
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "The goal isn't to pass or fail—there are no right or wrong performances. Your honest effort on each task provides valuable diagnostic information that guides your care."
              </p>
            </div>

            <p className="mb-6">
              Tasks are designed to challenge different abilities, so it's completely normal to find some sections difficult. The psychologist expects variability and uses it diagnostically. You might excel at verbal tasks but struggle with visual ones, or vice versa. These patterns help identify specific areas of strength and difficulty.
            </p>
            <p className="mb-6">
              Breaks are typically provided throughout the session. Don't hesitate to ask for one if you need to use the restroom, have a snack, or simply rest your mind. Maintaining your best effort is more important than rushing through.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Your Results and Next Steps
            </h2>
            <p className="mb-6">
              After testing, the neuropsychologist analyzes your performance, compares results to normative data matched for age and education, and integrates findings with your history and presenting concerns. This process typically takes 1-2 weeks. You'll receive a comprehensive written report and attend a feedback session where the psychologist explains results in understandable terms.
            </p>
            <p className="mb-6">
              The report includes diagnostic impressions, descriptions of cognitive strengths and weaknesses, and personalized recommendations. These might involve treatment referrals, cognitive rehabilitation strategies, educational accommodations, workplace modifications, or lifestyle changes to support brain health.
            </p>
            <p className="mb-6">
              Results serve multiple purposes beyond diagnosis. They establish a baseline for monitoring changes over time, guide treatment planning, help predict functional abilities, and validate your experiences. Many patients feel relief finally having an explanation for difficulties they've been experiencing.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Common Concerns and Questions
            </h2>
            <p className="mb-6">
              Many people worry about "failing" the evaluation. Remember: neuropsychological testing isn't pass-fail. Honest performance—even on tasks you find challenging—provides the most useful diagnostic information. Trying to hide difficulties or overcompensate can actually obscure important findings and delay appropriate care.
            </p>
            <p className="mb-6">
              Some individuals feel anxious about what results might reveal. While evaluation can identify difficulties, it also illuminates strengths and provides a roadmap for improvement. Early detection of cognitive changes often leads to better outcomes through timely intervention.
            </p>
            <p className="mb-6">
              Test anxiety is normal and expected. The neuropsychologist understands this and creates a supportive environment. If anxiety significantly interferes with your performance on the day of testing, this itself provides important clinical information.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Moving Forward with Confidence
            </h2>
            <p className="mb-6">
              A neuropsychological evaluation is a powerful tool for understanding your cognitive health and planning effective interventions. Whether you're seeking answers about memory concerns, recovering from brain injury, managing a neurological condition, or pursuing accommodations for learning differences, this comprehensive assessment provides clarity and direction.
            </p>
            <p className="mb-6">
              The evaluation process may feel intensive, but it represents an investment in your cognitive health and overall well-being. The insights gained can inform treatment decisions, improve daily functioning, and empower you with self-understanding.
            </p>
            <p className="mb-6">
              If you have questions about whether neuropsychological evaluation is right for you, or if you'd like to schedule an assessment, reaching out to a qualified neuropsychologist is the best next step. Your brain health deserves expert attention and personalized care.
            </p>
          </div>
        </div>
      </article>

      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Mental Health
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Memory Problems: When to Seek Help
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Learn to distinguish normal age-related memory changes from signs of cognitive decline.
              </p>
              <span className="text-[var(--color-accent)] font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up group" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Recovery After Concussion: A Complete Guide
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Essential information about concussion recovery, symptoms, and when to seek neuropsychological evaluation.
              </p>
              <span className="text-[var(--color-accent)] font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>

            <a href="/blog" className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up group" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Learning Differences: Supporting Academic Success
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                How neuropsychological testing identifies learning disabilities and guides effective interventions.
              </p>
              <span className="text-[var(--color-accent)] font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all hover:gap-3 hover:shadow-xl"
          >
            Schedule Your Evaluation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}