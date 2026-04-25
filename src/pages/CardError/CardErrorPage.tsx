import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'
import CardErrorView from './CardErrorView'

const CardErrorPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleCancel = () => {
    navigate(routePaths.chooseOperationType)
  }

  const handleRepeat = () => {
    navigate(routePaths.cardInput, { state: location.state })
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
        <CardErrorView
          title={t.errorScreen.title}
          primaryMessage={t.errorScreen.primaryMessage}
          secondaryMessage={t.errorScreen.secondaryMessage}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default CardErrorPage