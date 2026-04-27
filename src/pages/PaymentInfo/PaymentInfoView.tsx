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
  isMobileTopUp: boolean
  isBillsPayment: boolean
  cardNumber: string
  phoneNumber: string
  amount: string
  commission: string
  acceptedBills: string
  payerName: string
  paymentPurposeCard: string
  recipientName: string
  operator: string
  edrpou: string
  ibanMobile: string
  paymentPurposeMobile: string
  iban: string
  paymentPurposeBills: string
  recipientBills: string
}

const formatCardNumber = (cardNumber: string): string => {
  if (cardNumber.length !== 16) return cardNumber
  const first4 = cardNumber.slice(0, 4)
  const last4 = cardNumber.slice(-4)
  return `${first4} **** **** ${last4}`
}

const formatIban = (iban: string): string => {
  // Видаляємо всі пробіли та переводимо у верхній регістр
  let cleanIban = iban.replace(/\s/g, '').toUpperCase()
  
  // Перевіряємо наявність префікса UA
  let hasPrefix = cleanIban.startsWith('UA')
  
  // Отримуємо тільки цифри
  let digits = hasPrefix ? cleanIban.slice(2) : cleanIban
  
  // Перевіряємо довжину цифр (має бути 27)
  if (digits.length !== 27) return iban
  
  // Беремо останні 14 цифр
  const last14 = digits.slice(-14)
  
  return `UA ** ${last14}`
}

const PaymentInfoView = ({
  t,
  isCardTopUp,
  isMobileTopUp,
  isBillsPayment,
  cardNumber,
  phoneNumber,
  amount,
  commission,
  acceptedBills,
  payerName,
  paymentPurposeCard,
  recipientName,
  operator,
  edrpou,
  ibanMobile,
  paymentPurposeMobile,
  iban,
  paymentPurposeBills,
  recipientBills,
}: PaymentInfoViewProps) => {
  const title = isCardTopUp
    ? t.paymentInfoScreen.title
    : isMobileTopUp
    ? t.paymentInfoScreen.titleMobile
    : t.paymentInfoScreen.titleBills

  const formattedCardNumber = formatCardNumber(cardNumber)
  const formattedIban = formatIban(iban)

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
              {isCardTopUp && (
                <>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.cardNumber}</Label>
                    <Data>{formattedCardNumber}</Data>
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
              )}

              {isMobileTopUp && (
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
                    <Data>{ibanMobile}</Data>
                  </InfoRow>
                </>
              )}

              {isBillsPayment && (
                <>
                  <InfoRow>
                    <Label>{t.paymentInfoScreen.iban}</Label>
                    <Data>{formattedIban}</Data>
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
                    <Data>{recipientBills}</Data>
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
                <Data>
                  {isCardTopUp
                    ? paymentPurposeCard
                    : isMobileTopUp
                    ? paymentPurposeMobile
                    : paymentPurposeBills}
                </Data>
              </InfoRow>
            </Column>
          </ColumnsContainer>
        </Information>
      </InfoBlock>
    </ContentWrapper>
  )
}

export default PaymentInfoView