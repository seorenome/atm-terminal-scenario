import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import SmsInput from '../../components/ui/SmsInput/SmsInput'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { routePaths } from '../../constants/routePaths'

import SmsInputView from './SmsInputView'

type SmsInputPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const SmsInputPage = ({ navigation, currentStepId }: SmsInputPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { updateData } = useTransaction()
  const [digits, setDigits] = useState('')
  const [timeLeft, setTimeLeft] = useState(180)

  const t = translations[locale]

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate(routePaths.phoneInput)
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, navigate])

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    setDigits((prev) => {
      if (prev.length >= 4) return prev
      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setDigits((prev) => prev.slice(0, -1))
  }

  const isValid = digits.length === 4

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleContinue = () => {
    if (isValid) {
      updateData({ smsCode: digits })
      navigation.goToNext(currentStepId)
    }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

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
            onExit={handleExit}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.footer.cancel,
                variant: 'cancel',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.smsInputScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: !isValid,
                onClick: handleContinue,
              },
            ]}
          />
        }
      >
        <SmsInputView
          t={t}
          minutes={minutes}
          seconds={seconds}
          input={
            <SmsInput
              value={digits}
              placeholder={t.smsInputScreen.emptyMask}
            />
          }
          keypad={
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.smsInputScreen.delete}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withScenario(SmsInputPage, 'smsInput')