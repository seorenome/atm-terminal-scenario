export type Locale = 'uk' | 'en'

export type Translations = {
  header: {
    supportPhone: string
    supportDescription: string
    languageUa: string
    languageEn: string
    exit: string
  }
  footer: {
    back: string
    cancel: string
    repeat: string
    continue: string
  }
  errorScreen: {
    title: string
    primaryMessage: string
    secondaryMessage: string
  }
  ibanErrorScreen: {
    title: string
    primaryMessage: string
    secondaryMessage: string
  }
  printerErrorScreen: {
    title: string
    primaryMessage: string
    secondaryMessage: string
  }
  startScreen: {
    title: string
    cards: {
      billsPayment: { title: string; description: string }
      mobileTopUp: { title: string; description: string }
      cardTopUp: { title: string; description: string }
      utilities: { title: string; description: string }
    }
  }
  phoneInputScreen: {
    title: string
    hint: string
    errorMessage: string
    back: string
    continue: string
    delete: string
    emptyMask: string
  }
  cardInputScreen: {
    title: string
    hint: string
    back: string
    continue: string
    delete: string
    emptyMask: string
  }
  ibanInputScreen: {
    title: string
    hint: string
    hintFormat: string
    hintExample: string
    back: string
    continue: string
    delete: string
    emptyMask: string
  }
  textInputScreen: {
    title: string
    placeholder: string
    delete: string
    back: string
    continue: string
    en: string
    ua: string
  }
  cashAcceptanceScreen: {
    title: string
    instruction: string
    completeHint: string
    notice: string
    maxAmount: string
    commissionRate: string
    willBeCredited: string
    acceptedAmount: string
    commission: string
    currency: string
    back: string
    continue: string
  }
  smsInputScreen: {
    title: string
    hint: string
    back: string
    continue: string
    delete: string
    emptyMask: string
  }
  paymentInfoScreen: {
    title: string
    titleMobile: string
    titleBills: string
    subtitle: string
    cardNumber: string
    phoneNumber: string
    operator: string
    edrpou: string
    iban: string
    payerName: string
    recipientName: string
    paymentPurpose: string
    amount: string
    commission: string
    acceptedBills: string
    cancel: string
    continue: string
    currency: string
  }
  paymentResultScreen: {
    title: string
    receipt: string
    complete: string
  }
  receiptScreen: {
    title: string
    print: string
    complete: string
  }
  paymentPurposeScreen: {
    title: string
    placeholder: string
    delete: string
    back: string
    continue: string
    en: string
    ua: string
  }
  utilitiesErrorScreen: {
    title: string
    message: string
  }
  utilitiesScreen: {
    title: string
    ibanButton: string
  }
}