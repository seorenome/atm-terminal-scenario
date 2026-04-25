import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

const getKeyWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '100px'
  return '80px'
}

const getKeyHeight = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '60px'
  return '72px'
}

const getKeyGap = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '20px'
  return '16px'
}

const getLngKeyWidth = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '141px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '180px'
  return '169px'
}

const getSpaceKeyWidth = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '534px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '660px'
  return '478px'
}

const getKeyFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '28px'
}

const getDeleteFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

const getDeleteFontWeight = () => {
  return '400'
}

export const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const KeyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${getKeyGap()};
  flex-wrap: wrap;
`

export const KeyButton = styled.button`
  width: ${getKeyWidth()};
  height: ${getKeyHeight()};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 16px;
  background: #f2f2f6;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #111e29;
  text-align: center;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getKeyFontSize()};
  font-weight: 600;
  transition: transform 0.05s ease-in-out, opacity 0.05s ease-in-out;
  
  &:active {
    transform: scale(0.96);
    opacity: 0.8;
  }
`

export const SpecialKeyButton = styled.button<{ $isShiftActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 16px;
  background: ${({ $isShiftActive }) => ($isShiftActive ? '#1ec0bf' : '#f2f2f6')};
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: ${({ $isShiftActive }) => ($isShiftActive ? '#ffffff' : '#111e29')};
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getKeyFontSize()};
  font-weight: 600;
  transition: transform 0.05s ease-in-out, opacity 0.05s ease-in-out, background 0.1s ease-in-out;
  
  &:active {
    transform: scale(0.96);
    opacity: 0.8;
  }
  
  width: ${getKeyWidth()};
  height: ${getKeyHeight()};
`

export const LngKeyButton = styled(SpecialKeyButton)`
  width: ${getLngKeyWidth()};
`

export const SpaceKeyButton = styled(SpecialKeyButton)`
  width: ${getSpaceKeyWidth()};
`

export const DeleteKeyButton = styled(SpecialKeyButton)`
  width: ${getLngKeyWidth()};
`

export const DeleteIcon = styled.img`
  width: 34px;
  height: 29px;
`

export const DeleteLabel = styled.span`
  font-size: ${getDeleteFontSize()};
  font-weight: ${getDeleteFontWeight()};
`

export const KeyIcon = styled.img`
  width: 32px;
  height: 32px;
`