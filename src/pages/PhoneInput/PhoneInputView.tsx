import { useState } from 'react'
import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalHeader from '../../components/layout/TerminalHeader/TerminalHeader'
import type { HeaderLanguage } from '../../components/layout/TerminalHeader/TerminalHeader.types'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import PhoneInput from '../../components/ui/PhoneInput/PhoneInput'
import { defaultLocale, translations } from '../../locale'
import type { Locale } from '../../locale/types'
import {
  Content,
  HintCard,
  HintText,
  InputWrapper,
  Left,
  Right,
  Title,
  TitleBlock,
  TitleRow,
} from './PhoneInputView.styled'

const PhoneInputPage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [phoneDigits, setPhoneDigits] = useState('')

  const t = translations[locale]

  const handleLanguageChange = (language: HeaderLanguage) => {
    setLocale(language === 'UA' ? 'uk' : 'en')
  }

  const handleDigitClick = (digit: string) => {
    setPhoneDigits((prev) => {
      if (prev.length >= 10) return prev
      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setPhoneDigits((prev) => prev.slice(0, -1))
  }

  const isValid = phoneDigits.length === 10

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
                label: t.phoneInputScreen.back,
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: t.phoneInputScreen.continue,
                variant: 'continue',
                disabled: !isValid,
              },
            ]}
          />
        }
      >
        <Content>
          <Left>
            <TitleBlock>
              <TitleRow>
                <Title>{t.phoneInputScreen.title}</Title>
              </TitleRow>
            </TitleBlock>

            <InputWrapper>
              <PhoneInput
                value={phoneDigits}
                onChange={setPhoneDigits}
                placeholder={t.phoneInputScreen.emptyMask}
              />
            </InputWrapper>

            <HintCard>
              <HintText>{t.phoneInputScreen.hint}</HintText>
            </HintCard>
          </Left>

          <Right>
            <NumericKeypad
              onDigitClick={handleDigitClick}
              onDeleteClick={handleDeleteClick}
              deleteLabel={t.phoneInputScreen.delete}
            />
          </Right>
        </Content>
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default PhoneInputPage