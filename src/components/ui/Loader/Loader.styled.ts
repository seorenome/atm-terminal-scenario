import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 6px solid rgba(30, 192, 191, 0.3);
  border-top: 6px solid #1ec0bf;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`