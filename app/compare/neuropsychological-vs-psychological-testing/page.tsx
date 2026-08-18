import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neuropsychological Evaluation vs. Standard Psychological Testing',
  description: 'Understanding the key differences between neuropsychological evaluation and standard psychological testing in Fredericksburg, VA. Learn which assessment is right for your needs.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Resources</Link>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Neuropsychological Evaluation vs. Standard Psychological Testing: What's the Difference?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive guide to help you understand which assessment is right for your needs in Fredericksburg, VA
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Criteria</div>
              <div className="p-6 font-semibold border-l border-white/20">Neuropsychological Evaluation</div>
              <div className="p-6 font-semibold border-l border-white/20">Standard Psychological Testing</div>
            </div>

            {/* Focus Area */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Focus Area</div>
              <div className="p-6 border-l border-[var(--color-border)]">Brain-behavior relationships, cognitive functioning, memory, attention, executive functions</div>
              <div className="p-6 border-l border-[var(--color-border)]">Emotional functioning, personality traits, mental health symptoms, behavioral patterns</div>
            </div>

            {/* Assessment Duration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Assessment Duration</div>
              <div className="p-6 border-l border-[var(--color-border)]">4-8 hours, often across multiple sessions</div>
              <div className="p-6 border-l border-[var(--color-border)]">1-3 hours, typically single session</div>
            </div>

            {/* Test Types */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Test Types</div>
              <div className="p-6 border-l border-[var(--color-border)]">Performance-based cognitive tests, neuropsychological batteries, behavioral observations</div>
              <div className="p-6 border-l border-[var(--color-border)]">Self-report questionnaires, clinical interviews, symptom inventories</div>
            </div>

            {/* Who Administers */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Who Administers</div>
              <div className="p-6 border-l border-[var(--color-border)]">Licensed neuropsychologist with specialized training</div>
              <div className="p-6 border-l border-[var(--color-border)]">Licensed psychologist or trained clinician</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Brain injuries, neurological conditions, learning disabilities, ADHD, dementia, cognitive decline</div>
              <div className="p-6 border-l border-[var(--color-border)]">Depression, anxiety, PTSD, personality disorders, general mental health concerns</div>
            </div>

            {/* Cost Range */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Range</div>
              <div className="p-6 border-l border-[var(--color-border)]">$2,000-$5,000+ depending on complexity</div>
              <div className="p-6 border-l border-[var(--color-border)]">$500-$1,500 depending on tests used</div>
            </div>

            {/* Report Detail */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Report Detail</div>
              <div className="p-6 border-l border-[var(--color-border)]">Comprehensive 15-30+ page report with detailed cognitive profile and recommendations</div>
              <div className="p-6 border-l border-[var(--color-border)]">5-10 page report focusing on diagnosis and treatment recommendations</div>
            </div>

            {/* Insurance Coverage */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Insurance Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)]">Often covered with medical necessity, may require pre-authorization</div>
              <div className="p-6 border-l border-[var(--color-border)]">Typically covered under mental health benefits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Neuropsychological Evaluation */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 animate-fade-up">
            Understanding Neuropsychological Evaluation
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Neuropsychological evaluation is a comprehensive assessment that examines the relationship between brain function and behavior. This specialized testing measures cognitive abilities across multiple domains including attention, memory, language, visuospatial skills, executive functions, and processing speed. Unlike standard psychological testing, neuropsychological evaluation focuses on how the brain processes information and controls behavior.
            </p>
            
            <p>
              The evaluation process typically involves 4-8 hours of structured testing administered by a licensed neuropsychologist. Tests are standardized and performance-based, meaning you actively complete tasks rather than simply answering questions about your symptoms. The neuropsychologist observes not just what you can do, but how you approach problems, which strategies you use, and where breakdowns occur in your cognitive processing.
            </p>
            
            <p>
              Neuropsychological evaluations are particularly valuable when there's a known or suspected neurological condition, brain injury, learning disability, or cognitive decline. They provide objective data about cognitive strengths and weaknesses, help differentiate between neurological and psychological causes of symptoms, and guide treatment planning, educational accommodations, and rehabilitation strategies. The comprehensive report includes detailed test scores, interpretations, diagnosis, and specific recommendations tailored to your cognitive profile.
            </p>

            <div className="bg-[var(--color-light)] rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-4">Who Benefits Most</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individuals with traumatic brain injury, stroke, or other neurological conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Students struggling academically despite effort, suspected learning disabilities or ADHD</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Adults experiencing memory problems, confusion, or concerns about dementia</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Anyone needing objective documentation of cognitive functioning for legal, educational, or disability purposes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Standard Psychological Testing */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 animate-fade-up">
            Understanding Standard Psychological Testing
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Standard psychological testing focuses on emotional, behavioral, and personality functioning rather than cognitive abilities. These assessments typically use self-report questionnaires, clinical interviews, and symptom inventories to evaluate mental health conditions such as depression, anxiety, PTSD, bipolar disorder, and personality disorders. The goal is to clarify diagnosis, understand symptom severity, and guide treatment planning.
            </p>
            
            <p>
              The testing process is generally shorter than neuropsychological evaluation, typically lasting 1-3 hours in a single session. You'll answer questions about your thoughts, feelings, behaviors, and experiences. Common instruments include the MMPI (Minnesota Multiphasic Personality Inventory), Beck Depression Inventory, various anxiety scales, and structured clinical interviews. Results help your clinician understand your emotional patterns, identify specific disorders, and recommend appropriate therapy or medication.
            </p>
            
            <p>
              Standard psychological testing is most appropriate when the primary concerns are emotional or behavioral rather than cognitive. It's valuable for confirming diagnostic impressions, measuring treatment progress, evaluating medication effectiveness, or assessing risk factors. The assessment provides important information about your mental health status but doesn't directly measure brain function or cognitive abilities like memory, attention, or processing speed.
            </p>

            <div className="bg-white rounded-xl p-8 my-8">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-4">Who Benefits Most</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individuals experiencing depression, anxiety, mood swings, or emotional distress</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Those needing diagnostic clarification to guide therapy or medication decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>People struggling with relationships, personality patterns, or behavioral concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Anyone seeking to understand their emotional functioning and mental health diagnosis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-12">
              How to Decide Which Assessment You Need
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Neuropsychological Evaluation if:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You have a known neurological condition (brain injury, stroke, seizure disorder, MS, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You're experiencing memory problems, confusion, or difficulty concentrating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You suspect a learning disability, ADHD, or other cognitive disorder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You need documentation for educational accommodations or disability benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Your concerns are primarily about thinking skills rather than emotional symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You want a comprehensive cognitive baseline for future comparison</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Standard Psychological Testing if:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Your primary concerns are depression, anxiety, or other emotional symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You need diagnostic clarification for mental health treatment planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You're evaluating medication effectiveness or treatment progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You struggle with relationships or personality patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You have no known neurological condition or cognitive complaints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You need a quicker, more focused assessment for emotional concerns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Still unsure?</strong> Many individuals benefit from both types of assessment, either simultaneously or sequentially. A consultation with a neuropsychologist can help clarify which evaluation best suits your specific situation and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-primary)] cursor-pointer list-none flex items-center justify-between">
                Can I get both types of testing done at the same time?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Yes, it's common for neuropsychological evaluations to include psychological testing components. Many comprehensive evaluations assess both cognitive functioning and emotional status to provide a complete picture. Your neuropsychologist will determine what combination of tests best addresses your concerns.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-primary)] cursor-pointer list-none flex items-center justify-between">
                Will my insurance cover neuropsychological evaluation?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Many insurance plans cover neuropsychological evaluation when medically necessary, though pre-authorization is often required. Coverage depends on your specific plan, diagnosis, and the reason for testing. Standard psychological testing is typically covered under mental health benefits. We recommend contacting your insurance provider to verify benefits before scheduling.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-primary)] cursor-pointer list-none flex items-center justify-between">
                How long does it take to get results?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                For neuropsychological evaluations, results and a comprehensive written report are typically available within 2-3 weeks after testing completion. Standard psychological testing results may be available sooner, often within 1-2 weeks. You'll schedule a feedback session to review results, discuss findings, and go over recommendations in detail.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-primary)] cursor-pointer list-none flex items-center justify-between">
                Do I need a referral from my doctor?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                While not always required, a referral from your physician, psychiatrist, or therapist can be helpful, especially if there are specific medical or diagnostic questions to address. Some insurance plans require a referral for coverage. However, you can also self-refer if you have concerns about your cognitive or emotional functioning. Contact our office to discuss your specific situation.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-primary)] cursor-pointer list-none flex items-center justify-between">
                What should I bring to my evaluation appointment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Bring any relevant medical records, previous evaluation reports, list of current medications, your glasses or hearing aids if you use them, and any specific questions or concerns you want addressed. For neuropsychological evaluation, plan to be well-rested and have eaten before your appointment, as testing requires sustained mental effort. Avoid scheduling evaluations when you're ill or unusually stressed.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to determine which assessment is right for you in Fredericksburg, VA
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
          <p className="mt-6 text-sm opacity-75">
            Serving Fredericksburg, VA and surrounding communities
          </p>
        </div>
      </section>
    </main>
  )
}