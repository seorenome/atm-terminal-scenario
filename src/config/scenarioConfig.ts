import { routePaths } from '../constants/routePaths'

export type ScenarioId = 'cardTopUp' | 'mobileTopUp' | 'billsPayment' | 'utilities'

export type Step = {
  id: string
  path: string
  nextStep?: string
  errorStep?: string
}

export type Scenario = {
  id: ScenarioId
  name: string
  startStep: string
  steps: Record<string, Step>
}

export const scenarios: Record<ScenarioId, Scenario> = {
  cardTopUp: {
    id: 'cardTopUp',
    name: 'Поповнення картки',
    startStep: 'cardInput',
    steps: {
      cardInput: {
        id: 'cardInput',
        path: routePaths.cardInput,
        nextStep: 'paymentInfo',
        errorStep: 'cardError',
      },
      paymentInfo: {
        id: 'paymentInfo',
        path: routePaths.paymentInfo,
        nextStep: 'cashAcceptance',
        errorStep: 'printerError',
      },
      cashAcceptance: {
        id: 'cashAcceptance',
        path: routePaths.cashAcceptance,
        nextStep: 'paymentResult',
        errorStep: 'cashError',
      },
      paymentResult: {
        id: 'paymentResult',
        path: routePaths.paymentResult,
      },
      cardError: {
        id: 'cardError',
        path: routePaths.cardError,
        nextStep: 'cardInput',
      },
      printerError: {
        id: 'printerError',
        path: routePaths.printerError,
        nextStep: 'paymentResult',
      },
      cashError: {
        id: 'cashError',
        path: routePaths.cashError,
        nextStep: 'cashAcceptance',
      },
    },
  },
  mobileTopUp: {
    id: 'mobileTopUp',
    name: 'Мобільний зв\'язок',
    startStep: 'phoneInput',
    steps: {
      phoneInput: {
        id: 'phoneInput',
        path: routePaths.phoneInput,
        nextStep: 'smsInput',
        errorStep: 'phoneError',
      },
      smsInput: {
        id: 'smsInput',
        path: routePaths.smsInput,
        nextStep: 'paymentResult',
        errorStep: 'smsError',
      },
      paymentResult: {
        id: 'paymentResult',
        path: routePaths.paymentResult,
      },
      phoneError: {
        id: 'phoneError',
        path: routePaths.phoneError,
        nextStep: 'phoneInput',
      },
      smsError: {
        id: 'smsError',
        path: routePaths.smsError,
        nextStep: 'smsInput',
      },
    },
  },
  billsPayment: {
    id: 'billsPayment',
    name: 'Оплата рахунків',
    startStep: 'ibanInput',
    steps: {
      ibanInput: {
        id: 'ibanInput',
        path: routePaths.ibanInput,
        nextStep: 'paymentInfo',
        errorStep: 'ibanError',
      },
      paymentInfo: {
        id: 'paymentInfo',
        path: routePaths.paymentInfo,
        nextStep: 'cashAcceptance',
        errorStep: 'printerError',
      },
      cashAcceptance: {
        id: 'cashAcceptance',
        path: routePaths.cashAcceptance,
        nextStep: 'paymentResult',
        errorStep: 'cashError',
      },
      paymentResult: {
        id: 'paymentResult',
        path: routePaths.paymentResult,
      },
      ibanError: {
        id: 'ibanError',
        path: routePaths.ibanError,
        nextStep: 'ibanInput',
      },
      printerError: {
        id: 'printerError',
        path: routePaths.printerError,
        nextStep: 'paymentResult',
      },
      cashError: {
        id: 'cashError',
        path: routePaths.cashError,
        nextStep: 'cashAcceptance',
      },
    },
  },
  utilities: {
    id: 'utilities',
    name: 'Комунальні послуги',
    startStep: 'textInput',
    steps: {
      textInput: {
        id: 'textInput',
        path: routePaths.textInput,
        nextStep: 'paymentInfo',
        errorStep: 'textError',
      },
      paymentInfo: {
        id: 'paymentInfo',
        path: routePaths.paymentInfo,
        nextStep: 'cashAcceptance',
        errorStep: 'printerError',
      },
      cashAcceptance: {
        id: 'cashAcceptance',
        path: routePaths.cashAcceptance,
        nextStep: 'paymentResult',
        errorStep: 'cashError',
      },
      paymentResult: {
        id: 'paymentResult',
        path: routePaths.paymentResult,
      },
      textError: {
        id: 'textError',
        path: routePaths.textError,
        nextStep: 'textInput',
      },
      printerError: {
        id: 'printerError',
        path: routePaths.printerError,
        nextStep: 'paymentResult',
      },
      cashError: {
        id: 'cashError',
        path: routePaths.cashError,
        nextStep: 'cashAcceptance',
      },
    },
  },
}