import { memo } from 'react'
import ArrowBackIcon from '../../../assets/icons/arrow-back.svg'
import ArrowNextIcon from '../../../assets/icons/arrow-next.svg'

import {
  ButtonContent,
  ButtonIcon,
  ButtonLabel,
  StyledButton,
} from './Button.styled'
import type { ButtonIcon as ButtonIconType, ButtonProps } from './Button.types'

const iconMap: Record<ButtonIconType, string> = {
  'arrow-back': ArrowBackIcon,
  'arrow-next': ArrowNextIcon,
}

const Button = memo(({
  label,
  variant,
  icon,
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const isIconBeforeLabel = variant === 'back' || variant === 'cancel'
  const iconSrc = icon ? iconMap[icon] : null

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      <ButtonContent $disabled={disabled}>
        {isIconBeforeLabel && iconSrc ? (
          <ButtonIcon src={iconSrc} alt="" aria-hidden="true" />
        ) : null}

        <ButtonLabel>{label}</ButtonLabel>

        {!isIconBeforeLabel && iconSrc ? (
          <ButtonIcon src={iconSrc} alt="" aria-hidden="true" />
        ) : null}
      </ButtonContent>
    </StyledButton>
  )
})

Button.displayName = 'Button'

export default Button