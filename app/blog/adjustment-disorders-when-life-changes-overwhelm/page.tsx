import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adjustment Disorders: When Life Changes Overwhelm',
  description: 'Understanding adjustment disorders, their symptoms, and how to cope when life changes become overwhelming. Expert guidance from Dr. Khanali\'s team in Fredericksburg, VA.',
  keywords: 'adjustment disorder, life changes, stress, coping strategies, mental health, Fredericksburg VA, neuropsychological services',
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
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Adjustment Disorders: When Life Changes Overwhelm
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Life rarely unfolds according to plan. A sudden job loss, the end of a relationship, a cross-country move, a medical diagnosis—these experiences can shake our foundation and leave us struggling to find our footing. While it's normal to feel stressed during major transitions, sometimes the emotional impact becomes so overwhelming that it interferes with daily life. This is when an adjustment disorder may develop, a condition that often goes unrecognized and untreated.
            </p>
            <p>
              Understanding adjustment disorders is crucial because they represent a unique intersection between normal stress responses and more serious mental health conditions. They remind us that our reactions to life changes exist on a spectrum, and seeking help isn't a sign of weakness—it's a practical step toward reclaiming balance and well-being.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is an Adjustment Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              An adjustment disorder is a stress-related mental health condition that develops in response to a specific, identifiable life stressor. Unlike generalized anxiety or depression, which may arise without clear external triggers, adjustment disorders are directly tied to a particular event or change—such as divorce, financial hardship, starting a new job, or dealing with a serious illness.
            </p>
            <p className="mb-4">
              The key distinction lies in the timing and severity of symptoms. According to the DSM-5, symptoms typically emerge within three months of the stressor and are more intense than what would be considered a "normal" reaction. These symptoms significantly impair social, occupational, or other important areas of functioning, yet they don't meet the full criteria for conditions like major depression or post-traumatic stress disorder.
            </p>
            <p>
              Adjustment disorders come in several subtypes, including those with depressed mood, anxious mood, mixed anxiety and depression, disturbance of conduct, or mixed disturbance of emotions and conduct. This variety reflects the diverse ways people respond to life's challenges.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Adjustment disorders remind us that struggling with major life changes doesn't mean you're broken—it means you're human."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Adjustment disorders can manifest in both emotional and behavioral ways. The symptoms vary depending on the subtype, but common indicators include:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent sadness, hopelessness, or crying spells</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Excessive worry, nervousness, or feeling on edge</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or making decisions</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Withdrawal from social activities and relationships</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changes in sleep patterns or appetite</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical complaints without clear medical cause (headaches, stomachaches)</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reckless behavior, aggression, or violation of rules (particularly in adolescents)</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty performing at work or school</span>
              </div>
            </div>

            <p className="mt-4">
              The crucial factor is that these symptoms are clearly linked to a specific stressor and represent a change from your baseline functioning. If you find yourself thinking, "I wasn't like this before the divorce" or "I haven't been the same since the move," an adjustment disorder may be at play.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Adjustment disorders can affect anyone, regardless of age, background, or previous mental health history. However, certain factors may increase vulnerability:
            </p>
            <p className="mb-4">
              <strong>Previous trauma or loss:</strong> Individuals who have experienced prior traumatic events may have heightened sensitivity to new stressors, making it more difficult to adapt to changes.
            </p>
            <p className="mb-4">
              <strong>Limited coping skills:</strong> People who haven't developed effective stress management strategies may struggle more when faced with major life transitions.
            </p>
            <p className="mb-4">
              <strong>Lack of social support:</strong> Strong relationships and community connections serve as protective factors. Those without robust support networks are more vulnerable to developing adjustment disorders.
            </p>
            <p className="mb-4">
              <strong>Developmental transitions:</strong> Adolescents and young adults navigating identity formation and life changes are particularly susceptible, as are older adults facing retirement, health changes, or loss of loved ones.
            </p>
            <p>
              It's important to note that adjustment disorders are common—they are frequently seen among people seeking outpatient mental health treatment. In Fredericksburg, VA and surrounding communities, many individuals experience adjustment difficulties related to career transitions, relocations, relationship changes, and family dynamics.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Neuroscience Behind Stress Responses
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Understanding what happens in the brain during adjustment disorders can help normalize the experience and highlight why professional support is valuable. When we encounter a significant stressor, our brain's threat-detection system—centered in the amygdala—activates the stress response. This triggers the release of cortisol and other stress hormones designed to help us cope with immediate challenges.
            </p>
            <p className="mb-4">
              Under normal circumstances, this response is temporary. The prefrontal cortex, responsible for rational thinking and emotional regulation, helps us process the stressor and return to baseline. However, when a stressor is particularly severe or prolonged, or when we lack adequate coping resources, this system can become dysregulated.
            </p>
            <p>
              Chronic stress activation can impair prefrontal cortex function, making it harder to think clearly, regulate emotions, and engage in problem-solving—exactly the symptoms we see in adjustment disorders. Neuropsychological approaches to treatment focus on restoring this balance through cognitive strategies, stress reduction techniques, and sometimes therapeutic interventions that help "retrain" the brain's stress response system.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Effective Coping Strategies and Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              The good news about adjustment disorders is that they typically respond well to treatment, and most people recover completely. Here are evidence-based approaches that can help:
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Professional Treatment</h3>
            <p className="mb-4">
              <strong>Psychotherapy:</strong> Short-term counseling, particularly cognitive-behavioral therapy (CBT), is the first-line treatment for adjustment disorders. Therapy helps you process the stressor, develop coping skills, and challenge unhelpful thought patterns that may be intensifying distress.
            </p>
            <p className="mb-4">
              <strong>Neuropsychological assessment:</strong> For complex cases or when symptoms overlap with other conditions, comprehensive neuropsychological evaluation can clarify diagnosis and guide treatment planning.
            </p>
            <p className="mb-4">
              <strong>Medication:</strong> While not always necessary, short-term use of antidepressants or anti-anxiety medications may be helpful for managing severe symptoms while you develop longer-term coping strategies.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-6 mb-3">Self-Help Strategies</h3>
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain routine:</strong> Structure provides stability during chaotic times. Keep regular sleep, meal, and exercise schedules.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay connected:</strong> Even when you feel like withdrawing, maintain contact with supportive friends and family members.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice stress management:</strong> Incorporate relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit additional stressors:</strong> When possible, postpone major decisions or new commitments until you've adapted to the current change.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Express yourself:</strong> Journaling, art, or talking with trusted individuals can help process difficult emotions.</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Engage in physical activity:</strong> Exercise is a powerful stress-reliever that boosts mood and cognitive function.</span>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              If you're experiencing symptoms that interfere with your ability to function at work, maintain relationships, or care for yourself—or if symptoms persist beyond six months—professional evaluation is important. It's particularly crucial to seek immediate help if you're having thoughts of self-harm or suicide.
            </p>
            <p className="mb-4">
              Many people hesitate to seek help for adjustment disorders because they feel their struggles aren't "serious enough" or that they should be able to handle life changes on their own. This mindset can prolong suffering unnecessarily. Professional support isn't reserved for severe mental illness—it's a practical resource for navigating difficult life transitions more effectively.
            </p>
            <p>
              In Fredericksburg, VA, mental health professionals specializing in adjustment disorders can provide assessment, diagnosis, and evidence-based treatment tailored to your specific situation. Early intervention not only speeds recovery but can also prevent the development of more chronic mental health conditions.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              Adjustment disorders remind us that being human means being vulnerable to life's inevitable changes and challenges. They also remind us that struggling doesn't mean failing—it means you're navigating something difficult, and doing so deserves compassion and support, not judgment.
            </p>
            <p>
              If you're finding it hard to cope with a major life change, know that help is available and recovery is not only possible but likely with appropriate support. Reaching out for professional guidance is a sign of strength and self-awareness, not weakness. Your well-being matters, and you don't have to navigate these challenges alone.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing evidence-based, compassionate care to individuals and families in Fredericksburg, VA and surrounding communities.
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
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Anxiety Disorders
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Explore the different types of anxiety disorders, their symptoms, and effective treatment approaches.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Building Resilience Through Stress
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Learn practical strategies for developing psychological resilience and managing life's challenges.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                The Importance of Self-Care
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Discover why self-care isn't selfish and how to prioritize your mental health in daily life.
              </p>
              <span className="text-[var(--color-accent)] font-medium group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
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
            Our team is here to help you navigate life's challenges with compassion and expertise.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}