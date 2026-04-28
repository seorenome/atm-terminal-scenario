import type { ScenarioId } from './scenarioConfig'

export type ReceiptConfig = {
  leftColumnTop: string[]
  leftColumnBottom: string[]
  rightColumnTop: string[]
  rightColumnBottom: string[]
}

const formatIban = (iban: string): string => {
  let cleanIban = iban.replace(/\s/g, '').toUpperCase()
  let hasPrefix = cleanIban.startsWith('UA')
  let digits = hasPrefix ? cleanIban.slice(2) : cleanIban
  if (digits.length !== 27) return iban
  const last14 = digits.slice(-14)
  return `UA ** ${last14}`
}

export const getReceiptConfig = (
  scenarioId: ScenarioId,
  data: {
    iban?: string
    paymentPurpose?: string
    phoneNumber?: string
    payerName?: string
    cardNumber?: string
    // Дані для utilities
    operatorName?: string
    accountNumber?: string
    serviceAddress?: string
    amount?: number
  }
): ReceiptConfig => {
  const bankName = 'АТ «ОЩАДБАНК»'
  const date = new Date().toLocaleString('uk-UA')
  const receiptNumber = `E1XM-K3PL-6JFG-OR3E`
  const ptks = '9065007'
  const address = 'Рівне, Льонокомбінатівська вул., 9'
  const operationCode = '30256028782'
  const paymentSystem = 'Mastercard'
  const recipientBank = 'АТ «ОЩАДБАНК»'
  const recipientCode = '325833352'

  // Розрахунок комісії та підсумкової суми
  const enteredAmount = data.amount || 1200
  const commissionAmount = enteredAmount * 0.01
  const finalAmount = enteredAmount - commissionAmount

  // Ліва колонка (верх) - однакова для всіх
  const leftColumnTop = [
    `Внесено: ${enteredAmount.toFixed(2)} грн.`,
    `Сума операції: ${enteredAmount.toFixed(2)} грн.`,
    `Зараховано отримувачу: ${finalAmount.toFixed(2)} грн.`,
    `Комісія банку: ${commissionAmount.toFixed(2)} грн.`,
    `Дата та час: ${date}`,
  ]

  // Права колонка (верх) - однакова для всіх
  const rightColumnTop = [
    `Квитанція №№: ${receiptNumber}`,
    `ПТКС: ${ptks}`,
    `Адреса: ${address}`,
    `Код операції: ${operationCode}`,
  ]

  // Ліва колонка (низ) - залежить від сценарію
  let leftColumnBottom: string[] = []
  let rightColumnBottom: string[] = []

  switch (scenarioId) {
    case 'cardTopUp':
      leftColumnBottom = [
        `Послуга: поповнення карткового рахунку, ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Номер картки: ${data.cardNumber || '5167 **** **** 9476'}`,
        `Платник: ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Банк платника: ${bankName}`,
        `Код банку платника: 300465`,
      ]
      rightColumnBottom = [
        `Отримувач: Пекарський Сергій Петрович`,
        `Рахунок отримувача: ${formatIban(data.iban || 'UA903052992990004000600055925')}`,
        `Платіжна система: ${paymentSystem}`,
        `Банк отримувача: ${recipientBank}`,
        `Код отримувача: ${recipientCode}`,
      ]
      break

    case 'mobileTopUp':
      leftColumnBottom = [
        `Послуга: Поповнення мобільного рахунку`,
        `Номер телефону: ${data.phoneNumber || '+38 (096) 834 - 70-01'}`,
        `Платник: ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Банк платника: ${bankName}`,
        `Код банку платника: 300465`,
      ]
      rightColumnBottom = [
        `Отримувач: ПрАТ "Київстар"`,
        `Рахунок отримувача: ${formatIban('UA983005280000026004000003072')}`,
        `Платіжна система: ${paymentSystem}`,
        `Банк отримувача: ${recipientBank}`,
        `Код отримувача: 21673832`,
      ]
      break

    case 'billsPayment':
      leftColumnBottom = [
        `Послуга: Оплата рахунків по номеру IBAN`,
        `Платник: ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Банк платника: ${bankName}`,
        `Код банку платника: 300465`,
        `Призначення платежу: ${data.paymentPurpose || 'Оплата за послуги водопостачання'}`,
      ]
      rightColumnBottom = [
        `Отримувач: РОВКП ВКГ «Рівнеоблводоканал»`,
        `Рахунок отримувача: ${formatIban(data.iban || 'UA983005280000026004000003072')}`,
        `Платіжна система: ${paymentSystem}`,
        `Банк отримувача: ${recipientBank}`,
        `Код отримувача: ${recipientCode}`,
      ]
      break

    case 'utilities':
      leftColumnBottom = [
        `Послуга: ${data.operatorName || 'Комунальна послуга'}`,
        `Особовий рахунок: ${data.accountNumber || '___________'}`,
        `Платник: ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Адреса: ${data.serviceAddress || '__________'}`,
        `Номер телефону: ${data.phoneNumber || '+38 (0XX) XXX XX XX'}`,
      ]
      rightColumnBottom = [
        `Отримувач: ${data.operatorName || 'Комунальне підприємство'}`,
        `Призначення платежу: ${data.paymentPurpose || `Оплата за ${data.operatorName || 'послуги'} за квітень 2026`}`,
        `Період оплати: квітень 2026`,
        `Платіжна система: ${paymentSystem}`,
      ]
      break

    default:
      leftColumnBottom = [
        `Послуга: ${data.paymentPurpose || 'Банківська операція'}`,
        `Платник: ${data.payerName || 'ПЕКАРСЬКИЙ С. П.'}`,
        `Банк платника: ${bankName}`,
        `Код банку платника: 300465`,
      ]
      rightColumnBottom = [
        `Отримувач: ${recipientBank}`,
        `Рахунок отримувача: ${formatIban(data.iban || 'UA903052992990004000600055925')}`,
        `Платіжна система: ${paymentSystem}`,
      ]
      break
  }

  return {
    leftColumnTop,
    leftColumnBottom,
    rightColumnTop,
    rightColumnBottom,
  }
}