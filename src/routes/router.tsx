import { createBrowserRouter, Navigate } from 'react-router-dom'

import { routePaths } from '../constants/routePaths'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'

export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Navigate to={routePaths.chooseOperationType} replace />,
  },
  {
    path: routePaths.chooseOperationType,
    element: <ChooseOperationTypePage />,
  },
])