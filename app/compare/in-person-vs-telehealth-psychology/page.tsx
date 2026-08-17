import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-Person vs. Telehealth Psychological Services: Which is Right for You? | Dr. Khanali Arlington VA',
  description: 'Compare in-person and telehealth psychological services. Learn about effectiveness, convenience, cost, and which option best fits your mental health needs in Arlington, VA.',
  keywords: 'in-person therapy vs telehealth, online therapy vs in-person, telepsychology effectiveness, virtual therapy Arlington VA, neuropsychological assessment telehealth',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            In-Person vs. Telehealth Psychological Services: Which is Right for You?
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparison to help you make an informed decision about your mental health care in Arlington, VA
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            Choosing between in-person and telehealth psychological services is an important decision that can significantly impact your treatment experience and outcomes. Both modalities offer unique advantages, and understanding these differences can help you select the approach that best aligns with your needs, lifestyle, and therapeutic goals.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            At Dr. Khanali's Neuropsychological Services in Arlington, VA, we offer both in-person and telehealth options to provide flexible, accessible care that meets you where you are.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">In-Person Services</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Telehealth Services</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Highly effective for all conditions. Research shows strong outcomes for complex assessments and therapy.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Equally effective for many conditions. Studies show comparable outcomes for therapy, with some limitations for comprehensive assessments.</p>
              </div>
            </div>

            {/* Convenience */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Convenience</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Requires travel to Arlington, VA office. Dedicated therapeutic environment with no home distractions.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Access from anywhere with internet. Eliminates commute time and travel barriers. Flexible scheduling options.</p>
              </div>
            </div>

            {/* Privacy & Environment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Privacy & Environment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Professional, confidential office setting. Controlled environment optimized for therapeutic work.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Requires private space at home. Comfort of familiar surroundings. Potential for interruptions if not carefully managed.</p>
              </div>
            </div>

            {/* Cost & Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Cost & Time Investment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Session fee plus travel time and transportation costs. May require time off work for appointments.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Session fee only. No travel costs. Easier to fit into busy schedules. Often same insurance coverage as in-person.</p>
              </div>
            </div>

            {/* Technology Requirements */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Technology Requirements</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">None required. All materials and assessments provided in office.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Reliable internet connection, computer or tablet with camera and microphone. Basic tech comfort needed.</p>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-primary)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Comprehensive neuropsychological assessments, severe conditions, those who prefer face-to-face interaction, initial evaluations.</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">
                <p className="text-[var(--color-ink)]">Ongoing therapy, follow-up sessions, those with transportation barriers, busy professionals, anxiety about in-person visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: In-Person Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[var(--color-accent)]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] mb-6">
                  In-Person Psychological Services: The Traditional Approach
                </h2>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                  In-person psychological services represent the traditional gold standard of mental health care. Meeting face-to-face in a professional office setting allows for comprehensive assessment, nuanced observation of nonverbal communication, and the establishment of a therapeutic relationship in a dedicated, distraction-free environment. For many clients, the physical act of traveling to an appointment creates important psychological boundaries between their daily life and their therapeutic work.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                  In-person sessions are particularly valuable for comprehensive neuropsychological assessments, which often require hands-on testing materials, precise observation of test-taking behaviors, and the ability to adapt assessment protocols in real-time based on client responses. The controlled office environment ensures standardized testing conditions, which is critical for accurate interpretation of results. Additionally, some therapeutic interventions—particularly those involving experiential techniques or exposure therapy—may be more effectively delivered in person.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  Research consistently demonstrates the effectiveness of in-person psychological services across a wide range of conditions, from anxiety and depression to complex neuropsychological disorders. The face-to-face format allows clinicians to pick up on subtle cues—changes in posture, facial expressions, tone of voice—that may not be as readily apparent through a screen. For clients who value this traditional approach or who have conditions that benefit from in-person interaction, our Arlington, VA office provides a comfortable, confidential space designed specifically for psychological work.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[var(--color-accent)]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] mb-6">
                  Telehealth Psychological Services: Modern, Accessible Care
                </h2>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                  Telehealth psychological services have evolved dramatically in recent years, supported by a robust body of research demonstrating their effectiveness for many mental health conditions. Video-based therapy sessions eliminate geographic barriers, reduce time commitments, and provide access to specialized care that might otherwise be unavailable. For busy professionals, parents with childcare challenges, or individuals with mobility limitations, telehealth offers a practical solution that maintains therapeutic quality while improving accessibility.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                  Multiple studies have shown that telehealth therapy produces outcomes comparable to in-person treatment for conditions including depression, anxiety disorders, PTSD, and many other mental health concerns. The convenience factor often improves attendance and engagement, as clients can connect from the comfort and privacy of their own homes without the need to commute. Some clients report feeling more relaxed and open when participating from familiar surroundings, which can actually enhance therapeutic rapport and disclosure.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  While telehealth is highly effective for therapy and follow-up sessions, it does have some limitations for comprehensive neuropsychological assessments that require hands-on testing materials or precise observation of fine motor movements. However, for ongoing psychotherapy, diagnostic interviews, treatment planning, and many follow-up evaluations, telehealth provides an excellent option. Our HIPAA-compliant video platform ensures that your sessions remain confidential and secure, meeting the same privacy standards as in-person visits while offering the added convenience of accessing care from anywhere with a reliable internet connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-12">
              How to Decide: A Decision Framework
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose In-Person Services If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You need a comprehensive neuropsychological assessment with hands-on testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You prefer the structure and boundaries of a professional office environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You value face-to-face interaction and find it easier to connect in person</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You don't have a private, quiet space at home for confidential sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">Your treatment plan involves experiential techniques better suited to in-person work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You live or work in the Arlington, VA area and can easily access our office</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">This is your first evaluation and you want the most comprehensive initial assessment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Choose Telehealth Services If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You're seeking ongoing psychotherapy or follow-up sessions after initial evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">Convenience and time savings are important priorities for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You have transportation challenges, mobility limitations, or live outside the Arlington area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You have a busy schedule and need flexibility to fit appointments around work or family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You feel more comfortable opening up in the privacy of your own space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You have reliable internet access and a private space for confidential video sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)] text-lg">You're continuing care with an established treatment plan that doesn't require in-person assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-accent)]">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Good to Know:</strong> Many clients benefit from a hybrid approach—starting with in-person assessment and then transitioning to telehealth for ongoing therapy. We can help you determine the best mix for your specific situation and adjust as your needs change over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            What the Research Says
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Telehealth Effectiveness</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                Multiple meta-analyses and randomized controlled trials have demonstrated that telehealth psychotherapy produces outcomes equivalent to in-person treatment for depression, anxiety disorders, PTSD, and many other conditions.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Studies show satisfaction rates of 80-95% among telehealth clients, with many reporting increased comfort and reduced stigma compared to traditional office visits.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">In-Person Advantages</h3>
              <p className="text-[var(--color-ink)] leading-relaxed mb-4">
                In-person assessment remains the gold standard for comprehensive neuropsychological evaluation, allowing for precise observation, standardized testing conditions, and access to specialized assessment tools.
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Face-to-face interaction provides richer nonverbal communication and may be particularly beneficial for complex cases or clients who struggle with technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-primary)]">Is telehealth therapy as effective as in-person therapy?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Yes, for most types of psychotherapy and many mental health conditions, research shows that telehealth produces outcomes comparable to in-person treatment. Studies examining depression, anxiety, PTSD, and other common conditions have found no significant difference in effectiveness between video-based therapy and traditional face-to-face sessions. However, some situations—particularly comprehensive neuropsychological assessments requiring hands-on testing—may be better suited to in-person evaluation. During your consultation, we can discuss which modality best fits your specific needs.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-primary)]">Will my insurance cover telehealth sessions?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Most insurance plans now cover telehealth psychological services at the same rate as in-person visits, particularly following expanded coverage policies implemented during the COVID-19 pandemic. However, coverage can vary by plan and state. We recommend contacting your insurance provider directly to confirm your telehealth benefits, and our administrative staff can assist you with insurance verification and billing questions. Many clients find that even with potential out-of-pocket costs, telehealth can be more economical when factoring in saved commute time and transportation expenses.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-primary)]">Can I switch between in-person and telehealth appointments?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Absolutely. Many clients benefit from a flexible, hybrid approach—for example, conducting comprehensive initial assessments in person at our Arlington, VA office, then transitioning to telehealth for ongoing therapy sessions. Others prefer to alternate based on their schedule, weather conditions, or personal preference. We're happy to accommodate your needs and can adjust the format of your appointments as circumstances change. This flexibility ensures you receive consistent care regardless of your location or situation.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-primary)]">What technology do I need for telehealth sessions?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  The technology requirements for telehealth are straightforward: you'll need a computer, tablet, or smartphone with a camera and microphone, along with a reliable internet connection. We use a secure, HIPAA-compliant video platform that works through most web browsers—no special software downloads required in most cases. Before your first telehealth session, we'll provide detailed instructions and can schedule a brief technology check to ensure everything works smoothly. You'll also need a private, quiet space where you can speak confidentially without interruptions.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-primary)]">How do you ensure privacy and confidentiality during telehealth sessions?</span>
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[var(--color-ink)] leading-relaxed">
                  We take privacy and confidentiality very seriously for all services, including telehealth. We use encrypted, HIPAA-compliant video platforms designed specifically for healthcare, ensuring that your sessions are as secure as in-person visits. On your end, we recommend finding a private space where you can speak freely without being overheard, using headphones if needed for added privacy. We also advise using a secure internet connection (avoiding public Wi-Fi) and ensuring that your device has updated security software. Before beginning telehealth services, we'll review all privacy considerations and answer any questions you may have about maintaining confidentiality in a virtual setting.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Still Not Sure Which Option is Right for You?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Let's discuss your specific situation and determine the best approach for your care. We're here to help you make an informed decision that supports your mental health goals.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-sm opacity-90">
            Serving Arlington, VA and surrounding areas • In-person and telehealth appointments available
          </p>
        </div>
      </section>
    </main>
  )
}