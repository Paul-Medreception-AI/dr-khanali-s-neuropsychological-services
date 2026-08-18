import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication and Cognitive Side Effects',
  description: 'Learn about how medications can affect memory, attention, and thinking. Evidence-based guide to understanding and managing cognitive side effects in Fredericksburg, VA.',
  keywords: 'medication side effects, cognitive impairment, memory problems, medication management, neuropsychology Fredericksburg VA',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
            Medication and Cognitive Side Effects
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've been taking your prescribed medication faithfully, and it's helping manage your condition. But lately, you've noticed something troubling: you're forgetting appointments, struggling to find the right words, or having difficulty concentrating at work. You might wonder if you're imagining it, or worse, if something more serious is happening. The truth is, you could be experiencing cognitive side effects from your medication—a common phenomenon that is rarely discussed openly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the relationship between medications and cognitive function is essential for anyone taking prescription drugs, particularly those on multiple medications or treatments for chronic conditions. This knowledge empowers you to recognize changes, communicate effectively with your healthcare providers, and make informed decisions about your treatment.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Cognitive Side Effects?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cognitive side effects refer to changes in mental processes that can occur as a result of medication use. These effects impact various aspects of thinking and mental functioning, including memory, attention, processing speed, executive function, and language abilities. Unlike the intended therapeutic effects of medication, these cognitive changes are unintended consequences that can significantly affect daily life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The severity of cognitive side effects varies considerably. Some people experience subtle changes they barely notice, while others face significant impairments that interfere with work, relationships, and quality of life. These effects may appear immediately after starting a medication or develop gradually over weeks or months. In some cases, they persist even after discontinuing the medication, though this is less common.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to distinguish between cognitive side effects and the symptoms of underlying conditions. Someone taking medication for depression, for example, might experience concentration difficulties from both the condition and the medication. This is why professional evaluation is crucial for identifying the true source of cognitive changes.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Medications That Affect Cognition
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While virtually any medication can potentially affect cognitive function in susceptible individuals, certain classes of drugs are more commonly associated with these side effects. Awareness of these medications can help you monitor for changes and discuss concerns with your healthcare provider.
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Benzodiazepines and sleep medications</strong> (such as lorazepam, diazepam, and zolpidem) can impair memory formation, attention, and reaction time, particularly with long-term use.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Anticholinergic medications</strong> (including certain antihistamines, overactive bladder treatments, and some antidepressants) block a neurotransmitter important for memory and learning.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Opioid pain medications</strong> can cause sedation, slowed thinking, and difficulty with attention and concentration.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Anticonvulsants</strong> (used for seizures and mood stabilization) may affect processing speed, word-finding, and memory.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Corticosteroids</strong> (like prednisone) can impact memory, mood, and executive function, especially at higher doses.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Chemotherapy agents</strong> are notorious for causing "chemo brain," affecting memory, concentration, and multitasking abilities.
              </p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The risk of cognitive side effects increases significantly when taking multiple medications simultaneously—a situation called polypharmacy. Drug interactions and cumulative effects can amplify cognitive impacts, making regular medication reviews essential.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Recognizing cognitive side effects isn't about fear or avoiding necessary treatment—it's about informed partnership with your healthcare team to optimize both your physical and cognitive health."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Some People Are More Vulnerable
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Not everyone experiences cognitive side effects from medications, and understanding why some individuals are more susceptible can help identify risk factors and enable proactive monitoring. Several factors influence vulnerability to medication-related cognitive changes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Age</strong> is one of the most significant risk factors. Older adults are particularly vulnerable due to age-related changes in how the body processes medications, increased blood-brain barrier permeability, and reduced cognitive reserve. The aging brain is simply more sensitive to substances that affect neurotransmitter systems.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Genetic variations</strong> affect how individuals metabolize medications. Some people are "slow metabolizers" for certain drugs, meaning medications remain in their system longer and at higher concentrations, increasing the likelihood of side effects including cognitive impacts.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Pre-existing cognitive conditions</strong> such as mild cognitive impairment, traumatic brain injury history, or learning differences create greater vulnerability. These individuals have less cognitive reserve to buffer against medication effects.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Kidney and liver function</strong> directly impact drug clearance. Impaired function in these organs means medications stay in the body longer, potentially leading to accumulation and increased cognitive side effects.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, factors like dehydration, poor sleep, stress, and nutritional deficiencies can amplify medication side effects. Someone who might tolerate a medication well under optimal conditions may experience cognitive problems when these additional stressors are present.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing Cognitive Side Effects in Daily Life
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cognitive side effects often develop gradually, making them easy to overlook or attribute to other causes like stress or aging. Learning to recognize the specific manifestations of medication-related cognitive changes can prompt timely intervention and prevent unnecessary decline in quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Memory changes</strong> are among the most common complaints. You might notice difficulty remembering recent conversations, repeatedly asking the same questions, missing appointments, or losing track of items. Short-term memory is typically more affected than long-term memory.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Attention and concentration problems</strong> manifest as difficulty focusing on tasks, increased distractibility, trouble following conversations or reading comprehension, and an inability to multitask as effectively as before. These changes often impact work performance and daily productivity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Processing speed reductions</strong> mean you need more time to understand information, respond to questions, or complete familiar tasks. You might notice others becoming impatient with your response time or feel like you're thinking through "mental fog."
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Executive function difficulties</strong> affect planning, organization, decision-making, and problem-solving. You might struggle with tasks that require multiple steps, have trouble switching between activities, or find decision-making unexpectedly overwhelming.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Word-finding problems</strong> become frustrating when you can't recall familiar words or names, frequently use vague terms like "thing" or "stuff," or lose your train of thought mid-sentence.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The key to identifying medication-related cognitive changes is timing. If these problems appeared or worsened after starting a new medication, increasing a dose, or adding another drug to your regimen, medication side effects should be considered as a possible cause.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What You Can Do About Cognitive Side Effects
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Experiencing cognitive side effects doesn't mean you're stuck with impaired thinking or must choose between treating your condition and maintaining mental clarity. Several strategies can help address medication-related cognitive changes while ensuring you receive necessary treatment.
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Document your symptoms:</strong>
                <p className="text-[var(--color-ink)] leading-loose">Keep a detailed log of cognitive changes, including when they occur, their severity, and how they impact daily activities. Note the timing relative to medication doses and any patterns you observe.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Communicate with your prescriber:</strong>
                <p className="text-[var(--color-ink)] leading-loose">Share your observations with the physician who prescribed the medication. Be specific about functional impacts rather than just saying you feel "foggy." Your provider may adjust the dose, change timing, or switch to an alternative medication with a better cognitive profile.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Request a medication review:</strong>
                <p className="text-[var(--color-ink)] leading-loose">Especially if you take multiple medications, a comprehensive review can identify potentially problematic drugs or interactions. Clinical pharmacists are particularly valuable for these reviews.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Consider neuropsychological evaluation:</strong>
                <p className="text-[var(--color-ink)] leading-loose">Comprehensive cognitive testing can objectively measure your cognitive functioning, establish a baseline, differentiate medication effects from other conditions, and track changes over time. This is particularly valuable when cognitive complaints are subjective or when multiple factors might be contributing.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Optimize other health factors:</strong>
                <p className="text-[var(--color-ink)] leading-loose">Ensure adequate sleep, maintain good hydration, exercise regularly, and manage stress. These factors can reduce vulnerability to cognitive side effects and improve overall brain health.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong className="text-[var(--color-ink)]">Implement cognitive strategies:</strong>
                <p className="text-[var(--color-ink)] leading-loose">While addressing the root cause, use compensatory strategies like written reminders, smartphone alarms, organized routines, and breaking complex tasks into smaller steps.</p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Never discontinue prescribed medications without consulting your healthcare provider. Abrupt cessation can be dangerous for certain medications and may worsen your underlying condition. Any changes should be made under medical supervision with appropriate tapering when necessary.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Neuropsychological Assessment
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Neuropsychological evaluation offers unique benefits for understanding and addressing medication-related cognitive concerns. Unlike subjective complaints or brief office screenings, comprehensive neuropsychological testing provides objective, detailed measurement of cognitive strengths and weaknesses across multiple domains.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A neuropsychological evaluation can establish a cognitive baseline before starting medications known to carry cognitive risks, allowing for clear before-and-after comparisons. If you're already experiencing problems, testing can determine whether observed difficulties represent true impairment or fall within normal ranges, differentiate medication effects from other conditions like depression or sleep disorders, identify specific cognitive domains affected, and provide evidence to support medication changes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For individuals in Fredericksburg and surrounding areas experiencing cognitive concerns related to medications, professional assessment provides clarity and direction. Understanding the specific nature and extent of cognitive changes enables more targeted interventions and better communication with all members of your healthcare team.
          </p>

          {/* Closing */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward with Confidence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cognitive side effects from medications are common, manageable, and—most importantly—not something you have to accept as inevitable. Your mental clarity matters as much as the physical symptoms your medications are treating. By staying informed, monitoring your cognitive function, and maintaining open communication with your healthcare providers, you can optimize both your physical and cognitive health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you've noticed changes in your memory, attention, or thinking since starting or adjusting medications, professional evaluation can provide answers and solutions. At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, we specialize in comprehensive cognitive assessment that can clarify whether medications are affecting your thinking and guide recommendations for optimization. You don't have to choose between treating your condition and maintaining cognitive clarity—with the right assessment and collaboration with your medical team, you can achieve both.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner, offering comprehensive neuropsychological assessment and evidence-based care in Fredericksburg, VA.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Cognitive Assessment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn what to expect during a comprehensive neuropsychological evaluation and how it can help clarify cognitive concerns.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Depression and Memory
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the complex relationship between mood disorders and cognitive function, and strategies for improvement.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Cognitive Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Brain Health Strategies for Better Thinking
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Evidence-based lifestyle approaches to support cognitive function and optimize brain health at any age.
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
            Our team is here to help you understand and address cognitive concerns related to medications.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium"
          >
            <span>Schedule Your Consultation</span>
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}