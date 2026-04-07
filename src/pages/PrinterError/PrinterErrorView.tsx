import PrinterErrorIcon from '../../assets/icons/error-printer.svg'

import {
  ContentWrapper,
  ErrorIcon,
  InfoCard,
  InfoText,
  PageTitle,
  TitleWrapper,
} from './PrinterErrorView.styled'

type PrinterErrorViewProps = {
  title: string
  primaryMessage: string
  secondaryMessage: string
}

const PrinterErrorView = ({
  title,
  primaryMessage,
  secondaryMessage,
}: PrinterErrorViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{title}</PageTitle>
      </TitleWrapper>

      <ErrorIcon src={PrinterErrorIcon} alt="" />

      <InfoCard>
        <InfoText>{primaryMessage}</InfoText>
        <InfoText>{secondaryMessage}</InfoText>
      </InfoCard>
    </ContentWrapper>
  )
}

export default PrinterErrorView