import type { PhoneInputProps } from './PhoneInput.types'
import { Field, Placeholder, Wrapper } from './PhoneInput.styled'

const formatPhone = (digits: string) => {
  const d = digits.slice(0, 10) // 0XXXXXXXXX

  let result = '+38 '

  if (d.length > 0) {
    result += '(' + d.slice(0, 3)
  }

  if (d.length >= 3) {
    result += ') '
    result += d.slice(3, 6)
  }

  if (d.length >= 6) {
    result += ' ' + d.slice(6, 8)
  }

  if (d.length >= 8) {
    result += ' ' + d.slice(8, 10)
  }

  return result
}

const PhoneInput = ({ value, onChange, placeholder }: PhoneInputProps) => {
  const isEmpty = value.length === 0

  return (
    <Wrapper>
      <Field>
        {isEmpty ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : (
          formatPhone(value)
        )}
      </Field>
    </Wrapper>
  )
}

export default PhoneInput