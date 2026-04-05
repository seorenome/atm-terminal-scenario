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