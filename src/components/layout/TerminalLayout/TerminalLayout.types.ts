import type { ReactNode } from 'react'

export type TerminalLayoutProps = {
  header: ReactNode
  footer?: ReactNode
  children: ReactNode
  variant?: 'default' | 'numeric-entry'
  backgroundColor?: string
}