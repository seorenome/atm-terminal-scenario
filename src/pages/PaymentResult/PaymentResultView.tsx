import type { Translations } from '../../locale/types'
import {
  ContentWrapper,
  InfoCard,
  InfoText,
  PageTitle,
  SuccessIcon,
  TitleWrapper,
} from './PaymentResultView.styled'
import TimerIcon from '../../assets/icons/icontimer.png'

type PaymentResultViewProps = {
  t: Translations
  message: string
}

const PaymentResultView = ({ t, message }: PaymentResultViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{t.paymentResultScreen.title}</PageTitle>
      </TitleWrapper>

      <SuccessIcon src={TimerIcon} alt="" />

      <InfoCard>
        <InfoText>{message}</InfoText>
      </InfoCard>
    </ContentWrapper>
  )
}

export default PaymentResultView