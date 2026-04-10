import type { CardInputProps } from './CardInput.types'
import { Field, Placeholder, Wrapper } from './CardInput.styled'

const formatCardNumber = (digits: string) => {
  return digits
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

const CardInput = ({ value, placeholder }: CardInputProps) => {
  const isEmpty = value.length === 0

  return (
    <Wrapper>
      <Field>
        {isEmpty ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : (
          formatCardNumber(value)
        )}
      </Field>
    </Wrapper>
  )
}

export default CardInput