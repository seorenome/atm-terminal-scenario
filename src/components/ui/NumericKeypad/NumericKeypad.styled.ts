import styled from 'styled-components'

export const Keypad = styled.div`
  width: 545px;
  height: 100%;
  min-height: 100%;
  padding: 210px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;

  background: #26cfc8;
`

export const KeyRows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  flex-shrink: 0;
`

export const KeyButton = styled.button`
  width: 104px;
  height: 96px;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border: none;
  border-radius: 16px;
  background: #f2f2f6;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  color: #111e29;
  text-align: center;
  font-family: 'Oschad Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const DeleteButton = styled.button`
  width: 225px;
  height: 96px;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border: none;
  border-radius: 16px;
  background: #f2f2f6;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

export const DeleteIcon = styled.img`
  width: 35px;
  height: 30px;
  display: block;
`

export const DeleteLabel = styled.span`
  color: #111e29;
  text-align: center;
  font-family: 'Oschad Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`