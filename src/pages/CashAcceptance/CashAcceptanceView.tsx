import type { Translations } from '../../locale/types'
import SvgAnimateIcon from '../../assets/icons/SVG_animate.svg'
import InfoIconSvg from '../../assets/icons/infoicon.svg'
import MoneyIconSvg from '../../assets/icons/iconmoney.svg'
import {
  AcceptedLabel,
  AcceptedRow,
  AmountMain,
  CardsContainer,
  CommissionAmount,
  CommissionLabel,
  CommissionRow,
  ContentWrapper,
  CurrencyText,
  DownBlock,
  EnrolledLabel,
  EnrolledWrapper,
  FractionalText,
  Frame47677,
  InfoBlock,
  InfoIcon,
  InfoText,
  InstructionText,
  LeftCard,
  MoneyIcon,
  NoticeText,
  NoticeWrapper,
  PageTitle,
  RightCard,
  SumWrapper,
  SvgAnimate,
  TitleWrapper,
  UpBlock,
} from './CashAcceptanceView.styled'

type CashAcceptanceViewProps = {
  t: Translations
  acceptedAmount: number
  commission: number
  finalAmount: number
}

const formatAmount = (amount: number): { main: string; fractional: string } => {
  const formatted = amount.toLocaleString('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const [main, fractional] = formatted.split(',')
  return { main, fractional }
}

const CashAcceptanceView = ({
  t,
  acceptedAmount,
  commission,
  finalAmount,
}: CashAcceptanceViewProps) => {
  const accepted = formatAmount(acceptedAmount)
  const commissionFormatted = commission.toLocaleString('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const final = formatAmount(finalAmount)

  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{t.cashAcceptanceScreen.title}</PageTitle>
      </TitleWrapper>

      <CardsContainer>
        {/* Ліва картка */}
        <LeftCard>
          <InstructionText>
            {t.cashAcceptanceScreen.instruction}
          </InstructionText>

          <SvgAnimate src={SvgAnimateIcon} alt="animation" />

          <InfoBlock>
            <InfoIcon src={InfoIconSvg} alt="info" />
            <InfoText>{t.cashAcceptanceScreen.completeHint}</InfoText>
          </InfoBlock>
        </LeftCard>

        {/* Права картка */}
        <RightCard>
          <UpBlock>
            <NoticeWrapper>
              <NoticeText>
                {t.cashAcceptanceScreen.notice}
                <br />
                {t.cashAcceptanceScreen.maxAmount}
                <br />
                {t.cashAcceptanceScreen.commissionRate}
              </NoticeText>
            </NoticeWrapper>

            <EnrolledWrapper>
              <EnrolledLabel>
                {t.cashAcceptanceScreen.willBeCredited}
              </EnrolledLabel>
              <SumWrapper>
                <AmountMain>{final.main}</AmountMain>
                <FractionalText>,{final.fractional}</FractionalText>
                <CurrencyText> {t.cashAcceptanceScreen.currency}</CurrencyText>
              </SumWrapper>
            </EnrolledWrapper>
          </UpBlock>

          <DownBlock>
            <AcceptedLabel>
              {t.cashAcceptanceScreen.acceptedAmount}
            </AcceptedLabel>

            <Frame47677>
              <MoneyIcon src={MoneyIconSvg} alt="money" />
              <AcceptedRow>
                <AmountMain>{accepted.main}</AmountMain>
                <FractionalText>,{accepted.fractional}</FractionalText>
                <CurrencyText> {t.cashAcceptanceScreen.currency}</CurrencyText>
              </AcceptedRow>
            </Frame47677>

            <CommissionRow>
              <CommissionLabel>
                {t.cashAcceptanceScreen.commission}
              </CommissionLabel>
              <CommissionAmount>
                {commissionFormatted} {t.cashAcceptanceScreen.currency}
              </CommissionAmount>
            </CommissionRow>
          </DownBlock>
        </RightCard>
      </CardsContainer>
    </ContentWrapper>
  )
}

export default CashAcceptanceView