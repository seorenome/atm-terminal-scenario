import styled from 'styled-components'

export const HeaderRoot = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  background-color: #ffffff;
  box-shadow: 
  0 1px 3px 0 rgba(0, 0, 0, 0.10),
  0 4px 80px 0 rgba(0, 130, 155, 0.10);
`

export const HeaderLogo = styled.img`
  width: 204px;
  height: 100px;
  flex-shrink: 0;
`

export const HeaderInfo = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  flex-shrink: 0;
`

export const HeaderPhone = styled.span`
  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
`

export const HeaderDescription = styled.span`
  color: rgba(17, 30, 41, 0.5);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`

export const HeaderRight = styled.div`
  width: 204px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
`

export const LanguageButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;

  color: rgba(17, 30, 41, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 36px;
  font-style: normal;
  line-height: normal;
  font-weight: ${({ $active }) => ($active ? 700 : 300)};
`

export const LanguageDivider = styled.img`
  width: 2px;
  height: 33px;
`

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 21px 32px;
  border: none;
  border-radius: 15px;
  background-color: rgba(235, 246, 250, 1);
  cursor: default;

  color: rgba(0, 130, 155, 1);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
`

export const ActionIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const ActionLabel = styled.span`
  display: inline-block;
`