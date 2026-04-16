import { createContext, useContext, useState, ReactNode } from 'react'

type TransactionData = {
  cardNumber?: string
  phoneNumber?: string
  smsCode?: string
  iban?: string
  paymentPurpose?: string
  amount?: number
}

type TransactionContextType = {
  data: TransactionData
  updateData: (newData: Partial<TransactionData>) => void
  clearData: () => void
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined)

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TransactionData>({})

  const updateData = (newData: Partial<TransactionData>) => {
    setData((prev) => ({ ...prev, ...newData }))
  }

  const clearData = () => {
    setData({})
  }

  return (
    <TransactionContext.Provider value={{ data, updateData, clearData }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  const context = useContext(TransactionContext)
  if (!context) {
    throw new Error('useTransaction must be used within TransactionProvider')
  }
  return context
}