import ErrorIconSvg from '../../assets/icons/error-icon.svg'

import {
  ContentWrapper,
  ErrorIcon,
  InfoCard,
  InfoText,
  PageTitle,
  TitleWrapper,
} from './ChooseOperationTypeView.styled'

type ChooseOperationTypeViewProps = {
  title: string
  primaryMessage: string
  secondaryMessage: string
}

const ChooseOperationTypeView = ({
  title,
  primaryMessage,
  secondaryMessage,
}: ChooseOperationTypeViewProps) => {
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

export default ChooseOperationTypeView