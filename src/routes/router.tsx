import { createBrowserRouter, Navigate } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import CardErrorPage from '../pages/CardError/CardErrorPage'
import CardInputPage from '../pages/CardInput/CardInputPage'
import CashAcceptancePage from '../pages/CashAcceptance/CashAcceptancePage'
import ChooseOperationTypePage from '../pages/ChooseOperationType/ChooseOperationTypePage'
import IbanInputPage from '../pages/IbanInput/IbanInputPage'
import IbanErrorPage from '../pages/IbanError/IbanErrorPage'
import PhoneInputPage from '../pages/PhoneInput/PhoneInputPage'
import PrinterErrorPage from '../pages/PrinterError/PrinterErrorPage'
import TextInputPage from '../pages/TextInput/TextInputPage'
import SmsInputPage from '../pages/SmsInput/SmsInputPage'
import PaymentInfoPage from '../pages/PaymentInfo/PaymentInfoPage'
import PaymentResultPage from '../pages/PaymentResult/PaymentResultPage'
import ReceiptPage from '../pages/Receipt/ReceiptPage'
import PaymentPurposePage from '../pages/PaymentPurpose/PaymentPurposePage'
import UtilitiesPage from '../pages/Utilities/UtilitiesPage'
import UtilitiesErrorPage from '../pages/UtilitiesError/UtilitiesErrorPage'

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
    path: routePaths.ibanError,
    element: <IbanErrorPage />,
  },
  {
    path: routePaths.textInput,
    element: <TextInputPage />,
  },
  {
    path: routePaths.cashAcceptance,
    element: <CashAcceptancePage />,
  },
  {
    path: routePaths.smsInput,
    element: <SmsInputPage />,
  },
  {
    path: routePaths.paymentInfo,
    element: <PaymentInfoPage />,
  },
  {
    path: routePaths.paymentResult,
    element: <PaymentResultPage />,
  },
  {
    path: routePaths.receipt,
    element: <ReceiptPage />,
  },
  {
    path: routePaths.paymentPurpose,
    element: <PaymentPurposePage />,
  },
  {
    path: routePaths.utilities,
    element: <UtilitiesPage />,
  },
  {
    path: routePaths.utilitiesError,
    element: <UtilitiesErrorPage />,
  },
])