import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depression vs. Cognitive Decline: Sorting Out the Symptoms | Dr. Khanali\'s Neuropsychological Services',
  description: 'Learn how to distinguish between depression and cognitive decline. Expert insights on overlapping symptoms, diagnostic approaches, and when to seek professional evaluation in Arlington, VA.',
  keywords: 'depression, cognitive decline, memory problems, mental health Arlington VA, neuropsychological assessment, dementia vs depression, pseudodementia',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Mental Health
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Depression vs. Cognitive Decline: Sorting Out the Symptoms
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When a loved one starts forgetting appointments, struggling to find the right words, or seeming confused about recent events, it's natural to worry about dementia or Alzheimer's disease. But memory problems and cognitive difficulties aren't always what they seem. Depression—particularly in older adults—can mimic the symptoms of cognitive decline so closely that clinicians have a term for it: pseudodementia.
            </p>
            <p className="mb-6">
              Understanding the difference between depression and true cognitive decline is critical. Misdiagnosis can lead to inappropriate treatment, unnecessary anxiety, and missed opportunities for effective intervention. The good news? With careful evaluation, these conditions can be distinguished, and both are treatable.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Overlapping Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Depression and cognitive decline share a surprising number of symptoms, which is why distinguishing between them can be so challenging. Both conditions can present with:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Memory difficulties</strong> – trouble recalling recent events, appointments, or conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Concentration problems</strong> – difficulty focusing on tasks or following complex instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Slowed thinking</strong> – taking longer to process information or respond to questions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Social withdrawal</strong> – decreased interest in activities and relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Language difficulties</strong> – word-finding problems or reduced verbal fluency</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Disorientation</strong> – confusion about time, place, or situation</span>
              </li>
            </ul>
            <p className="mb-6">
              This overlap exists because depression affects brain function in tangible ways. Neurotransmitter imbalances, disrupted sleep, poor nutrition, and the mental exhaustion that accompanies depression all impact cognitive performance. The brain simply doesn't work as efficiently when depression is present.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Differences to Look For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the symptoms overlap, there are important distinctions that clinicians use to differentiate between depression and cognitive decline:
            </p>
            
            <h3 className="font-semibold text-lg mb-3 mt-6">Onset and Progression</h3>
            <p className="mb-6">
              Depression-related cognitive symptoms typically have a more sudden onset that patients and families can often pinpoint ("It started around the time Dad retired" or "Things changed after Mom's surgery"). True cognitive decline usually develops gradually over months or years, with a progression so subtle that it's hard to identify exactly when it began.
            </p>

            <h3 className="font-semibold text-lg mb-3 mt-6">Patient Awareness and Concern</h3>
            <p className="mb-6">
              People with depression are often acutely aware of their cognitive difficulties and may complain extensively about memory problems. They might say "I don't know" frequently during testing or express frustration about their performance. In contrast, individuals with dementia often minimize or are unaware of their deficits, and may confabulate or rationalize mistakes rather than acknowledging them.
            </p>

            <h3 className="font-semibold text-lg mb-3 mt-6">Pattern of Deficits</h3>
            <p className="mb-6">
              Depression tends to affect attention, processing speed, and effortful memory retrieval—but recognition memory often remains intact. If given multiple-choice options, depressed individuals can usually recognize the correct answer even if they couldn't recall it spontaneously. Dementia typically impairs both recall and recognition, with information truly lost rather than just difficult to access.
            </p>

            <h3 className="font-semibold text-lg mb-3 mt-6">Variability</h3>
            <p className="mb-6">
              Cognitive performance in depression often fluctuates with mood, showing better function on "good days" and worse performance when depressive symptoms are more severe. Dementia-related deficits are more consistent, though they may gradually worsen over time.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The most important thing to remember is this: cognitive symptoms caused by depression are potentially reversible with appropriate treatment, while dementia is progressive. That's why accurate diagnosis matters so much."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Neuropsychological Assessment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When symptoms are ambiguous, comprehensive neuropsychological testing becomes invaluable. These assessments go far beyond simple screening tools, examining multiple cognitive domains in depth:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="list-disc"><strong>Memory</strong> (immediate, delayed, recognition, working memory)</li>
              <li className="list-disc"><strong>Attention and processing speed</strong></li>
              <li className="list-disc"><strong>Executive functions</strong> (planning, problem-solving, cognitive flexibility)</li>
              <li className="list-disc"><strong>Language abilities</strong></li>
              <li className="list-disc"><strong>Visuospatial skills</strong></li>
              <li className="list-disc"><strong>Emotional and behavioral functioning</strong></li>
            </ul>
            <p className="mb-6">
              A skilled neuropsychologist examines not just what a patient gets wrong, but how they approach problems, their response to cues and structure, and the pattern of strengths and weaknesses across different domains. This qualitative information, combined with quantitative test scores, helps distinguish between depression, dementia, and sometimes the presence of both conditions simultaneously.
            </p>
            <p className="mb-6">
              Testing also establishes a cognitive baseline that can be invaluable for monitoring changes over time. If symptoms are due to depression, cognitive function should improve with successful treatment. If they don't, or if they worsen despite mood improvement, this suggests an underlying neurodegenerative process that requires different intervention.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Older Adults Are Particularly Vulnerable
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Depression in older adults often presents differently than in younger people—a phenomenon sometimes called "masked depression." Rather than expressing sadness, older adults may primarily complain of physical symptoms, fatigue, or cognitive difficulties. This atypical presentation increases the risk of misdiagnosis.
            </p>
            <p className="mb-6">
              Additionally, older adults face numerous risk factors for depression: retirement transitions, loss of loved ones, declining physical health, reduced independence, and social isolation. When cognitive symptoms appear in this context, the natural—but not always correct—assumption is dementia.
            </p>
            <p className="mb-6">
              Compounding the challenge, depression and dementia can coexist. Depression is common in the early stages of Alzheimer's disease and other dementias, sometimes appearing before obvious cognitive symptoms. In these cases, treating the depression won't fully resolve cognitive difficulties, but it can significantly improve quality of life and functional capacity.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment Implications and Hope
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The distinction between depression and dementia has profound treatment implications. Depression-related cognitive impairment typically responds well to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Psychotherapy</strong> – particularly cognitive-behavioral therapy (CBT) and problem-solving therapy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Antidepressant medications</strong> – when appropriately prescribed and monitored</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lifestyle modifications</strong> – exercise, social engagement, sleep hygiene, and nutrition</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Addressing contributing factors</strong> – managing chronic pain, optimizing other medical conditions</span>
              </li>
            </ul>
            <p className="mb-6">
              Many patients experience substantial cognitive improvement once their depression is effectively treated—sometimes to the point where cognitive function returns to normal. Even when some mild deficits persist, the improvement is typically meaningful and appreciated by patients and families.
            </p>
            <p className="mb-6">
              For true cognitive decline, while the conditions aren't currently curable, early and accurate diagnosis allows for:
            </p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="list-disc">Medications that may slow progression in certain types of dementia</li>
              <li className="list-disc">Cognitive rehabilitation strategies to maximize remaining abilities</li>
              <li className="list-disc">Important planning while the person can still participate in decisions</li>
              <li className="list-disc">Family education and support</li>
              <li className="list-disc">Connection to appropriate resources and services</li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Evaluation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you or a loved one is experiencing cognitive difficulties—whether accompanied by mood changes or not—professional evaluation is warranted when:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Memory or thinking problems interfere with daily activities or responsibilities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family members or friends express concern about cognitive changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms persist despite treatment for depression</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>There's uncertainty about whether symptoms reflect depression, cognitive decline, or both</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Baseline cognitive testing would be valuable for future comparison</span>
              </li>
            </ul>
            <p className="mb-6">
              Don't wait for symptoms to become severe. Early evaluation provides the best opportunity for accurate diagnosis and effective intervention—whether that means treating reversible depression or planning appropriately for progressive cognitive decline.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Distinguishing between depression and cognitive decline requires clinical expertise, comprehensive assessment, and often time to observe how symptoms evolve. But the effort is worthwhile. For many patients, what appears to be devastating cognitive loss turns out to be treatable depression—a diagnosis that transforms despair into hope.
            </p>
            <p className="mb-6">
              If you're concerned about cognitive changes in yourself or a loved one in Arlington, VA, comprehensive neuropsychological evaluation can provide the clarity you need. Our team specializes in carefully distinguishing between these complex presentations, ensuring you receive an accurate diagnosis and appropriate treatment recommendations.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
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
            
            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Neuropsychological Assessment
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn what to expect during a comprehensive cognitive evaluation and how it can help clarify diagnostic questions.
              </p>
            </a>

            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Depression in Older Adults: What's Different?
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Explore how depression presents uniquely in later life and why it's often underdiagnosed in this population.
              </p>
            </a>

            <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Cognitive Health: Prevention and Maintenance
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Discover evidence-based strategies for maintaining cognitive function and reducing risk of decline throughout life.
              </p>
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
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}