import type { Translations } from '../../locale/types'
import {
  BankTitle,
  Column,
  ColumnsContainer,
  ContentWrapper,
  InfoBlock,
  Information,
  ReceiptText,
} from './ReceiptView.styled'

type ReceiptViewProps = {
  t: Translations
  bankName: string
  leftColumnTop: string
  leftColumnBottom: string
  rightColumnTop: string
  rightColumnBottom: string
}

const ReceiptView = ({
  t,
  bankName,
  leftColumnTop,
  leftColumnBottom,
  rightColumnTop,
  rightColumnBottom,
}: ReceiptViewProps) => {
  return (
    <ContentWrapper>
      <InfoBlock>
        <Information>
          <BankTitle>{bankName}</BankTitle>

          <ColumnsContainer>
            <Column>
              <ReceiptText>{leftColumnTop}</ReceiptText>
              <ReceiptText>{leftColumnBottom}</ReceiptText>
            </Column>

            <Column>
              <ReceiptText>{rightColumnTop}</ReceiptText>
              <ReceiptText>{rightColumnBottom}</ReceiptText>
            </Column>
          </ColumnsContainer>
        </Information>
      </InfoBlock>
    </ContentWrapper>
  )
}

export default ReceiptView