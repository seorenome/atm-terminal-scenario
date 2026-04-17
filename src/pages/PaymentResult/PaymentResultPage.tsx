import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'

import PaymentResultView from './PaymentResultView'

const PaymentResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const message = location.state?.message || 'Інформаційний блок про успішність операції з довільним текстом.'

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleReceipt = () => {
    navigate(routePaths.receipt)
  }

  const handleComplete = () => {
    navigate(routePaths.chooseOperationType)
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
        backgroundColor="rgba(99, 209, 203, 1)"
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
                label: t.paymentResultScreen.receipt,
                variant: 'cancel',
                onClick: handleReceipt,
              },
            ]}
            rightButtons={[
              {
                label: t.paymentResultScreen.complete,
                variant: 'repeat',
                onClick: handleComplete,
              },
            ]}
          />
        }
      >
        <PaymentResultView t={t} message={message} />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default PaymentResultPage