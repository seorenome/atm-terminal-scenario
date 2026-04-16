import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import CardInput from '../../components/ui/CardInput/CardInput'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import { withInactivity } from '../../hoc/withInactivity'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { routePaths } from '../../constants/routePaths'
import {
  Content,
  HintCard,
  HintText,
  InputWrapper,
  Left,
  Right,
  Title,
  TitleBlock,
  TitleRow,
} from './CardInputView.styled'

type CardInputPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const CardInputPage = ({ navigation, currentStepId }: CardInputPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { updateData } = useTransaction()
  const [value, setValue] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    setValue((prev) => {
      if (prev.length >= 16) return prev
      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setValue((prev) => prev.slice(0, -1))
  }

  const isValid = value.length === 16

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleContinue = () => {
    if (isValid) {
      updateData({ cardNumber: value })
      navigation.goToNext(currentStepId)
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
                label: t.cardInputScreen.back,
                variant: 'cancel',
                icon: 'arrow-back',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.cardInputScreen.continue,
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
                <Title>{t.cardInputScreen.title}</Title>
              </TitleRow>
            </TitleBlock>

            <InputWrapper>
              <CardInput
                value={value}
                placeholder={t.cardInputScreen.emptyMask}
              />
            </InputWrapper>

            <HintCard>
              <HintText>{t.cardInputScreen.hint}</HintText>
            </HintCard>
          </Left>

          <Right>
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.cardInputScreen.delete}
            />
          </Right>
        </Content>
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withInactivity(withScenario(CardInputPage, 'cardInput'))