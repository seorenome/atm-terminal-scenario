import type { SmsInputProps } from './SmsInput.types'
import { Field, Placeholder, Wrapper } from './SmsInput.styled'

const SmsInput = ({ value, placeholder }: SmsInputProps) => {
  const isEmpty = value.length === 0

  return (
    <Wrapper>
      <Field>
        {isEmpty ? <Placeholder>{placeholder}</Placeholder> : value}
      </Field>
    </Wrapper>
  )
}

export default SmsInput