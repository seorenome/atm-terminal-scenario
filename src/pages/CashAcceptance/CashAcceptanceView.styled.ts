import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

// Відступи та гапи
const getContentPaddingTop = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '80px'
  return '100px'
}

const getContentGap = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '40px'
  return '60px'
}

const getCardsGap = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '120px'
  return '60px'
}

const getCardsPadding = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '0 100px'
  return '0 60px'
}

const getCardWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '686px'
  return '560px'
}

const getCardHeight = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '460px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '574px'
  return '500px'
}

// Текст інструкції
const getInstructionFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

// Іконка info
const getInfoIconSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '46px'
  return '32px'
}

const getInfoTextFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

// Права частина
const getNoticeFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

const getLabelFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

const getLabelBoldFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

const getAmountMainFontSize = () => '46px'
const getAmountCurrencyFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '24px'
}

const getMoneyIconSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '85px'
  return '69px'
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
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    display: none;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    padding: 0 40px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    padding: 0 100px;
  `}
`

export const PageTitle = styled.h1`
  margin: 0;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-weight: 600;
  line-height: 46px;
  text-align: center;
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    font-size: 46px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    font-size: 62px;
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${getCardsGap()};
  padding: ${getCardsPadding()};
  align-self: stretch;
`

export const LeftCard = styled.div`
  background-color: #ffffff;
  width: ${getCardWidth()};
  height: ${getCardHeight()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
`

export const InstructionText = styled.div`
  width: 100%;
  padding: 20px 0;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getInstructionFontSize()};
  font-weight: 600;
  text-align: left;
`

export const SvgAnimate = styled.img`
  width: 212px;
  height: 259px;
`

export const InfoBlock = styled.div`
  background-color: rgba(244, 245, 250, 1);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  align-self: stretch;
  border-radius: 10px;
`

export const InfoIcon = styled.img`
  width: ${getInfoIconSize()};
  height: ${getInfoIconSize()};
`

export const InfoText = styled.div`
  color: rgba(110, 116, 123, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getInfoTextFontSize()};
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  flex: 1;
`

export const RightCard = styled.div`
  background-color: #ffffff;
  width: ${getCardWidth()};
  height: ${getCardHeight()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
`

export const NoticeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 20px 40px;
  align-self: stretch;
`

export const NoticeText = styled.div`
  color: rgba(110, 116, 123, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getNoticeFontSize()};
  font-weight: 400;
  line-height: normal;
  text-align: left;
`

export const EnrolledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`

export const EnrolledLabel = styled.div`
  color: rgba(110, 116, 123, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getLabelBoldFontSize()};
  font-weight: 700;
  text-align: left;
`

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const AmountMain = styled.span`
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getAmountMainFontSize()};
  font-weight: 600;
  line-height: 46px;
  text-align: right;
`

export const AmountCurrency = styled.span`
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getAmountCurrencyFontSize()};
  font-weight: 500;
  line-height: 46px;
  text-align: right;
`

export const AcceptedBlock = styled.div`
  background-color: rgba(229, 247, 251, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px 40px;
  align-self: stretch;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
`

export const AcceptedLabel = styled.div`
  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getLabelFontSize()};
  font-weight: 400;
  text-align: right;
  align-self: stretch;
`

export const AcceptedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  align-self: stretch;
`

export const MoneyIcon = styled.img`
  width: ${getMoneyIconSize()};
  height: auto;
`

export const CommissionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  align-self: stretch;
`

export const CommissionLabel = styled.div`
  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getLabelFontSize()};
  font-weight: 400;
  text-align: left;
`

export const CommissionAmount = styled.div`
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: ${getLabelFontSize()};
  font-weight: 500;
  text-align: left;
`