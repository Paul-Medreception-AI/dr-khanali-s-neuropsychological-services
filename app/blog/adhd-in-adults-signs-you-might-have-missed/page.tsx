import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD in Adults: Signs You Might Have Missed',
  description: 'Learn the often-overlooked signs of ADHD in adults. Expert insights on symptoms, diagnosis, and treatment options from Dr. Khanali\'s team in Fredericksburg, VA.',
  keywords: 'ADHD in adults, adult ADHD symptoms, ADHD diagnosis, neuropsychological evaluation, Fredericksburg VA, attention deficit disorder',
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
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            ADHD in Adults: Signs You Might Have Missed
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published March 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've spent years thinking you're just disorganized, easily distracted, or "not living up to your potential." You've mastered the art of last-minute deadlines, developed elaborate systems to remember tasks, and apologized countless times for interrupting or losing track of conversations. What if these aren't character flaws, but signs of undiagnosed ADHD?
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Attention-Deficit/Hyperactivity Disorder (ADHD) in adults is vastly underdiagnosed, particularly in those who developed coping mechanisms in childhood or whose symptoms don't fit the stereotypical "hyperactive child" profile. Many adults go decades without recognizing that their daily struggles have a name—and more importantly, effective treatment options.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why ADHD in Adults Goes Unrecognized
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For years, ADHD was viewed primarily as a childhood condition that people would "grow out of." We now know that many children with ADHD continue to experience symptoms into adulthood. Yet many adults remain undiagnosed because their symptoms manifest differently than they did in childhood, or because they've developed sophisticated compensation strategies that mask the underlying challenges.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Women are particularly likely to be overlooked. While boys with ADHD often display obvious hyperactive behaviors that prompt evaluation, girls more commonly present with inattentive symptoms—daydreaming, disorganization, and internal restlessness—which are easily dismissed as personality traits or anxiety.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Many of my patients describe a profound sense of relief when they finally receive an ADHD diagnosis. Suddenly, years of struggle make sense—and treatment becomes possible."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Signs You Might Have Missed
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Adult ADHD doesn't always look like the restless child who can't sit still. Here are the often-overlooked signs that might indicate ADHD:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Chronic time management struggles:</strong> You consistently underestimate how long tasks will take, arrive late despite your best intentions, and find yourself racing against deadlines you thought you had more time for.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Difficulty with "boring" tasks:</strong> You can hyperfocus on interesting projects for hours, but routine tasks like paperwork, email, or household chores feel impossibly difficult to start or complete.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Emotional dysregulation:</strong> You experience intense emotional reactions that seem disproportionate to the situation, have difficulty managing frustration, or feel emotions more intensely than others seem to.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Mental restlessness:</strong> Even if you're not physically hyperactive, your mind races constantly. You have multiple browser tabs open, start projects you don't finish, and feel internally restless even when sitting still.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Relationship challenges:</strong> Partners or friends have commented on your interrupting, forgetfulness about important dates or commitments, or seeming not to listen during conversations.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Working memory difficulties:</strong> You walk into a room and forget why, lose your train of thought mid-sentence, or need to write everything down immediately or it vanishes.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Impact of Undiagnosed ADHD
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Living with undiagnosed ADHD takes a significant toll. Adults with untreated ADHD are more likely to experience chronic stress, anxiety, depression, and low self-esteem. Many develop a harsh inner critic, blaming themselves for struggles that actually stem from neurological differences in attention regulation and executive function.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Career impacts are common—frequent job changes, difficulty with promotion due to organizational challenges, or underemployment relative to intelligence and abilities. Relationships may suffer from miscommunication, forgotten commitments, or emotional reactivity. Financial stress from impulsive spending, missed bill payments, or disorganization with paperwork compounds the challenges.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Perhaps most damaging is the internalized narrative: "I'm lazy," "I'm not trying hard enough," or "I'm just not capable." These false beliefs prevent people from seeking help and rob them of the self-compassion they deserve.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Getting an Accurate Diagnosis
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive neuropsychological evaluation is the gold standard for diagnosing adult ADHD. This goes far beyond a brief questionnaire or single appointment. A thorough assessment examines attention, executive functioning, working memory, processing speed, and emotional regulation through validated testing instruments.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Importantly, the evaluation also rules out other conditions that can mimic ADHD symptoms—such as anxiety disorders, depression, sleep disorders, thyroid problems, or learning disabilities—or identifies when these conditions coexist with ADHD. Many adults have spent years treating anxiety or depression without addressing underlying ADHD, wondering why treatment wasn't fully effective.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The diagnostic process typically includes clinical interviews about current symptoms and childhood history (ADHD symptoms must have been present before age 12, even if not diagnosed), standardized rating scales completed by you and ideally a partner or family member, and objective cognitive testing that measures the specific areas affected by ADHD.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment Opens New Possibilities
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that adult ADHD is highly treatable. Most adults benefit from a multimodal approach combining medication, behavioral strategies, and sometimes therapy.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Medication—typically stimulants like methylphenidate or amphetamines, or non-stimulant options—can dramatically improve attention, reduce impulsivity, and help with emotional regulation. Many adults describe finally feeling like their brain "turns on" or like static has been removed from their thinking.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Behavioral strategies and coaching help you develop systems that work with your ADHD brain rather than against it. This might include external structure (alarms, visual reminders, body doubling), breaking tasks into smaller steps, using "implementation intentions" (specific if-then plans), and designing your environment to reduce distractions.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Therapy, particularly Cognitive Behavioral Therapy (CBT) adapted for ADHD, addresses the emotional aftermath of years of struggle—rebuilding self-esteem, challenging negative self-talk, and developing skills for emotional regulation and relationship management.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the Next Step
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you've recognized yourself in these descriptions, consider seeking evaluation from a qualified neuropsychologist or psychiatrist who specializes in adult ADHD. Many adults put off evaluation, worried about labels or uncertain if their struggles are "significant enough." But ADHD is not about how much you struggle—it's about why certain tasks that seem easy for others feel impossibly difficult for you.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A diagnosis doesn't define you—it explains certain challenges and opens doors to effective support. Many adults describe their ADHD diagnosis as life-changing, not because their brain suddenly works differently, but because they finally understand it, can be compassionate with themselves, and have access to tools that actually help.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You've worked hard to cope with these challenges on your own. You don't have to anymore. In Fredericksburg, VA and surrounding areas, comprehensive neuropsychological evaluation can provide the clarity you need and connect you with evidence-based treatment that makes daily life significantly easier.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner, offering comprehensive neuropsychological evaluations and evidence-based treatment in Fredericksburg, VA.
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
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Neuropsychological Testing
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Learn what to expect during a comprehensive neuropsychological evaluation and how it can provide clarity.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Executive Function Skills for Daily Success
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Practical strategies for improving organization, time management, and planning in your everyday life.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                When Anxiety and ADHD Overlap
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Understanding the connection between anxiety and attention difficulties, and why accurate diagnosis matters.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help. Schedule a comprehensive evaluation and discover the clarity and support you deserve.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}