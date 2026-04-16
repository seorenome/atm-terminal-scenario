import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

const getContentGap = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '40px'
  return '60px'
}

const getContentPaddingTop = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '80px'
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

const getIconWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '300px'
  return '200px'
}

const getIconHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '324px'
  return '216px'
}

const getInfoCardWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '800px'
  return '520px'
}

const getInfoTextFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '24px'
}

const getInfoTextLineHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return 'normal'
  return '32px'
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
`

export const PageTitle = styled.h1`
  margin: 0;
  color: rgba(255, 255, 255, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getTitleFontSize()};
  font-weight: 600;
  line-height: ${getTitleLineHeight()};
  text-align: center;
`

export const SuccessIcon = styled.img`
  width: ${getIconWidth()};
  height: ${getIconHeight()};
`

export const InfoCard = styled.div`
  width: ${getInfoCardWidth()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 40px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
`

export const InfoText = styled.p`
  margin: 0;
  width: 100%;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getInfoTextFontSize()};
  font-weight: 500;
  line-height: ${getInfoTextLineHeight()};
  text-align: center;
`