import type { Translations } from '../../locale/types'
import {
  ContentWrapper,
  InfoCard,
  InfoText,
  PageTitle,
  TitleWrapper,
} from './UtilitiesErrorView.styled'

type UtilitiesErrorViewProps = {
  t: Translations
}

const UtilitiesErrorView = ({ t }: UtilitiesErrorViewProps) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>{t.utilitiesErrorScreen.title}</PageTitle>
      </TitleWrapper>

      <InfoCard>
        <InfoText>{t.utilitiesErrorScreen.message}</InfoText>
      </InfoCard>
    </ContentWrapper>
  )
}

export default UtilitiesErrorView