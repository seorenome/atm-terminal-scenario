import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

const getContentPaddingTop = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '40px'
  return '100px'
}

const getTitleFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '62px'
  return '46px'
}

const getTitleLineHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '62px'
  return '46px'
}

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${getContentPaddingTop()};
  gap: 40px;
`

export const OperatorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 32px;
  padding: 0 60px;
  width: 100%;
  flex-grow: 1;

  ${ACTIVE_SCREEN_MODE === '1080p' && `
    padding: 0 100px;
  `}
`

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0 60px;
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    padding: 0 100px;
  `}
`

export const PageTitle = styled.h1`
  margin: 0;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getTitleFontSize()};
  font-weight: 600;
  line-height: ${getTitleLineHeight()};
  text-align: left;
`

export const IbanButton = styled.button`
  background-color: rgba(220, 225, 35, 1);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border: none;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.05s ease-in-out, opacity 0.05s ease-in-out;
  
  &:active {
    transform: scale(0.97);
    opacity: 0.85;
  }
  
  span {
    color: rgba(17, 30, 41, 1);
    font-family: 'Oschad Sans', Arial, sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    white-space: nowrap;
  }
`