import styled from 'styled-components'

import { ACTIVE_SCREEN_MODE, SCREEN_RESOLUTIONS } from '../../../config/screenConfig'

const activeResolution = SCREEN_RESOLUTIONS[ACTIVE_SCREEN_MODE]

export const TerminalFrame = styled.div`
  width: ${activeResolution.width}px;
  height: ${activeResolution.height}px;
  display: grid;
  grid-template-rows: 120px 1fr 140px;
  background-color: #ffffff;
  overflow: hidden;
`

export const TerminalHeader = styled.header`
  border-bottom: 1px solid #d9d9d9;
`

export const TerminalContent = styled.main`
  overflow: hidden;
`

export const TerminalFooter = styled.footer`
  border-top: 1px solid #d9d9d9;
`