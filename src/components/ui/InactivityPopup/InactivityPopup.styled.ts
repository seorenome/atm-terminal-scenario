import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Popup = styled.div`
  background-color: rgba(99, 209, 203, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px 120px;
  border-radius: 20px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
`

export const Icon = styled.img`
  width: 200px;
  height: 216px;
`

export const Title = styled.h2`
  margin: 0;
  color: #ffffff;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 46px;
  font-weight: 600;
  line-height: 46px;
  text-align: center;
`

export const TimerText = styled.div`
  color: #00829b;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

export const ContinueButton = styled.button`
  width: 280px;
  height: 70px;
  background-color: rgba(220, 225, 35, 1);
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  
  span {
    color: rgba(17, 30, 41, 1);
    font-family: 'Oschad Sans', Arial, sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 24px;
  }
`

export const ArrowNextIcon = styled.img`
  width: 20px;
  height: 19px;
`