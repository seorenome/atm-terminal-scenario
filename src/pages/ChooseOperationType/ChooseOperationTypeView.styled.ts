import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  padding-top: 100px;

  flex: 1 0 auto;
  width: 100%;
`

export const TitleWrap = styled.div`
  width: 100%;
  padding: 0 60px;
`

export const Title = styled.h1`
  margin: 0;

  color: #111e29;
  font-family: 'Oschad Sans';
  font-size: 46px;
  font-weight: 600;
  line-height: 46px;
`

export const Cards = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 60px;
  align-self: stretch;
  flex-wrap: wrap;
`