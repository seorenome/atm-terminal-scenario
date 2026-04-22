import styled from 'styled-components'

export const PaginationRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 60px;
  align-self: stretch;
`

export const PageButton = styled.button<{ $active?: boolean; $isArrow?: boolean }>`
  width: ${({ $isArrow }) => ($isArrow ? '60px' : '30px')};
  height: ${({ $isArrow }) => ($isArrow ? '60px' : '30px')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: ${({ $isArrow }) => ($isArrow ? 'rgba(30, 192, 191, 1)' : 'transparent')};
  border-radius: ${({ $isArrow }) => ($isArrow ? '15px' : '0')};
  cursor: pointer;
  
  ${({ $active }) => $active && `
    border-bottom: 1px solid rgba(17, 30, 41, 1);
  `}

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`

export const PageNumber = styled.span<{ $active: boolean }>`
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 24px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  line-height: normal;
`

export const ArrowIcon = styled.img<{ $reversed?: boolean }>`
  width: 40px;
  height: 19px;
  ${({ $reversed }) => $reversed && 'transform: rotate(180deg);'}
`
