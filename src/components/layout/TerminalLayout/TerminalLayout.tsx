import type { PropsWithChildren, ReactNode } from 'react'

import {
  TerminalContent,
  TerminalFooter,
  TerminalFrame,
  TerminalHeader,
} from './TerminalLayout.styled'

type TerminalLayoutProps = PropsWithChildren<{
  header: ReactNode
  footer: ReactNode
}>

const TerminalLayout = ({
  header,
  footer,
  children,
}: TerminalLayoutProps) => {
  return (
    <TerminalFrame>
      <TerminalHeader>{header}</TerminalHeader>
      <TerminalContent>{children}</TerminalContent>
      <TerminalFooter>{footer}</TerminalFooter>
    </TerminalFrame>
  )
}

export default TerminalLayout