export type HeaderLanguage = 'UA' | 'EN'

export type TerminalHeaderVariant = 'language-switcher' | 'action-button'

export type TerminalHeaderProps = {
  variant: TerminalHeaderVariant
  activeLanguage?: HeaderLanguage
  actionLabel?: string
  supportPhone: string
  supportDescription: string
  onLanguageChange?: (language: HeaderLanguage) => void
  onExit?: () => void
  disabled?: boolean
}