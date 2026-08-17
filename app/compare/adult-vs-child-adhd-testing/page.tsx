import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD Testing for Adults vs. Children: Key Assessment Differences | Dr. Khanali\'s Neuropsychological Services',
  description: 'Compare ADHD testing approaches for adults and children. Understand assessment differences, diagnostic criteria, and which evaluation is right for you in Arlington, VA.',
}

export default function AdultVsChildADHDTestingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            ADHD Testing for Adults vs. Children:<br />Key Assessment Differences
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Understanding the unique approaches to ADHD evaluation across age groups in Arlington, VA
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Assessment Aspect</div>
              <div className="p-6 font-semibold border-l border-white/20">Child ADHD Testing</div>
              <div className="p-6 font-semibold border-l border-white/20">Adult ADHD Testing</div>
            </div>

            {/* Assessment Duration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Assessment Duration</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">4-6 hours (typically split across 2-3 sessions)</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">3-5 hours (often completed in 1-2 sessions)</div>
            </div>

            {/* Primary Informants */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Primary Informants</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Parents, teachers, childcare providers, child observation</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Self-report, spouse/partner, retrospective childhood history</div>
            </div>

            {/* Testing Methods */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Testing Methods</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Play-based observation, computerized attention tests, academic achievement measures, behavior rating scales</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Clinical interview, continuous performance tests, executive function measures, workplace behavior scales</div>
            </div>

            {/* Diagnostic Focus */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Diagnostic Focus</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Developmental history, school performance, behavioral dysregulation, learning disabilities</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Childhood symptom onset, work performance, relationship impacts, comorbid mood/anxiety disorders</div>
            </div>

            {/* Cost Range */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Range</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$1,800-$3,500 (comprehensive evaluation)</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$1,500-$2,800 (focused assessment)</div>
            </div>

            {/* Report Detail */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Report Detail</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">IEP/504 recommendations, school accommodations, family strategies, medication consultation</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Workplace accommodations, treatment planning, lifestyle modifications, medication guidance</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Children ages 6-17 with academic struggles, behavioral concerns, or suspected developmental delays</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Adults 18+ with lifelong attention difficulties, career challenges, or seeking formal diagnosis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Child ADHD Testing */}
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">
                ADHD Testing for Children: A Developmental Approach
              </h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                ADHD assessments for children in Arlington, VA require a comprehensive developmental lens that considers age-appropriate behaviors, academic expectations, and environmental factors. Unlike adult evaluations that rely heavily on self-report, child assessments integrate multiple informant perspectives including parents, teachers, and direct behavioral observation. The evaluation process examines symptom presentation across different settings—home, school, and social environments—to establish diagnostic validity according to DSM-5 criteria.
              </p>

              <p>
                The testing battery for children typically includes cognitive ability measures, academic achievement assessments, attention and executive function tests (such as continuous performance tasks), and comprehensive behavior rating scales. Evaluators observe the child's engagement, frustration tolerance, and task persistence throughout testing sessions. For younger children, play-based assessment techniques help distinguish ADHD symptoms from normal developmental variation, oppositional behavior, or learning disabilities that may present with similar attention difficulties.
              </p>

              <p>
                Results inform educational planning with specific recommendations for IEP or 504 accommodations, classroom interventions, and family behavioral strategies. The comprehensive report addresses comorbid conditions common in childhood ADHD including learning disorders, anxiety, sensory processing differences, and developmental coordination challenges. Parents receive guidance on medication consultation, evidence-based behavioral interventions, and educational advocacy to support their child's academic and social development.
              </p>
            </div>
          </div>

          {/* Adult ADHD Testing */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">
                ADHD Testing for Adults: Retrospective and Functional Assessment
              </h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                Adult ADHD assessments in Arlington, VA focus on establishing childhood symptom onset (before age 12) while evaluating current functional impairments in work, relationships, and daily life management. The diagnostic process involves detailed clinical interviews exploring educational history, career patterns, relationship stability, and self-regulation challenges. Because adults develop compensatory strategies that mask symptoms, evaluators probe for evidence of persistent difficulties despite high intelligence or professional achievement—the "successful adult with untreated ADHD" presentation common in later-diagnosed individuals.
              </p>

              <p>
                Testing protocols emphasize executive function measures including working memory, cognitive flexibility, response inhibition, and sustained attention tasks. Self-report questionnaires are supplemented with collateral information from partners or family members who can corroborate symptom history. Evaluators carefully differentiate ADHD from conditions that mimic attention difficulties including anxiety disorders, depression, sleep disorders, substance use, and adult-onset executive dysfunction from other neurological conditions. Retrospective childhood evidence through report cards, parent interviews, or prior evaluations strengthens diagnostic confidence.
              </p>

              <p>
                The comprehensive report for adults includes workplace accommodation recommendations under ADA guidelines, treatment planning that balances medication and behavioral interventions, and strategies for managing adult responsibilities including financial organization, time management, and relationship communication. Results inform career counseling, identify strengths and compensatory strategies already in place, and provide documentation for professional licensing boards or educational institutions when needed. The evaluation often serves as a turning point in understanding lifelong struggles and accessing effective treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Assessment Your Family Needs
            </h2>

            <div className="space-y-10">
              {/* Child Testing */}
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  Choose Child ADHD Testing if...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your child is between ages 6-17 and struggling academically despite adequate intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Teachers report consistent inattention, impulsivity, or hyperactivity in the classroom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need documentation for school accommodations (IEP or 504 plan)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Behavioral challenges at home include difficulty following multi-step directions, completing homework, or managing emotions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want to rule out learning disabilities or other developmental conditions that may co-occur with ADHD</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Social relationships are impacted by impulsive behavior or difficulty reading social cues</span>
                  </li>
                </ul>
              </div>

              {/* Adult Testing */}
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  Choose Adult ADHD Testing if...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're 18 or older with lifelong patterns of disorganization, procrastination, or difficulty sustaining focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Work performance suffers due to missed deadlines, incomplete projects, or difficulty prioritizing tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You had attention difficulties in childhood but were never formally diagnosed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Relationships are strained by forgetfulness, impulsive decisions, or emotional reactivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need documentation for workplace accommodations or graduate/professional school testing modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You've achieved professional success but feel you're working much harder than peers to maintain performance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <span className="font-semibold text-[var(--color-ink)]">Not sure which assessment is right?</span> Dr. Khanali offers consultation appointments to review your specific concerns, assess symptom history, and recommend the most appropriate evaluation pathway for your family in Arlington, VA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can ADHD symptoms look different in adults than in children?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, ADHD symptoms often present differently across the lifespan. Children commonly display observable hyperactivity—fidgeting, running, difficulty sitting still—while adults typically report internal restlessness, racing thoughts, and difficulty relaxing. Inattention in children manifests as incomplete schoolwork and losing belongings; in adults, it appears as chronic procrastination, missed appointments, and difficulty managing household responsibilities. Adults develop compensatory strategies and environmental structures that mask symptoms, making diagnosis more complex. Adult assessment focuses on functional impairment in work, relationships, and daily life management rather than classroom behavior.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Why is childhood symptom history required for adult ADHD diagnosis?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                ADHD is a neurodevelopmental disorder that must have onset in childhood (before age 12) according to DSM-5 diagnostic criteria. This requirement distinguishes ADHD from acquired attention problems caused by brain injury, depression, anxiety, sleep disorders, or substance use that emerge in adulthood. Adult assessments gather retrospective evidence through childhood report cards, parent interviews, educational records, and detailed developmental history. Many adults with ADHD were undiagnosed as children—particularly girls, gifted individuals, or those with predominantly inattentive presentation—but careful interviewing reveals symptom patterns present since elementary school years.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Do children and adults use the same rating scales and tests for ADHD assessment?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, age-appropriate measures are used for each population. Child assessments employ parent and teacher rating scales like the Conners and BASC, along with age-normed continuous performance tests and cognitive measures. Adult evaluations use self-report instruments like the CAARS and Barkley Adult ADHD Rating Scale, plus executive function tests normed for adult populations. The content differs as well—child scales ask about classroom behavior and following parental instructions, while adult scales inquire about work performance, bill paying, relationship management, and driving safety. Both age groups complete attention and executive function measures, but interpretation considers developmental expectations.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Will insurance cover ADHD testing for my child but not for me as an adult?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage for neuropsychological testing depends on your specific plan benefits, not the patient's age. Most insurance plans cover ADHD assessments for both children and adults when medically necessary and performed by an in-network provider. Educational testing for IEP purposes (assessing academic achievement and learning disabilities) may face different coverage rules than purely diagnostic ADHD evaluation. Dr. Khanali's practice provides detailed cost estimates, verifies benefits before testing, and supplies comprehensive documentation (diagnosis codes, treatment necessity letters) to support insurance claims for both pediatric and adult assessments in Arlington, VA.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can my child's ADHD diagnosis be "re-evaluated" when they become an adult?
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                ADHD is a chronic condition that persists into adulthood in approximately 60-70% of cases. However, a childhood diagnosis alone may not suffice for adult accommodations (workplace, graduate school) because functional impairments change and previous testing becomes outdated. Young adults transitioning from pediatric to adult care often benefit from updated assessment that documents current executive function abilities, establishes continued impairment in adult responsibilities, and provides fresh recommendations for workplace or academic settings. The evaluation confirms diagnostic continuity while addressing age-appropriate challenges like career planning, independent living skills, and relationship management rather than classroom behavior.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
              Discuss Your ADHD Assessment Options
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Khanali to determine the most appropriate evaluation pathway for you or your child in Arlington, VA
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Schedule a Consultation
            </a>
            <p className="mt-6 text-sm opacity-75">
              Serving children, adolescents, and adults throughout Arlington, Virginia
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}