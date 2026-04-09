const en = {
  header: {
    supportPhone: '0 800 210 800',
    supportDescription: 'free within Ukraine',
    languageUa: 'UA',
    languageEn: 'EN',
    exit: 'Exit',
  },
  footer: {
    cancel: 'Cancel',
    repeat: 'Repeat',
    continue: 'Continue',
  },
  errorScreen: {
    title: 'You entered an incorrect recipient card number!',
    primaryMessage: 'The operation will be cancelled.',
    secondaryMessage:
      'To correct the data and continue the card top-up operation, press the “REPEAT” button',
  },
  printerErrorScreen: {
    title: 'It is impossible to print a receipt after the operation is completed',
    primaryMessage: 'The receipt printer is temporarily unavailable.',
    secondaryMessage:
      'If you agree to perform the operation without a receipt, press the “Continue” button',
  },
  startScreen: {
    title: 'Choose a service',
    cards: {
      billsPayment: {
        title: 'Bill payment',
        description: 'Instant account top-up using bank details',
      },
      mobileTopUp: {
        title: 'Mobile connection',
        description: 'Any mobile operator within Ukraine',
      },
      cardTopUp: {
        title: 'Card top-up',
        description: 'Top up any card of a Ukrainian bank',
      },
      utilities: {
        title: 'Utility services',
        description: 'Payment of utility services by details across Ukraine',
      },
    },
  },
  phoneInputScreen: {
    title: 'Enter the phone number for top-up',
    hint: 'Please enter your phone number in the format +38 (0XX) XXX XX XX',
    back: 'Back',
    continue: 'Continue',
    delete: 'Delete',
    emptyMask: '+38 (___) ___ __ __',
  },
}

export default en