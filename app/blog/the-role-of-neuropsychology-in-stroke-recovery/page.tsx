import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Neuropsychology in Stroke Recovery',
  description: 'Discover how neuropsychological assessment and rehabilitation support cognitive recovery after stroke. Expert guidance from Dr. Khanali\'s team in Fredericksburg, VA.',
  keywords: 'neuropsychology, stroke recovery, cognitive rehabilitation, brain injury, Fredericksburg VA, Dr. Khanali',
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
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Role of Neuropsychology in Stroke Recovery
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When someone survives a stroke, the visible physical challenges often take center stage—difficulty walking, weakness on one side, or trouble speaking. But beneath these observable symptoms lies a complex landscape of cognitive changes that can be just as challenging, if not more so, for stroke survivors and their families. Memory lapses, difficulty concentrating, problems with planning and organization, or changes in emotional regulation can profoundly impact daily life and independence.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This is where neuropsychology becomes an essential partner in stroke recovery. Neuropsychologists specialize in understanding how brain injuries affect thinking, behavior, and emotions—and more importantly, how to help people regain function and adapt to changes. For stroke survivors in Fredericksburg, VA and beyond, neuropsychological services offer a roadmap for cognitive recovery that goes hand-in-hand with physical rehabilitation.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Stroke and Cognitive Impact
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A stroke occurs when blood flow to part of the brain is interrupted, either by a blockage (ischemic stroke) or bleeding (hemorrhagic stroke). Within minutes, brain cells begin to die from lack of oxygen. The location and extent of brain damage determine which functions are affected.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While physical rehabilitation addresses motor function and mobility, the cognitive consequences of stroke are equally significant. Research indicates that most stroke survivors experience some degree of cognitive impairment. These changes may include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Memory difficulties:</strong> Trouble forming new memories or recalling information</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Attention deficits:</strong> Reduced ability to focus or concentrate for extended periods</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Executive function impairment:</strong> Challenges with planning, problem-solving, and multitasking</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Language problems:</strong> Aphasia, or difficulty understanding or expressing language</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Spatial and perceptual changes:</strong> Difficulty judging distances or navigating spaces</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Emotional and behavioral changes:</strong> Depression, anxiety, impulsivity, or emotional lability</span>
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Neuropsychologists Do in Stroke Recovery
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Neuropsychologists are clinical psychologists with specialized training in brain-behavior relationships. In the context of stroke recovery, they serve multiple critical roles that complement medical and physical rehabilitation efforts.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Comprehensive Cognitive Assessment:</strong> The cornerstone of neuropsychological involvement is detailed testing that measures specific cognitive abilities. Using standardized assessment tools, neuropsychologists can identify exactly which cognitive functions have been affected and to what degree. This isn't just about knowing something is wrong—it's about creating a precise cognitive profile that guides treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Baseline Documentation:</strong> Early neuropsychological evaluation establishes a baseline that allows the treatment team to track recovery over time. This objective data is invaluable for measuring progress, adjusting treatment plans, and making important decisions about readiness to return to work or independent living.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Cognitive Rehabilitation Planning:</strong> Based on assessment results, neuropsychologists design targeted interventions to strengthen impaired cognitive abilities and develop compensatory strategies. This might include memory exercises, attention training, problem-solving practice, or learning to use external aids like calendars and reminder systems.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Recovery from stroke is not just about regaining physical function—it's about rebuilding the cognitive foundation that allows us to live independently, maintain relationships, and engage meaningfully with the world around us."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Benefits of Neuropsychological Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The involvement of neuropsychology in stroke recovery is supported by substantial research evidence. Studies consistently demonstrate that neuropsychological assessment and intervention improve outcomes across multiple domains.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in leading rehabilitation journals shows that cognitive rehabilitation can significantly improve attention, memory, and executive function in stroke survivors. One meta-analysis found that cognitive rehabilitation interventions resulted in moderate to large improvements in targeted cognitive abilities, with benefits extending to functional independence and quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Perhaps more importantly, early neuropsychological intervention is associated with better long-term outcomes. Identifying cognitive deficits early allows for timely intervention during the period when the brain is most plastic and responsive to rehabilitation. Studies indicate that the first three to six months post-stroke represent a critical window for cognitive recovery, making early neuropsychological assessment particularly valuable.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, neuropsychological care addresses the emotional and psychological impact of stroke. Depression affects approximately one-third of stroke survivors and is associated with poorer functional recovery. Neuropsychologists are trained to identify and treat these emotional challenges, often collaborating with psychiatrists when medication management is needed.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Neuropsychological Assessment Process
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you or a loved one has experienced a stroke, you may wonder what to expect from a neuropsychological evaluation. Understanding the process can help reduce anxiety and maximize the benefit of the assessment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The evaluation typically begins with a clinical interview where the neuropsychologist gathers information about the stroke itself, medical history, pre-stroke functioning, current concerns, and goals for recovery. This conversation helps contextualize test results and ensures the assessment addresses the most relevant questions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Testing usually spans several hours and may be divided across multiple sessions to prevent fatigue. The neuropsychologist administers standardized tests measuring various cognitive domains: attention and concentration, processing speed, learning and memory, language abilities, visuospatial skills, executive functions, and emotional status. These aren't pass-fail tests—they're designed to reveal patterns of strengths and weaknesses that guide treatment.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            After testing, the neuropsychologist scores and interprets results, comparing performance to normative data that accounts for age, education, and other relevant factors. The final step is a feedback session where results are explained in understandable terms, recommendations are discussed, and questions are answered. A comprehensive written report is provided to you and, with your permission, to other members of your healthcare team.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Strategies for Cognitive Recovery
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While professional neuropsychological services are essential, there are also strategies stroke survivors and families can implement to support cognitive recovery:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Establish routine:</strong> Consistent daily schedules reduce cognitive demands and support memory</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Use external aids:</strong> Calendars, notebooks, smartphone reminders, and labeled storage help compensate for memory difficulties</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Break tasks into steps:</strong> Complex activities become more manageable when divided into smaller components</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Minimize distractions:</strong> Reducing background noise and visual clutter supports attention and concentration</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Engage in cognitive activities:</strong> Reading, puzzles, games, and learning new skills promote brain plasticity</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Prioritize sleep and rest:</strong> The brain consolidates learning and repairs itself during sleep</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Stay socially connected:</strong> Social interaction provides cognitive stimulation and emotional support</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Neuropsychological Services
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Neuropsychological evaluation is valuable at multiple points in the stroke recovery journey. Ideally, assessment should occur once medical stabilization has been achieved—often within the first few weeks to months post-stroke. This timing allows for baseline documentation while the window for maximum recovery potential is still open.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            However, it's never too late to benefit from neuropsychological services. Even years after a stroke, assessment can clarify persistent cognitive challenges, identify compensatory strategies, and support adaptation to changes. Many stroke survivors seek evaluation when preparing to return to work, when family members notice concerning changes, or when trying to maximize independence in daily activities.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Signs that neuropsychological evaluation may be helpful include difficulty remembering appointments or conversations, trouble managing finances or medications, problems following multi-step directions, increased confusion or disorientation, personality or behavioral changes, persistent sadness or anxiety, or concerns about safety and independence.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
            Stroke recovery is a marathon, not a sprint. While the physical effects of stroke are often most visible, the cognitive and emotional challenges deserve equal attention and expert care. Neuropsychology offers stroke survivors and their families a path forward—one grounded in scientific understanding of the brain, evidence-based interventions, and compassionate support for the whole person.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you or a loved one is navigating life after stroke, know that you don't have to face cognitive challenges alone. Professional neuropsychological assessment and rehabilitation can make a meaningful difference in recovery, independence, and quality of life. At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, our team specializes in helping stroke survivors understand their cognitive profile and develop personalized strategies for maximizing recovery and adaptation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base">
            Recovery is possible. Support is available. And with the right expertise guiding your journey, you can work toward regaining the cognitive function and independence that matter most to you.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Mental Health, dedicated to delivering evidence-based neuropsychological assessment and rehabilitation services in Fredericksburg, VA.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Cognitive Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Neuropsychological Assessment: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A comprehensive guide to the neuropsychological evaluation process and how it can help identify cognitive strengths and challenges.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Brain Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Supporting a Loved One After Stroke: A Family Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical strategies and emotional support tips for families navigating the stroke recovery journey together.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Recovery
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Cognitive Rehabilitation Techniques That Work
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Evidence-based strategies for improving memory, attention, and executive function after brain injury.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
            Our team is here to help you navigate stroke recovery with expert neuropsychological care.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
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