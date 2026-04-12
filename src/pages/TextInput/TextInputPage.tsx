import { useState } from 'react'

import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import AlphanumericKeypad from '../../components/ui/AlphanumericKeypad/AlphanumericKeypad'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import TextInputView from './TextInputView'

const TextInputPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [value, setValue] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleKeyPress = (key: string) => {
    if (value.length < 100) {
      setValue((prev) => prev + key)
    }
  }

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1))
  }

  const isValid = value.length > 0 && value.length <= 100

  return (
    <TerminalViewport>
      <TerminalLayout
        variant="default"
        backgroundColor="rgba(38, 207, 200, 1)"
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
                label: t.textInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.textInputScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <TextInputView
          t={t}
          value={value}
          onChange={setValue}
          keypad={
            <AlphanumericKeypad
              onKeyPress={handleKeyPress}
              onDelete={handleDelete}
              deleteLabel={t.textInputScreen.delete}
              enLabel={t.textInputScreen.en}
              uaLabel={t.textInputScreen.ua}
            />
          }
        />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default TextInputPage