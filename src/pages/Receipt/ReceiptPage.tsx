import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'

import ReceiptView from './ReceiptView'

const ReceiptPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = translations[locale]

  const bankName = location.state?.bankName || 'АТ «ОЩАДБАНК»'
  const leftColumnTop = location.state?.leftColumnTop || 'Внесено: 1000,00 грн.\nСума операції: 1000,00 грн.\nЗараховано отримувачу: 1000,00 грн.\nКомісія банку: 0,00 грн.\nДата та час: 15.04.2026 18:21:06'
  const leftColumnBottom = location.state?.leftColumnBottom || 'Послуга: поповнення карткового рахунку, ПЕКАРСЬКИЙ С. П.\nНомер картки: 5167 **** **** 9476\nПлатник: Пекарський Сергій Петрович\nБанк платника: АТ «ОЩАДБАНК»\nКод банку платника: 300465\nПризначення платежу: поповнення карткового рахунку'
  const rightColumnTop = location.state?.rightColumnTop || 'Квитанція №№: E1XM-K3PL-6JFG-OR3E\nПТКС: 9065007\nАдреса: Рівне, Льонокомбінатівська вул., 9\nКод операції: 30256028782'
  const rightColumnBottom = location.state?.rightColumnBottom || 'Отримувач: Пекарський Сергій Петрович\nРахунок отримувача: UA273333680000026201000390748\nПлатіжна система: Mastercard\nБанк отримувача: АТ «ОЩАДБАНК»\nКод отримувача: 325833352'

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handlePrint = () => {
    // TODO: фізичний друк квитанції
    console.log('Друк квитанції')
  }

  const handleComplete = () => {
    navigate(routePaths.chooseOperationType)
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
                label: 'друкувати',
                variant: 'cancel',
                onClick: handlePrint,
              },
            ]}
            rightButtons={[
              {
                label: t.receiptScreen.back,
                variant: 'continue',
                icon: 'arrow-next',
                onClick: handleComplete,
              },
            ]}
          />
        }
      >
        <ReceiptView
          t={t}
          bankName={bankName}
          leftColumnTop={leftColumnTop}
          leftColumnBottom={leftColumnBottom}
          rightColumnTop={rightColumnTop}
          rightColumnBottom={rightColumnBottom}
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default ReceiptPage