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
      <HeaderLogo src={Logo} alt="Ощадбанк" />

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

            <LanguageDivider src={LineIcon} alt="" aria-hidden="true" />

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
            <ActionIcon src={ExitIcon} alt="" aria-hidden="true" />
            <ActionLabel>{actionLabel}</ActionLabel>
          </ActionButton>
        )}
      </HeaderRight>
    </HeaderRoot>
  )
}

export default TerminalHeader