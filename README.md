ATM Terminal Scenario — Архітектура проекту

1. Технологічний стек
Технологія	Призначення
React 19	UI бібліотека
TypeScript	Типізація
Vite	Збірка
styled-components	Стилізація
react-router-dom	Маршрутизація

2. Структура папок
text
src/
├── assets/          # Зображення, іконки, шрифти, банери
├── components/      # UI компоненти
│   ├── layout/      # Лейаут (TerminalHeader, TerminalFooter, TerminalLayout)
│   └── ui/          # Перевикористовувані компоненти (Button, Keypad, Loader, Pagination...)
├── config/          # Конфігураційні файли (сценарії, екрани, adConfig)
├── constants/       # Константи (routePaths)
├── context/         # React Context (Locale, Transaction, Loader)
├── data/            # Mock-дані (utilitiesMockData)
├── hoc/             # Higher-Order Components (withScenario, withInactivity)
├── hooks/           # Кастомні хуки (useScenarioNavigation)
├── locale/          # Локалізація (uk.ts, en.ts, types.ts)
├── pages/           # Сторінки (кожна в окремій папці)
│   ├── PageName/
│   │   ├── PageName.tsx
│   │   ├── PageNameView.tsx      # опціонально
│   │   └── PageNameView.styled.ts
├── routes/          # Маршрутизація (router.tsx)
└── styles/          # Глобальні стилі (GlobalStyles.ts)

3. Ключові конфігураційні файли
Файл	Призначення
screenConfig.ts	Роздільності (800p, 1024p, 1080p)
scenarioConfig.ts	Сценарії та кроки (cardTopUp, mobileTopUp, billsPayment, utilities)
adConfig.ts	Рекламний блок (вкл/викл, таймери, банери)
paymentConfig.ts	Дані для платежів (комісія, ліміти)
utilitiesData.ts	Оператори комунальних послуг
utilitiesMockData.json	Mock-дані для рахунків

4. Маршрутизація
Всі маршрути визначені в routePaths.ts та використовуються в router.tsx.

text
/start                           → StartPage (реклама)
/choose-operation-type           → ChooseOperationTypePage
/card-input                      → CardInputPage (поповнення картки)
/phone-input                     → PhoneInputPage
/sms-input                       → SmsInputPage
/payment-info                    → PaymentInfoPage
/cash-acceptance                 → CashAcceptancePage
/payment-result                  → PaymentResultPage
/receipt                         → ReceiptPage
/iban-input                      → IbanInputPage
/payment-purpose                 → PaymentPurposePage
/utilities                       → UtilitiesPage
/account-input                   → AccountInputPage
/*-error                         → ErrorPages

5. Сценарії (4 основні)
Сценарій	ID	Сторінки
Поповнення картки	cardTopUp	cardInput → phoneInput → smsInput → paymentInfo → cashAcceptance → paymentResult
Мобільний зв'язок	mobileTopUp	phoneInput → smsInput → paymentInfo → cashAcceptance → paymentResult
Оплата рахунків	billsPayment	ibanInput → phoneInput → smsInput → paymentPurpose → paymentInfo → cashAcceptance → paymentResult
Комунальні послуги	utilities	utilities → accountInput → phoneInput → smsInput → paymentInfo → cashAcceptance → paymentResult

6. Контексти
Контекст	Дані
LocaleContext	Мова (uk/en)
TransactionContext	Дані транзакції (cardNumber, phoneNumber, smsCode, iban, paymentPurpose, amount, operatorName, accountNumber, serviceAddress, payerName, serviceType)
LoaderContext	Стан завантаження (showLoader, hideLoader, withLoader)

7. HOC
HOC	Призначення
withScenario	Передає navigation та currentStepId в сторінку, перевіряє scenarioId
withInactivity	Таймер бездіяльності (повернення на старт)

8. Локалізація
locale/uk.ts — українська

locale/en.ts — англійська

locale/types.ts — TypeScript типи

Використання: const t = translations[locale]

9. Додавання нового сценарію
Додати ScenarioId в scenarioConfig.ts

Описати steps (id, path, nextStep, errorStep)

Створити сторінки в pages/

Додати маршрути в routePaths.ts та router.tsx

Додати картку на ChooseOperationTypePage

10. Адаптивність
Центрування через TerminalViewport (сірий фон)

Фіксовані розміри через TerminalFrame з screenConfig.ts

Адаптивні стилі через умовні перевірки ACTIVE_SCREEN_MODE

Документація актуальна на 29.04.2026