import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import AlphanumericKeypad from '../../components/ui/AlphanumericKeypad/AlphanumericKeypad'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { useTransaction } from '../../context/TransactionContext'
import { routePaths } from '../../constants/routePaths'
import { withInactivity } from '../../hoc/withInactivity'
import {
  ContentWrapper,
  InputField,
  InputWrapper,
  PageTitle,
  TitleWrapper,
} from './PaymentPurposeView.styled'

type PaymentPurposePageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const PaymentPurposePage = ({ navigation, currentStepId }: PaymentPurposePageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const { updateData, data } = useTransaction()
  const [value, setValue] = useState(data.paymentPurpose || '')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleKeyPress = (key: string) => {
    if (value.length < 100) {
      setValue((prev) => prev + key)
    }
  }

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1))
  }

  const isValid = value.length > 0 && value.length <= 100

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleContinue = () => {
    if (isValid) {
      updateData({ paymentPurpose: value })
      navigation.goToNext(currentStepId)
    }
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
        backgroundColor="rgba(38, 207, 200, 1)"
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
                label: t.paymentPurposeScreen.continue,
                variant: 'continue',
                icon: 'arrow-next',
                disabled: !isValid,
                onClick: handleContinue,
              },
            ]}
          />
        }
      >
        <ContentWrapper>
          <TitleWrapper>
            <PageTitle>{t.paymentPurposeScreen.title}</PageTitle>
          </TitleWrapper>

          <InputWrapper>
            <InputField
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t.paymentPurposeScreen.placeholder}
              maxLength={100}
            />
          </InputWrapper>

          <AlphanumericKeypad
            onKeyPress={handleKeyPress}
            onDelete={handleDelete}
            deleteLabel={t.paymentPurposeScreen.delete}
            enLabel={t.paymentPurposeScreen.en}
            uaLabel={t.paymentPurposeScreen.ua}
          />
        </ContentWrapper>
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withInactivity(withScenario(PaymentPurposePage, 'paymentPurpose'))