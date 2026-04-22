import type { Translations } from '../../locale/types'
import {
  ContentWrapper,
  IbanButton,
  PageTitle,
  TitleRow,
} from './UtilitiesView.styled'

type UtilitiesViewProps = {
  t: Translations
  onIbanClick: () => void
  onCardClick: () => void
}

const UtilitiesView = ({ t, onIbanClick, onCardClick }: UtilitiesViewProps) => {
  return (
    <ContentWrapper>
      <TitleRow>
        <PageTitle>{t.utilitiesScreen.title}</PageTitle>
        <IbanButton onClick={onIbanClick}>
          <span>{t.utilitiesScreen.ibanButton}</span>
        </IbanButton>
      </TitleRow>
    </ContentWrapper>
  )
}

export default UtilitiesView