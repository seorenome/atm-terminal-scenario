import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import CardInputPage from '../pages/CardInput/CardInputPage'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'
import PhoneInputPage from '../pages/PhoneInput/PhoneInputPage'
import PrinterErrorPage from '../pages/PrinterError/PrinterErrorPage'

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
])