import { useNavigate } from 'react-router-dom'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { translations } from '../../locale'
import type { ScenarioId } from '../../config/scenarioConfig'
import { useLocale } from '../../context/LocaleContext'
import { routePaths } from '../../constants/routePaths'
import ChooseOperationTypeView from './ChooseOperationTypeView'

const ChooseOperationTypePage = () => {
  const navigate = useNavigate()
  const { locale, setLocale } = useLocale()
  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleCardClick = (scenarioId: ScenarioId) => {
    let path = ''
    switch (scenarioId) {
      case 'cardTopUp':
        path = routePaths.cardInput
        break
      case 'mobileTopUp':
        path = routePaths.phoneInput
        break
      case 'billsPayment':
        path = routePaths.ibanInput
        break
      case 'utilities':
        path = routePaths.textInput
        break
      default:
        path = routePaths.chooseOperationType
    }
    navigate(path, { state: { scenarioId } })
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        header={
          <TerminalHeader
            variant="language-switcher"
            activeLanguage={locale === 'uk' ? 'UA' : 'EN'}
            onLanguageChange={handleLanguageChange}
            supportPhone={t.header.supportPhone}
            supportDescription={t.header.supportDescription}
          />
        }
      >
        <ChooseOperationTypeView t={t} onCardClick={handleCardClick} />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default ChooseOperationTypePage