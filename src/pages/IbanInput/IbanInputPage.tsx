import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import IbanInput from '../../components/ui/IbanInput/IbanInput'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { routePaths } from '../../constants/routePaths'
import IbanInputView from './IbanInputView'
import { withInactivity } from '../../hoc/withInactivity'

type IbanInputPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const validateIbanFull = (digits: string): boolean => {
  if (digits.length !== 27) return false

  const iban = 'UA' + digits
  const rearranged = iban.slice(4) + iban.slice(0, 4)
  const numeric = rearranged.split('').map(char => {
    const code = char.charCodeAt(0)
    if (code >= 65 && code <= 90) return (code - 55).toString()
    return char
  }).join('')

  let remainder = 0
  for (let i = 0; i < numeric.length; i++) {
    remainder = (remainder * 10 + parseInt(numeric[i], 10)) % 97
  }
  return remainder === 1
}

const IbanInputPage = ({ navigation, currentStepId }: IbanInputPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { updateData } = useTransaction()
  const [digits, setDigits] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    if (digits.length < 27) {
      setDigits((prev) => prev + digit)
    }
  }

  const handleDeleteClick = () => {
    setDigits((prev) => prev.slice(0, -1))
  }

  const isButtonActive = digits.length === 27

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleContinue = () => {
    if (validateIbanFull(digits)) {
      updateData({ iban: digits })
      navigation.goToNext(currentStepId)
    } else {
      navigation.goToError(currentStepId)
    }
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
            onExit={handleExit}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.footer.back,
                variant: 'back',
                icon: 'arrow-back',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.ibanInputScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: !isButtonActive,
                onClick: handleContinue,
              },
            ]}
          />
        }
      >
        <IbanInputView
          t={t}
          input={<IbanInput value={digits} />}
          keypad={
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.ibanInputScreen.delete}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withInactivity(withScenario(IbanInputPage, 'ibanInput'))