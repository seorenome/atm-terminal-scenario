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
}>

const TerminalLayout = ({
  header,
  footer,
  children,
}: TerminalLayoutProps) => {
  return (
    <TerminalFrame $hasFooter={Boolean(footer)}>
      <TerminalHeader>{header}</TerminalHeader>
      <TerminalContent>{children}</TerminalContent>
      {footer ? <TerminalFooter>{footer}</TerminalFooter> : null}
    </TerminalFrame>
  )
}

export default TerminalLayout