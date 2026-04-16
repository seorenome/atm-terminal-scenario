import { routePaths } from '../constants/routePaths'

export type ScenarioId = 'cardTopUp'

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
        nextStep: 'phoneInput',
        errorStep: 'cardError',
      },
      phoneInput: {
        id: 'phoneInput',
        path: routePaths.phoneInput,
        nextStep: 'smsInput',
        errorStep: 'phoneError',
      },
      smsInput: {
        id: 'smsInput',
        path: routePaths.smsInput,
        nextStep: 'paymentInfo',
        errorStep: 'smsError',
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