import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../config/screenConfig'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  flex: 1 0 auto;
  width: 100%;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    gap: 40px;
    padding-top: 80px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    gap: 60px;
    padding-top: 100px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    gap: 60px;
    padding-top: 100px;
  `}
`

export const TitleWrap = styled.div`
  width: 100%;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    padding: 0 60px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    padding: 0 60px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    padding: 0 100px;
  `}
`

export const Title = styled.h1`
  margin: 0;
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-weight: 600;
  line-height: 46px;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    font-size: 46px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    font-size: 46px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    font-size: 62px;
  `}
`

export const Cards = styled.div`
  display: flex;
  align-self: stretch;
  flex-wrap: wrap;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 40px;
    padding: 0 60px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
    padding: 0 60px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
    padding: 0 100px;
  `}
`