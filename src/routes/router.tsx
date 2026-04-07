import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'
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
    path: routePaths.printerError,
    element: <PrinterErrorPage />,
  },
])