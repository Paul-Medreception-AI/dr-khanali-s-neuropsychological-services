import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finding Meaning After Loss: The Grief Journey | Dr. Khanali\'s Neuropsychological Services',
  description: 'Explore the grief journey and discover how to find meaning after loss. Evidence-based guidance on processing grief, honoring memories, and moving forward with compassion in Arlington, VA.',
  keywords: 'grief counseling, loss, bereavement, grief therapy, meaning making, grief process, mental health Arlington VA',
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
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Finding Meaning After Loss: The Grief Journey
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
              <span>Dr. Khanali's Services Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Loss is one of life's most profound and universal experiences. Whether you've lost a loved one, a relationship, your health, a career, or a cherished dream, grief follows in its wake. The pain can feel overwhelming, endless, and isolating. Yet within the darkness of grief lies an often-overlooked possibility: the opportunity to find meaning, to honor what was lost, and to eventually move forward while carrying the memory with you.
            </p>
            <p className="mb-6">
              The journey through grief is not linear. It doesn't follow a neat timeline or predictable stages. Instead, it's a deeply personal process that unfolds differently for everyone. Understanding this journey and learning how to navigate it with compassion can transform grief from a force that breaks us into one that ultimately shapes us into more resilient, empathetic human beings.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding the Nature of Grief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Grief is the natural response to loss. It encompasses a wide range of emotions—sadness, anger, guilt, confusion, numbness, and even relief. Contrary to popular belief, grief doesn't only follow death. We grieve the end of relationships, the loss of health or abilities, major life transitions, unfulfilled expectations, and the passage of time itself.
            </p>
            <p className="mb-6">
              Contemporary research has moved beyond the traditional "five stages" model to recognize grief as a more fluid, individualized experience. Dr. William Worden's task-based model suggests that grieving individuals need to accept the reality of loss, process the pain, adjust to life without what was lost, and find ways to maintain connection while moving forward. These tasks don't happen in order—they overlap, circle back, and vary in intensity over time.
            </p>
            <p className="mb-6">
              Grief also has physical manifestations. It can disrupt sleep, appetite, energy levels, and immune function. Many people experiencing grief report feeling foggy, forgetful, or unable to concentrate. These are normal responses to profound emotional stress, not signs of weakness or pathology.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Grief is not a disorder, a disease, or a sign of weakness. It is an emotional, physical, and spiritual necessity, the price you pay for love."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Difference Between Grief and Depression
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While grief and depression share some symptoms—sadness, withdrawal, changes in sleep and appetite—they are distinct experiences. Grief tends to come in waves, triggered by reminders or anniversaries, with periods of relative calm in between. The pain is specific to the loss, and people experiencing uncomplicated grief can often still find moments of joy, connection, or meaning.
            </p>
            <p className="mb-6">
              Depression, by contrast, tends to be more pervasive and constant. It colors everything with a sense of worthlessness, hopelessness, and emotional numbness. When grief becomes complicated or prolonged—lasting intensely for more than a year without signs of gradual adaptation—it may develop into what clinicians call "persistent complex bereavement disorder," which benefits from professional intervention.
            </p>
            <p className="mb-6">
              In Arlington, VA, and throughout the region, mental health professionals increasingly recognize the importance of distinguishing between normal grief reactions and those requiring specialized treatment. If you find yourself unable to function in daily life, experiencing suicidal thoughts, or feeling stuck in intense grief for an extended period, reaching out for support is crucial.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Finding Meaning: The Path Forward
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Viktor Frankl, Holocaust survivor and psychiatrist, wrote that "those who have a 'why' to live can bear with almost any 'how.'" Meaning-making is now recognized as a critical component of grief recovery. It doesn't mean the loss was "meant to be" or that suffering has inherent purpose. Rather, it means discovering ways to integrate loss into your life story, allowing it to shape—but not define—who you become.
            </p>
            <p className="mb-6">
              Research by grief scholar Robert Neimeyer shows that people who actively construct meaning after loss tend to adapt more successfully. This might involve continuing bonds with the deceased through ritual or memory, finding purpose through advocacy or helping others, creating art or writing, or developing a deeper appreciation for life's fragility and preciousness.
            </p>
            <p className="mb-6">
              The search for meaning is deeply personal. For some, it emerges through spiritual or religious practice. For others, it comes from connecting with nature, engaging in creative expression, or channeling grief into social change. The key is allowing yourself the space to explore what feels authentic and healing for you, without rushing or forcing the process.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Navigating Grief
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While there's no roadmap that works for everyone, certain practices have been shown to support healthy grieving:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Allow yourself to feel:</strong> Don't suppress or rush your emotions. Create safe spaces and times to experience your grief fully.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Maintain routines:</strong> Structure provides comfort and stability when everything feels chaotic. Simple daily rituals can anchor you.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Connect with others:</strong> Whether through support groups, trusted friends, family, or a therapist, sharing your experience reduces isolation.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Honor the loss:</strong> Create rituals, memorials, or practices that acknowledge what you've lost and keep meaningful connections alive.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Care for your body:</strong> Grief is exhausting. Prioritize sleep, nutrition, gentle movement, and time in nature when possible.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Be patient with yourself:</strong> Healing isn't linear. You may feel better one day and overwhelmed the next. Both are normal.
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Seek professional help when needed:</strong> Therapy can provide tools, perspective, and support that friends and family cannot.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Grief counseling and therapy offer specialized support that can make a profound difference in your healing journey. A trained mental health professional can help you process complicated emotions, navigate relationship changes, address guilt or regret, and develop healthy coping strategies.
            </p>
            <p className="mb-6">
              Evidence-based approaches like Complicated Grief Treatment (CGT), Meaning Reconstruction Therapy, and EMDR have shown significant effectiveness in helping people move through grief. These therapies don't aim to eliminate pain or make you "get over" your loss. Instead, they help you integrate the loss into your life story, reduce distress, and find ways to move forward while honoring what you've lost.
            </p>
            <p className="mb-6">
              In Arlington, VA, mental health professionals understand that grief is both universal and unique. The right therapist will meet you where you are, respect your individual timeline, and provide culturally sensitive, compassionate care tailored to your specific needs and circumstances.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward With Meaning
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Finding meaning after loss doesn't mean leaving the past behind or forgetting what you've lost. It means learning to carry your loss with you in a way that honors both your grief and your capacity for continued growth and connection.
            </p>
            <p className="mb-6">
              Many people describe a transformation that occurs through the grief process—not because suffering is inherently valuable, but because navigating profound loss often reveals inner strengths, clarifies priorities, and deepens empathy for others who suffer. You may find yourself more present, more appreciative of small moments, more willing to be vulnerable, or more committed to living authentically.
            </p>
            <p className="mb-6">
              The grief journey is not about reaching a destination where the pain disappears. It's about learning to live with loss in a way that allows room for healing, meaning, connection, and even joy. With time, support, and compassion—for yourself and from others—it is possible to rebuild a life that honors both what you've lost and who you're becoming.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If you're struggling with grief, you don't have to navigate this journey alone. Professional support can provide the tools, guidance, and compassionate presence you need to process your loss and find your path forward. Reaching out is a sign of strength, not weakness—and it may be one of the most important steps you take toward healing.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
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
                Board-certified providers specializing in Mental Health, serving the Arlington, VA community with evidence-based, compassionate care.
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
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Anxiety: When Worry Becomes Overwhelming
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn to recognize anxiety disorders and discover evidence-based strategies for managing excessive worry and fear.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building Resilience: Thriving Through Life's Challenges
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Discover the science of resilience and practical strategies to develop emotional strength and adaptability.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Power of Self-Compassion in Mental Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn why treating yourself with kindness is essential for emotional wellbeing and psychological healing.
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
            Our team is here to help you navigate your grief journey with compassion and evidence-based care.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
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