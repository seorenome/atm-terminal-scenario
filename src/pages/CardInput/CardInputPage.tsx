import { useState } from 'react'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import CardInput from '../../components/ui/CardInput/CardInput'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'

import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'

import CardInputView from './CardInputView'

const CardInputPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [value, setValue] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (_language: HeaderLanguage) => {
    setLocale((prev) => prev)
  }

  const handleDigitClick = (digit: string) => {
    setValue((prev) => {
      if (prev.length >= 16) {
        return prev
      }

      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setValue((prev) => prev.slice(0, -1))
  }

  const isValid = value.length === 16

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
                label: t.cardInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.cardInputScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <CardInputView
          t={t}
          input={
            <CardInput
              value={value}
              placeholder={t.cardInputScreen.emptyMask}
            />
          }
          keypad={
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.cardInputScreen.delete}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default CardInputPage