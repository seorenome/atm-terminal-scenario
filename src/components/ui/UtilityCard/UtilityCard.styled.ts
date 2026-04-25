import styled from 'styled-components'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  width: 260px;
  height: 200px;
  flex-shrink: 0;
  transition: transform 0.05s ease-in-out, opacity 0.05s ease-in-out;
  
  &:active {
    transform: scale(0.97);
    opacity: 0.85;
  }

  ${ACTIVE_SCREEN_MODE === '1080p' && `
    width: 260px;
    height: 200px;
  `}
`

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`

export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

export const Icon = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

export const ArrowWrapper = styled.div`
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

export const Arrow = styled.img`
  width: 32px;
  height: 24px;
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const Name = styled.span`
  color: rgba(17, 30, 41, 1);
  width: 220px;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`