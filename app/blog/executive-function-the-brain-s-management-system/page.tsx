import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Function: The Brain\'s Management System',
  description: 'Learn about executive function, the brain\'s management system that controls planning, organization, and decision-making. Expert insights from Fredericksburg, VA neuropsychology specialists.',
  keywords: 'executive function, cognitive control, planning skills, organization, working memory, Fredericksburg VA, neuropsychology',
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Executive Function: The Brain's Management System
          </h1>

          {/* Meta Information */}
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
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Imagine trying to conduct an orchestra where every musician plays whenever they want, at whatever volume they choose, without following the score. The result would be chaos rather than harmony. This is what happens in the brain when executive function—our neural conductor—isn't working effectively. Executive function is the brain's management system, coordinating our thoughts, actions, and emotions to help us plan, focus, and achieve our goals.
            </p>
            <p>
              Yet despite its critical importance, executive function often goes unrecognized until something goes wrong. When these cognitive control processes are disrupted, the effects ripple through every aspect of life—from academic performance and career success to relationships and daily independence. Understanding how this system works, and what happens when it doesn't, is essential for anyone seeking to optimize their cognitive health or support someone facing executive function challenges.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Executive Function?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Executive function refers to a set of mental skills that help us manage time, pay attention, switch focus, plan and organize, remember details, and control our behavior. These higher-order cognitive processes are primarily regulated by the prefrontal cortex, the brain region located just behind the forehead that continues developing well into our mid-twenties.
            </p>
            <p className="mb-4">
              Think of executive function as your brain's CEO, responsible for strategic planning, decision-making, and coordinating various mental resources. This system encompasses several interconnected abilities:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Working Memory:</strong> Holding and manipulating information in mind while completing a task</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Cognitive Flexibility:</strong> Adapting to changing demands, switching between tasks, and adjusting strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Inhibitory Control:</strong> Resisting impulses, filtering distractions, and controlling attention</span>
              </li>
            </ul>
            <p>
              These three core components work together to enable higher-level skills like planning, organization, time management, emotional regulation, and goal-directed persistence. When executive function is intact, we can navigate complex situations, learn from mistakes, and work toward long-term objectives even when faced with obstacles or temptations.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is Affected by Executive Function Challenges?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Executive function difficulties can affect people across the lifespan and arise from various causes. While these challenges are particularly common in certain conditions, anyone can experience temporary or permanent executive dysfunction depending on circumstances.
            </p>
            <p className="mb-4">
              Children and adolescents naturally have less developed executive function since the prefrontal cortex is still maturing. However, some young people face more significant challenges, particularly those with:
            </p>
            <ul className="space-y-2 my-6 ml-6">
              <li className="text-[var(--color-ink)]">• Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
              <li className="text-[var(--color-ink)]">• Learning disabilities</li>
              <li className="text-[var(--color-ink)]">• Autism spectrum disorder</li>
              <li className="text-[var(--color-ink)]">• Traumatic brain injury</li>
            </ul>
            <p className="mb-4">
              In adults, executive function impairments may result from neurological conditions such as stroke, dementia, Parkinson's disease, or multiple sclerosis. Mental health conditions including depression, anxiety, bipolar disorder, and schizophrenia frequently involve executive dysfunction as a core feature. Substance use disorders also significantly impact executive control, both during active use and in recovery.
            </p>
            <p>
              Even in the absence of a diagnosis, stress, sleep deprivation, chronic pain, and aging can all temporarily or progressively affect executive function. The good news is that understanding these challenges is the first step toward developing effective strategies for management and improvement.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Executive function is not just about being organized or focused—it's the foundation of self-regulation, allowing us to act in our own best interests rather than being driven by impulse or circumstance."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Real-World Impact of Executive Dysfunction
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Executive function challenges don't exist solely in test scores or clinical observations—they profoundly affect daily life in ways that can be frustrating, exhausting, and isolating. Understanding these impacts helps explain why executive dysfunction deserves serious attention and intervention.
            </p>
            <p className="mb-4">
              In academic settings, students with executive function difficulties may struggle to start assignments, organize materials, manage time effectively, or complete multi-step projects. They might understand the material but can't demonstrate their knowledge because they lose track of deadlines or forget to study for exams. Teachers and parents often mistake these behaviors for laziness or lack of motivation, when in reality, the student's brain simply processes planning and organization differently.
            </p>
            <p className="mb-4">
              Professional life presents similar challenges. Adults with executive dysfunction may find it difficult to prioritize tasks, meet deadlines, or manage competing demands. They might be highly skilled and knowledgeable in their field yet struggle with time management, email organization, or following through on commitments. These difficulties can limit career advancement and contribute to workplace stress.
            </p>
            <p className="mb-4">
              Personal relationships also suffer when executive function is impaired. Difficulty regulating emotions can lead to impulsive reactions or inappropriate responses. Problems with working memory might cause someone to forget important conversations or commitments, straining trust with loved ones. The inability to plan ahead or follow through on intentions can make someone seem unreliable, even when they genuinely care.
            </p>
            <p>
              Perhaps most significantly, executive dysfunction impacts self-esteem and mental health. Repeated experiences of failure, criticism, or falling short of expectations create a cycle of negative self-perception. Many people internalize these struggles, believing they're simply not capable or disciplined enough, when the truth is their brain's management system needs support and strategies tailored to how it actually functions.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Executive Control
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Decades of neuroscience research have illuminated the brain networks responsible for executive function. While the prefrontal cortex plays a starring role, executive control actually involves coordinated activity across multiple brain regions, forming what researchers call the "executive network."
            </p>
            <p className="mb-4">
              Neuroimaging studies reveal that during executive function tasks, several areas light up simultaneously: the dorsolateral prefrontal cortex (critical for working memory and planning), the anterior cingulate cortex (important for attention and error detection), and the parietal cortex (involved in spatial working memory and attention shifting). These regions communicate through white matter pathways, forming an integrated system.
            </p>
            <p className="mb-4">
              The neurotransmitters dopamine and norepinephrine play particularly important roles in executive function. Dopamine helps regulate attention, motivation, and cognitive flexibility, while norepinephrine supports sustained attention and response to new information. This is why medications that affect these neurotransmitter systems—such as stimulants for ADHD—can improve executive function in certain individuals.
            </p>
            <p>
              Research also shows that executive function is not a fixed trait. The concept of neuroplasticity—the brain's ability to form new connections and reorganize itself—means that executive skills can improve with targeted intervention, practice, and environmental supports. Studies of cognitive training, mindfulness practices, physical exercise, and strategic scaffolding all demonstrate measurable improvements in executive function across ages and conditions.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Strategies for Supporting Executive Function
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Whether you're supporting a child, managing your own executive challenges, or helping a loved one, numerous evidence-based strategies can strengthen executive function and compensate for areas of difficulty. The key is finding approaches that match individual needs and circumstances.
            </p>
            <p className="mb-4 font-semibold">
              Environmental Modifications:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Reduce distractions in work and study environments by minimizing visual clutter and noise</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Create consistent routines that reduce the need for constant decision-making</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use visual schedules, checklists, and calendars to externalize memory and planning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Designate specific places for important items to reduce the cognitive load of remembering locations</span>
              </li>
            </ul>
            <p className="mb-4 font-semibold mt-8">
              Cognitive Strategies:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Break large tasks into smaller, manageable steps with clear completion criteria</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use timers and time-blocking techniques to manage attention and prevent hyperfocus or time blindness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Practice metacognition—thinking about your thinking—to develop self-awareness of executive challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Implement the "stop and think" pause before acting to strengthen inhibitory control</span>
              </li>
            </ul>
            <p className="mb-4 font-semibold mt-8">
              Lifestyle Factors:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Prioritize sleep, as executive function is particularly vulnerable to sleep deprivation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Regular physical exercise has been shown to enhance executive function across the lifespan</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mindfulness and meditation practices can improve attention control and emotional regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Stress management is crucial, as chronic stress impairs prefrontal cortex function</span>
              </li>
            </ul>
            <p className="mt-6">
              It's important to recognize that what works varies considerably from person to person. Some individuals benefit tremendously from technological aids like apps and reminders, while others find them overwhelming. The process of discovering effective supports often requires professional guidance, patience, and experimentation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              While everyone experiences occasional difficulties with planning, organization, or attention, persistent executive function challenges that interfere with daily life, relationships, work, or school performance warrant professional evaluation. A comprehensive neuropsychological assessment can identify specific areas of strength and weakness within the executive function system, distinguish between different causes of impairment, and guide targeted intervention.
            </p>
            <p className="mb-4">
              Neuropsychologists use standardized tests alongside behavioral observations and detailed history-taking to create a complete picture of executive functioning. This assessment process can clarify diagnoses, identify contributing factors, and provide recommendations for accommodations, therapy, and other supports.
            </p>
            <p className="mb-4">
              Treatment approaches might include cognitive rehabilitation therapy, which teaches compensatory strategies and strengthens executive skills through targeted practice. Executive function coaching helps individuals develop personalized systems for managing tasks and responsibilities. Medication may be appropriate for certain underlying conditions affecting executive function. Psychotherapy can address the emotional impacts of living with executive challenges and develop coping strategies.
            </p>
            <p>
              In Fredericksburg, VA, Dr. Khanali's Neuropsychological Services specializes in comprehensive evaluation and evidence-based treatment for executive function difficulties across the lifespan. Whether you're concerned about yourself or a loved one, professional support can make a meaningful difference in understanding and managing executive challenges.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-4">
              Executive function truly is the brain's management system—coordinating, directing, and controlling our thoughts and actions in service of our goals. When this system works well, we barely notice it. When it struggles, every aspect of life can feel more difficult. But with understanding, appropriate supports, and professional guidance when needed, people with executive function challenges can develop strategies that work with their brain rather than against it.
            </p>
            <p>
              If you or someone you care about is experiencing persistent difficulties with organization, planning, attention, or self-regulation, don't wait to seek help. Early identification and intervention lead to better outcomes and can prevent the secondary impacts on self-esteem and mental health that often accompany unaddressed executive dysfunction.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner, offering comprehensive neuropsychological evaluation and evidence-based treatment in Fredericksburg, VA.
              </p>
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
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding ADHD in Adults
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Explore how attention-deficit/hyperactivity disorder manifests in adulthood and strategies for effective management.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Memory and Aging: What's Normal?
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Learn to distinguish between typical age-related memory changes and signs that warrant professional evaluation.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                The Connection Between Anxiety and Cognition
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Discover how anxiety affects thinking, memory, and attention, and what you can do about it.
              </p>
              <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
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
            Our team is here to help you understand and address executive function challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:gap-3 hover:shadow-xl"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}