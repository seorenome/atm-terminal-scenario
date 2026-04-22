import type { Translations } from '../../locale/types'
import {
  ContentWrapper,
  IbanButton,
  OperatorsGrid,
  PageTitle,
  TitleRow,
} from './UtilitiesView.styled'
import UtilityCard from '../../components/ui/UtilityCard/UtilityCard'
import cardArrowIcon from '../../assets/icons/cardarrow.svg'
import type { UtilityOperator } from '../../config/utilitiesData'
import Pagination from '../../components/ui/Pagination/Pagination'

type UtilitiesViewProps = {
  t: Translations
  operators: UtilityOperator[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onIbanClick: () => void
  onOperatorClick: (operator: UtilityOperator) => void
}

const UtilitiesView = ({
  t,
  operators,
  currentPage,
  totalPages,
  onPageChange,
  onIbanClick,
  onOperatorClick,
}: UtilitiesViewProps) => {
  return (
    <ContentWrapper>
      <TitleRow>
        <PageTitle>{t.utilitiesScreen.title}</PageTitle>
        <IbanButton onClick={onIbanClick}>
          <span>{t.utilitiesScreen.ibanButton}</span>
        </IbanButton>
      </TitleRow>

      <OperatorsGrid>
        {operators.map((operator) => (
          <UtilityCard
            key={operator.id}
            name={operator.name}
            iconSrc={operator.icon}
            arrowSrc={cardArrowIcon}
            onClick={() => onOperatorClick(operator)}
          />
        ))}
      </OperatorsGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </ContentWrapper>
  )
}

export default UtilitiesView
