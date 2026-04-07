export type InputFieldProps = {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  inputMode?: 'text' | 'numeric' | 'tel'
  type?: 'text' | 'tel' | 'password'
  maxLength?: number
  autoFocus?: boolean
  readOnly?: boolean
}