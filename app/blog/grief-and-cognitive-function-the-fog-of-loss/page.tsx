import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grief and Cognitive Function: The Fog of Loss | Dr. Khanali\'s Neuropsychological Services',
  description: 'Understanding how grief affects memory, concentration, and cognitive function. Learn about the neuropsychological impact of loss and strategies for healing in Arlington, VA.',
  keywords: 'grief cognitive function, memory loss grief, grief brain fog, bereavement cognitive impairment, grief and concentration, neuropsychology of grief, Arlington VA grief counseling',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Grief and Cognitive Function: The Fog of Loss
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You walk into a room and forget why you're there. You read the same paragraph three times without absorbing a single word. Someone asks you a question, and you struggle to find words that usually come effortlessly. If you're grieving, these experiences aren't signs of cognitive decline—they're normal neurological responses to profound loss. Yet for many people navigating bereavement, this mental fog becomes an additional source of worry and isolation.
            </p>
            <p className="mb-6">
              Grief doesn't just hurt emotionally; it fundamentally alters how our brains function. Understanding the neuropsychological impact of loss can help normalize these unsettling experiences and provide a roadmap for healing. At <span className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">Dr. Khanali's Neuropsychological Services</span> in Arlington, VA, we help individuals understand and navigate the cognitive changes that accompany grief.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is "Grief Brain"?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              "Grief brain" is the colloquial term for the constellation of cognitive symptoms that commonly accompany bereavement. These symptoms include memory difficulties, impaired concentration, reduced processing speed, difficulty with decision-making, and disorganization. While not a formal clinical diagnosis, grief brain reflects real neurobiological changes occurring in response to loss.
            </p>
            <p className="mb-6">
              Research using functional MRI has shown that grief activates multiple brain regions simultaneously, including areas associated with emotional regulation, memory processing, and reward systems. When someone we love dies, our brain must reconcile the conflict between deeply ingrained patterns—expecting that person to be present—and the devastating reality of their absence. This neurological conflict consumes significant cognitive resources, leaving less capacity for everyday mental tasks.
            </p>
            <p className="mb-6">
              Additionally, the stress hormones released during grief, particularly cortisol, can temporarily impair hippocampal function—the brain region central to memory formation and retrieval. This biological response helps explain why bereaved individuals often struggle to remember recent conversations, appointments, or daily tasks, even while long-term memories remain intact.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Cognitive Symptoms of Grief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The cognitive manifestations of grief vary among individuals but typically include several common patterns:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Memory impairment:</strong> Difficulty forming new memories, forgetting conversations or commitments, and struggling to recall details from recent events</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Concentration difficulties:</strong> Inability to focus on tasks, frequent mental wandering, and difficulty following conversations or reading comprehension</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Slowed processing:</strong> Taking longer to understand information, delayed responses in conversations, and difficulty keeping up with normal routines</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Executive dysfunction:</strong> Challenges with planning, organizing, and executing multi-step tasks that were previously manageable</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Language difficulties:</strong> Word-finding problems, trouble articulating thoughts, and feeling mentally "foggy" during communication</p>
              </div>
            </div>
            <p className="mb-6">
              These symptoms typically emerge soon after loss and may persist for months or even years, though they generally improve gradually over time. The intensity and duration vary based on factors including the nature of the relationship, circumstances of the death, individual coping resources, and the presence of social support.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Grief is not just an emotional experience—it's a whole-brain event that temporarily reshapes how we think, remember, and interact with the world."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Neuroscience Behind Grief's Cognitive Impact
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding why grief affects cognition requires looking at several interconnected neurological processes. First, the stress response activated by bereavement floods the body with cortisol and other stress hormones. While helpful in acute situations, prolonged elevation of these hormones can impair hippocampal function, disrupting memory consolidation and retrieval.
            </p>
            <p className="mb-6">
              Second, grief activates the brain's attachment systems, which were evolutionarily designed to maintain proximity to loved ones. When that person is permanently gone, these systems continue searching and yearning, consuming cognitive resources that would otherwise be available for attention, working memory, and executive function.
            </p>
            <p className="mb-6">
              Third, grief commonly disrupts sleep—both in terms of quantity and quality. Sleep deprivation is one of the most powerful disruptors of cognitive function, affecting nearly every aspect of mental performance. When grief prevents restorative sleep over extended periods, cognitive impairment becomes more pronounced.
            </p>
            <p className="mb-6">
              Finally, complicated grief—a condition affecting about 10-20% of bereaved individuals—involves persistent, intense yearning and preoccupation that doesn't diminish over time. Neuroimaging studies show that complicated grief is associated with activation patterns similar to addiction, suggesting the brain's reward system becomes dysregulated in ways that further compromise cognitive function.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Distinguishing Grief Brain from Dementia
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most frightening aspects of grief-related cognitive changes is the fear that they represent permanent decline or early dementia. This concern is particularly acute for older adults experiencing bereavement. However, several key differences distinguish grief brain from neurodegenerative conditions:
            </p>
            <p className="mb-6">
              Grief brain typically has a clear temporal relationship to loss—symptoms emerge after bereavement and gradually improve over time. Dementia, in contrast, has an insidious onset and progressive course unrelated to specific life events. Additionally, while grief affects attention and concentration (making it difficult to encode new memories), dementia primarily impairs memory storage itself. People with grief brain often say "I'm so distracted I can't remember," while those with dementia may not realize they've forgotten.
            </p>
            <p className="mb-6">
              Grief-related cognitive symptoms also tend to fluctuate—bereaved individuals have good days and difficult days. Dementia follows a more consistently progressive pattern. Most importantly, grief brain is reversible. As the acute phase of grief resolves, cognitive function typically returns to baseline, though this timeline varies considerably.
            </p>
            <p className="mb-6">
              That said, if cognitive symptoms persist beyond two years, worsen over time, or include significant impairment in recognizing familiar people or places, neuropsychological evaluation is warranted to rule out other conditions.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategies for Managing Cognitive Symptoms During Grief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While grief brain is a normal response to loss, several evidence-based strategies can help manage cognitive symptoms and support healing:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Use external memory aids:</strong> Write everything down, use smartphone reminders, keep a detailed calendar, and create checklists for routine tasks</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Simplify decision-making:</strong> Reduce unnecessary choices, postpone major decisions when possible, and ask trusted others for input on important matters</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Prioritize sleep hygiene:</strong> Maintain consistent sleep schedules, create a calming bedtime routine, and consider professional help if insomnia persists</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Practice self-compassion:</strong> Acknowledge that cognitive difficulties are a normal part of grief, not personal failure or weakness</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Engage in gentle physical activity:</strong> Exercise reduces stress hormones, improves sleep, and supports neuroplasticity—even brief daily walks help</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain social connections:</strong> Isolation worsens cognitive symptoms; gentle social interaction supports both emotional and cognitive health</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Consider structured grief support:</strong> Grief counseling or support groups provide validation, coping strategies, and connection with others who understand</p>
              </div>
            </div>
            <p className="mb-6">
              It's also important to communicate your needs clearly to employers, family members, and others who depend on you. Many people find it helpful to temporarily reduce responsibilities where possible and to ask for patience as they navigate this challenging period.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While grief-related cognitive changes are normal, certain circumstances warrant professional evaluation and support. Consider seeking help from a neuropsychologist or mental health specialist if:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Cognitive symptoms persist beyond 12-18 months without improvement</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Memory or thinking problems worsen over time rather than gradually improving</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>Cognitive difficulties significantly impair your ability to work, care for yourself, or maintain safety</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You experience intense, disabling grief that doesn't diminish with time</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p>You have thoughts of self-harm or feel unable to continue living without the person you lost</p>
              </div>
            </div>
            <p className="mb-6">
              Neuropsychological assessment can help distinguish normal grief-related cognitive changes from other conditions requiring different treatment approaches. This comprehensive evaluation examines memory, attention, processing speed, executive function, and emotional status, providing clarity and directing appropriate interventions.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The cognitive fog of grief can feel frightening and isolating, but understanding its neurological basis can provide reassurance that what you're experiencing is both normal and temporary. Your brain is doing exactly what it's supposed to do—processing profound loss while gradually adapting to a changed world.
            </p>
            <p className="mb-6">
              If you're struggling with grief-related cognitive symptoms in Arlington, VA, or need professional assessment to understand your cognitive changes, <span className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">Dr. Khanali's Neuropsychological Services</span> offers comprehensive evaluation and compassionate support. You don't have to navigate this fog alone.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, offering comprehensive neuropsychological evaluation and therapeutic support in Arlington, VA.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Depression and Memory Problems
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Exploring the connection between depression and cognitive function, and when to seek help.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Stress and the Brain: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How chronic stress affects memory, concentration, and overall brain health.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Self-Care Strategies for Emotional Well-Being
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Evidence-based approaches to support mental health during challenging times.
                </p>
              </div>
            </Link>
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
            Our team is here to help you navigate grief and cognitive concerns with compassion and expertise.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}