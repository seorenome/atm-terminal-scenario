import { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import { withScenario } from '../../hoc/withScenario'
import { withInactivity } from '../../hoc/withInactivity'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { routePaths } from '../../constants/routePaths'
import utilitiesMockData from '../../data/utilitiesMockData.json'
import {
  Content,
  InputWrapper,
  Left,
  Right,
  Title,
  TitleBlock,
  TitleRow,
  InfoCard,
  InfoLabel,
  InfoValue,
  InfoRow,
  InputField,
  InputPlaceholder,
  HintCard,
  HintText,
} from './AccountInputView.styled'

type AccountInputPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToStep: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const AccountInputPage = ({ navigation, currentStepId }: AccountInputPageProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { locale, setLocale } = useLocale()
  const { updateData } = useTransaction()
  const [accountNumber, setAccountNumber] = useState('')
  const [foundData, setFoundData] = useState<null | {
    payerName: string
    address: string
    amount: number
  }>(null)

  const t = translations[locale]
  const operatorId = location.state?.operatorId
  const operator = utilitiesMockData.operators.find(op => op.id === operatorId)

  const requiredLength = operator?.accountLength || 12
  const isComplete = accountNumber.length === requiredLength

  const getLastDigit = useCallback((account: string): string => {
    if (account.length === 0) return '0'
    return account.slice(-1)
  }, [])

  useEffect(() => {
    if (isComplete && operator) {
      const lastDigit = getLastDigit(accountNumber)
      const data = operator.dataByLastDigit[lastDigit as keyof typeof operator.dataByLastDigit]
      if (data) {
        setFoundData(data)
      } else {
        setFoundData(null)
      }
    } else {
      setFoundData(null)
    }
  }, [accountNumber, isComplete, operator, getLastDigit])

  const handleLanguageChange = useCallback((language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }, [setLocale])

  const handleDigitClick = useCallback((digit: string) => {
    if (accountNumber.length < requiredLength) {
      setAccountNumber((prev) => prev + digit)
    }
  }, [accountNumber.length, requiredLength])

  const handleDeleteClick = useCallback(() => {
    setAccountNumber((prev) => prev.slice(0, -1))
  }, [])

  const handleExit = useCallback(() => {
    navigate(routePaths.chooseOperationType)
  }, [navigate])

  const handleBack = useCallback(() => {
    navigation.goToStep('utilities')
  }, [navigation])

  const handleContinue = useCallback(() => {
    if (isComplete && foundData && operator) {
      updateData({
        operatorId: operator.id,
        operatorName: operator.name,
        serviceType: operator.serviceType,
        accountNumber: accountNumber,
        payerName: foundData.payerName,
        serviceAddress: foundData.address,
        amount: foundData.amount,
      })
      navigation.goToNext(currentStepId)
    }
  }, [isComplete, foundData, operator, accountNumber, updateData, navigation, currentStepId])

  const displayValue = useMemo(() => {
    if (accountNumber.length === 0) {
      return '_'.repeat(requiredLength)
    }
    return accountNumber + '_'.repeat(requiredLength - accountNumber.length)
  }, [accountNumber, requiredLength])

  const hintText = useMemo(() => {
    return t.accountInputScreen.hint.replace('{length}', requiredLength.toString())
  }, [t.accountInputScreen.hint, requiredLength])

  const isButtonDisabled = !isComplete || !foundData

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
                label: t.accountInputScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: isButtonDisabled,
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
                <Title>{t.accountInputScreen.title}</Title>
              </TitleRow>
            </TitleBlock>

            <InputWrapper>
              <InputField>
                {accountNumber.length === 0 ? (
                  <InputPlaceholder>{displayValue}</InputPlaceholder>
                ) : (
                  displayValue
                )}
              </InputField>
            </InputWrapper>

            {!isComplete && (
              <HintCard>
                <HintText>{hintText}</HintText>
              </HintCard>
            )}

            {isComplete && foundData && (
              <InfoCard>
                <InfoRow>
                  <InfoLabel>Отримувач:</InfoLabel>
                  <InfoValue>{operator?.name}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Платник:</InfoLabel>
                  <InfoValue>{foundData.payerName}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Адреса:</InfoLabel>
                  <InfoValue>{foundData.address}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Заборгованість:</InfoLabel>
                  <InfoValue>{foundData.amount.toFixed(2)} грн.</InfoValue>
                </InfoRow>
              </InfoCard>
            )}
          </Left>

          <Right>
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.accountInputScreen.delete}
            />
          </Right>
        </Content>
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withInactivity(withScenario(AccountInputPage, 'accountInput'))