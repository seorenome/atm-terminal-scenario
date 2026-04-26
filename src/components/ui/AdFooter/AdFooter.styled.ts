import styled, { keyframes } from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

const pulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`

const getPadding = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '20px 60px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '30px 100px'
  return '20px 60px'
}

const getIconSize = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '55px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '80px'
  return '55px'
}

const getFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '28px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '28px'
}

export const FooterOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: ${getPadding()};
  z-index: 10;
`

export const IconWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  animation: ${pulse} 1.8s ease-in-out infinite;
`

export const Icon = styled.img`
  width: ${getIconSize()};
  height: auto;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 40px;
`

export const Text = styled.span`
  color: rgba(255, 255, 255, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getFontSize()};
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
`

export const TimerWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`

export const Timer = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getFontSize()};
  font-weight: 500;
  line-height: normal;
`