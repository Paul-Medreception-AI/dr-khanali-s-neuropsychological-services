import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Dysfunction in Daily Life: Practical Strategies | Dr. Khanali\'s Neuropsychological Services',
  description: 'Learn evidence-based strategies to manage executive dysfunction in everyday tasks. Expert guidance from Arlington, VA neuropsychology specialists on improving planning, organization, and time management.',
  keywords: 'executive dysfunction, executive function disorder, ADHD strategies, cognitive strategies, neuropsychology Arlington VA, time management, organization skills, working memory',
  openGraph: {
    title: 'Executive Dysfunction in Daily Life: Practical Strategies',
    description: 'Evidence-based strategies to manage executive dysfunction and improve daily functioning.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Dr. Khanali\'s Neuropsychological Services Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/60">Article</span>
          </nav>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Executive Dysfunction in Daily Life: Practical Strategies
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-6">
              You walk into the kitchen with a clear purpose, then suddenly find yourself staring blankly, wondering what you came for. Your desk is covered with half-finished tasks. You know you have an important appointment tomorrow, but you can't quite remember when. If these scenarios sound familiar, you're not alone—and you're not simply "forgetful" or "lazy." You may be experiencing executive dysfunction, a cognitive challenge that affects millions of people every day.
            </p>
            
            <p className="mb-6">
              Executive dysfunction doesn't discriminate. It affects children struggling with homework, professionals missing deadlines, parents forgetting appointments, and older adults managing daily routines. Understanding what's happening in your brain—and learning practical strategies to work with it rather than against it—can transform daily frustration into manageable challenge.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is Executive Dysfunction?
            </h2>
            
            <p className="mb-6">
              Executive functions are the cognitive processes that help us plan, focus attention, remember instructions, juggle multiple tasks, and control impulses. Think of them as your brain's management system—the CEO coordinating all departments to keep operations running smoothly.
            </p>
            
            <p className="mb-6">
              When this system experiences dysfunction, everyday tasks become unexpectedly difficult. Executive dysfunction isn't a diagnosis itself but rather a symptom pattern that appears across many conditions including ADHD, autism spectrum disorder, traumatic brain injury, depression, anxiety disorders, and various learning disabilities. It can also emerge naturally with aging or during periods of significant stress.
            </p>
            
            <p className="mb-6">
              The hallmarks of executive dysfunction include difficulty with:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Planning and organizing tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Initiating activities or getting started</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Managing time and meeting deadlines</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Holding information in working memory</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Shifting between tasks or adapting to changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Regulating emotions and impulses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Self-monitoring and evaluating performance</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Daily Impact: More Than Just Forgetfulness
            </h2>
            
            <p className="mb-6">
              Executive dysfunction creates a ripple effect throughout daily life. A professional might repeatedly miss deadlines not because they don't care, but because time estimation and task prioritization feel impossibly complex. A parent might struggle to coordinate family schedules, leading to missed appointments and increased stress. A student might understand the material perfectly but cannot organize thoughts coherently enough to complete assignments.
            </p>
            
            <p className="mb-6">
              The emotional toll is significant. Many people internalize these struggles as personal failures, developing anxiety, depression, or diminished self-worth. They hear "just try harder" or "be more organized," not recognizing that their brain's management system requires different strategies, not more willpower.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Executive dysfunction isn't about intelligence or effort—it's about brain-based differences in how we process, plan, and execute tasks. With the right strategies and support, people can develop effective compensatory skills that dramatically improve daily functioning."
              </p>
            </div>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Strategy #1: External Memory Systems
            </h2>
            
            <p className="mb-6">
              Since working memory challenges are central to executive dysfunction, creating external memory systems is crucial. Your brain shouldn't have to hold everything—that's what tools are for.
            </p>
            
            <p className="mb-6">
              <strong>Actionable approaches:</strong>
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Single capture system:</strong> Use one consistent place for all notes—whether that's a smartphone app, notebook, or voice recorder. Multiple systems create confusion.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Visual reminders:</strong> Place objects you need (keys, medication, documents) directly in your path the night before. Physical placement is more reliable than mental notes.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Calendar with alarms:</strong> Enter appointments immediately with multiple alerts—one the day before, one hour before, and 15 minutes before.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Checklists for routines:</strong> Create written checklists for morning routines, bedtime routines, or leaving the house. Check items off physically—the action reinforces completion.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Strategy #2: Task Breakdown and Initiation Support
            </h2>
            
            <p className="mb-6">
              Large tasks feel overwhelming when executive function is impaired. The key is making the first step so small that starting feels effortless.
            </p>
            
            <p className="mb-6">
              <strong>Implementation techniques:</strong>
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>The two-minute rule:</strong> If something takes less than two minutes, do it immediately. This prevents accumulation of small tasks that become mentally overwhelming.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Break projects into micro-tasks:</strong> Instead of "clean kitchen," list: 1) Load five dishes, 2) Wipe one counter, 3) Take out trash. Complete one, then choose another.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Use timers strategically:</strong> Set a timer for 10-15 minutes and commit to working only that long. Often, starting is the hardest part; once engaged, continuing becomes easier.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Body doubling:</strong> Work alongside someone else (in person or virtually). The presence of another person working provides accountability and reduces initiation barriers.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Strategy #3: Environmental Modifications
            </h2>
            
            <p className="mb-6">
              Your environment either supports or undermines executive function. Simple structural changes can reduce cognitive load significantly.
            </p>
            
            <p className="mb-6">
              <strong>Key modifications:</strong>
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Reduce visual clutter:</strong> Clear surfaces and organized spaces reduce distractions and make it easier to identify what needs attention.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Establish landing zones:</strong> Designate specific spots for keys, wallet, phone, and mail. Always placing items in the same location creates automatic habits.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Color coding systems:</strong> Use colored folders, labels, or bins for different categories (bills, medical, school). Visual distinctions reduce mental sorting effort.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Minimize decision fatigue:</strong> Prepare clothes the night before, establish meal routines, automate bill payments—reduce daily decisions wherever possible.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Strategy #4: Time Management Accommodations
            </h2>
            
            <p className="mb-6">
              Time blindness—difficulty accurately perceiving time passage—is a common executive function challenge. These strategies create external time awareness.
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Time buffer rule:</strong> Add 25-50% more time than you think tasks will take. If you estimate 20 minutes, schedule 30.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Visual time tools:</strong> Use visual timers that show time remaining as a shrinking colored disk. This makes abstract time passage concrete.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Backward planning:</strong> Start from the deadline and work backward. If you need to leave at 3pm, set alarms for 2:45pm (prepare to leave), 2:30pm (wrap up tasks), 2:00pm (start transition).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Time blocking:</strong> Schedule specific blocks for task categories (email time, deep work time, errands). Defined boundaries reduce constant decision-making about what to do next.</span>
              </li>
            </ul>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Support
            </h2>
            
            <p className="mb-6">
              While self-management strategies are valuable, executive dysfunction sometimes requires professional intervention. Consider seeking evaluation if:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Executive challenges significantly impact work performance, relationships, or daily functioning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>You experience increasing anxiety, depression, or diminished self-worth related to organizational struggles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Self-help strategies provide minimal improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>You need accommodations at work or school but require documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Executive dysfunction appears suddenly after injury, illness, or significant life change</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Neuropsychological evaluation can identify specific executive function weaknesses, differentiate between various underlying conditions, and inform targeted intervention strategies. Cognitive rehabilitation, occupational therapy, and evidence-based therapies like Cognitive Behavioral Therapy (CBT) can provide structured skill development and compensatory strategy training.
            </p>

            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Moving Forward With Compassion and Strategy
            </h2>
            
            <p className="mb-6">
              Executive dysfunction is not a character flaw—it's a neurological difference in how your brain processes and manages information. The strategies outlined here aren't about trying harder; they're about working smarter with your brain's unique wiring.
            </p>
            
            <p className="mb-6">
              Start with one or two strategies that feel most manageable. Implement them consistently for several weeks before adding more. Progress isn't linear, and some days will be harder than others. Self-compassion is as important as any organizational system.
            </p>
            
            <p className="mb-6">
              If you're in Arlington, VA or the surrounding area and feel that executive dysfunction is affecting your quality of life, professional support can make a meaningful difference. A comprehensive evaluation can clarify what's happening and create a roadmap for effective intervention. You don't have to navigate this alone.
            </p>

          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, neuropsychological assessment, and evidence-based interventions for cognitive and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding ADHD: Beyond Attention Deficits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the full spectrum of ADHD symptoms, including executive function challenges and evidence-based treatment approaches.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Memory and Aging: What's Normal, What's Not
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn to distinguish normal age-related cognitive changes from concerning memory decline and when to seek evaluation.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Stress and Cognitive Performance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how chronic stress impacts executive function and practical techniques to protect cognitive health.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team in Arlington, VA is here to help you understand and manage executive dysfunction.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}