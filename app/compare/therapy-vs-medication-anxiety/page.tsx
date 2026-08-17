import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapy vs. Medication for Anxiety: Comparing Treatment Approaches | Dr. Khanali\'s Neuropsychological Services',
  description: 'Compare therapy and medication for anxiety treatment. Learn about effectiveness, side effects, costs, and which approach may be right for you in Arlington, VA.',
}

export default function TherapyVsMedicationAnxietyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all duration-300 cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all duration-300 cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Therapy vs. Medication for Anxiety: Comparing Treatment Approaches
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Understanding your options is the first step toward effective anxiety treatment in Arlington, VA
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Therapy (CBT/Psychotherapy)</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Medication (SSRIs/Benzodiazepines)</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">High long-term effectiveness. Teaches coping skills that persist after treatment ends.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Effective for symptom relief. Benefits typically last while medication is taken.</p>
              </div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Minimal. May experience temporary discomfort when confronting anxious thoughts.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Can include nausea, weight changes, sleep disruption, sexual dysfunction, dependency risk.</p>
              </div>
            </div>

            {/* Time to Results */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time to Results</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">4-8 weeks for noticeable improvement. Full benefits in 12-16 weeks.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">2-4 weeks for SSRIs. Benzodiazepines work within hours.</p>
              </div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">$100-$200 per session. Typically 12-20 sessions. Often covered by insurance.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">$10-$100 monthly depending on medication and insurance. Ongoing cost.</p>
              </div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">50-minute weekly sessions. Homework assignments between sessions.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Daily medication. Periodic psychiatrist visits for monitoring.</p>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Those seeking lasting change, willing to do active work, prefer drug-free treatment.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Severe symptoms needing quick relief, biological anxiety components, combination treatment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  Therapy for Anxiety: A Deeper Look
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                Cognitive Behavioral Therapy (CBT) and other evidence-based psychotherapies address anxiety by helping you understand and change the thought patterns and behaviors that maintain anxious feelings. Research consistently shows that therapy produces lasting changes in brain function and anxiety responses that persist long after treatment ends.
              </p>
              <p>
                In therapy, you'll learn specific techniques like cognitive restructuring (identifying and challenging anxious thoughts), exposure therapy (gradually facing feared situations), and relaxation training. These become lifelong skills you can apply whenever anxiety resurfaces. Studies show that 60-80% of people with anxiety disorders significantly improve with therapy.
              </p>
              <p>
                Therapy is particularly effective for those who prefer an active, skill-building approach to treatment. It works well for people motivated to understand the roots of their anxiety and willing to practice new strategies between sessions. The typical course involves 12-20 weekly sessions, though some people benefit from shorter or longer treatment depending on symptom severity and personal goals.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  Medication for Anxiety: A Deeper Look
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                Anti-anxiety medications work by altering brain chemistry to reduce anxiety symptoms. SSRIs (Selective Serotonin Reuptake Inhibitors) like Zoloft and Lexapro are typically first-line medications, increasing serotonin availability in the brain. Benzodiazepines like Xanax and Ativan work faster but carry dependency risks with long-term use.
              </p>
              <p>
                Medication can be highly effective for providing symptom relief, especially when anxiety is severe enough to interfere with daily functioning or prevent engagement in therapy. About 50-60% of people with anxiety disorders respond well to medication. The effects typically last as long as the medication is taken, and discontinuation often requires gradual tapering under medical supervision to avoid withdrawal symptoms.
              </p>
              <p>
                Medication is often recommended when anxiety has strong biological components (such as panic disorder or generalized anxiety disorder), when symptoms are severe, or when quick relief is needed. Many clinicians recommend combining medication with therapy for optimal outcomes, using medication to reduce symptoms enough to engage meaningfully in therapeutic work. Side effects vary by medication type but can include nausea, fatigue, sleep changes, and sexual side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Approach Is Right for You
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                  Consider Therapy If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want to develop long-term coping skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer a medication-free approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have mild to moderate anxiety symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want to understand the roots of your anxiety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are willing to do homework and practice new skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have specific phobias or situational anxiety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Can commit to weekly sessions for several months</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Consider Medication If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have severe anxiety interfering with daily life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Need quick symptom relief</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have panic attacks or generalized anxiety disorder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Haven't responded well to therapy alone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have co-occurring depression</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Anxiety is too severe to engage in therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer a medical approach to treatment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Consider Both (Combination Treatment):</p>
              <p className="text-[var(--color-ink)]">
                Research shows that combining therapy and medication often produces the best outcomes for moderate to severe anxiety. Medication can reduce symptoms enough to make therapy more effective, while therapy provides lasting skills that help you eventually reduce or discontinue medication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Can I start with therapy and add medication later if needed?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Absolutely. Many people start with therapy and only add medication if therapy alone doesn't provide sufficient relief. This approach allows you to develop coping skills first and use medication as a supplement if needed. Your therapist can help you monitor your progress and make referrals to a psychiatrist if medication becomes appropriate. This stepped approach often works well for mild to moderate anxiety.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-[var(--color-ink)] pr-4">How long will I need to be on anxiety medication?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>The duration varies by individual and medication type. Some people take medication for several months during a particularly stressful period, while others benefit from longer-term treatment. Typical recommendations range from 6 months to several years. If you're also doing therapy, you may be able to taper off medication once you've developed strong coping skills. Always work with your prescriber to determine the right timeline and never stop medication abruptly, as this can cause withdrawal symptoms.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-[var(--color-ink)] pr-4">Will therapy work if I'm already on medication?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes, therapy is highly effective even when you're taking medication. In fact, medication can sometimes make therapy more effective by reducing symptoms enough that you can fully engage in the therapeutic process. Many people find that therapy helps them develop skills that eventually allow them to reduce or discontinue medication. The combination approach is often recommended for moderate to severe anxiety because it addresses both the biological and psychological aspects of anxiety.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-[var(--color-ink)] pr-4">What if I don't want to take medication but my anxiety is severe?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Your treatment preferences are important and should be respected. Even with severe anxiety, intensive therapy approaches can be effective. Options include more frequent sessions (twice weekly), intensive outpatient programs, or evidence-based therapies specifically designed for severe anxiety. However, it's important to have an honest conversation with a mental health professional about your symptoms. In some cases, severe anxiety can make it difficult to engage effectively in therapy, and short-term medication might make treatment more successful. The goal is always your wellbeing and recovery.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-[var(--color-ink)] pr-4">How do I find the right provider to discuss these options in Arlington, VA?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Look for a licensed psychologist or therapist who specializes in anxiety disorders and uses evidence-based treatments like CBT. A comprehensive evaluation should include a discussion of both therapy and medication options, and your provider should respect your treatment preferences. At Dr. Khanali's Neuropsychological Services in Arlington, VA, we provide thorough assessments to help you understand which treatment approach or combination is most likely to help you achieve your goals. We can also coordinate with psychiatrists if medication becomes part of your treatment plan.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white">
            <svg className="w-16 h-16 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <h2 className="font-cormorant text-4xl font-light mb-4">
              Ready to Discuss Your Treatment Options?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation to explore which approach—or combination—is right for your unique situation in Arlington, VA
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Discuss Your Options
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}