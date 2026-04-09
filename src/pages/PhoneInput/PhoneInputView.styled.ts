import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 auto;
  align-self: stretch;
  overflow: hidden;
`

export const Left = styled.section`
  display: flex;
  width: 735px;
  min-width: 735px;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  padding: 100px 60px;
  flex-shrink: 0;
  align-self: stretch;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleRow = styled.div`
  width: 520px;
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
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px;
`

export const HintCard = styled.div`
  width: 580px;
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

  color: #111e29;
  text-align: left;
  font-family: 'Oschad Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`

export const Right = styled.aside`
  width: 545px;
  min-width: 545px;
  flex-shrink: 0;
  align-self: stretch;
`