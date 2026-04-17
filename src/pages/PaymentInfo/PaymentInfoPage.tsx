import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
import { routePaths } from '../../constants/routePaths'
import type { ScenarioId } from '../../config/scenarioConfig'

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
  const location = useLocation()
  const { locale, setLocale } = useLocale()
  const { data } = useTransaction()

  const t = translations[locale]
  const scenarioId = location.state?.scenarioId as ScenarioId

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigation.goToError(currentStepId)
  }

  const handleContinue = () => {
    navigation.goToNext(currentStepId)
  }

  // Дані для сценарію "Поповнення картки"
  const cardNumber = data.cardNumber || '5167 **** **** 4826'
  const phoneNumber = data.phoneNumber || '+38 (096) 834 - 70-01'
  const amount = 'від 1 до 5000 грн.'
  const commission = `${paymentConfig.commissionPercent}%`
  const acceptedBills = paymentConfig.acceptedBills
  const payerName = paymentConfig.payerName
  const paymentPurpose = data.paymentPurpose || paymentConfig.paymentPurpose
  const recipientName = 'Сергій П.'

  // Дані для сценарію "Мобільний зв'язок"
  const operator = 'ПрАТ "Київстар"'
  const edrpou = '21673832'
  const iban = 'UA983005280000026004000003072'

  const isCardTopUp = scenarioId === 'cardTopUp'

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
            onExit={handleExit}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.paymentInfoScreen.cancel,
                variant: 'cancel',
                icon: 'arrow-back',
                onClick: handleBack,
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
          scenarioId={scenarioId}
          isCardTopUp={isCardTopUp}
          cardNumber={cardNumber}
          phoneNumber={phoneNumber}
          amount={amount}
          commission={commission}
          acceptedBills={acceptedBills}
          payerName={payerName}
          paymentPurpose={paymentPurpose}
          recipientName={recipientName}
          operator={operator}
          edrpou={edrpou}
          iban={iban}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withScenario(PaymentInfoPage, 'paymentInfo')