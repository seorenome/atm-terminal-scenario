import en from './en'
import uk from './uk'
import type { Locale } from './types'

export const translations = {
  uk,
  en,
} as const

export const defaultLocale: Locale = 'uk'