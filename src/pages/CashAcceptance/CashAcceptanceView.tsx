import type { Translations } from '../../locale/types'
import SvgAnimateIcon from '../../assets/icons/SVG_animate.svg'
import InfoIconSvg from '../../assets/icons/infoicon.svg'
import MoneyIconSvg from '../../assets/icons/iconmoney.svg'
import {
  AcceptedBlock,
  AcceptedLabel,
  AcceptedRow,
  AmountCurrency,
  AmountMain,
  AmountWrapper,
  CardsContainer,
  CommissionAmount,
  CommissionLabel,
  CommissionRow,
  ContentWrapper,
  EnrolledLabel,
  EnrolledRow,
  InfoBlock,
  InfoIcon,
  InfoText,
  InstructionText,
  LeftCard,
  MoneyIcon,
  NoticeBlock,
  NoticeText,
  PageTitle,
  RightCard,
  SvgAnimate,
  TitleWrapper,
} from './CashAcceptanceView.styled'

type CashAcceptanceViewProps = {
  t: Translations
  acceptedAmount: number
  commission: number
  finalAmount: number
}

const formatAmount = (amount: number): string => {
  return amount.toLocaleString('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const CashAcceptanceView = ({
  t,
  acceptedAmount,
  commission,
  finalAmount,
}: CashAcceptanceViewProps) => {
  const formattedAccepted = formatAmount(acceptedAmount)
  const formattedCommission = formatAmount(commission)
  const formattedFinal = formatAmount(finalAmount)

  const [mainPart, fractionalPart] = formattedAccepted.split('.')

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
          <NoticeBlock>
            <NoticeText>
              {t.cashAcceptanceScreen.notice}
              <br />
              {t.cashAcceptanceScreen.maxAmount}
              <br />
              {t.cashAcceptanceScreen.commissionRate}
            </NoticeText>
          </NoticeBlock>

          <EnrolledRow>
            <EnrolledLabel>
              {t.cashAcceptanceScreen.willBeCredited}
            </EnrolledLabel>
            <AmountWrapper>
              <AmountMain>{formattedFinal.split('.')[0]}</AmountMain>
              <AmountCurrency>.{formattedFinal.split('.')[1]} {t.cashAcceptanceScreen.currency}</AmountCurrency>
            </AmountWrapper>
          </EnrolledRow>

          <AcceptedBlock>
            <AcceptedLabel>
              {t.cashAcceptanceScreen.acceptedAmount}
            </AcceptedLabel>
            <AcceptedRow>
              <MoneyIcon src={MoneyIconSvg} alt="money" />
              <AmountWrapper>
                <AmountMain>{mainPart}</AmountMain>
                <AmountCurrency>.{fractionalPart} {t.cashAcceptanceScreen.currency}</AmountCurrency>
              </AmountWrapper>
            </AcceptedRow>
          </AcceptedBlock>

          <CommissionRow>
            <CommissionLabel>{t.cashAcceptanceScreen.commission}</CommissionLabel>
            <CommissionAmount>{formattedCommission} {t.cashAcceptanceScreen.currency}</CommissionAmount>
          </CommissionRow>
        </RightCard>
      </CardsContainer>
    </ContentWrapper>
  )
}

export default CashAcceptanceView