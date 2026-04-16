import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { LocaleProvider } from './context/LocaleContext'
import { TransactionProvider } from './context/TransactionContext'

function App() {
  return (
    <LocaleProvider>
      <TransactionProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </TransactionProvider>
    </LocaleProvider>
  )
}

export default App