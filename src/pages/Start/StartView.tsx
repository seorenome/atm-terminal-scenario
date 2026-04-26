import type { ReactNode } from 'react'
// import { Container } from './StartView.styled'

type StartViewProps = {
  children: ReactNode
}

// Візуальне представлення стартової сторінки.
// Зараз компонент просто обгортає children, але в майбутньому
// можна додати власну структуру (відеофон, кнопку пропуску реклами тощо)

const StartView = ({ children }: StartViewProps) => {
  return <>{children}</>
}

export default StartView