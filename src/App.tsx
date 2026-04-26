import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { LocaleProvider } from './context/LocaleContext'
import { TransactionProvider } from './context/TransactionContext'
import { LoaderProvider } from './context/LoaderContext'

function App() {
  return (
    <LocaleProvider>
      <TransactionProvider>
        <LoaderProvider>
          <GlobalStyles />
          <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
            }}
          />
        </LoaderProvider>
      </TransactionProvider>
    </LocaleProvider>
  )
}

export default App