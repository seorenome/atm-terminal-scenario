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
import { paymentConfig } from '../../config/paymentConfig'

import PaymentInfoView from './PaymentInfoView'

const PaymentInfoPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const cardNumber = location.state?.cardNumber || '5167 **** **** 4826'
  const phoneNumber = location.state?.phoneNumber || '+38 (096) 834 - 70-01'
  const amount = location.state?.amount || 'від 1 до 5000 грн.'

  const commission = `${paymentConfig.commissionPercent}%`
  const acceptedBills = paymentConfig.acceptedBills
  const payerName = paymentConfig.payerName
  const paymentPurpose = paymentConfig.paymentPurpose
  const recipientName = location.state?.recipientName || 'Сергій П.'

  const handleCancel = () => {
    navigate(routePaths.cardInput)
  }

  const handleContinue = () => {
    navigate(routePaths.cashAcceptance)
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
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
                label: t.paymentInfoScreen.cancel,
                variant: 'cancel',
                onClick: handleCancel,
              },
            ]}
            rightButtons={[
              {
                label: t.paymentInfoScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                onClick: handleContinue,
              },
            ]}
          />
        }
      >
        <PaymentInfoView
          t={t}
          cardNumber={cardNumber}
          phoneNumber={phoneNumber}
          payerName={payerName}
          recipientName={recipientName}
          paymentPurpose={paymentPurpose}
          amount={amount}
          commission={commission}
          acceptedBills={acceptedBills}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default PaymentInfoPage