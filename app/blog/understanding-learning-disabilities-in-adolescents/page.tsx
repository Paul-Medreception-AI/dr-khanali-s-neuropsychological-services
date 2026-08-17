import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Understanding Learning Disabilities in Adolescents | Dr. Khanali\'s Neuropsychological Services',
  description: 'Comprehensive guide to recognizing, understanding, and supporting adolescents with learning disabilities. Expert insights from neuropsychology specialists in Arlington, VA.',
  keywords: 'learning disabilities, adolescents, teenagers, dyslexia, ADHD, neuropsychological evaluation, Arlington VA, educational support',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Mental Health • Patient Education</div>
          
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Learning Disabilities in Adolescents
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali&apos;s Services Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p className="text-xl leading-relaxed">
              When a bright, capable teenager struggles academically despite their best efforts, it can be confusing and deeply frustrating—for both the adolescent and their family. Learning disabilities don&apos;t reflect intelligence or effort; they are neurodevelopmental differences in how the brain processes information. Understanding these challenges is the first step toward effective support and empowerment.
            </p>

            <p>
              Adolescence is a critical period of identity formation, social development, and academic pressure. When learning disabilities go unrecognized or unsupported during these years, they can impact not just grades, but self-esteem, peer relationships, and future opportunities. The good news? With proper evaluation, understanding, and intervention, adolescents with learning disabilities can thrive academically and personally.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are Learning Disabilities?
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Learning disabilities are neurologically-based processing problems that affect how individuals receive, process, store, or respond to information. These are not problems with intelligence—many individuals with learning disabilities have average or above-average IQ scores. Rather, they represent specific differences in how the brain is wired for learning.
            </p>

            <p>
              Common types of learning disabilities include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Dyslexia</strong> — difficulties with reading, spelling, and decoding words despite normal vision and intelligence</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Dyscalculia</strong> — challenges with mathematical concepts, number sense, and calculation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Dysgraphia</strong> — difficulties with writing, including handwriting, spelling, and organizing thoughts on paper</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Language processing disorders</strong> — trouble understanding or producing spoken language</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Non-verbal learning disabilities</strong> — difficulties with visual-spatial processing, motor coordination, and social cues</span>
              </li>
            </ul>

            <p>
              It&apos;s important to note that learning disabilities often co-occur with attention disorders like ADHD, making comprehensive neuropsychological evaluation essential for accurate diagnosis and treatment planning.
            </p>
          </div>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;Learning disabilities are not a reflection of intelligence or effort. They are differences in how the brain processes information—and with the right support, students can excel.&quot;
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recognizing Signs in Adolescents
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              While learning disabilities are lifelong conditions, they may not be identified until adolescence when academic demands increase significantly. Middle and high school require more independent reading, complex problem-solving, abstract thinking, and written expression—all areas where learning disabilities become more apparent.
            </p>

            <p>
              Warning signs in adolescents may include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Significant discrepancy between verbal ability and written work</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reading slowly or avoiding reading assignments</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty organizing thoughts or completing multi-step assignments</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Spending excessive time on homework compared to peers</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Poor performance on tests despite knowing the material</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty following multi-step directions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Struggling with time management and planning</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoidance of school or specific subjects</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Decreased self-confidence or increased anxiety about academics</span>
              </li>
            </ul>

            <p>
              These challenges often lead to secondary emotional difficulties. Adolescents may develop anxiety, depression, or behavioral problems as they struggle to keep up with peers. They may internalize their difficulties, believing they are &quot;not smart enough,&quot; which can significantly impact their self-esteem and motivation.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Neuropsychological Evaluation
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              A comprehensive neuropsychological evaluation is crucial for accurately identifying learning disabilities and developing an effective intervention plan. Unlike brief school screenings, a full neuropsychological assessment examines multiple cognitive domains to create a detailed profile of strengths and challenges.
            </p>

            <p>
              During an evaluation, we assess:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Intellectual functioning</strong> — overall cognitive abilities and reasoning skills</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Academic achievement</strong> — reading, writing, and math skills compared to grade level</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Memory and learning</strong> — how information is encoded, stored, and retrieved</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Attention and executive function</strong> — focus, planning, organization, and self-regulation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Language processing</strong> — understanding and expressing language</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Visual-spatial skills</strong> — processing visual information and spatial relationships</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Processing speed</strong> — how quickly information is processed</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Emotional functioning</strong> — mood, anxiety, and behavioral factors that may impact learning</span>
              </li>
            </ul>

            <p>
              This comprehensive approach allows us to identify not just the presence of a learning disability, but its specific nature and how it interacts with other cognitive and emotional factors. This information is essential for developing targeted interventions and appropriate accommodations.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Supporting Adolescents with Learning Disabilities
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              Once a learning disability is identified, several evidence-based interventions and supports can make a significant difference:
            </p>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
              Educational Accommodations
            </h3>

            <p>
              Schools are required under federal law (IDEA and Section 504) to provide appropriate accommodations for students with documented learning disabilities. Common accommodations include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Extended time on tests and assignments</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use of assistive technology (text-to-speech, speech-to-text software)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Note-taking support or access to teacher notes</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Preferential seating to minimize distractions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Modified assignments that assess the same content differently</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to a quiet testing environment</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Audio books or digital texts</span>
              </li>
            </ul>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
              Specialized Instruction and Tutoring
            </h3>

            <p>
              Beyond accommodations, many adolescents benefit from specialized instruction that targets their specific learning challenges. This might include:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Structured literacy programs for dyslexia (such as Orton-Gillingham or Wilson Reading)</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Executive function coaching to improve organization and time management</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Writing process instruction with explicit strategy teaching</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Math intervention focusing on conceptual understanding and problem-solving strategies</span>
              </li>
            </ul>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
              Building Self-Advocacy Skills
            </h3>

            <p>
              One of the most important goals for adolescents with learning disabilities is developing self-advocacy skills. As they prepare for college and careers, they need to understand their learning profile and be able to:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Explain their learning disability and how it affects them</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Request appropriate accommodations</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identify and use strategies that help them learn effectively</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Recognize their strengths and leverage them</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Develop a positive identity that includes, but is not limited by, their learning disability</span>
              </li>
            </ul>

            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mt-8 mb-3">
              Addressing Emotional and Social Needs
            </h3>

            <p>
              The emotional impact of learning disabilities cannot be overlooked. Many adolescents benefit from counseling or therapy to address:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Anxiety about academic performance</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Low self-esteem related to academic struggles</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Social difficulties that may accompany certain learning disabilities</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family stress and communication around school challenges</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;The goal is not to fix the adolescent, but to help them understand their unique learning profile and develop strategies to succeed on their own terms.&quot;
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Looking Toward the Future
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              With proper identification and support, adolescents with learning disabilities can and do succeed academically and professionally. Many successful individuals—including entrepreneurs, scientists, artists, and leaders—have learning disabilities. What makes the difference is:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Early and accurate identification</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Appropriate academic support and accommodations</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Development of compensatory strategies</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strong self-advocacy skills</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Supportive families and educators</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Focus on strengths and interests</span>
              </li>
            </ul>

            <p>
              It&apos;s also important to remember that learning disabilities do not represent a ceiling on achievement—they simply mean that individuals learn differently and may need to approach tasks in alternative ways. Many individuals with learning disabilities develop exceptional problem-solving skills, creativity, and resilience as a result of navigating their challenges.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Help
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              If you&apos;re concerned that your adolescent may have a learning disability, consider seeking a comprehensive neuropsychological evaluation if:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Academic performance doesn&apos;t match their apparent ability</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>They&apos;re working significantly harder than peers for similar or poorer results</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>School struggles are causing significant stress or emotional distress</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Previous interventions haven&apos;t been effective</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>They&apos;re avoiding school or specific subjects</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You need documentation for school accommodations or college entrance exams</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>There&apos;s a family history of learning disabilities</span>
              </li>
            </ul>

            <p>
              The adolescent years are a crucial time for academic and personal development. Identifying and addressing learning disabilities during this period can significantly impact not just current academic success, but future educational and career opportunities, as well as overall well-being and self-confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white p-8 my-12 text-center">
            <h3 className="font-cormorant text-2xl mb-4">Take the First Step Toward Understanding</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              If your adolescent is struggling academically despite their efforts, a comprehensive neuropsychological evaluation can provide clarity, direction, and hope. Our team specializes in adolescent assessments and is committed to helping young people understand their unique learning profiles and reach their full potential.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8 mt-12">
            <p className="text-sm text-[var(--color-muted)]">
              <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute medical or psychological advice. If you have concerns about your adolescent&apos;s learning or academic performance, please consult with a qualified healthcare professional for personalized guidance.
            </p>
          </div>

        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/neuropsychological-evaluation" className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Neuropsychological Evaluations</h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">Learn about our comprehensive assessment process</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Learn More →</span>
            </Link>

            <Link href="/blog/adhd-academic-performance" className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">ADHD & Academic Performance</h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">Understanding the overlap between ADHD and learning challenges</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">Read Article →</span>
            </Link>

            <Link href="/resources/parent-resources" className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Parent Resources</h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">Tools and information for supporting your child</p>
              <span className="text-[var(--color-primary)] text-sm font-medium">View Resources →</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}