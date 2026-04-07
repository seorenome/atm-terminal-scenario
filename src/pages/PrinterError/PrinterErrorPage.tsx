import { useState } from 'react'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import PrinterErrorView from './PrinterErrorView'

const PrinterErrorPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        header={
          <TerminalHeader
            variant="language-switcher"
            activeLanguage={locale === 'uk' ? 'UA' : 'EN'}
            supportPhone={t.header.supportPhone}
            supportDescription={t.header.supportDescription}
            onLanguageChange={handleLanguageChange}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.footer.cancel,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.footer.continue,
                variant: 'continue',
                icon: 'arrow-next',
              },
            ]}
          />
        }
      >
        <PrinterErrorView
          title={t.printerErrorScreen.title}
          primaryMessage={t.printerErrorScreen.primaryMessage}
          secondaryMessage={t.printerErrorScreen.secondaryMessage}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default PrinterErrorPage