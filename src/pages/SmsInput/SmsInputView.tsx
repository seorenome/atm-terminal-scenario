import type { ReactNode } from 'react'
import type { Translations } from '../../locale/types'
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
} from './SmsInputView.styled'

type SmsInputViewProps = {
  t: Translations
  minutes: number
  seconds: number
  input: ReactNode
  keypad: ReactNode
}

const SmsInputView = ({ t, minutes, seconds, input, keypad }: SmsInputViewProps) => {
  const timerValue = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return (
    <Content>
      <Left>
        <TitleBlock>
          <TitleRow>
            <Title>{t.smsInputScreen.title}</Title>
          </TitleRow>
        </TitleBlock>

        <InputWrapper>
          {input}
        </InputWrapper>

        <HintCard>
          <HintText>
            {t.smsInputScreen.hint} {timerValue}
          </HintText>
        </HintCard>
      </Left>

      <Right>{keypad}</Right>
    </Content>
  )
}

export default SmsInputView