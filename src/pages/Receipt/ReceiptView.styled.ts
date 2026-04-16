import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

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

const getReceiptTextFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '24px'
  return '22px'
}

const getReceiptTextLineHeight = () => {
  return '1.5'
}

const getBankTitleFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '36px'
  return '24px'
}

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${getContentPaddingTop()};
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

export const BankTitle = styled.h2`
  margin: 0;
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getBankTitleFontSize()};
  font-weight: 600;
  line-height: normal;
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
  gap: 20px;
  flex: 1;
`

export const ReceiptText = styled.p`
  margin: 0;
  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getReceiptTextFontSize()};
  font-weight: 500;
  line-height: ${getReceiptTextLineHeight()};
  text-align: left;
  white-space: pre-wrap;
`