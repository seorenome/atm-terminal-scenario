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
} from './CardInputView.styled'

type CardInputViewProps = {
  t: Translations
  input: ReactNode
  keypad: ReactNode
}

const CardInputView = ({ t, input, keypad }: CardInputViewProps) => {
  return (
    <Content>
      <Left>
        <TitleBlock>
          <TitleRow>
            <Title>{t.cardInputScreen.title}</Title>
          </TitleRow>
        </TitleBlock>

        {input}

        <HintCard>
          <HintText>{t.cardInputScreen.hint}</HintText>
        </HintCard>
      </Left>

      <Right>{keypad}</Right>
    </Content>
  )
}

export default CardInputView