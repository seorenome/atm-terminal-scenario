import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import PhoneInput from '../../components/ui/PhoneInput/PhoneInput'
import { withInactivity } from '../../hoc/withInactivity'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { useLoader } from '../../context/LoaderContext'
import { routePaths } from '../../constants/routePaths'
import type { ScenarioId } from '../../config/scenarioConfig'
import {
  Content,
  HintCard,
  HintText,
  ErrorText,
  InputWrapper,
  Left,
  Right,
  Title,
  TitleBlock,
  TitleRow,
} from './PhoneInputView.styled'

type PhoneInputPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
    goToStep: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const isValidPrefix = (digits: string): boolean => {
  if (digits.length < 2) return false
  const prefix = digits.slice(0, 2)
  const validPrefixes = ['05', '06', '07', '08', '09']
  return validPrefixes.includes(prefix)
}

const PhoneInputPage = ({ navigation, currentStepId }: PhoneInputPageProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { locale, setLocale } = useLocale()
  const { updateData } = useTransaction()
  const { withLoader } = useLoader()
  const [phoneDigits, setPhoneDigits] = useState('')

  const t = translations[locale]
  const scenarioId = location.state?.scenarioId as ScenarioId

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    setPhoneDigits((prev) => {
      if (prev.length >= 10) return prev
      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setPhoneDigits((prev) => prev.slice(0, -1))
  }

  const isFullLength = phoneDigits.length === 10
  const isPrefixValid = isValidPrefix(phoneDigits)
  const isValid = isFullLength && isPrefixValid
  const showError = isFullLength && !isPrefixValid

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    if (scenarioId === 'cardTopUp') {
      navigation.goToStep('cardInput')
    } else if (scenarioId === 'billsPayment') {
      navigation.goToStep('ibanInput')
    } else if (scenarioId === 'mobileTopUp') {
      navigate(routePaths.chooseOperationType)
    } else {
      navigate(routePaths.chooseOperationType)
    }
  }

  const handleContinue = () => {
    if (isValid) {
      updateData({ phoneNumber: phoneDigits })
      withLoader(() => {
        navigation.goToNext(currentStepId)
      })
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
                label: t.phoneInputScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: !isValid,
                onClick: handleContinue,
              },
            ]}
          />
        }
      >
        <Content>
          <Left>
            <TitleBlock>
              <TitleRow>
                <Title>{t.phoneInputScreen.title}</Title>
              </TitleRow>
            </TitleBlock>

            <InputWrapper>
              <PhoneInput
                value={phoneDigits}
                placeholder={t.phoneInputScreen.emptyMask}
              />
            </InputWrapper>

            <HintCard>
              <HintText>{t.phoneInputScreen.hint}</HintText>
              {showError && (
                <ErrorText>{t.phoneInputScreen.errorMessage}</ErrorText>
              )}
            </HintCard>
          </Left>

          <Right>
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.phoneInputScreen.delete}
            />
          </Right>
        </Content>
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withInactivity(withScenario(PhoneInputPage, 'phoneInput'))