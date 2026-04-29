import { memo } from 'react'
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

const UtilityCard = memo(({ name, iconSrc, arrowSrc, onClick }: UtilityCardProps) => {
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
})

UtilityCard.displayName = 'UtilityCard'

export default UtilityCard