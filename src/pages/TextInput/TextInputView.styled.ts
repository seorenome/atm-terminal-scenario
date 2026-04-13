import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

const getContentPaddingTop = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '80px'
  return '100px'
}

const getContentGap = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '40px'
  return '60px'
}

const getTitleFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '62px'
  return '46px'
}

const getTitleDisplay = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return 'none'
  return 'block'
}

const getInputWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '1420px'
  return '1140px'
}

const getInputFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '30px'
}

const getInputFontWeight = () => {
  return '600'
}

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${getContentPaddingTop()};
  gap: ${getContentGap()};
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 60px;
  display: ${getTitleDisplay()};
`

export const PageTitle = styled.h1`
  margin: 0;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getTitleFontSize()};
  font-weight: 600;
  line-height: 46px;
  text-align: center;
`

export const InputWrapper = styled.div`
  width: ${getInputWidth()};
`

export const InputField = styled.input`
  width: 100%;
  height: 80px;
  padding: 0 28px;
  border-radius: 20px;
  border: 2px solid #0b8db0;
  background: #ffffff;
  outline: none;
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getInputFontSize()};
  font-weight: ${getInputFontWeight()};
  text-align: left;
  caret-color: #111e29;
  
  &::placeholder {
    color: rgba(17, 30, 41, 0.35);
  }
`