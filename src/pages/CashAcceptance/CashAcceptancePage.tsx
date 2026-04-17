import { useState, useEffect } from 'react'
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
import { routePaths } from '../../constants/routePaths'
import CashAcceptanceView from './CashAcceptanceView'

type CashAcceptancePageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const CashAcceptancePage = ({ navigation, currentStepId }: CashAcceptancePageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { updateData, data } = useTransaction()
  const [acceptedAmount, setAcceptedAmount] = useState(0)
  const [isInserting, setIsInserting] = useState(true)

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  useEffect(() => {
    if (!isInserting) return

    const interval = setInterval(() => {
      setAcceptedAmount((prev) => {
        const next = prev + 100
        if (next >= 1200) {
          setIsInserting(false)
          updateData({ amount: 1200 })
          return 1200
        }
        return next
      })
    }, 500)

    return () => clearInterval(interval)
  }, [isInserting, updateData])

  const commission = acceptedAmount * 0.01
  const finalAmount = acceptedAmount - commission
  const isValid = acceptedAmount > 0

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.paymentInfo)
  }

  const handleContinue = () => {
    if (isValid) {
      navigation.goToNext(currentStepId)
    }
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
            onExit={handleExit}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.cashAcceptanceScreen.back,
                variant: 'cancel',
                icon: 'arrow-back',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.cashAcceptanceScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: !isValid,
                onClick: handleContinue,
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

export default withScenario(CashAcceptancePage, 'cashAcceptance')