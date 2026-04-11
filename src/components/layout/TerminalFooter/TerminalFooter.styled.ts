import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

const getFooterGap = () => {
  if (ACTIVE_SCREEN_MODE === '1080p') return '40px'
  return '20px'
}

const getFooterPadding = () => {
  if (ACTIVE_SCREEN_MODE === '800p') return '20px 60px'
  if (ACTIVE_SCREEN_MODE === '1080p') return '40px 100px'
  return '40px 60px' // 1024p
}

export const FooterRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${getFooterGap()};
  padding: ${getFooterPadding()};
`

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${getFooterGap()};
  flex-grow: 1;
`

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${getFooterGap()};
  flex-grow: 1;
  justify-content: flex-end;
`