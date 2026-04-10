import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Field = styled.div`
  width: 100%;
  height: 80px;
  padding: 8px 30px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 15px;
  border: 2px solid #00829b;
  background: #ffffff;
  overflow-x: auto;
  overflow-y: hidden;

  color: #111e29;
  text-align: left;
  font-family: 'Oschad Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StaticText = styled.span`
  color: #111e29;
  font-family: 'Oschad Sans';
  font-size: 30px;
  font-weight: 600;
  white-space: pre;
`

export const EditableText = styled.span`
  color: #111e29;
  font-family: 'Oschad Sans';
  font-size: 30px;
  font-weight: 600;
  white-space: pre;
`

export const PlaceholderText = styled.span`
  color: rgba(17, 30, 41, 0.35);
  font-family: 'Oschad Sans';
  font-size: 30px;
  font-weight: 600;
  white-space: pre;
`