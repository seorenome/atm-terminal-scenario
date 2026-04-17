import type { Translations } from '../../locale/types'
import type { ScenarioId } from '../../config/scenarioConfig'
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
  scenarioId: ScenarioId
  isCardTopUp: boolean
  cardNumber: string
  phoneNumber: string
  amount: string
  commission: string
  acceptedBills: string
  payerName: string
  paymentPurpose: string
  recipientName: string
  operator: string
  edrpou: string
  iban: string
}

const PaymentInfoView = ({
  t,
  isCardTopUp,
  cardNumber,
  phoneNumber,
  amount,
  commission,
  acceptedBills,
  payerName,
  paymentPurpose,
  recipientName,
  operator,
  edrpou,
  iban,
}: PaymentInfoViewProps) => {
  const title = isCardTopUp ? t.paymentInfoScreen.title : t.paymentInfoScreen.titleMobile

  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{title}</PageTitle>
      </TitleWrapper>

      <InfoBlock>
        <Information>
          <Subtitle>{t.paymentInfoScreen.subtitle}</Subtitle>

          <ColumnsContainer>
            <Column>
              {isCardTopUp ? (
                <>
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
                </>
              ) : (
                <>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.phoneNumber}</Label>
                    <Data>{phoneNumber}</Data>
                  </InfoRow>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.operator}</Label>
                    <Data>{operator}</Data>
                  </InfoRow>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.edrpou}</Label>
                    <Data>{edrpou}</Data>
                  </InfoRow>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.iban}</Label>
                    <Data>{iban}</Data>
                  </InfoRow>
                </>
              )}
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