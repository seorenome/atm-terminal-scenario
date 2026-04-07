import styled from 'styled-components'

export const Field = styled.input`
  width: 580px;
  height: 80px;
  padding: 0 28px;

  border-radius: 20px;
  border: 2px solid #0b8db0;
  background: #ffffff;
  outline: none;

  color: #111e29;
  font-family: 'Oschad Sans';
  font-size: 36px;
  font-weight: 600;
  line-height: normal;
  caret-color: #111e29;

  &::placeholder {
    color: rgba(17, 30, 41, 0.35);
  }
`