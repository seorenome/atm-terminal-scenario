import type { Translations } from '../../locale/types'
import {
  Column,
  ColumnsContainer,
  ContentWrapper,
  Data,
  InfoBlock,
  Information,
  InfoRow,
  Label,
  PageTitle,
  Subtitle,
  TitleWrapper,
} from './PaymentInfoView.styled'

type PaymentInfoViewProps = {
  t: Translations
  cardNumber: string
  phoneNumber: string
  payerName: string
  recipientName: string
  paymentPurpose: string
  amount: string
  commission: string
  acceptedBills: string
}

const PaymentInfoView = ({
  t,
  cardNumber,
  phoneNumber,
  payerName,
  recipientName,
  paymentPurpose,
  amount,
  commission,
  acceptedBills,
}: PaymentInfoViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{t.paymentInfoScreen.title}</PageTitle>
      </TitleWrapper>

      <InfoBlock>
        <Information>
          <Subtitle>{t.paymentInfoScreen.subtitle}</Subtitle>

          <ColumnsContainer>
            <Column>
              <InfoRow>
                <Label>{t.paymentInfoScreen.cardNumber}</Label>
                <Data>{cardNumber}</Data>
              </InfoRow>

              <InfoRow>
                <Label>{t.paymentInfoScreen.phoneNumber}</Label>
                <Data>{phoneNumber}</Data>
              </InfoRow>

              <InfoRow>
                <Label>{t.paymentInfoScreen.payerName}</Label>
                <Data>{payerName}</Data>
              </InfoRow>

              <InfoRow>
                <Label>{t.paymentInfoScreen.recipientName}</Label>
                <Data>{recipientName}</Data>
              </InfoRow>

            </Column>

            <Column>
              <InfoRow>
                <Label>{t.paymentInfoScreen.amount}</Label>
                <Data>{amount}</Data>
              </InfoRow>

              <InfoRow>
                <Label>{t.paymentInfoScreen.commission}</Label>
                <Data>{commission}</Data>
              </InfoRow>

              <InfoRow>
                <Label>{t.paymentInfoScreen.acceptedBills}</Label>
                <Data>{acceptedBills}</Data>
              </InfoRow>
              
              <InfoRow>
                <Label>{t.paymentInfoScreen.paymentPurpose}</Label>
                <Data>{paymentPurpose}</Data>
              </InfoRow>
            </Column>
          </ColumnsContainer>
        </Information>
      </InfoBlock>
    </ContentWrapper>
  )
}

export default PaymentInfoView