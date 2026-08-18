import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Anxiety: Beyond Shyness',
  description: 'Understanding social anxiety disorder goes beyond simple shyness. Learn about symptoms, impacts, and evidence-based approaches to managing social anxiety in Fredericksburg, VA.',
  keywords: 'social anxiety, social anxiety disorder, shyness, mental health, anxiety treatment, Fredericksburg VA, neuropsychology',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Social Anxiety: Beyond Shyness
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Dr. Khanali&apos;s Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              Your heart races as you walk into a crowded room. Your palms sweat before giving a presentation. You rehearse a simple phone call dozens of times in your head before dialing. If these experiences sound familiar, you might assume you&apos;re just shy—but what if it&apos;s something more? Social anxiety disorder is common, yet it often goes unrecognized and untreated because it&apos;s dismissed as mere shyness or introversion.
            </p>
            <p>
              Understanding the difference between everyday nervousness and social anxiety disorder is the first step toward getting the support you need. This isn&apos;t about changing your personality—it&apos;s about reclaiming your life from fear that has grown too large.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Social Anxiety Disorder?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Social anxiety disorder, also known as social phobia, is more than occasional nervousness in social situations. It&apos;s a persistent and intense fear of being watched, judged, or embarrassed in social settings. This fear is so overwhelming that it interferes with daily activities, relationships, work, and overall quality of life.
            </p>
            <p className="mb-4">
              While shyness might make you feel uncomfortable in new situations, social anxiety creates a pattern of avoidance that can become increasingly restrictive. People with social anxiety don&apos;t just feel nervous—they experience significant physical symptoms including rapid heartbeat, sweating, trembling, nausea, and difficulty speaking. These symptoms can occur days or even weeks before a feared social event.
            </p>
            <p>
              The diagnostic criteria for social anxiety disorder includes marked fear or anxiety about social situations where scrutiny by others is possible, fear of acting in ways that will be negatively evaluated, and avoidance of these situations or enduring them with intense distress. These symptoms must persist for six months or more and cause significant impairment in functioning.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Scope and Impact
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Social anxiety disorder is one of the most common mental health conditions in the United States, affecting many adults at some point in their lives. It typically begins in the early to mid-teenage years, though it can develop in childhood or adulthood as well. Without treatment, social anxiety tends to be chronic and can lead to other complications including depression, substance abuse, and isolation.
            </p>
            <p className="mb-4">
              The impact extends far beyond uncomfortable moments. People with social anxiety may struggle to pursue education, advance in careers, form romantic relationships, or maintain friendships. They might avoid medical appointments, turn down promotions that require presentations, or miss important life events. The disorder doesn&apos;t just limit opportunities—it can fundamentally alter the course of someone&apos;s life.
            </p>
            <p>
              Research shows that social anxiety disorder often co-occurs with other conditions including generalized anxiety disorder, depression, and substance use disorders. Many people with social anxiety turn to alcohol or other substances as a way to cope with social situations, which can create additional problems over time.
            </p>
          </div>

          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;Social anxiety isn&apos;t a character flaw or something you can simply &apos;get over.&apos; It&apos;s a treatable condition that responds well to evidence-based interventions when properly addressed.&quot;
            </p>
          </blockquote>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Triggers and Situations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Social anxiety can be performance-based (fear of doing something in front of others) or interaction-based (fear of conversing or meeting people). Some individuals experience anxiety in most social situations, while others have specific triggers.
            </p>
            <p className="mb-4">
              Common situations that trigger social anxiety include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Speaking in public or giving presentations</li>
              <li>Meeting new people or attending parties</li>
              <li>Making phone calls or talking to authority figures</li>
              <li>Eating or drinking in front of others</li>
              <li>Using public restrooms</li>
              <li>Entering rooms where people are already seated</li>
              <li>Being the center of attention</li>
              <li>Having conversations, especially with strangers</li>
              <li>Dating or romantic interactions</li>
              <li>Performing (music, sports, etc.) in front of an audience</li>
            </ul>
            <p>
              What makes these situations particularly difficult for people with social anxiety is the fear of negative evaluation. It&apos;s not just about discomfort—it&apos;s an intense fear that others will judge them as anxious, weak, stupid, or inadequate. This fear can be so strong that it overshadows rational thinking.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Cycle of Social Anxiety
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Social anxiety tends to follow a predictable cycle that reinforces itself over time. First, there&apos;s anticipatory anxiety—worrying about an upcoming social event, sometimes for days or weeks in advance. This worry often includes catastrophic predictions about what might happen and detailed mental scenarios of social failure.
            </p>
            <p className="mb-4">
              During the actual social situation, physical symptoms kick in: racing heart, sweating, trembling, blushing, voice changes, or mental blanking. These symptoms become additional sources of worry, as the person fears others will notice and judge them for appearing anxious. This self-focused attention actually makes the symptoms worse and interferes with natural social behavior.
            </p>
            <p className="mb-4">
              After the event, post-event processing begins. The person replays the situation over and over, focusing on perceived mistakes and embarrassing moments. They often have a distorted view of how they came across, believing they appeared much more anxious or foolish than they actually did.
            </p>
            <p>
              This cycle leads to avoidance—the person starts declining invitations, missing opportunities, or finding ways to escape situations early. While avoidance provides temporary relief, it strengthens the anxiety long-term by preventing the person from learning that their fears are exaggerated and that they can handle social situations better than they think.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Shyness vs. Social Anxiety: Key Differences
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              While shyness and social anxiety can look similar on the surface, they differ significantly in intensity, duration, and impact on functioning. Shyness is a personality trait—a tendency to feel uncomfortable or reserved in social situations, especially new ones. Shy people might feel nervous initially but usually warm up over time and can still engage in social activities without significant distress.
            </p>
            <p className="mb-4">
              Social anxiety disorder, in contrast, involves:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Intensity:</strong> Overwhelming fear rather than mild discomfort</li>
              <li><strong>Duration:</strong> Persistent anxiety lasting six months or more</li>
              <li><strong>Impairment:</strong> Significant interference with work, school, relationships, or daily activities</li>
              <li><strong>Physical symptoms:</strong> Intense bodily reactions that can feel uncontrollable</li>
              <li><strong>Avoidance:</strong> Active efforts to escape or avoid feared situations</li>
              <li><strong>Impact on opportunities:</strong> Missing out on jobs, relationships, education, or life experiences</li>
            </ul>
            <p>
              Another key difference is that shy people typically don&apos;t spend excessive time worrying about social situations before and after they occur. They might feel a bit nervous beforehand and move on afterward. People with social anxiety often experience intense anticipatory anxiety and prolonged post-event rumination.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              The good news is that social anxiety disorder is highly treatable. Research consistently shows that certain therapeutic approaches are particularly effective, with many people experiencing significant improvement or complete recovery.
            </p>
            <p className="mb-4">
              Cognitive Behavioral Therapy (CBT) is considered the gold standard treatment for social anxiety. CBT helps people identify and challenge the distorted thoughts that fuel their anxiety. For example, someone might believe &quot;Everyone will think I&apos;m stupid if I make a mistake,&quot; when the reality is that most people are focused on themselves and are quite forgiving of minor social missteps.
            </p>
            <p className="mb-4">
              Exposure therapy, a component of CBT, involves gradually and systematically facing feared social situations in a controlled way. Rather than jumping into the most feared situation, the therapist and client create a hierarchy of situations from least to most anxiety-provoking. Through repeated exposure, the person learns that their feared outcomes rarely occur and that they can tolerate the anxiety that does arise.
            </p>
            <p className="mb-4">
              Other effective approaches include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Focuses on accepting anxiety while pursuing valued activities</li>
              <li><strong>Social skills training:</strong> Builds confidence through practice and skill development</li>
              <li><strong>Mindfulness-based interventions:</strong> Helps reduce self-focused attention and promotes present-moment awareness</li>
              <li><strong>Group therapy:</strong> Provides a safe environment to practice social interactions and receive feedback</li>
            </ul>
            <p>
              For some individuals, medication can be a helpful addition to therapy, particularly for those with severe symptoms or co-occurring conditions. Selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed and have good evidence for effectiveness in treating social anxiety.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Self-Help Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              While professional treatment is important for social anxiety disorder, there are steps you can take on your own to begin managing symptoms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Challenge your thoughts:</strong> Question whether your fears are realistic and consider alternative interpretations</li>
              <li><strong>Practice gradual exposure:</strong> Start with small, manageable social challenges and build up over time</li>
              <li><strong>Focus outward:</strong> Shift attention from your internal experience to the people and environment around you</li>
              <li><strong>Reduce safety behaviors:</strong> Notice habits like avoiding eye contact or over-rehearsing, which maintain anxiety</li>
              <li><strong>Practice self-compassion:</strong> Treat yourself with the kindness you would offer a friend</li>
              <li><strong>Maintain healthy habits:</strong> Regular exercise, adequate sleep, and limiting caffeine and alcohol can help manage anxiety</li>
              <li><strong>Build skills gradually:</strong> Consider joining groups or classes to practice social interaction in structured settings</li>
            </ul>
            <p>
              It&apos;s important to note that self-help strategies work best when used in conjunction with professional support, particularly for moderate to severe social anxiety. A mental health professional can provide personalized guidance and help you navigate challenges that arise during the recovery process.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Consider seeking professional help if:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your fear of social situations interferes with work, school, or relationships</li>
              <li>You avoid important activities or opportunities because of social anxiety</li>
              <li>The anxiety has persisted for six months or more</li>
              <li>You experience intense physical symptoms in social situations</li>
              <li>You spend excessive time worrying about upcoming social events</li>
              <li>You replay social interactions repeatedly, focusing on mistakes</li>
              <li>You&apos;re using alcohol or other substances to cope with social situations</li>
              <li>You feel isolated, depressed, or hopeless</li>
            </ul>
            <p>
              Early intervention is valuable because social anxiety can become more entrenched over time. The longer avoidance patterns persist, the more difficult they can be to break. Additionally, treating social anxiety can prevent the development of secondary problems like depression or substance use disorders.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Hope
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Living with social anxiety disorder can feel exhausting and lonely. You might feel like you&apos;re missing out on life or that others can&apos;t possibly understand what you&apos;re going through. But it&apos;s crucial to remember that social anxiety is not a personal failing, character weakness, or something you&apos;re choosing. It&apos;s a recognized mental health condition with effective treatments.
            </p>
            <p className="mb-4">
              Recovery doesn&apos;t mean becoming a different person or turning into an extrovert. It means reducing anxiety to manageable levels so that you can pursue what matters to you—whether that&apos;s career advancement, meaningful relationships, education, or simply feeling more comfortable in everyday interactions.
            </p>
            <p className="mb-4">
              Many people who have successfully addressed their social anxiety report not just reduced symptoms but improved quality of life overall. They describe feeling more authentic in relationships, more confident in pursuing goals, and more present in their daily experiences. These outcomes are within reach with proper support and treatment.
            </p>
            <p>
              If you recognize yourself in this description, take the first step: acknowledge that what you&apos;re experiencing is real, valid, and treatable. Reach out to a mental health professional who specializes in anxiety disorders. That conversation might feel intimidating, but it&apos;s one conversation that could change the trajectory of your life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-light)] to-white border border-[var(--color-border)] rounded-lg p-8 mt-12">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
              Need Support for Social Anxiety?
            </h3>
            <p className="text-[var(--color-ink)] mb-6">
              Dr. Khanali&apos;s practice specializes in evidence-based assessment and treatment for anxiety disorders, including social anxiety disorder. We provide comprehensive neuropsychological evaluations and personalized treatment approaches tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded hover:bg-[var(--color-dark)] transition-colors text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors text-center"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Back to Resources</span>
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm text-[var(--color-muted)]">Share:</span>
                <button className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}