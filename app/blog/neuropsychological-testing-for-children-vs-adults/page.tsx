import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neuropsychological Testing for Children vs. Adults',
  description: 'Learn the key differences between neuropsychological testing for children and adults, including assessment approaches, interpretation, and what to expect during evaluation in Fredericksburg, VA.',
  keywords: 'neuropsychological testing, child neuropsychology, adult neuropsychology, cognitive assessment, psychological evaluation, Fredericksburg VA',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm mb-8 text-white/80 text-center">
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
            Neuropsychological Testing for Children vs. Adults
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
              <span>Dr. Khanali's Neuropsychological Services Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-12">
            <p className="mb-6">
              When a child struggles in school or an adult experiences memory problems at work, neuropsychological testing can provide crucial answers. Yet the process of evaluating a seven-year-old differs dramatically from assessing a seventy-year-old—not just in the tests administered, but in how results are interpreted, what questions are asked, and what interventions follow. Understanding these differences helps patients and families know what to expect and how to prepare for this comprehensive evaluation process.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Neuropsychological Testing?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Neuropsychological testing is a comprehensive assessment that evaluates how the brain functions across multiple domains: memory, attention, language, problem-solving, visual-spatial skills, processing speed, and executive functions. Unlike standard psychological testing that focuses primarily on emotional well-being, neuropsychological evaluation examines the relationship between brain function and behavior.
            </p>
            <p className="mb-4">
              These assessments help diagnose conditions such as learning disabilities, ADHD, traumatic brain injury, dementia, stroke effects, and various neurological or developmental disorders. The evaluation typically takes several hours and involves standardized tests, questionnaires, interviews, and sometimes computer-based assessments.
            </p>
            <p>
              While the fundamental goal remains the same across age groups—understanding cognitive strengths and weaknesses—the approach, tools, and context differ significantly between pediatric and adult populations.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Testing Children: A Developmental Perspective
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Neuropsychological testing for children is fundamentally developmental. Clinicians must understand not only what a child can do, but what they should be able to do at their age. A five-year-old's inability to sustain attention for 30 minutes is typical; a twelve-year-old's similar difficulty may signal ADHD.
            </p>
            <p className="mb-4">
              Pediatric assessments often focus on identifying learning disabilities, developmental delays, ADHD, autism spectrum disorders, or the effects of early brain injury. The testing environment is designed to be child-friendly, with breaks built in and rapport-building central to obtaining valid results. Many tests use colorful materials, games, and engaging activities that maintain a child's interest while measuring cognitive abilities.
            </p>
            <p className="mb-4">
              Parent and teacher input becomes essential in pediatric evaluations. Children may not accurately report their own difficulties, so collateral information from adults who observe the child across settings provides critical context. School records, developmental history, and behavioral observations all inform the assessment.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The brain of a child is still developing, which means neuropsychological testing must capture not just current function, but developmental trajectory and potential."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Testing Adults: Baseline and Change
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Adult neuropsychological testing often focuses on detecting change from a previous level of functioning. Has memory declined? Are executive functions impaired after a stroke? How has a head injury affected work performance? Unlike children, whose abilities are expected to grow, adults are typically assessed against their own baseline or against age-matched peers.
            </p>
            <p className="mb-4">
              Common reasons for adult evaluations include traumatic brain injury, dementia concerns, stroke recovery, multiple sclerosis, brain tumors, and chronic medical conditions affecting cognition. Adult ADHD diagnoses have also become increasingly common, requiring careful differentiation from anxiety, depression, or other conditions that can mimic attention problems.
            </p>
            <p className="mb-4">
              The testing process for adults tends to be more straightforward logistically—most can sit for longer periods, follow complex instructions, and provide detailed self-report about their symptoms. However, motivation, effort, and emotional factors can significantly influence results, making clinical judgment and validity testing important components of adult assessment.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Differences in Assessment Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Several practical differences distinguish pediatric from adult neuropsychological evaluation:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Normative Comparisons:</strong> Children are compared to same-age peers using narrow age bands (often 3-6 month intervals), while adult norms may span decades.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Test Selection:</strong> Pediatric batteries include school-readiness and academic achievement measures; adult tests often emphasize occupational functioning and independent living skills.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Collateral Information:</strong> Parents and teachers provide essential data for children; spouses, employers, or medical providers may contribute to adult assessments.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Intervention Focus:</strong> Pediatric recommendations typically address school accommodations and developmental support; adult recommendations often involve vocational planning, safety considerations, and compensatory strategies.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Prognostic Implications:</strong> Children's developing brains offer more neuroplasticity and potential for improvement; adult prognoses depend more on the nature and severity of injury or disease.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Interpreting Results: Context Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              A score that falls in the "average" range carries different meanings across the lifespan. For a child performing below grade level despite average intelligence, the gap between potential and achievement may indicate a learning disability requiring intervention. For an adult who previously functioned at a superior level, average performance may represent significant decline warranting concern.
            </p>
            <p className="mb-4">
              Pediatric neuropsychologists consider developmental trajectories—is the child catching up, falling further behind, or maintaining pace with peers? They account for factors like prematurity, early adversity, language exposure, and educational opportunity that shape a child's cognitive profile.
            </p>
            <p className="mb-4">
              Adult assessments must consider education level, occupational history, and premorbid functioning. A retired professor's "low average" memory score carries different implications than the same score in someone with limited formal education. Clinicians estimate pre-injury functioning using factors like vocabulary, educational attainment, and occupational complexity.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect: Preparing for Testing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Regardless of age, neuropsychological testing requires preparation. For children, this means ensuring adequate sleep, bringing snacks, and explaining the process in age-appropriate terms. Many children benefit from knowing they'll play games and solve puzzles with a psychologist, and that there are no "wrong" answers—the doctor simply wants to understand how their brain works.
            </p>
            <p className="mb-4">
              Adults should bring glasses, hearing aids, or other necessary assistive devices. Listing all current medications helps clinicians understand factors that might affect cognitive performance. Being well-rested and bringing relevant medical records or prior test results provides important context.
            </p>
            <p className="mb-4">
              Both children and adults should understand that neuropsychological testing is not about passing or failing. The goal is accurate assessment to guide appropriate interventions, accommodations, or treatment planning.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 bg-[var(--color-cream)] p-8 rounded-lg">
            <p className="mb-4">
              While neuropsychological testing differs significantly between children and adults in methodology and focus, both serve the same essential purpose: understanding how the brain supports thinking, learning, and behavior. Whether identifying a learning disability in childhood or tracking cognitive change in adulthood, these comprehensive assessments provide roadmaps for intervention and support.
            </p>
            <p>
              If you're considering neuropsychological testing for yourself or your child in Fredericksburg, VA, our team can help you understand what to expect and how the evaluation process can provide answers and direction. Reach out today to discuss whether neuropsychological assessment might be beneficial for your situation.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
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
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding ADHD Across the Lifespan
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how ADHD presents differently in children, adolescents, and adults, and why proper diagnosis matters.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Learning Differences</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What Is a Learning Disability?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore the signs, diagnosis process, and effective interventions for learning disabilities in children.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Cognitive Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Memory Concerns: When to Seek Help
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understand normal age-related memory changes versus signs that warrant neuropsychological evaluation.
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}