import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  border-radius: 20px;
  background: #ffffff;
  box-shadow:
    0 0 4px rgba(0, 0, 0, 0.1),
    0 20px 40px rgba(24, 180, 177, 0.1);
  text-align: left;
  cursor: pointer;
  transition: transform 0.05s ease-in-out, opacity 0.05s ease-in-out;
  
  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    width: 520px;
    height: 220px;
    padding: 20px 40px;
    gap: 20px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    width: 520px;
    height: 280px;
    padding: 40px;
    gap: 40px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    width: 520px;
    height: 280px;
    padding: 40px;
    gap: 40px;
  `}
`

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  margin: 0;
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-weight: 600;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    font-size: 32px;
    line-height: 36px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    font-size: 32px;
    line-height: 36px;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    font-size: 42px;
    line-height: normal;
  `}
`

export const ArrowWrap = styled.div`
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    display: flex;
  `}
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    display: none;
  `}
`

export const Arrow = styled.img`
  width: 32px;
  height: 24px;
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Description = styled.p`
  margin: 0;
  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-weight: 400;
  
  ${ACTIVE_SCREEN_MODE === '800p' && `
    width: 310px;
    font-size: 24px;
    line-height: normal;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1024p' && `
    width: 310px;
    font-size: 24px;
    line-height: normal;
  `}
  
  ${ACTIVE_SCREEN_MODE === '1080p' && `
    width: 310px;
    font-size: 30px;
    line-height: normal;
  `}
`

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`