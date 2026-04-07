import cardArrowIcon from '../../assets/icons/cardarrow.svg'
import cardIcon1 from '../../assets/icons/cardicon-1.svg'
import cardIcon2 from '../../assets/icons/cardicon-2.svg'
import cardIcon3 from '../../assets/icons/cardicon-3.svg'
import cardIcon4 from '../../assets/icons/cardicon-4.svg'
import OperationCard from '../../components/ui/OperationCard/OperationCard'
import type { Translations } from '../../locale/types'
import { Cards, Content, Title, TitleWrap } from './ChooseOperationTypeView.styled'

type ChooseOperationTypeViewProps = {
  t: Translations
}

const ChooseOperationTypeView = ({ t }: ChooseOperationTypeViewProps) => {
  return (
    <Content>
      <TitleWrap>
        <Title>{t.startScreen.title}</Title>
      </TitleWrap>

      <Cards>
        <OperationCard
          title={t.startScreen.cards.billsPayment.title}
          description={t.startScreen.cards.billsPayment.description}
          iconSrc={cardIcon1}
          arrowSrc={cardArrowIcon}
        />

        <OperationCard
          title={t.startScreen.cards.mobileTopUp.title}
          description={t.startScreen.cards.mobileTopUp.description}
          iconSrc={cardIcon2}
          arrowSrc={cardArrowIcon}
        />

        <OperationCard
          title={t.startScreen.cards.cardTopUp.title}
          description={t.startScreen.cards.cardTopUp.description}
          iconSrc={cardIcon3}
          arrowSrc={cardArrowIcon}
        />

        <OperationCard
          title={t.startScreen.cards.utilities.title}
          description={t.startScreen.cards.utilities.description}
          iconSrc={cardIcon4}
          arrowSrc={cardArrowIcon}
        />
      </Cards>
    </Content>
  )
}

export default ChooseOperationTypeView