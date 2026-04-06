import styled from 'styled-components'

import { ACTIVE_SCREEN_MODE, SCREEN_RESOLUTIONS } from '../../../config/screenConfig'

const activeResolution = SCREEN_RESOLUTIONS[ACTIVE_SCREEN_MODE]

export const TerminalFrame = styled.div<{ $hasFooter: boolean }>`
  width: ${activeResolution.width}px;
  height: ${activeResolution.height}px;
  display: grid;
  grid-template-rows: ${({ $hasFooter }) =>
    $hasFooter ? '100px 1fr 150px' : '100px 1fr'};
  background-color: #F4F5FA;
  overflow: hidden;
`

export const TerminalHeader = styled.header`
`

export const TerminalContent = styled.main`
  overflow: hidden;
`

export const TerminalFooter = styled.footer`
`