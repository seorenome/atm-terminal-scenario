import type { UtilityCardProps } from './UtilityCard.types'
import {
  Arrow,
  ArrowWrapper,
  Card,
  Icon,
  IconWrapper,
  Name,
  NameWrapper,
  TopRow,
} from './UtilityCard.styled'

const UtilityCard = ({ name, iconSrc, arrowSrc, onClick }: UtilityCardProps) => {
  return (
    <Card onClick={onClick}>
      <TopRow>
        <IconWrapper>
          <Icon src={iconSrc} alt={name} />
        </IconWrapper>
        <ArrowWrapper>
          <Arrow src={arrowSrc} alt="" />
        </ArrowWrapper>
      </TopRow>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
    </Card>
  )
}

export default UtilityCard
