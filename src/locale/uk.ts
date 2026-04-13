const uk = {
  header: {
    supportPhone: '0 800 210 800',
    supportDescription: 'в межах України безкоштовно',
    languageUa: 'UA',
    languageEn: 'EN',
    exit: 'Завершити',
  },
  footer: {
    cancel: 'Скасувати',
    repeat: 'Повторити',
    continue: 'Продовжити',
  },
  errorScreen: {
    title: 'Ви вказали невірний номер картки одержувача!',
    primaryMessage: 'Операцію буде скасовано.',
    secondaryMessage:
      'Щоб виправити дані та подовжити операцію поповнення картки, натисніть кнопку “ПОВТОРИТИ”',
  },
  printerErrorScreen: {
    title: 'Неможливо надрукувати квитанцію після завершення операції',
    primaryMessage: 'Принтер чеків тимчасово не працює.',
    secondaryMessage:
      'Якщо ви погоджуєтесь здійснити оперецію без квитанції, натисніть кнопку “Продовжити”',
  },
  startScreen: {
    title: 'Оберіть послугу',
    cards: {
      billsPayment: {
        title: 'Оплата рахунків',
        description: 'Миттєве поповнення рахунків за реквізитами банку',
      },
      mobileTopUp: {
        title: "Мобільний зв'язок",
        description: 'Будь-який мобільний оператор на території України',
      },
      cardTopUp: {
        title: 'Поповнення картки',
        description: 'Поповнення будь-якої картки українського банку',
      },
      utilities: {
        title: 'Комунальні послуги',
        description: 'Оплата комунальних послуг за реквізитами по всій Україні',
      },
    },
  },
  phoneInputScreen: {
    title: 'Введіть номер телефону для поповнення',
    hint: 'Будь ласка, введіть свій номер телефону у форматі +38 (0XX) XXX XX XX',
    back: 'Назад',
    continue: 'Продовжити',
    delete: 'Стерти',
    emptyMask: '+38 (___) ___ __ __',
  },
  cardInputScreen: {
    title: 'Введіть номер картки для поповнення',
    hint: 'Будь ласка, введіть свій номер картки у форматі XXXX XXXX XXXX XXXX',
    back: 'Назад',
    continue: 'Продовжити',
    delete: 'Стерти',
    emptyMask: '____ ____ ____ ____',
  },
  ibanInputScreen: {
    title: 'Введіть номер IBAN',
    hint: 'Введіть IBAN, який містить 27 цифр у форматі UA XX XXXXXX XXXXXXXXXXXXXXXXXXXXX',
    back: 'Назад',
    continue: 'Продовжити',
    delete: 'Стерти',
    emptyMask: 'UA __ ______ ___________________',
  },
  textInputScreen: {
    title: 'Введіть призначення платежу',
    placeholder: 'Введіть призначення платежу',
    delete: 'Стерти',
    back: 'Назад',
    continue: 'Продовжити',
    en: 'en',
    ua: 'ua',
  },
    cashAcceptanceScreen: {
    title: 'Внесення коштів',
    instruction: 'Будь ласка, внесіть кошти по одній банкноті',
    completeHint: 'Для завершення операції натисніть кнопку “Продовжити”',
    notice: 'Зверніть увагу: термінал банкноти не повертає, решти не дає.',
    maxAmount: 'Максимальна сума поповнення 5000 грн.',
    commissionRate: 'Комісія 1% від суми поповнення',
    willBeCredited: 'Буде зараховано на рахунок',
    acceptedAmount: 'Прийнято коштів на суму',
    commission: 'Комісія',
    currency: 'грн.',
    back: 'Назад',
    continue: 'Продовжити',
  },
}

export default uk