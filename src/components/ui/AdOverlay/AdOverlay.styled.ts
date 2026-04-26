import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE, SCREEN_RESOLUTIONS } from '../../../config/screenConfig'

const activeResolution = SCREEN_RESOLUTIONS[ACTIVE_SCREEN_MODE]

export const AdFrame = styled.div`
  width: ${activeResolution.width}px;
  height: ${activeResolution.height}px;
  position: relative;
  background-color: rgba(244, 245, 250, 1);
  overflow: hidden;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ViewportBackground = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  padding: 24px;
`

export const ViewportCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`