import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brain Injury: Long-Term Cognitive Effects | Dr. Khanali\'s Neuropsychological Services',
  description: 'Understanding the lasting cognitive impacts of brain injury and how neuropsychological assessment can guide recovery and rehabilitation in Arlington, VA.',
  keywords: 'brain injury, cognitive effects, TBI, neuropsychology, memory problems, executive function, Arlington VA',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Brain Injury: Long-Term Cognitive Effects
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Khanali's Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The moment after a brain injury can feel like stepping into an unfamiliar landscape. Whether caused by a fall, car accident, stroke, or sports-related trauma, the immediate aftermath is often frightening and disorienting. But for many survivors, the journey doesn't end when the acute medical crisis resolves. The cognitive effects of brain injury can persist for months, years, or even a lifetime—affecting memory, attention, reasoning, and the very essence of how we think and interact with the world.
            </p>
            <p className="mb-6">
              Understanding these long-term cognitive effects is crucial not only for survivors and their families, but also for healthcare providers, educators, and employers who support individuals navigating life after brain injury. With comprehensive neuropsychological assessment and appropriate interventions, many people can make meaningful progress in their recovery and develop strategies to adapt to lasting changes.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Happens to the Brain After Injury?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Brain injury disrupts the delicate networks of neurons that allow us to think, remember, plan, and regulate emotions. Traumatic brain injury (TBI) occurs when an external force—such as a blow to the head or rapid acceleration-deceleration movement—damages brain tissue. Acquired brain injury (ABI) can result from internal factors like stroke, tumor, infection, or oxygen deprivation.
            </p>
            <p className="mb-6">
              In the immediate aftermath, the brain may experience swelling, bleeding, or metabolic disruption. Over time, secondary effects like inflammation, cell death, and changes in neurotransmitter systems can compound the initial damage. The location and severity of the injury determine which cognitive functions are most affected. Frontal lobe damage often impairs executive functions—planning, judgment, and impulse control—while temporal lobe injuries may affect memory and language processing.
            </p>
            <p className="mb-6">
              What makes brain injury particularly challenging is its invisibility. Unlike a broken bone or visible scar, cognitive impairments are often hidden, leading to misunderstandings and stigma. Survivors may look fine on the outside while struggling internally with profound changes to their thinking and emotional regulation.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Long-Term Cognitive Effects
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The cognitive consequences of brain injury are highly individual, but certain patterns emerge across survivors. These effects can range from subtle difficulties that only become apparent in demanding situations to profound impairments that require substantial support and accommodation.
            </p>
            
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Memory Problems</h3>
            <p className="mb-6">
              Memory impairment is one of the most common and distressing consequences of brain injury. Survivors may struggle to form new memories (anterograde amnesia), recall events from before the injury (retrograde amnesia), or remember to complete intended actions (prospective memory). Short-term or working memory deficits can make it difficult to hold information in mind long enough to use it—such as remembering a phone number long enough to dial it or following multi-step instructions.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Attention and Concentration Difficulties</h3>
            <p className="mb-6">
              Many survivors describe feeling mentally foggy or easily distracted. Sustained attention—the ability to maintain focus over time—may be compromised, making it exhausting to complete tasks that once felt effortless. Divided attention, the capacity to manage multiple streams of information simultaneously, often suffers as well. Environments with competing stimuli like busy offices or crowded stores can become overwhelming.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Executive Function Impairments</h3>
            <p className="mb-6">
              Executive functions are the higher-order cognitive processes that allow us to plan, organize, problem-solve, and regulate behavior. Damage to the frontal lobes can result in difficulty initiating tasks, shifting between activities, thinking flexibly, and exercising good judgment. Survivors may struggle with impulsivity, poor decision-making, or difficulty seeing the consequences of their actions. These impairments can profoundly affect independence, relationships, and employment.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Processing Speed Reductions</h3>
            <p className="mb-6">
              Brain injury often slows the speed at which information is processed. This doesn't reflect reduced intelligence, but rather the time it takes for neural signals to travel and integrate. Survivors may need more time to understand conversations, respond to questions, or complete tasks. This slowed processing can be particularly frustrating in fast-paced environments and may contribute to fatigue.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Language and Communication Challenges</h3>
            <p className="mb-6">
              Depending on the location of injury, survivors may experience aphasia (difficulty producing or understanding language), word-finding difficulties, or problems with the social aspects of communication. Some struggle to follow the flow of conversation, miss social cues, or have difficulty organizing their thoughts into coherent speech.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Recovery from brain injury is not a return to who you were before, but a discovery of who you can become with the right support, strategies, and understanding."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Emotional and Psychological Impact
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cognitive changes don't exist in isolation—they profoundly affect emotional well-being and mental health. Many survivors experience depression, anxiety, irritability, and emotional lability (rapid mood swings). These emotional changes can stem from direct neurological damage, particularly to areas like the frontal lobes and limbic system, as well as from the psychological adjustment to loss and change.
            </p>
            <p className="mb-6">
              Grieving the loss of one's former self is a common and valid response. Survivors may mourn lost abilities, changed relationships, career disruptions, and altered life trajectories. The invisible nature of cognitive impairments can lead to isolation and misunderstanding, as friends, family, and coworkers may not recognize the extent of the challenges faced.
            </p>
            <p className="mb-6">
              Post-traumatic stress can also develop, particularly if the injury occurred in a traumatic context such as an assault or severe accident. The interplay between cognitive impairment, emotional dysregulation, and psychological distress creates a complex clinical picture that requires comprehensive, integrated care.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Neuropsychological Assessment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Comprehensive neuropsychological evaluation is essential for understanding the specific cognitive strengths and weaknesses following brain injury. Unlike neuroimaging (CT scans, MRIs) that show structural brain damage, neuropsychological testing measures actual functional abilities—how the brain performs in real-world cognitive tasks.
            </p>
            <p className="mb-6">
              A thorough assessment typically includes standardized tests of memory, attention, executive functions, language, visuospatial skills, and processing speed, as well as evaluation of mood and emotional functioning. The results provide a detailed cognitive profile that can:
            </p>
            
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clarify the nature and extent of cognitive impairments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Guide treatment planning and rehabilitation strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Establish a baseline for tracking recovery over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Inform decisions about return to work, school, or driving</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Support applications for disability benefits or legal proceedings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identify preserved strengths to build upon in rehabilitation</span>
              </li>
            </ul>

            <p className="mb-6">
              The assessment process also provides validation for survivors and families. Having objective documentation of cognitive difficulties can help others understand that struggles are real and neurologically based, not a matter of laziness or lack of effort.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategies for Managing Cognitive Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While recovery trajectories vary widely, many survivors can improve functioning and quality of life through targeted interventions and compensatory strategies. Cognitive rehabilitation, psychotherapy, medication management, and lifestyle modifications all play important roles.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Practical Cognitive Strategies</h3>
            
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use external memory aids:</strong> calendars, smartphone reminders, notebooks, and organizational apps can compensate for memory difficulties</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Structure your environment:</strong> reduce distractions, create consistent routines, and organize spaces to minimize cognitive demands</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Break tasks into smaller steps:</strong> complex activities become more manageable when divided into sequential, concrete actions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pace yourself:</strong> cognitive fatigue is real—schedule demanding tasks during peak energy times and build in rest periods</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice self-advocacy:</strong> communicate your needs to employers, educators, and healthcare providers; request accommodations when appropriate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize brain health:</strong> adequate sleep, regular physical exercise, good nutrition, and stress management support optimal cognitive functioning</span>
              </li>
            </ul>

            <p className="mb-6">
              Working with an interdisciplinary team—including neuropsychologists, occupational therapists, speech-language pathologists, and mental health counselors—provides the most comprehensive support for cognitive and emotional recovery.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you or a loved one has experienced a brain injury and are noticing persistent cognitive difficulties, a comprehensive neuropsychological evaluation can provide clarity, validation, and a roadmap for moving forward. Even years after an injury, assessment and intervention can lead to meaningful improvements in functioning and quality of life.
            </p>
            <p className="mb-6">
              At Dr. Khanali's Neuropsychological Services in Arlington, VA, we specialize in the assessment and treatment of cognitive changes following brain injury. Our comprehensive evaluations provide detailed insights into cognitive strengths and challenges, and our evidence-based recommendations guide effective rehabilitation and support strategies.
            </p>
            <p className="mb-6">
              You don't have to navigate this journey alone. Whether you're struggling with memory problems, attention difficulties, executive function challenges, or emotional changes following brain injury, professional support can make a significant difference. Recovery is possible, adaptation is achievable, and hope is real.
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
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing compassionate, evidence-based neuropsychological assessment and treatment in Arlington, VA.
              </p>
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
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Memory: When to Seek Evaluation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn about normal memory changes versus concerning symptoms and when neuropsychological assessment can help.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Concussion Recovery: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Essential information about concussion symptoms, recovery timelines, and return to activity guidelines.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Supporting a Loved One After Brain Injury
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical guidance for families and caregivers navigating the challenges of brain injury recovery.
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you understand and address cognitive changes after brain injury.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:gap-3 shadow-lg"
          >
            <span>Schedule a Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  )
}