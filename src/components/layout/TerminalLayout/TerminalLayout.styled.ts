import styled, { css } from 'styled-components'
import { ACTIVE_SCREEN_MODE, SCREEN_RESOLUTIONS } from '../../../config/screenConfig'

const activeResolution = SCREEN_RESOLUTIONS[ACTIVE_SCREEN_MODE]

const getHeaderHeight = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '80px'
  return '100px'
}

const getFooterHeight = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '110px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '168px'
  return '150px'
}

export const TerminalFrame = styled.div<{
  $hasFooter: boolean
  $variant: 'default' | 'numeric-entry'
  $backgroundColor?: string
}>`
  width: ${activeResolution.width}px;
  height: ${activeResolution.height}px;
  display: grid;
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f4f5fa'};
  overflow: hidden;
  position: relative;

  ${({ $hasFooter, $variant }) =>
    $variant === 'numeric-entry'
      ? css`
          grid-template-rows: ${getHeaderHeight()} 1fr;
        `
      : css`
          grid-template-rows: ${$hasFooter ? `${getHeaderHeight()} 1fr ${getFooterHeight()}` : `${getHeaderHeight()} 1fr`};
        `}
`

export const TerminalHeader = styled.header``

export const TerminalContent = styled.main<{ $variant: 'default' | 'numeric-entry' }>`
  overflow: hidden;
  min-height: 0;

  ${({ $variant }) =>
    $variant === 'numeric-entry' &&
    css`
      position: relative;
    `}
`

export const TerminalFooter = styled.footer<{ $variant: 'default' | 'numeric-entry' }>`
  ${({ $variant }) =>
    $variant === 'numeric-entry' &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    `}
`