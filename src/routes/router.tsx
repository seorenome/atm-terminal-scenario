import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import CardErrorPage from '../pages/CardError/CardErrorPage'
import CardInputPage from '../pages/CardInput/CardInputPage'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'
import IbanInputPage from '../pages/IbanInput/IbanInputPage'
import PhoneInputPage from '../pages/PhoneInput/PhoneInputPage'
import PrinterErrorPage from '../pages/PrinterError/PrinterErrorPage'
import TextInputPage from '../pages/TextInput/TextInputPage'

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Navigate to={routePaths.chooseOperationType} replace />,
  },
  {
    path: routePaths.chooseOperationType,
    element: <ChooseOperationTypePage />,
  },
  {
    path: routePaths.phoneInput,
    element: <PhoneInputPage />,
  },
  {
    path: routePaths.cardInput,
    element: <CardInputPage />,
  },
  {
    path: routePaths.printerError,
    element: <PrinterErrorPage />,
  },
  {
    path: routePaths.cardError,
    element: <CardErrorPage />,
  },
  {
    path: routePaths.ibanInput,
    element: <IbanInputPage />,
  },
  {
    path: routePaths.textInput,
    element: <TextInputPage />,
  },
])