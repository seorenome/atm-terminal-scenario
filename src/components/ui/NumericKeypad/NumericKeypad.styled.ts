import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

const getKeyWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '130px'
  return '104px'
}

const getKeyHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '120px'
  return '96px'
}

const getKeyGap = () => {
  return '16px'
}

const getDeleteWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '275px'
  return '225px'
}

const getDeleteHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '120px'
  return '96px'
}

const getDeleteFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '24px'
}

const getKeyFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '42px'
  return '36px'
}

const getKeypadPaddingTop = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '80px'
  return '210px'
}

export const Keypad = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: ${getKeypadPaddingTop()} 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  background: #26cfc8;
`

export const KeyRows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${getKeyGap()};
  align-self: stretch;
  flex-shrink: 0;
`

export const KeyButton = styled.button`
  width: ${getKeyWidth()};
  height: ${getKeyHeight()};
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background: #f2f2f6;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #111e29;
  text-align: center;
  font-family: 'Oschad Sans';
  font-size: ${getKeyFontSize()};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const DeleteButton = styled.button`
  width: ${getDeleteWidth()};
  height: ${getDeleteHeight()};
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background: #f2f2f6;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

export const DeleteIcon = styled.img`
  width: 34px;
  height: 29px;
  display: block;
`

export const DeleteLabel = styled.span`
  color: #111e29;
  text-align: center;
  font-family: 'Oschad Sans';
  font-size: ${getDeleteFontSize()};
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`