import ErrorIconSvg from '../../assets/icons/error-icon.svg'

import {
  ContentWrapper,
  ErrorIcon,
  InfoCard,
  InfoText,
  PageTitle,
  TitleWrapper,
} from './CardErrorView.styled'

type CardErrorViewProps = {
  title: string
  primaryMessage: string
  secondaryMessage: string
}

const CardErrorView = ({
  title,
  primaryMessage,
  secondaryMessage,
}: CardErrorViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{title}</PageTitle>
      </TitleWrapper>

      <ErrorIcon src={ErrorIconSvg} alt="" />

      <InfoCard>
        <InfoText>{primaryMessage}</InfoText>
        <InfoText>{secondaryMessage}</InfoText>
      </InfoCard>
    </ContentWrapper>
  )
}

export default CardErrorView