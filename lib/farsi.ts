// ─────────────────────────────────────────────────────────────────────────────
// The English and Persian (Farsi) landing pages for Farsi-speaking patients.
//
// Both pages, the sitemap and the hreflang tags read from this file, so the two
// URLs can never disagree about each other.
//
// Every service listed here comes from the practice's own sentence, kept in
// lib/practice.ts (PROVIDERS[0].bio[0]): "She provides therapy and
// psychological, ADHD, neuropsychological, disability, and pre-bariatric surgery
// evaluations to adolescents and adults in both Persian/Farsi and English."
// Immigration evaluations are the practice's own addition (2026-08-18); its
// service page says they are conducted in English or Persian/Farsi.
// Medication management is deliberately ABSENT: it is provided by Anais Schultz
// in English and Spanish, not in Farsi.
//
// ⚠️ The Persian text is machine translation, published 2026-10-31 on Paul's
// instruction without native-speaker review. Ask Dr. Khanali to read it.
// ─────────────────────────────────────────────────────────────────────────────

import { SITE_URL } from '@/lib/practice'

export const FARSI_EN_PATH = '/farsi-speaking-psychologist'
export const FARSI_FA_PATH = '/fa/farsi-speaking-psychologist'

/** hreflang pairs, used by both pages' metadata and by the sitemap. */
export const FARSI_LANGUAGE_ALTERNATES = {
  en: `${SITE_URL}${FARSI_EN_PATH}`,
  fa: `${SITE_URL}${FARSI_FA_PATH}`,
  'x-default': `${SITE_URL}${FARSI_EN_PATH}`,
}

export type FarsiService = {
  en: string
  fa: string
  /** Existing English service page, when there is one. */
  href?: string
  outOfPocket?: boolean
}

export const FARSI_SERVICES: FarsiService[] = [
  { en: 'Therapy', fa: 'روان‌درمانی', href: '/services/individual-therapy' },
  { en: 'Psychological evaluations', fa: 'ارزیابی روانشناختی' },
  { en: 'ADHD evaluations', fa: 'ارزیابی ADHD (اختلال نقص توجه و بیش‌فعالی)', href: '/services/adhd-testing' },
  { en: 'Neuropsychological evaluations', fa: 'ارزیابی عصب‌روانشناختی', href: '/services/neuropsychological-evaluations' },
  { en: 'Disability evaluations', fa: 'ارزیابی ناتوانی (Disability)', href: '/services/disability-evaluations' },
  { en: 'Pre-bariatric surgery evaluations', fa: 'ارزیابی روانشناختی پیش از جراحی چاقی (باریاتریک)', href: '/services/pre-bariatric-surgery-evaluations' },
  { en: 'Immigration evaluations', fa: 'ارزیابی روانشناختی برای پرونده‌های مهاجرتی', href: '/services/immigration-evaluations', outOfPocket: true },
]
