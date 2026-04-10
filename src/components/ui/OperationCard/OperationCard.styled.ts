import styled from 'styled-components'

export const Card = styled.button`
  width: 520px;
  height: 280px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  border: none;
  border-radius: 20px;
  background: #ffffff;

  box-shadow:
    0 0 4px rgba(0, 0, 0, 0.1),
    0 20px 40px rgba(24, 180, 177, 0.1);

  text-align: left;
  cursor: pointer;
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
  font-family: 'Oschad Sans';
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
`

export const ArrowWrap = styled.div`
  width: 62px;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 310px;
  margin: 0;

  color: rgba(17, 30, 41, 0.8);
  font-family: 'Oschad Sans';
  font-size: 24px;
  font-weight: 400;
`

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`