import type { PropsWithChildren, ReactNode } from 'react'
import {
  TerminalContent,
  TerminalFooter,
  TerminalFrame,
  TerminalHeader,
} from './TerminalLayout.styled'

type TerminalLayoutProps = PropsWithChildren<{
  header: ReactNode
  footer?: ReactNode
  variant?: 'default' | 'numeric-entry'
  backgroundColor?: string
}>

const TerminalLayout = ({
  header,
  footer,
  children,
  variant = 'default',
  backgroundColor,
}: TerminalLayoutProps) => {
  const hasFooter = Boolean(footer)

  return (
    <TerminalFrame $hasFooter={hasFooter} $variant={variant} $backgroundColor={backgroundColor}>
      <TerminalHeader>{header}</TerminalHeader>

      <TerminalContent $variant={variant}>{children}</TerminalContent>

      {footer ? (
        <TerminalFooter $variant={variant}>{footer}</TerminalFooter>
      ) : null}
    </TerminalFrame>
  )
}

export default TerminalLayout