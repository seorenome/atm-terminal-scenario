import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'
import { useTransaction } from '../../context/TransactionContext'
import { paymentConfig } from '../../config/paymentConfig'
import { getReceiptConfig } from '../../config/receiptConfig'
import type { ScenarioId } from '../../config/scenarioConfig'

import ReceiptView from './ReceiptView'

const ReceiptPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const { data } = useTransaction()

  const t = translations[locale]
  const scenarioId = location.state?.scenarioId as ScenarioId

  const bankName = 'АТ «ОЩАДБАНК»'

  // Дані з контексту
  const iban = data.iban
  const paymentPurpose = data.paymentPurpose
  const phoneNumber = data.phoneNumber
  const cardNumber = data.cardNumber
  const payerName = paymentConfig.payerName

  const receiptConfig = getReceiptConfig(scenarioId, {
    iban,
    paymentPurpose,
    phoneNumber,
    payerName,
    cardNumber,
  })

  const leftColumnTopText = receiptConfig.leftColumnTop.join('\n')
  const leftColumnBottomText = receiptConfig.leftColumnBottom.join('\n')
  const rightColumnTopText = receiptConfig.rightColumnTop.join('\n')
  const rightColumnBottomText = receiptConfig.rightColumnBottom.join('\n')

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleComplete = () => {
    navigate(routePaths.chooseOperationType)
  }

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
                label: t.receiptScreen.print,
                variant: 'cancel',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.receiptScreen.complete,
                variant: 'continue',
                icon: 'arrow-next',
                onClick: handleComplete,
              },
            ]}
          />
        }
      >
        <ReceiptView
          bankName={bankName}
          leftColumnTop={leftColumnTopText}
          leftColumnBottom={leftColumnBottomText}
          rightColumnTop={rightColumnTopText}
          rightColumnBottom={rightColumnBottomText}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default ReceiptPage