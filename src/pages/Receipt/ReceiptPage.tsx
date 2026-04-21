import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'
import { useTransaction } from '../../context/TransactionContext'
import { paymentConfig } from '../../config/paymentConfig'

import ReceiptView from './ReceiptView'

const ReceiptPage = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const { data } = useTransaction()

  const t = translations[locale]

  // Дані з контексту (введені користувачем)
  const iban = data.iban || 'UA273333680000026201000390748'
  const paymentPurpose = data.paymentPurpose || 'поповнення карткового рахунку'

  // Статичні дані
  const bankName = 'АТ «ОЩАДБАНК»'
  const date = '15.04.2026 18:21:06'
  const cardNumberMasked = '5167 **** **** 9476'
  const payerName = paymentConfig.payerName
  const bankCode = '300465'
  const receiptNumber = 'E1XM-K3PL-6JFG-OR3E'
  const ptks = '9065007'
  const address = 'Рівне, Льонокомбінатівська вул., 9'
  const operationCode = '30256028782'
  const paymentSystem = 'Mastercard'
  const recipientBank = 'АТ «ОЩАДБАНК»'
  const recipientCode = '325833352'

  // Динамічні дані для різних сценаріїв
  // Для billsPayment: отримувач РОВКП ВКГ «Рівнеоблводоканал»
  const isBillsPayment = data.iban !== undefined
  const recipientName = isBillsPayment 
    ? 'РОВКП ВКГ «Рівнеоблводоканал»' 
    : 'Пекарський Сергій Петрович'
  
  const serviceName = isBillsPayment 
    ? 'Оплата рахунків по номеру IBAN' 
    : 'поповнення карткового рахунку, ПЕКАРСЬКИЙ С. П.'

  // Ліва колонка (верх)
  const leftColumnTop = `Внесено: 1200,00 грн.\nСума операції: 1200,00 грн.\nЗараховано отримувачу: 1188,00 грн.\nКомісія банку: 12,00 грн.\nДата та час: ${date}`

  // Ліва колонка (низ)
  const leftColumnBottom = `Послуга: ${serviceName}\nНомер картки: ${cardNumberMasked}\nПлатник: ${payerName}\nБанк платника: ${bankName}\nКод банку платника: ${bankCode}\nПризначення платежу: ${paymentPurpose}`

  // Права колонка (верх)
  const rightColumnTop = `Квитанція №№: ${receiptNumber}\nПТКС: ${ptks}\nАдреса: ${address}\nКод операції: ${operationCode}`

  // Права колонка (низ)
  const rightColumnBottom = `Отримувач: ${recipientName}\nРахунок отримувача: ${iban}\nПлатіжна система: ${paymentSystem}\nБанк отримувача: ${recipientBank}\nКод отримувача: ${recipientCode}`

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleBack = () => {
    navigate(routePaths.chooseOperationType)
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
                label: t.receiptScreen.print,
                variant: 'cancel',
                onClick: handleBack,
              },
            ]}
            rightButtons={[
              {
                label: t.receiptScreen.complete,
                variant: 'continue',
                icon: 'arrow-next',
                onClick: handleComplete,
              },
            ]}
          />
        }
      >
        <ReceiptView
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