export type NumericKeypadProps = {
  onDigitClick: (digit: string) => void
  onDeleteClick?: () => void
  deleteLabel: string
}