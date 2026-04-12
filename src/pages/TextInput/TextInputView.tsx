import type { ReactNode } from 'react'
import type { Translations } from '../../locale/types'
import {
  ContentWrapper,
  InputField,
  InputWrapper,
  PageTitle,
  TitleWrapper,
} from './TextInputView.styled'

type TextInputViewProps = {
  t: Translations
  value: string
  onChange: (value: string) => void
  keypad: ReactNode
}

const TextInputView = ({ t, value, onChange, keypad }: TextInputViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{t.textInputScreen.title}</PageTitle>
      </TitleWrapper>

      <InputWrapper>
        <InputField
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t.textInputScreen.placeholder}
          maxLength={100}
        />
      </InputWrapper>

      {keypad}
    </ContentWrapper>
  )
}

export default TextInputView