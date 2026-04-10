import type { ReactNode } from 'react'
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
} from './IbanInputView.styled'

type IbanInputViewProps = {
  t: Translations
  input: ReactNode
  keypad: ReactNode
}

const IbanInputView = ({ t, input, keypad }: IbanInputViewProps) => {
  return (
    <Content>
      <Left>
        <TitleBlock>
          <TitleRow>
            <Title>{t.ibanInputScreen.title}</Title>
          </TitleRow>
        </TitleBlock>

        {input}

        <HintCard>
          <HintText>{t.ibanInputScreen.hint}</HintText>
        </HintCard>
      </Left>

      <Right>{keypad}</Right>
    </Content>
  )
}

export default IbanInputView