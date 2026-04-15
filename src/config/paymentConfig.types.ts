export type PaymentConfig = {
  commissionPercent: number
  acceptedBills: string
  minAmount: number
  maxAmount: number
  currency: string
  payerName: string
  paymentPurpose: string
}