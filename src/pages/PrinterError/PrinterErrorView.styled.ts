import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 60px;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 40px;
`

export const PageTitle = styled.h1`
  margin: 0;
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 46px;
  font-weight: 600;
  line-height: 46px;
  text-align: center;
`

export const ErrorIcon = styled.img`
  width: 155px;
  height: 155px;
`

export const InfoCard = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
`