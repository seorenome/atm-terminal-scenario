import styled from 'styled-components'

export const HeaderRoot = styled.header`
  display: flex;
  height: 100px;
  padding: 0 60px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  background: #fff;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 4px 80px 0 rgba(0, 130, 155, 0.1);
`

export const HeaderLogo = styled.img`
  width: 286px;
  height: 140px;
`

export const HeaderInfo = styled.div`
  display: flex;
  width: 350px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const HeaderPhone = styled.div`
  color: rgba(17, 30, 41, 1);
  height: auto;
  text-align: left;
  line-height: normal;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
`

export const HeaderDescription = styled.div`
  color: rgba(17, 30, 41, 0.5);
  height: auto;
  text-align: left;
  line-height: 20px;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`

export const HeaderRight = styled.div`
  display: flex;
  width: 286px;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
`

export const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`

export const LanguageButton = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  align-self: stretch;
  border: none;
  background: transparent;
  cursor: pointer;
  color: rgba(17, 30, 41, 1);
  height: auto;
  text-align: right;
  line-height: normal;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? 700 : 300)};
  text-decoration: none;
`

export const LanguageDivider = styled.img`
  width: 2px;
  height: 33px;
  box-sizing: content-box;
`

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 21px 32px;
  border: none;
  border-radius: 15px;
  background: rgba(235, 246, 250, 1);
  cursor: default;
`

export const ActionIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`

export const ActionLabel = styled.span`
  color: rgba(0, 130, 155, 1);
  height: auto;
  text-align: left;
  line-height: 24px;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
`