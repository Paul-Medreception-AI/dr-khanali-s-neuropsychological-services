import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anxiety Disorders: More Than Just Worry',
  description: 'Learn about anxiety disorders, their symptoms, causes, and treatment options. Discover how professional care can help you manage anxiety and improve quality of life in Fredericksburg, VA.',
  keywords: 'anxiety disorders, anxiety symptoms, anxiety treatment, mental health, neuropsychological services, Fredericksburg VA',
}

export default function AnxietyDisordersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Anxiety Disorders: More Than Just Worry
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
      <article className="bg-white py-20 max-w-3xl mx-auto px-6 animate-fade-up">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Your heart races. Your palms sweat. Your mind spirals through worst-case scenarios even though, logically, you know everything is probably fine. If this sounds familiar, you're not alone. Anxiety is one of the most common mental health experiences. But when does normal worry cross the line into something more serious?
          </p>
          <p className="mb-6">
            Anxiety disorders are more than just occasional nervousness before a big presentation or butterflies before a first date. They represent persistent, excessive worry that interferes with daily life, relationships, and overall well-being. Understanding the difference between everyday anxiety and an anxiety disorder is the first step toward getting the help you need.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          What Are Anxiety Disorders?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Anxiety disorders are a group of mental health conditions characterized by excessive fear, worry, or nervousness that persists over time. Unlike the temporary anxiety we all experience in stressful situations, anxiety disorders involve worry that is disproportionate to the actual threat and significantly impacts daily functioning.
          </p>
          <p className="mb-6">
            The most common types of anxiety disorders include:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Generalized Anxiety Disorder (GAD):</strong> Persistent, excessive worry about various aspects of life, from health and finances to work and relationships.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and being judged or scrutinized by others.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Panic Disorder:</strong> Recurrent, unexpected panic attacks accompanied by intense physical symptoms and fear of future attacks.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Specific Phobias:</strong> Extreme fear of particular objects or situations, such as heights, flying, or animals.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Who Is Affected by Anxiety Disorders?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Anxiety disorders are among the most prevalent mental health conditions in the United States, affecting a large number of adults. They can develop at any age, though many begin in childhood, adolescence, or early adulthood.
          </p>
          <p className="mb-6">
            Women are twice as likely as men to be diagnosed with an anxiety disorder, though this may partly reflect differences in help-seeking behavior and symptom reporting. Anxiety disorders also frequently co-occur with other mental health conditions, including depression, substance use disorders, and other anxiety disorders.
          </p>
          <p className="mb-6">
            Here in Fredericksburg, VA, our diverse community faces unique stressors—from the fast-paced professional environment to the challenges of balancing work and family life. These factors can contribute to or exacerbate anxiety symptoms, making professional support particularly valuable.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          "Anxiety disorders are highly treatable, yet many of those affected never receive treatment. Seeking help is not a sign of weakness—it's a courageous step toward reclaiming your life."
        </blockquote>

        {/* Section 3 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Recognizing the Signs and Symptoms
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Anxiety manifests differently in each person, but common symptoms include:
          </p>
          <div className="mb-6">
            <p className="font-semibold mb-3">Emotional and Cognitive Symptoms:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Excessive, persistent worry that feels difficult to control</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Constant anticipation of disaster or catastrophic thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty concentrating or mind going blank</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Irritability or feeling on edge</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fear of losing control or "going crazy"</span>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold mb-3">Physical Symptoms:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rapid heartbeat or palpitations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Shortness of breath or feeling of choking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sweating, trembling, or shaking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Muscle tension or headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gastrointestinal problems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances or insomnia</span>
              </li>
            </ul>
          </div>
          <p className="mb-6">
            When these symptoms persist for six months or more and interfere with work, relationships, or daily activities, it may indicate an anxiety disorder requiring professional evaluation.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          What Causes Anxiety Disorders?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Anxiety disorders don't have a single cause. Instead, they result from a complex interplay of factors:
          </p>
          <p className="mb-6">
            <strong>Biological factors</strong> include genetics (anxiety disorders often run in families), brain chemistry imbalances involving neurotransmitters like serotonin and dopamine, and differences in brain structure and function. Certain medical conditions, such as thyroid problems or heart arrhythmias, can also produce or worsen anxiety symptoms.
          </p>
          <p className="mb-6">
            <strong>Environmental factors</strong> play a significant role. Traumatic experiences, chronic stress, major life transitions, and even childhood adversity can increase vulnerability to anxiety disorders. Environmental triggers can activate or exacerbate symptoms in those already predisposed.
          </p>
          <p className="mb-6">
            <strong>Psychological factors</strong> include personality traits like perfectionism or a tendency toward negative thinking, learned behaviors from family or social environments, and coping patterns developed early in life.
          </p>
          <p className="mb-6">
            Understanding that anxiety disorders have multiple contributing factors is important—it means there's no shame in having one, and it reinforces that professional treatment addressing these various dimensions is often necessary for recovery.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Evidence-Based Treatment Options
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            The good news is that anxiety disorders are highly treatable. Research consistently shows that with appropriate care, most people experience significant improvement. Treatment approaches include:
          </p>
          <p className="mb-6">
            <strong>Psychotherapy:</strong> Cognitive Behavioral Therapy (CBT) is considered the gold standard for treating anxiety disorders. CBT helps you identify and change negative thought patterns and behaviors that fuel anxiety. Exposure therapy, a component of CBT, gradually helps you face feared situations in a safe, controlled way. Other effective therapies include Acceptance and Commitment Therapy (ACT) and mindfulness-based approaches.
          </p>
          <p className="mb-6">
            <strong>Medication:</strong> When appropriate, medications such as selective serotonin reuptake inhibitors (SSRIs), serotonin-norepinephrine reuptake inhibitors (SNRIs), or benzodiazepines can help manage symptoms. Medication is often most effective when combined with therapy.
          </p>
          <p className="mb-6">
            <strong>Lifestyle modifications:</strong> Regular exercise, adequate sleep, stress management techniques, limiting caffeine and alcohol, and maintaining social connections all support anxiety management.
          </p>
          <p className="mb-6">
            <strong>Neuropsychological assessment:</strong> Comprehensive evaluation can clarify the nature of your symptoms, rule out other conditions, and guide personalized treatment planning.
          </p>
          <p className="mb-6">
            Treatment is not one-size-fits-all. A qualified mental health professional can work with you to develop an individualized plan that addresses your specific needs, preferences, and circumstances.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Taking the First Step
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            If you're struggling with persistent anxiety, reaching out for help is not a sign of weakness—it's an act of strength and self-care. Many people wait years before seeking treatment, suffering unnecessarily when effective help is available.
          </p>
          <p className="mb-6">
            Here are some practical steps you can take today:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Acknowledge your experience—name it, don't shame it</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Talk to someone you trust about what you're experiencing</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Schedule an evaluation with a qualified mental health professional</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Practice self-compassion—recovery is a journey, not a destination</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Remember that effective treatment exists—you don't have to struggle alone</span>
            </li>
          </ul>
          <p className="mb-6">
            At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, we specialize in comprehensive assessment and treatment of anxiety disorders. Our team understands the complex interplay of factors contributing to anxiety and works collaboratively with you to develop effective, evidence-based treatment strategies tailored to your unique needs.
          </p>
          <p className="mb-6">
            You deserve to live a life not dominated by fear and worry. With the right support, that life is within reach.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to providing compassionate, evidence-based care to the Fredericksburg, VA community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16 animate-fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Depression: Signs and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the symptoms of depression and evidence-based approaches to treatment and recovery.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read More →
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Mind-Body Connection in Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how physical health, lifestyle, and mental well-being are interconnected.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read More →
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  When to Seek Professional Mental Health Support
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Recognizing the signs that it's time to reach out for professional help and guidance.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read More →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you navigate anxiety and reclaim your peace of mind.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}