import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { paymentConfig } from '../../config/paymentConfig'

import PaymentInfoView from './PaymentInfoView'

type PaymentInfoPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const PaymentInfoPage = ({ navigation, currentStepId }: PaymentInfoPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { data } = useTransaction()

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const cardNumber = data.cardNumber || '5167 **** **** 4826'
  const phoneNumber = data.phoneNumber || '+38 (096) 834 - 70-01'
  const amount = 'від 1 до 5000 грн.'
  const commission = `${paymentConfig.commissionPercent}%`
  const acceptedBills = paymentConfig.acceptedBills
  const payerName = paymentConfig.payerName
  const paymentPurpose = data.paymentPurpose || paymentConfig.paymentPurpose
  const recipientName = 'Сергій П.'

  const handleCancel = () => {
    navigation.goToError(currentStepId)
  }

  const handleContinue = () => {
    navigation.goToNext(currentStepId)
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
                icon: 'arrow-back',
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

export default withScenario(PaymentInfoPage, 'paymentInfo')