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

const getInfoBlockPadding = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '0 100px'
  return '0 60px'
}

const getInformationPadding = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '20px 60px'
  return '20px 40px'
}

const getCardGap = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '20px'
  return '30px'
}

const getColumnsGap = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '40px'
  return '60px'
}

const getLabelFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '28px'
  return '24px'
}

const getDataFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '28px'
  return '24px'
}

const getSubtitleFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '24px'
}

const getRowGap = () => {
  return '20px'
}

const getLabelPadding = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '5px 0'
  return '10px 0'
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
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getTitleFontSize()};
  font-weight: 600;
  line-height: ${getTitleLineHeight()};
  text-align: center;
`

export const InfoBlock = styled.div`
  display: flex;
  padding: ${getInfoBlockPadding()};
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

export const Information = styled.div`
  display: flex;
  padding: ${getInformationPadding()};
  flex-direction: column;
  align-items: flex-start;
  gap: ${getCardGap()};
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
`

export const Subtitle = styled.h2`
  margin: 0;
  padding: 15px 0;
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getSubtitleFontSize()};
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${getColumnsGap()};
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${getRowGap()};
  flex: 1;
`

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
`

export const Label = styled.span`
  width: 200px;
  padding: ${getLabelPadding()};
  flex-shrink: 0;
  color: rgba(17, 30, 41, 0.6);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getLabelFontSize()};
  font-weight: 400;
  line-height: normal;
`

export const Data = styled.span`
  flex: 1;
  padding: ${getLabelPadding()};
  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getDataFontSize()};
  font-weight: 600;
  line-height: normal;
`