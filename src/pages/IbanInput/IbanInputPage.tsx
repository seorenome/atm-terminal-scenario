import { useState } from 'react'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import IbanInput from '../../components/ui/IbanInput/IbanInput'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'

import IbanInputView from './IbanInputView'

const IbanInputPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [digits, setDigits] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    if (digits.length < 27) {
      setDigits((prev) => prev + digit)
    }
  }

  const handleDeleteClick = () => {
    setDigits((prev) => prev.slice(0, -1))
  }

  const handleChange = (newDigits: string) => {
    setDigits(newDigits)
  }

  const isValid = digits.length === 27

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
                label: t.ibanInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.ibanInputScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <IbanInputView
          t={t}
          input={
            <IbanInput
              value={digits}
              onChange={handleChange}
              placeholder={t.ibanInputScreen.emptyMask}
            />
          }
          keypad={
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.ibanInputScreen.delete}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default IbanInputPage