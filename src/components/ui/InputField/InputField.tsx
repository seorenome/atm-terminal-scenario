import type { ChangeEvent } from 'react'
import { Field } from './InputField.styled'
import type { InputFieldProps } from './InputField.types'

const InputField = ({
  value,
  onChange,
  placeholder,
  inputMode = 'text',
  type = 'text',
  maxLength,
  autoFocus = false,
  readOnly = false,
}: InputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <Field
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      inputMode={inputMode}
      type={type}
      maxLength={maxLength}
      autoFocus={autoFocus}
      readOnly={readOnly}
    />
  )
}

export default InputField