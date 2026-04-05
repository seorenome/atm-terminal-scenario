import styled, { css } from 'styled-components'

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

export const StyledButton = styled.button<StyledButtonProps>`
  width: 280px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px;

  border: none;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
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
  align-items: center;
  justify-content: center;
  gap: 10px;
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