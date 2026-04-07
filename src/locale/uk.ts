const uk = {
  header: {
    supportPhone: '0 800 210 800',
    supportDescription: 'в межах України безкоштовно',
    languageUa: 'UA',
    languageEn: 'EN',
    exit: 'ЗАВЕРШИТИ',
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
}

export default uk