import ErrorIconSvg from '../../assets/icons/error-icon.svg'

import {
  ContentWrapper,
  ErrorIcon,
  InfoCard,
  InfoText,
  PageTitle,
  TitleWrapper,
} from './IbanErrorView.styled'

type IbanErrorViewProps = {
  title: string
  primaryMessage: string
  secondaryMessage: string
}

const IbanErrorView = ({
  title,
  primaryMessage,
  secondaryMessage,
}: IbanErrorViewProps) => {
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

export default IbanErrorView