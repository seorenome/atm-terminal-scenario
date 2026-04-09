import { useState } from 'react'
import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import PhoneInputView from './PhoneInputView'

const PhoneInputPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const handleLanguageChange = (_language: HeaderLanguage) => {
    setLocale((prev) => prev)
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="numeric-entry"
        header={
          <TerminalHeader
            variant="action-button"
            actionLabel={t.header.exit}
            supportPhone={t.header.supportPhone}
            supportDescription={t.header.supportDescription}
            onLanguageChange={handleLanguageChange}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.phoneInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.phoneInputScreen.continue,
                variant: 'continue',
              },
            ]}
          />
        }
      >
        <PhoneInputView t={t} />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default PhoneInputPage