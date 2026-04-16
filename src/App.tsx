import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { LocaleProvider } from './context/LocaleContext'

function App() {
  return (
    <LocaleProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </LocaleProvider>
  )
}

export default App