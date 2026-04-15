import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import SmsInput from '../../components/ui/SmsInput/SmsInput'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import { routePaths } from '../../constants/routePaths'

import SmsInputView from './SmsInputView'

const SmsInputPage = () => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [digits, setDigits] = useState('')
  const [timeLeft, setTimeLeft] = useState(180)

  const t = translations[locale]

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate(routePaths.phoneInput)
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, navigate])

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    setDigits((prev) => {
      if (prev.length >= 4) return prev
      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setDigits((prev) => prev.slice(0, -1))
  }

  const isValid = digits.length === 4

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

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
          />
        }
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: t.smsInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.smsInputScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <SmsInputView
          t={t}
          minutes={minutes}
          seconds={seconds}
          input={
            <SmsInput
              value={digits}
              placeholder={t.smsInputScreen.emptyMask}
            />
          }
          keypad={
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.smsInputScreen.delete}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default SmsInputPage