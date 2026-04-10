=== src/App.tsx ===
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App

=== src/main.tsx ===
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

=== src/config/screenConfig.ts ===
export type ScreenMode = '800p' | '1024p' | '1080p'

type ScreenResolution = {
  width: number
  height: number
}

export const SCREEN_RESOLUTIONS: Record<ScreenMode, ScreenResolution> = {
  '800p': {
    width: 1280,
    height: 800,
  },
  '1024p': {
    width: 1280,
    height: 1024,
  },
  '1080p': {
    width: 1920,
    height: 1080,
  },
}

export const ACTIVE_SCREEN_MODE: ScreenMode = '1024p'

=== src/constants/routePaths.ts ===
export const routePaths = {
  home: '/',
  chooseOperationType: '/choose-operation-type',
  phoneInput: '/phone-input',
  cardInput: '/card-input',
  printerError: '/printer-error',
} as const

=== src/locale/en.ts ===
const en = {
  header: {
    supportPhone: '0 800 210 800',
    supportDescription: 'free within Ukraine',
    languageUa: 'UA',
    languageEn: 'EN',
    exit: 'Exit',
  },
  footer: {
    cancel: 'Cancel',
    repeat: 'Repeat',
    continue: 'Continue',
  },
  errorScreen: {
    title: 'You entered an incorrect recipient card number!',
    primaryMessage: 'The operation will be cancelled.',
    secondaryMessage:
      'To correct the data and continue the card top-up operation, press the "REPEAT" button',
  },
  printerErrorScreen: {
    title: 'It is impossible to print a receipt after the operation is completed',
    primaryMessage: 'The receipt printer is temporarily unavailable.',
    secondaryMessage:
      'If you agree to perform the operation without a receipt, press the "Continue" button',
  },
  startScreen: {
    title: 'Choose a service',
    cards: {
      billsPayment: {
        title: 'Bill payment',
        description: 'Instant account top-up using bank details',
      },
      mobileTopUp: {
        title: 'Mobile connection',
        description: 'Any mobile operator within Ukraine',
      },
      cardTopUp: {
        title: 'Card top-up',
        description: 'Top up any card of a Ukrainian bank',
      },
      utilities: {
        title: 'Utility services',
        description: 'Payment of utility services by details across Ukraine',
      },
    },
  },
  phoneInputScreen: {
    title: 'Enter the phone number for top-up',
    hint: 'Please enter your phone number in the format +38 (0XX) XXX XX XX',
    back: 'Back',
    continue: 'Continue',
    delete: 'Delete',
    emptyMask: '+38 (___) ___ __ __',
  },
  cardInputScreen: {
    title: 'Enter the card number for top-up',
    hint: 'Please enter your card number in the format XXXX XXXX XXXX XXXX',
    back: 'Back',
    continue: 'Continue',
    delete: 'Delete',
    emptyMask: '____ ____ ____ ____',
  },
}

export default en

=== src/locale/index.ts ===
import en from './en'
import uk from './uk'
import type { Locale } from './types'

export const translations = {
  uk,
  en,
} as const

export const defaultLocale: Locale = 'uk'

=== src/locale/types.ts ===
export type Locale = 'uk' | 'en'

=== src/locale/uk.ts ===
const uk = {
  header: {
    supportPhone: '0 800 210 800',
    supportDescription: 'в межах України безкоштовно',
    languageUa: 'UA',
    languageEn: 'EN',
    exit: 'Завершити',
  },
  footer: {
    cancel: 'Скасувати',
    repeat: 'Повторити',
    continue: 'Продовжити',
  },
  errorScreen: {
    title: 'Ви вказали невірний номер картки одержувача!',
    primaryMessage: 'Операцію буде скасовано.',
    secondaryMessage:
      'Щоб виправити дані та подовжити операцію поповнення картки, натисніть кнопку "ПОВТОРИТИ"',
  },
  printerErrorScreen: {
    title: 'Неможливо надрукувати квитанцію після завершення операції',
    primaryMessage: 'Принтер чеків тимчасово не працює.',
    secondaryMessage:
      'Якщо ви погоджуєтесь здійснити оперецію без квитанції, натисніть кнопку "Продовжити"',
  },
  startScreen: {
    title: 'Оберіть послугу',
    cards: {
      billsPayment: {
        title: 'Оплата рахунків',
        description: 'Миттєве поповнення рахунків за реквізитами банку',
      },
      mobileTopUp: {
        title: "Мобільний зв'язок",
        description: 'Будь-який мобільний оператор на території України',
      },
      cardTopUp: {
        title: 'Поповнення картки',
        description: 'Поповнення будь-якої картки українського банку',
      },
      utilities: {
        title: 'Комунальні послуги',
        description: 'Оплата комунальних послуг за реквізитами по всій Україні',
      },
    },
  },
  phoneInputScreen: {
    title: 'Введіть номер телефону для поповнення',
    hint: 'Будь ласка, введіть свій номер телефону у форматі +38 (0XX) XXX XX XX',
    back: 'Назад',
    continue: 'Продовжити',
    delete: 'Стерти',
    emptyMask: '+38 (___) ___ __ __',
  },
  cardInputScreen: {
    title: 'Введіть номер картки для поповнення',
    hint: 'Будь ласка, введіть свій номер картки у форматі XXXX XXXX XXXX XXXX',
    back: 'Назад',
    continue: 'Продовжити',
    delete: 'Стерти',
    emptyMask: '____ ____ ____ ____',
  },
}

export default uk

=== src/routes/router.tsx ===
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import CardInputPage from '../pages/CardInput/CardInputPage'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'
import PhoneInputPage from '../pages/PhoneInput/PhoneInputPage'
import PrinterErrorPage from '../pages/PrinterError/PrinterErrorPage'

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Navigate to={routePaths.chooseOperationType} replace />,
  },
  {
    path: routePaths.chooseOperationType,
    element: <ChooseOperationTypePage />,
  },
  {
    path: routePaths.phoneInput,
    element: <PhoneInputPage />,
  },
  {
    path: routePaths.cardInput,
    element: <CardInputPage />,
  },
  {
    path: routePaths.printerError,
    element: <PrinterErrorPage />,
  },
])

=== src/styles/GlobalStyles.ts ===
import { createGlobalStyle } from 'styled-components'

import OschadSansRegular from '../assets/fonts/OschadSans-Regular.woff2'
import OschadSansMedium from '../assets/fonts/OschadSans-Medium.woff2'
import OschadSansSemiBold from '../assets/fonts/OschadSans-SemiBold.woff2'
import OschadSansBold from '../assets/fonts/OschadSans-Bold.woff2'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Oschad Sans';
    src: url(${OschadSansBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
  }

  body {
    min-height: 100vh;
    font-family: 'Oschad Sans', Arial, sans-serif;
    background-color: #bdbdbd;
    color: #000000;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

=== src/components/layout/TerminalFooter/TerminalFooter.styled.ts ===
import styled from 'styled-components'

export const FooterRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px 60px;
`

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
`

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

=== src/components/layout/TerminalFooter/TerminalFooter.tsx ===
import Button from '../../ui/Button/Button'

import {
  FooterLeft,
  FooterRight,
  FooterRoot,
} from './TerminalFooter.styled'
import type { TerminalFooterProps } from './TerminalFooter.types'

const TerminalFooter = ({
  leftButtons = [],
  rightButtons = [],
}: TerminalFooterProps) => {
  return (
    <FooterRoot>
      <FooterLeft>
        {leftButtons.map((button) => (
          <Button
            key={`${button.variant}-${button.label}`}
            label={button.label}
            variant={button.variant}
            icon={button.icon}
            disabled={button.disabled}
            onClick={button.onClick}
            type={button.type}
          />
        ))}
      </FooterLeft>

      <FooterRight>
        {rightButtons.map((button) => (
          <Button
            key={`${button.variant}-${button.label}`}
            label={button.label}
            variant={button.variant}
            icon={button.icon}
            disabled={button.disabled}
            onClick={button.onClick}
            type={button.type}
          />
        ))}
      </FooterRight>
    </FooterRoot>
  )
}

export default TerminalFooter

=== src/components/layout/TerminalFooter/TerminalFooter.types.ts ===
import type { ButtonProps } from '../../ui/Button/Button.types'

export type TerminalFooterProps = {
  leftButtons?: ButtonProps[]
  rightButtons?: ButtonProps[]
}

=== src/components/layout/TerminalHeader/TerminalHeader.styled.ts ===
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
  cursor: pointer;
`

export const ActionIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`

export const ActionLabel = styled.span`
  color: #00829b;
  height: auto;
  text-align: left;
  font-family: 'Oschad Sans', Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  text-decoration: none;
`

=== src/components/layout/TerminalHeader/TerminalHeader.tsx ===
import ExitIcon from '../../../assets/icons/exit.svg'
import LineIcon from '../../../assets/icons/line.svg'
import Logo from '../../../assets/icons/logo.svg'
import {
  ActionButton,
  ActionIcon,
  ActionLabel,
  HeaderDescription,
  HeaderInfo,
  HeaderLogo,
  HeaderPhone,
  HeaderRight,
  HeaderRoot,
  LanguageButton,
  LanguageDivider,
  LanguageSwitcher,
} from './TerminalHeader.styled'
import type { HeaderLanguage, TerminalHeaderProps } from './TerminalHeader.types'

const TerminalHeader = ({
  variant,
  activeLanguage = 'EN',
  actionLabel = 'ЗАВЕРШИТИ',
  supportPhone,
  supportDescription,
  onLanguageChange,
}: TerminalHeaderProps) => {
  const isUaActive = activeLanguage === 'UA'
  const isEnActive = activeLanguage === 'EN'

  const handleLanguageChange = (language: HeaderLanguage) => {
    onLanguageChange?.(language)
  }

  return (
    <HeaderRoot>
      <HeaderLogo src={Logo} alt="Oschadbank logo" />

      <HeaderInfo>
        <HeaderPhone>{supportPhone}</HeaderPhone>
        <HeaderDescription>{supportDescription}</HeaderDescription>
      </HeaderInfo>

      <HeaderRight>
        {variant === 'language-switcher' ? (
          <LanguageSwitcher>
            <LanguageButton
              type="button"
              $active={isEnActive}
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </LanguageButton>

            <LanguageDivider src={LineIcon} alt="" />

            <LanguageButton
              type="button"
              $active={isUaActive}
              onClick={() => handleLanguageChange('UA')}
            >
              UA
            </LanguageButton>
          </LanguageSwitcher>
        ) : (
          <ActionButton type="button">
            <ActionIcon src={ExitIcon} alt="" />
            <ActionLabel>{actionLabel}</ActionLabel>
          </ActionButton>
        )}
      </HeaderRight>
    </HeaderRoot>
  )
}

export default TerminalHeader