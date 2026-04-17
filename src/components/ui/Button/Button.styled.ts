import styled, { css } from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

import type { ButtonVariant } from './Button.types'

type StyledButtonProps = {
  $variant: ButtonVariant
  $disabled?: boolean
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'back':
    case 'cancel':
      return css`
        background-color: rgba(30, 192, 191, 1);
        color: rgba(255, 255, 255, 1);
      `

    case 'continue':
    case 'repeat':
      return css`
        background-color: rgba(220, 225, 35, 1);
        color: rgba(17, 30, 41, 1);
      `
  }
}

const getButtonWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '360px'
  return '280px'
}

const getButtonHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return 'auto'
  return '70px'
}

const getButtonPadding = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '28px 0'
  return '26px 0'
}

const getButtonFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '22px'
}

const getButtonLineHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '14px'
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${getButtonWidth()};
  height: ${getButtonHeight()};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: ${getButtonPadding()};

  border: none;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getButtonFontSize()};
  font-weight: 600;
  line-height: ${getButtonLineHeight()};
  letter-spacing: 0.56px;
  text-transform: uppercase;
  leading-trim: both;
  text-edge: cap;
  text-align: center;

  ${({ $variant }) => getVariantStyles($variant)};

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: rgba(222, 222, 222, 1);
      color: rgba(17, 30, 41, 1);
      cursor: not-allowed;
    `}
`

export const ButtonContent = styled.span<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: 15px;
  width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
`

export const ButtonIcon = styled.img`
  width: 20px;
  height: 19px;
  flex-shrink: 0;
`

export const ButtonLabel = styled.span`
  display: inline-block;
`