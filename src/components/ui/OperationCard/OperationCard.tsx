import type { OperationCardProps } from './OperationCard.types'
import {
  Arrow,
  ArrowWrap,
  Bottom,
  Card,
  Description,
  Icon,
  Title,
  Top,
} from './OperationCard.styled'

const OperationCard = ({
  title,
  description,
  iconSrc,
  arrowSrc,
  onClick,
}: OperationCardProps) => {
  return (
    <Card onClick={onClick}>
      <Top>
        <Title>{title}</Title>

        <ArrowWrap>
          <Arrow src={arrowSrc} alt="" />
        </ArrowWrap>
      </Top>

      <Bottom>
        <Description>{description}</Description>
        <Icon src={iconSrc} alt="" />
      </Bottom>
    </Card>
  )
}

export default OperationCard