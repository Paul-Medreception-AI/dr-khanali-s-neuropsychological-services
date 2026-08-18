import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { OFFICES } from '@/lib/practice'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.drkhanalineuropsychologicalservicesllc.com'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/privacy-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  // Generated from lib/data/services.ts so the sitemap can never advertise a URL
  // that has no page. The autobuild hardcoded this list and shipped
  // /services/neuropsychological-evaluations while the page had been deleted.
  const servicePages = SERVICES.map(s => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }))

  const conditionPages = CONDITIONS.map(c => ({
    url: `${base}/conditions/${c.slug}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }))

  const blogPages = [
    { url: `${base}/blog/what-to-expect-during-a-neuropsychological-evaluation`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/adhd-in-adults-signs-you-might-have-missed`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-importance-of-culturally-sensitive-mental-health-care`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/preparing-for-pre-bariatric-surgery-psychological-evaluation`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/disability-evaluations-understanding-the-process`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/bilingual-therapy-the-benefits-of-treatment-in-your-native-l`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/executive-function-the-brain-s-management-system`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/when-memory-problems-signal-something-more-serious`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/trauma-and-the-brain-how-ptsd-affects-cognition`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/telehealth-psychology-quality-care-from-anywhere`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-learning-disabilities-in-adolescents`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-neuropsychology-in-stroke-recovery`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/depression-vs-cognitive-decline-sorting-out-the-symptoms`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/accommodation-letters-how-evaluations-support-your-needs`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/persian-cultural-considerations-in-mental-health-treatment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/anxiety-disorders-more-than-just-worry`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/cognitive-assessment-tools-what-tests-measure`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/supporting-a-loved-one-through-psychological-evaluation`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/autism-in-adulthood-late-diagnosis-considerations`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/chronic-pain-and-cognitive-function`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-sleep-and-cognitive-performance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/neuropsychological-testing-for-children-vs-adults`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/processing-speed-why-some-brains-work-slower`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-your-insurance-covers-for-psychological-testing`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/medication-and-cognitive-side-effects`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/grief-and-cognitive-function-the-fog-of-loss`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/workplace-accommodations-for-adhd-your-rights`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-immigrant-experience-and-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/social-anxiety-beyond-shyness`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/brain-injury-long-term-cognitive-effects`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/therapy-in-your-second-language-challenges-and-solutions`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/attention-problems-adhd-or-something-else`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/age-related-cognitive-changes-what-s-normal`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/psychological-preparation-for-major-surgery`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/executive-dysfunction-in-daily-life-practical-strategies`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-value-of-comprehensive-psychological-reports`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/adjustment-disorders-when-life-changes-overwhelm`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/cognitive-rehabilitation-retraining-your-brain`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/behavioral-challenges-understanding-the-underlying-causes`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/finding-meaning-after-loss-the-grief-journey`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/neuropsychological-vs-psychological-testing`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/in-person-vs-telehealth-psychology`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/adult-vs-child-adhd-testing`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/therapy-vs-medication-anxiety`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/bilingual-therapy-vs-interpreter`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  // Generated from the real office list so a sitemap entry can never outlive the
  // page. The autobuild hardcoded arlington-va / alexandria-va / fairfax-va /
  // bethesda-md — four cities the practice has no office in.
  const locationPages = OFFICES.map(o => ({
    url: `${base}/locations/${o.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  // The legacy Wix URLs (/adh, /ketamine-treatment, /projects-6) are deliberately
  // NOT listed here. They do not exist in this site and are 301'd in next.config.js;
  // a redirecting URL in the sitemap is the "non-canonical page in sitemap" defect.
  const priorRecoveryPages: typeof locationPages = []

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}