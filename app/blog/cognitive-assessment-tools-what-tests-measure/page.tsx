import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cognitive Assessment Tools: What Tests Measure',
  description: 'Learn about cognitive assessment tools used in neuropsychological evaluations, what they measure, and how they help diagnose and treat cognitive challenges in Fredericksburg, VA.',
  keywords: 'cognitive assessment, neuropsychological testing, cognitive tests, memory assessment, attention testing, Fredericksburg VA, Dr. Khanali',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-6">
            Cognitive Assessment Tools: What Tests Measure
          </h1>

          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Team</span>
          </div>

        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you or a loved one is experiencing memory lapses, difficulty concentrating, or changes in problem-solving abilities, cognitive assessment tools offer a window into what's happening in the brain. These specialized tests go far beyond simple memory quizzes—they provide a comprehensive map of cognitive strengths and challenges that can guide diagnosis, treatment, and support strategies.
            </p>
            <p className="mb-6">
              Understanding what these assessments measure and why they matter can demystify the evaluation process and help you feel more prepared and empowered. Whether you're facing concerns about aging, recovering from an injury, or seeking answers for unexplained cognitive changes, knowing what to expect from cognitive testing is an important first step.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Cognitive Assessment Tools?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cognitive assessment tools are standardized tests designed to evaluate specific mental functions. Unlike informal observations, these instruments have been scientifically validated and normed against large populations, allowing clinicians to compare an individual's performance to others of similar age, education, and background.
            </p>
            <p className="mb-6">
              A comprehensive neuropsychological evaluation in Fredericksburg, VA typically includes multiple tests that examine different cognitive domains. Each tool is selected based on the referral question—whether that's assessing dementia risk, evaluating learning disabilities, measuring the impact of a traumatic brain injury, or understanding attention-deficit challenges.
            </p>
            <p className="mb-6">
              These assessments can range from paper-and-pencil tasks to computerized tests, puzzle-like activities to verbal responses. The variety ensures a thorough understanding of how your brain processes information across different contexts and demands.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Core Cognitive Domains Measured
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cognitive assessments evaluate several key domains of brain function, each playing a vital role in daily life:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Memory:</strong> Tests measure immediate recall, short-term memory, long-term retention, and recognition. They assess both verbal memory (stories, word lists) and visual memory (designs, faces, locations).
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Attention and Concentration:</strong> Assessments evaluate sustained attention (staying focused), selective attention (filtering distractions), and divided attention (multitasking).
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Executive Functions:</strong> These higher-order skills include planning, organization, problem-solving, cognitive flexibility, and impulse control—the brain's "management system."
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Language:</strong> Tools assess naming ability, verbal fluency, comprehension, reading, and writing skills.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Visuospatial Skills:</strong> These tests measure the ability to perceive, analyze, and manipulate visual information and spatial relationships.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">Processing Speed:</strong> Assessments evaluate how quickly you can take in, process, and respond to information.
                </div>
              </div>
            </div>
            <p className="mb-6">
              By examining performance across these domains, clinicians can identify specific patterns that point toward particular diagnoses or inform targeted interventions.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Cognitive assessment isn't about passing or failing—it's about understanding your unique cognitive profile so we can build the most effective support plan for your needs."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Assessment Tools and What They Reveal
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Several well-researched instruments form the foundation of most comprehensive evaluations:
            </p>
            <p className="mb-6">
              The <strong>Wechsler Adult Intelligence Scale (WAIS)</strong> measures overall intellectual functioning, including verbal comprehension, perceptual reasoning, working memory, and processing speed. It helps establish a cognitive baseline and identify discrepancies between different abilities.
            </p>
            <p className="mb-6">
              The <strong>California Verbal Learning Test (CVLT)</strong> assesses multiple aspects of verbal memory, including learning strategies, recall patterns, and the nature of memory errors—crucial for distinguishing between different types of memory impairment.
            </p>
            <p className="mb-6">
              The <strong>Trail Making Test</strong> is a simple but powerful tool that measures attention, visual scanning, and cognitive flexibility. Performance differences between its two parts can reveal executive function challenges.
            </p>
            <p className="mb-6">
              The <strong>Stroop Test</strong> evaluates selective attention and inhibitory control—the ability to suppress automatic responses in favor of goal-directed behavior. It's particularly sensitive to frontal lobe dysfunction.
            </p>
            <p className="mb-6">
              The <strong>Wisconsin Card Sorting Test</strong> assesses abstract reasoning, set-shifting, and learning from feedback—key executive functions that impact problem-solving in daily life.
            </p>
            <p className="mb-6">
              These represent just a fraction of available tools. A skilled neuropsychologist selects and combines tests based on individual circumstances, creating a customized assessment battery.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Cognitive Assessment Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Objective cognitive assessment provides clarity when symptoms are vague or overlapping. Many conditions—depression, anxiety, ADHD, early dementia, traumatic brain injury, learning disabilities—can present with similar cognitive complaints. Testing helps differentiate between them.
            </p>
            <p className="mb-6">
              For individuals concerned about memory changes, assessment can distinguish normal age-related changes from mild cognitive impairment or early dementia. Early detection enables earlier intervention, which can significantly impact outcomes and quality of life.
            </p>
            <p className="mb-6">
              For students and professionals struggling with attention or learning challenges, testing identifies specific deficits and strengths, supporting requests for academic accommodations or workplace modifications. It validates experiences and opens doors to appropriate support.
            </p>
            <p className="mb-6">
              After brain injury or neurological illness, serial assessments track recovery, measure treatment effectiveness, and guide rehabilitation efforts. They provide concrete data to inform decisions about returning to work, school, or driving.
            </p>
            <p className="mb-6">
              Perhaps most importantly, comprehensive assessment reduces uncertainty. It replaces worry and guesswork with actionable information, empowering individuals and families to move forward with confidence.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect During Testing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A comprehensive cognitive assessment typically takes 3-6 hours, often completed across multiple sessions to prevent fatigue. You'll work one-on-one with a trained examiner in a quiet, comfortable environment.
            </p>
            <p className="mb-6">
              Tasks vary widely—you might arrange blocks to match patterns, remember word lists, solve puzzles, answer questions, or complete timed activities. Some tasks may feel easy; others may be challenging. This is by design. Tests include items of varying difficulty to capture a full picture of your abilities.
            </p>
            <p className="mb-6">
              The examiner will provide clear instructions for each task but cannot offer hints or feedback during testing. This standardization ensures valid results. After testing, the neuropsychologist will interpret results, integrate information from interviews and questionnaires, and prepare a detailed report with recommendations.
            </p>
            <p className="mb-6">
              A feedback session follows, where you'll review findings, ask questions, and discuss next steps. This collaborative conversation transforms test scores into meaningful insights and actionable strategies.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Preparing for Your Assessment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While you can't study for a cognitive assessment—and shouldn't try, as this would invalidate results—you can take steps to ensure optimal performance:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Get adequate sleep the night before testing. Fatigue can significantly impact cognitive performance.</div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Eat a balanced meal before your appointment to maintain steady blood sugar and energy.</div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Bring necessary glasses, hearing aids, or other assistive devices you use daily.</div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Take medications as prescribed unless instructed otherwise by your doctor.</div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Gather any relevant medical records, previous test results, or school/work evaluations to share with your clinician.</div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>Write down questions or concerns you want to discuss during the initial interview or feedback session.</div>
              </div>
            </div>
            <p className="mb-6">
              Remember that the goal is to understand your typical cognitive functioning. Results are most useful when they reflect your genuine abilities on a typical day.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Cognitive assessment tools provide a vital bridge between subjective concerns and objective understanding. They transform questions into answers, uncertainty into direction, and challenges into opportunities for targeted support. Whether you're seeking clarity about memory changes, learning differences, or the impact of injury or illness, comprehensive evaluation offers the foundation for informed decisions and effective intervention.
            </p>
            <p className="mb-6">
              If you're experiencing cognitive concerns or have questions about whether neuropsychological assessment might be helpful, reaching out to a qualified professional is an important first step. At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, our team specializes in comprehensive cognitive assessment and compassionate, evidence-based care.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner
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
            
            <Link href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Neuropsychological Evaluation
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                A comprehensive guide to what happens during a neuropsychological evaluation and how it can help.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Memory Concerns: When to Seek Help
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn the difference between normal memory changes and signs that warrant professional evaluation.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                ADHD Testing for Adults
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover how comprehensive testing can identify attention challenges and open doors to effective treatment.
              </p>
              <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand your cognitive health and develop a personalized care plan.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}