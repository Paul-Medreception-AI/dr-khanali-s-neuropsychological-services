import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bilingual Therapy vs. Using an Interpreter: The Impact on Treatment | Dr. Khanali\'s Neuropsychological Services',
  description: 'Compare bilingual therapy and interpreter-assisted treatment. Understand the clinical differences, effectiveness, and cultural considerations for mental health care in Arlington, VA.',
}

export default function CompareBilingualTherapyVsInterpreter() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Bilingual Therapy vs. Using an Interpreter: The Impact on Treatment
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Understanding how language delivery affects therapeutic outcomes, cultural connection, and treatment success in mental health care
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            Language is far more than a communication tool in therapy—it shapes how we express emotions, process trauma, and connect with our inner experiences. For bilingual and multilingual individuals seeking mental health care in Arlington, VA, the question of whether to work with a bilingual therapist or use an interpreter can significantly impact treatment outcomes.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            At Dr. Khanali's Neuropsychological Services, we understand that this decision involves clinical, cultural, and practical considerations. This comprehensive comparison will help you understand the meaningful differences between these two approaches and guide you toward the option that best supports your healing journey.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] text-center mb-4">
            Side-by-Side Comparison
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 text-lg">
            Key differences in approach, effectiveness, and therapeutic experience
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Consideration</div>
              <div className="p-6 font-semibold text-lg border-l border-white border-opacity-20">Bilingual Therapy</div>
              <div className="p-6 font-semibold text-lg border-l border-white border-opacity-20">Using an Interpreter</div>
            </div>

            {/* Therapeutic Rapport */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Therapeutic Rapport
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Direct, immediate connection; therapist responds to emotional nuance in real-time
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Mediated connection; third-party presence may affect intimacy and trust-building
              </div>
            </div>

            {/* Cultural Understanding */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Cultural Understanding
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Therapist understands cultural idioms, expressions, and context embedded in language
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Dependent on interpreter's cultural competency; may lose cultural nuance in translation
              </div>
            </div>

            {/* Emotional Expression */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Emotional Expression
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Natural expression in preferred language; access to full emotional vocabulary
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                May feel constrained; emotional nuance can be lost in translation process
              </div>
            </div>

            {/* Session Flow */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Session Flow
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Seamless, natural conversation; immediate feedback and clarification
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Start-stop pattern; translation time reduces actual therapeutic dialogue
              </div>
            </div>

            {/* Confidentiality */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Confidentiality
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Private dyad between client and therapist only
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Third party present; additional confidentiality agreements required
              </div>
            </div>

            {/* Cost Considerations */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Cost Considerations
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Standard therapy fee; no additional charges
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                May involve additional interpreter fees; insurance coverage varies
              </div>
            </div>

            {/* Scheduling Flexibility */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Scheduling Flexibility
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Schedule directly with therapist; greater flexibility
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Must coordinate three schedules; more complex logistics
              </div>
            </div>

            {/* Therapeutic Techniques */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Therapeutic Techniques
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Full range of techniques; language-specific interventions possible
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Some techniques may be challenging; wordplay and metaphor can be difficult to translate
              </div>
            </div>

            {/* Trauma Processing */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Trauma Processing
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Direct processing in trauma-encoded language; deeper emotional access
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Translation may create emotional distance; can be helpful or hindering depending on needs
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)] bg-opacity-30">
                Best For
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Those seeking deep emotional work, cultural connection, and seamless therapeutic relationship
              </div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">
                Limited English speakers requiring immediate access; rare language needs; short-term treatment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Bilingual Therapy */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-16">
            <div className="flex items-start mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-4">
                  Bilingual Therapy: Direct Cultural and Linguistic Connection
                </h2>
              </div>
            </div>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Bilingual therapy occurs when the therapist speaks the client's preferred language fluently and understands the associated cultural context. This approach creates a direct therapeutic alliance without intermediaries, allowing for natural expression, immediate emotional attunement, and culturally informed interventions. Research consistently shows that working in one's native or preferred language leads to deeper emotional access, more accurate symptom reporting, and stronger therapeutic outcomes.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              The benefits extend beyond mere translation. A bilingual therapist understands cultural idioms, family structures, immigration experiences, and the specific ways mental health is conceptualized in different cultural contexts. They can recognize when a client switches languages (code-switching) as an emotional defense or deeper expression, and respond therapeutically in real-time. This cultural and linguistic fluency is particularly crucial when processing trauma, as traumatic memories are often encoded in the language spoken during the traumatic event.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              At Dr. Khanali's Neuropsychological Services in Arlington, VA, our bilingual approach integrates language accessibility with evidence-based neuropsychological treatment. We understand that true bilingual competency means more than vocabulary—it requires deep cultural knowledge, awareness of historical context, and sensitivity to the unique experiences of immigrant and multilingual communities. This comprehensive approach results in stronger therapeutic relationships, better treatment adherence, and more meaningful clinical outcomes.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-16">
            <div className="flex items-start mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-4">
                  Interpreter-Assisted Therapy: Access Through Translation
                </h2>
              </div>
            </div>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              Interpreter-assisted therapy involves a three-person therapeutic setting: the client, the therapist, and a professional interpreter who translates between languages. This model emerged as a solution when bilingual therapists are unavailable, particularly for rare languages or in settings with diverse patient populations. While interpreters provide crucial language access, the therapeutic process is fundamentally altered by the presence of a third party and the necessary translation pauses.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
              The quality of interpreter-assisted therapy varies significantly based on the interpreter's training, cultural competency, and understanding of mental health terminology. Medical interpreters receive training in consecutive interpretation, confidentiality, and neutrality, but they may not have specialized mental health training. This can lead to challenges when translating psychological concepts, emotional nuances, or culturally specific expressions of distress. The start-stop nature of translated conversations can also interrupt emotional flow and reduce the time available for actual therapeutic work within a session.
            </p>

            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              That said, interpreter-assisted therapy can be an appropriate solution in specific circumstances: when a bilingual therapist is truly unavailable, for short-term crisis intervention, or when the client specifically requests this approach. Some clients appreciate the emotional buffer created by the translation process, particularly when discussing highly sensitive or traumatic material. The key is ensuring the interpreter has appropriate training, establishing clear protocols for confidentiality and role boundaries, and recognizing that this approach may require extended session times or modified therapeutic techniques.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="text-center mb-12">
              <svg className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-3">
                How to Decide: A Clinical Framework
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                Consider these factors when choosing your therapeutic approach
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Choose Bilingual Therapy If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You're seeking long-term therapy or deeper emotional processing work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You want to work through trauma, complex family dynamics, or identity issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You express emotions more naturally or completely in your native language</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">Cultural context is important to understanding your experiences (immigration, cultural identity, intergenerational conflict)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You value privacy and prefer a two-person therapeutic relationship</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You want natural, flowing conversations without translation pauses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">A qualified bilingual therapist is available in your area or via telehealth</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[var(--color-border)] pt-10">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Consider Interpreter-Assisted Therapy If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">No bilingual therapist is available for your language in Arlington, VA or via telehealth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You need short-term, focused treatment or crisis intervention</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You prefer the emotional buffer that translation provides when discussing difficult topics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">You're comfortable with a three-person therapeutic setting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">Professional medical interpreters with mental health training are available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)] leading-relaxed">The therapist you want to work with for their specific expertise doesn't speak your language</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important Note:</strong> Language accessibility is a clinical necessity, not a luxury. If you're not fully comfortable communicating in English, working in your preferred language—whether through a bilingual therapist or a qualified interpreter—will lead to better treatment outcomes than struggling in a second language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="flex items-start mb-8">
            <svg className="w-10 h-10 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <div>
              <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-4">
                What Research Tells Us
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                Evidence-based insights on language and therapeutic outcomes
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Language and Emotional Access
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Multiple studies demonstrate that bilingual individuals access different emotional memories and express varying emotional intensity depending on which language they use. Native language use is associated with stronger emotional resonance, more detailed autobiographical memories, and greater physiological arousal when discussing emotional topics—all factors that contribute to deeper therapeutic work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Therapeutic Alliance and Language Match
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Research consistently shows that language concordance (client and therapist speaking the same language) predicts stronger therapeutic alliance, better treatment retention, and improved clinical outcomes. This effect is particularly pronounced for recent immigrants, individuals with limited English proficiency, and those processing trauma that occurred in their native language context.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Interpreter Impact on Treatment Process
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                While interpreter-assisted therapy provides essential language access, studies indicate challenges including reduced session efficiency (translation consumes 30-40% of session time), potential loss of emotional nuance, impacts on rapport development, and clients' reluctance to disclose sensitive information in front of a third party. These factors are mitigated by interpreter training, but remain inherent limitations of the three-person therapeutic structure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Cultural Competency Beyond Translation
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Research emphasizes that effective cross-cultural therapy requires more than accurate translation—it demands cultural knowledge, awareness of immigration experiences, understanding of culture-specific expressions of distress, and recognition of how cultural values shape help-seeking behavior and therapeutic expectations. Bilingual therapists with cultural competency training demonstrate superior outcomes compared to interpreter-assisted therapy in most circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="text-center mb-12">
            <svg className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--color-muted)] text-lg">
              Common questions about bilingual therapy and interpreter services
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-primary)] text-lg flex justify-between items-center hover:bg-[var(--color-light)] transition-all">
                <span>Can I switch between languages during therapy sessions?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p className="mb-4">
                  Absolutely—this is one of the significant advantages of bilingual therapy. Many bilingual individuals naturally code-switch, and this language-switching behavior can be clinically meaningful. You might find certain emotions easier to express in one language, or discover that you access different memories depending on the language you're using.
                </p>
                <p>
                  A skilled bilingual therapist will follow your language choices, recognize patterns in when and why you switch languages, and use this information therapeutically. Code-switching can be a form of emotional regulation, cultural navigation, or accessing different aspects of identity. In interpreter-assisted therapy, frequent language switching becomes logistically challenging and may disrupt the flow of treatment.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-primary)] text-lg flex justify-between items-center hover:bg-[var(--color-light)] transition-all">
                <span>What if I'm bilingual but more comfortable in English—should I still seek bilingual therapy?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p className="mb-4">
                  This depends on your specific situation and goals. If you're fully comfortable expressing complex emotions in English and don't feel limited by language, working with a monolingual English-speaking therapist may be perfectly appropriate—particularly if they have strong cultural competency training.
                </p>
                <p>
                  However, many people discover that certain experiences, family dynamics, or emotional states are more naturally expressed in their native language, even if they're fluent in English. If you're working through immigration experiences, intergenerational family conflicts, or cultural identity issues, a bilingual therapist who shares your cultural background can offer insights that transcend language translation alone. Consider whether cultural understanding—not just language—is important to your treatment goals.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-primary)] text-lg flex justify-between items-center hover:bg-[var(--color-light)] transition-all">
                <span>How do I find a qualified medical interpreter for mental health services?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p className="mb-4">
                  If you need interpreter-assisted therapy, look for certified medical interpreters with mental health specialization. Key qualifications include certification from organizations like the National Board of Certification for Medical Interpreters (NBCMI) or Certification Commission for Healthcare Interpreters (CCHI), training in mental health terminology and confidentiality, and experience with therapeutic settings.
                </p>
                <p>
                  Many hospitals, community mental health centers, and healthcare systems in Arlington, VA have relationships with interpreter services. Your therapist's office may also coordinate with professional interpretation services. Avoid using family members or untrained individuals as interpreters—this compromises confidentiality, accuracy, and therapeutic boundaries. Professional interpreters are trained to maintain neutrality, preserve confidentiality, and interpret meaning rather than just words.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-primary)] text-lg flex justify-between items-center hover:bg-[var(--color-light)] transition-all">
                <span>Does insurance cover interpreter services for mental health treatment?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p className="mb-4">
                  Coverage varies significantly by insurance plan and state. Under the Affordable Care Act and Section 1557 of the ACA, healthcare providers receiving federal funding are required to provide language assistance services at no cost to patients with limited English proficiency. This includes mental health services. Many major insurance plans cover professional interpretation services as part of language access requirements.
                </p>
                <p>
                  However, implementation varies. Some insurance plans directly contract with interpreter services, while others may require prior authorization or documentation of medical necessity. Contact your insurance provider to understand your specific benefits, or speak with our administrative team at Dr. Khanali's Neuropsychological Services—we can help verify your coverage and explain your options for language-accessible care in Arlington, VA.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-primary)] text-lg flex justify-between items-center hover:bg-[var(--color-light)] transition-all">
                <span>What if my language is rare or hard to find mental health services for?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p className="mb-4">
                  For less common languages, interpreter-assisted therapy may be your most viable option. Telehealth has significantly expanded access—you may be able to work with a bilingual therapist via video sessions who practices in another state or country. Several organizations maintain directories of bilingual mental health professionals organized by language.
                </p>
                <p className="mb-4">
                  For interpreter services in rare languages, remote interpretation via phone or video has become increasingly sophisticated and accessible. While not ideal for deep therapeutic work, this approach provides essential language access for assessment, crisis intervention, and medication management.
                </p>
                <p>
                  Additionally, consider whether working in a second language might be workable for your specific needs. If your English proficiency is functional (even if not perfect), and the therapist has strong cultural competency, you might find this arrangement sufficient, particularly for structured treatments like cognitive-behavioral therapy. The key is honest assessment: can you express your emotions, understand complex psychological concepts, and build trust in English?
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <svg className="w-16 h-16 mx-auto mb-6 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Discuss Your Language and Cultural Needs
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-95 max-w-2xl mx-auto">
            At Dr. Khanali's Neuropsychological Services in Arlington, VA, we understand that language accessibility is fundamental to effective mental health care. Let's discuss which approach will best support your healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/services" 
              className="inline-block bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
            >
              Explore Our Services
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Serving Arlington, VA and surrounding communities with culturally responsive, evidence-based mental health care
          </p>
        </div>
      </section>
    </main>
  )
}