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
import { routePaths } from '../../constants/routePaths'
import UtilitiesView from './UtilitiesView'

type UtilitiesPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const UtilitiesPage = ({ navigation, currentStepId }: UtilitiesPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleIbanClick = () => {
    navigate(routePaths.ibanInput)
  }

  const handleCardClick = () => {
    navigation.goToError(currentStepId)
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
        footer={null}
      >
        <UtilitiesView
          t={t}
          onIbanClick={handleIbanClick}
          onCardClick={handleCardClick}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withScenario(UtilitiesPage, 'utilities')