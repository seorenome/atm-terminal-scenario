import { useState, useEffect } from 'react'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import CashAcceptanceView from './CashAcceptanceView'

const CashAcceptancePage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [acceptedAmount, setAcceptedAmount] = useState(0)
  const [isInserting, setIsInserting] = useState(true)

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  // Розрахунок комісії (1%)
  const commission = acceptedAmount * 0.01
  const finalAmount = acceptedAmount - commission

  // Симуляція внесення коштів
  useEffect(() => {
    if (!isInserting) return

    const interval = setInterval(() => {
      setAcceptedAmount((prev) => {
        const next = prev + 100
        if (next >= 1200) {
          setIsInserting(false)
          return 1200
        }
        return next
      })
    }, 500)

    return () => clearInterval(interval)
  }, [isInserting])

  const isValid = acceptedAmount > 0

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
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
                label: t.cashAcceptanceScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.cashAcceptanceScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <CashAcceptanceView
          t={t}
          acceptedAmount={acceptedAmount}
          commission={commission}
          finalAmount={finalAmount}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default CashAcceptancePage