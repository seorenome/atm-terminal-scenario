import type { ScenarioId } from './scenarioConfig'

export type ReceiptField = {
  label: string
  value: string
  visible: boolean
}

export type ReceiptColumn = {
  title?: string
  fields: ReceiptField[]
}

export type ReceiptConfig = {
  leftColumnTop: string[]
  leftColumnBottom: string[]
  rightColumnTop: string[]
  rightColumnBottom: string[]
}

export const getReceiptConfig = (
  scenarioId: ScenarioId,
  data: {
    iban?: string
    paymentPurpose?: string
    phoneNumber?: string
    payerName?: string
    cardNumber?: string
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

  // Ліва колонка (верх) - однакова для всіх
  const leftColumnTop = [
    `Внесено: 1200,00 грн.`,
    `Сума операції: 1200,00 грн.`,
    `Зараховано отримувачу: 1188,00 грн.`,
    `Комісія банку: 12,00 грн.`,
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
        `Рахунок отримувача: ${data.iban || 'UA903052992990004000600055925'}`,
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
        // Призначення платежу приховано для mobileTopUp
      ]
      rightColumnBottom = [
        `Отримувач: ПрАТ "Київстар"`,
        `Рахунок отримувача: UA983005280000026004000003072`,
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
        `Рахунок отримувача: ${data.iban || 'UA983005280000026004000003072'}`,
        `Платіжна система: ${paymentSystem}`,
        `Банк отримувача: ${recipientBank}`,
        `Код отримувача: ${recipientCode}`,
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
        `Рахунок отримувача: ${data.iban || 'UA903052992990004000600055925'}`,
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