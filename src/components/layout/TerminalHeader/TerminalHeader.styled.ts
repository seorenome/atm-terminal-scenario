import styled from 'styled-components'

export const HeaderRoot = styled.header`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 286px 1fr 286px;
  align-items: flex-start;
  padding: 0 60px;
  background-color: #ffffff;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 4px 80px 0 rgba(0, 130, 155, 0.1);
  overflow: visible;
`

export const HeaderLogo = styled.img`
  width: 286px;
  height: 140px;
  flex-shrink: 0;
`

export const HeaderInfo = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  flex-shrink: 0;
`

export const HeaderPhone = styled.div`
  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
`

export const HeaderDescription = styled.div`
  color: rgba(17, 30, 41, 0.5);
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`

export const HeaderRight = styled.div`
  width: 286px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  flex-shrink: 0;
`

export const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LanguageButton = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: none;
  background: transparent;
  cursor: pointer;

  color: #111e29;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 36px;
  font-weight: ${({ $active }) => ($active ? 700 : 300)};
  line-height: normal;
`

export const LanguageDivider = styled.img`
  width: 2px;
  height: 33px;
  box-sizing: content-box;
`

export const ActionButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  flex-shrink: 0;
`

export const ActionLabel = styled.span`
  display: inline-block;
`