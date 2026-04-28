import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { withScenario } from '../../hoc/withScenario'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { routePaths } from '../../constants/routePaths'
import UtilitiesView from './UtilitiesView'
import { utilitiesData, type UtilityOperator } from '../../config/utilitiesData'

type UtilitiesPageProps = {
  navigation: {
    goToNext: (stepId: string, state?: unknown) => void
    goToError: (stepId: string, state?: unknown) => void
    goToStep: (stepId: string, state?: unknown) => void
  }
  currentStepId: string
}

const ITEMS_PER_PAGE = 8

const UtilitiesPage = ({ navigation, currentStepId }: UtilitiesPageProps) => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const [currentPage, setCurrentPage] = useState(1)

  const t = translations[locale]

  const totalPages = Math.ceil(utilitiesData.length / ITEMS_PER_PAGE)
  const currentOperators = utilitiesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleIbanClick = () => {
    navigate(routePaths.ibanInput, { state: { scenarioId: 'billsPayment' } })
  }

  const handleOperatorClick = (operator: UtilityOperator) => {
    // Перехід на сторінку введення рахунку з передачею ID оператора
    navigation.goToStep('accountInput', { operatorId: operator.id })
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
          operators={currentOperators}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onIbanClick={handleIbanClick}
          onOperatorClick={handleOperatorClick}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default withScenario(UtilitiesPage, 'utilities')