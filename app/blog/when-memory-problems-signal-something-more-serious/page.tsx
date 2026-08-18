import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Memory Problems Signal Something More Serious',
  description: 'Learn to recognize when memory lapses may indicate a serious neurological condition. Expert guidance from Dr. Khanali\'s Neuropsychological Services in Fredericksburg, VA.',
  keywords: 'memory problems, memory loss, cognitive decline, dementia warning signs, neuropsychological assessment, Fredericksburg VA',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Mental Health
          </div>

          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            When Memory Problems Signal Something More Serious
          </h1>

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
              <span>Dr. Khanali&apos;s Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            We all have those moments—walking into a room and forgetting why, misplacing car keys, or blanking on a familiar name. Most of the time, these memory lapses are simply a normal part of being human, especially when we&apos;re stressed, tired, or juggling multiple responsibilities. But when do these occasional forgetful moments cross the line into something that warrants professional attention?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Understanding the difference between normal age-related memory changes and warning signs of more serious cognitive decline is crucial for early intervention and optimal outcomes. As neuropsychological specialists serving Fredericksburg, VA and surrounding communities, we help individuals and families navigate these concerns with comprehensive assessments and compassionate care.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Normal Memory Lapses vs. Concerning Symptoms
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Normal memory changes typically involve occasional forgetfulness that doesn&apos;t significantly impact daily functioning. You might forget where you placed your glasses but remember later, or you might struggle to recall a word during conversation but find it eventually. These experiences become more common as we age, but they remain relatively minor and infrequent.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            More concerning symptoms include patterns of memory loss that interfere with work, relationships, or daily activities. Red flags include repeatedly asking the same questions, getting lost in familiar places, difficulty following conversations or instructions, confusion about time or location, and increasingly poor judgment or decision-making.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;The most important factor isn&apos;t whether you occasionally forget things—it&apos;s whether these memory problems are becoming more frequent, more severe, or beginning to affect your ability to function independently.&quot;
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Causes Serious Memory Problems?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Memory problems can stem from numerous causes, ranging from treatable medical conditions to progressive neurological diseases. Understanding the underlying cause is essential because treatment options and prognoses vary dramatically.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Potentially Reversible Causes:</strong> Many memory problems have treatable underlying causes. Vitamin B12 deficiency, thyroid disorders, medication side effects, depression, sleep apnea, and chronic stress can all significantly impair memory function. These conditions often respond well to targeted treatment, potentially restoring cognitive function to baseline levels.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Progressive Neurological Conditions:</strong> Alzheimer&apos;s disease is the most common cause of progressive dementia, accounting for 60-80% of cases. Other conditions include vascular dementia (often caused by strokes or reduced blood flow to the brain), Lewy body dementia, frontotemporal dementia, and Parkinson&apos;s disease dementia. While these conditions are currently not curable, early diagnosis enables access to treatments that may slow progression, manage symptoms, and improve quality of life.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Warning Signs That Warrant Professional Evaluation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you or a loved one experience any of the following symptoms, it&apos;s important to seek a comprehensive neuropsychological evaluation:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Memory loss that disrupts daily life:</strong> Forgetting recently learned information, important dates, or asking for the same information repeatedly
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Challenges with planning or problem-solving:</strong> Difficulty following a familiar recipe, keeping track of bills, or concentrating on tasks
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Difficulty completing familiar tasks:</strong> Trouble driving to a known location, managing finances, or remembering rules of a favorite game
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Confusion with time or place:</strong> Losing track of dates, seasons, or passage of time; forgetting where you are or how you got there
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Problems with words:</strong> Struggling to follow or join conversations, stopping mid-sentence, repeating yourself, or difficulty finding the right word
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Misplacing things:</strong> Putting objects in unusual places and being unable to retrace steps to find them; may accuse others of stealing
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Decreased judgment:</strong> Poor decision-making, especially regarding money; paying less attention to grooming or cleanliness
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Withdrawal from activities:</strong> Avoiding social engagements, work projects, or hobbies; withdrawing from previously enjoyed activities
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed flex-1">
                <strong>Changes in mood and personality:</strong> Becoming confused, suspicious, depressed, fearful, or anxious; easily upset when out of comfort zone
              </p>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Importance of Early Evaluation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many people delay seeking evaluation for memory concerns out of fear or denial. However, early assessment offers significant advantages regardless of the underlying cause.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If memory problems stem from a treatable condition—such as vitamin deficiency, medication side effects, or depression—early intervention can potentially reverse or significantly improve symptoms. If a progressive condition is identified, early diagnosis allows for timely treatment, better symptom management, and the opportunity to participate in clinical trials for emerging therapies.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Early diagnosis also provides valuable time for planning. Individuals can make important legal and financial decisions while they still have full cognitive capacity, discuss care preferences with family members, and access support services and resources.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect During a Neuropsychological Evaluation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive neuropsychological evaluation is the gold standard for assessing cognitive function and identifying the underlying causes of memory problems. This process goes far beyond simple screening tests, providing detailed information about various cognitive domains.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The evaluation typically includes a detailed clinical interview to understand your medical history, current symptoms, and functional abilities. Standardized cognitive testing assesses multiple areas including memory, attention, language, visual-spatial skills, and executive functions. Assessment of mood and personality helps identify emotional factors that might contribute to cognitive symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Following testing, you&apos;ll receive a comprehensive report detailing findings, diagnostic impressions, and specific recommendations for treatment, accommodations, or further evaluation. Most importantly, you&apos;ll have an opportunity to discuss results in detail with the neuropsychologist, ask questions, and develop a plan moving forward.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment and Support Options
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The appropriate treatment approach depends entirely on the underlying cause of memory problems. For reversible conditions, treatment might include addressing nutritional deficiencies, adjusting medications, treating sleep disorders, or managing depression or anxiety.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For progressive conditions like Alzheimer&apos;s disease, treatment focuses on maximizing quality of life and managing symptoms. This may include FDA-approved medications that can help manage symptoms and potentially slow progression, cognitive rehabilitation strategies to maximize remaining abilities, lifestyle modifications including exercise, social engagement, and cognitively stimulating activities, and support services for both patients and caregivers.
          </p>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Supporting a Loved One with Memory Concerns
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you&apos;re concerned about a family member&apos;s memory, approaching the subject requires sensitivity and tact. Many individuals are aware of their difficulties and may feel embarrassed or defensive.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Choose a private, calm moment to express your concerns. Focus on specific observations rather than generalizations. For example, instead of saying &quot;Your memory is terrible,&quot; you might say, &quot;I&apos;ve noticed you&apos;ve asked me the same question several times today, and I&apos;m concerned about you.&quot;
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Emphasize that you&apos;re coming from a place of love and concern for their wellbeing. Suggest that evaluation could provide peace of mind—either by identifying a treatable problem or by ruling out serious conditions. Offer to attend appointments together for support.
          </p>

          <div className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-lg p-8 my-12">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
              Take the First Step Toward Clarity
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              If you or a loved one are experiencing concerning memory changes, professional evaluation can provide answers, peace of mind, and a path forward. Dr. Khanali&apos;s Neuropsychological Services offers comprehensive assessments in a supportive, compassionate environment.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Our team specializes in helping individuals and families navigate cognitive concerns with expertise, empathy, and evidence-based care. We serve Fredericksburg, VA and surrounding communities with flexible appointment options to meet your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-md hover:bg-[var(--color-dark)] transition-colors text-center font-medium"
              >
                Schedule an Evaluation
              </a>
              <a 
                href="/services" 
                className="inline-block bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-8 py-3 rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-colors text-center font-medium"
              >
                Learn About Our Services
              </a>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Conclusion: Knowledge Empowers Better Outcomes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Memory problems exist on a spectrum from normal age-related changes to serious neurological conditions. The key is recognizing when changes warrant professional attention and taking action promptly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While it can be frightening to confront concerns about memory and cognitive function, seeking evaluation is an act of self-care and empowerment. Whether the underlying cause is treatable or requires ongoing management, understanding what you&apos;re facing enables you to make informed decisions, access appropriate support, and take control of your cognitive health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Remember, memory problems don&apos;t define you—they&apos;re simply challenges that deserve proper attention and care. With professional support, you can navigate this journey with confidence and clarity.
          </p>

          <div className="border-t border-[var(--color-border)] pt-8 mt-12">
            <p className="text-sm text-[var(--color-muted)] italic">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. If you have concerns about memory or cognitive function, please consult with a qualified healthcare provider for proper evaluation and personalized recommendations.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore additional resources on cognitive health, neuropsychological assessment, and brain wellness.
          </p>
          <a 
            href="/blog" 
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-md hover:bg-[var(--color-dark)] transition-colors font-medium"
          >
            View All Resources
          </a>
        </div>
      </section>
    </main>
  )
}