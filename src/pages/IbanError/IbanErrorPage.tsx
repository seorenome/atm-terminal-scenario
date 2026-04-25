import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { translations } from '../../locale'
import { useLocale } from '../../context/LocaleContext'
import { routePaths } from '../../constants/routePaths'
import IbanErrorView from './IbanErrorView'

const IbanErrorPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { locale, setLocale } = useLocale()

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleCancel = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleRepeat = () => {
    navigate(routePaths.ibanInput, { state: location.state })
  }

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
        header={
          <TerminalHeader
            variant="language-switcher"
            activeLanguage={locale === 'uk' ? 'UA' : 'EN'}
            supportPhone={t.header.supportPhone}
            supportDescription={t.header.supportDescription}
            onLanguageChange={handleLanguageChange}
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.footer.cancel,
                variant: 'cancel',
                onClick: handleCancel,
              },
            ]}
            rightButtons={[
              {
                label: t.footer.repeat,
                variant: 'repeat',
                icon: 'arrow-next',
                onClick: handleRepeat,
              },
            ]}
          />
        }
      >
        <IbanErrorView
          title={t.ibanErrorScreen.title}
          primaryMessage={t.ibanErrorScreen.primaryMessage}
          secondaryMessage={t.ibanErrorScreen.secondaryMessage}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default IbanErrorPage