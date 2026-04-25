import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { routePaths } from '../../constants/routePaths'
import UtilitiesErrorView from './UtilitiesErrorView'

const UtilitiesErrorPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { locale, setLocale } = useLocale()

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleExit = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleBack = () => {
    navigate(routePaths.utilities, { state: location.state })
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
                label: t.footer.back,
                variant: 'back',
                icon: 'arrow-back',
                onClick: handleBack,
              },
            ]}
            rightButtons={[]}
          />
        }
      >
        <UtilitiesErrorView t={t} />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default UtilitiesErrorPage