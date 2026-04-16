import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

const getLeftPadding = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '100px'
  return '100px 60px'
}

const getTitleWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '770px'
  return '520px'
}

const getTitleFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '62px'
  return '46px'
}

const getTitleLineHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '62px'
  return '46px'
}

const getInputWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '780px'
  return '615px'
}

const getHintMaxWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '780px'
  return '615px'
}

const getHintFontSize = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '32px'
  return '22px'
}

const getHintLineHeight = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return 'normal'
  return '32px'
}

const getRightWidth = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '820px'
  return '545px'
}

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex: 1 0 auto;
  align-self: stretch;
  min-height: 100%;
  overflow: hidden;
`

export const Left = styled.section`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  padding: ${getLeftPadding()};
  align-self: stretch;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const TitleRow = styled.div`
  width: ${getTitleWidth()};
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`

export const Title = styled.h1`
  margin: 0;
  flex: 1 0 0;
  color: #111e29;
  font-family: 'Oschad Sans';
  font-size: ${getTitleFontSize()};
  font-style: normal;
  font-weight: 600;
  line-height: ${getTitleLineHeight()};
`

export const InputWrapper = styled.div`
  width: ${getInputWidth()};
`

export const HintCard = styled.div`
  width: 100%;
  max-width: ${getHintMaxWidth()};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px 40px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
`

export const HintText = styled.p`
  margin: 0;
  width: 100%;
  color: #111e29;
  text-align: left;
  font-family: 'Oschad Sans';
  font-size: ${getHintFontSize()};
  font-style: normal;
  font-weight: 500;
  line-height: ${getHintLineHeight()};
`

export const Right = styled.aside`
  width: ${getRightWidth()};
  min-width: ${getRightWidth()};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`