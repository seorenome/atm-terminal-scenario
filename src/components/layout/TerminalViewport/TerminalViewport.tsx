import type { PropsWithChildren } from 'react'

import { ViewportBackground, ViewportCenter } from './TerminalViewport.styled'

const TerminalViewport = ({ children }: PropsWithChildren) => {
  return (
    <ViewportBackground>
      <ViewportCenter>{children}</ViewportCenter>
    </ViewportBackground>
  )
}

export default TerminalViewport