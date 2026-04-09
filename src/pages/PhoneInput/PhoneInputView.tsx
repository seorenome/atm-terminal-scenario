import { useState } from 'react'
import NumericKeypad from '../../components/ui/NumericKeypad/NumericKeypad'
import PhoneInput from '../../components/ui/PhoneInput/PhoneInput'
import type { Translations } from '../../locale/types'
import {
  Content,
  HintCard,
  HintText,
  Left,
  Right,
  Title,
  TitleBlock,
  TitleRow,
} from './PhoneInputView.styled'

type PhoneInputViewProps = {
  t: Translations
}

const PhoneInputView = ({ t }: PhoneInputViewProps) => {
  const [phoneDigits, setPhoneDigits] = useState('')

  const handleDigitClick = (digit: string) => {
    setPhoneDigits((prev) => {
      if (prev.length >= 10) {
        return prev
      }

      return prev + digit
    })
  }

  const handleDeleteClick = () => {
    setPhoneDigits((prev) => prev.slice(0, -1))
  }

  return (
    <Content>
      <Left>
        <TitleBlock>
          <TitleRow>
            <Title>{t.phoneInputScreen.title}</Title>
          </TitleRow>
        </TitleBlock>

        <PhoneInput
          value={phoneDigits}
          onChange={setPhoneDigits}
          placeholder={t.phoneInputScreen.emptyMask}
        />

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
  )
}

export default PhoneInputView