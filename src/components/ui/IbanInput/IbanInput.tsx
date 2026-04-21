import { useRef, useEffect } from 'react'
import type { IbanInputProps } from './IbanInput.types'
import {
  EditableText,
  Field,
  PlaceholderText,
  StaticText,
  Wrapper,
} from './IbanInput.styled'

const getStaticPrefix = () => {
  return 'UA '
}

const getEditableMask = () => {
  return '__ ______ ___________________'
}

const IbanInput = ({ value }: IbanInputProps) => {
  const fieldRef = useRef<HTMLDivElement>(null)

  const digits = value

  const formatDisplay = () => {
    const mask = getEditableMask()
    let result = ''
    let digitIndex = 0

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '_' && digitIndex < digits.length) {
        result += digits[digitIndex]
        digitIndex++
      } else if (mask[i] === '_') {
        result += '_'
      } else {
        result += mask[i]
      }
    }

    return result
  }

  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.scrollLeft = fieldRef.current.scrollWidth
    }
  }, [digits])

  const displayValue = formatDisplay()
  const isEmpty = digits.length === 0
  const staticPrefix = getStaticPrefix()

  return (
    <Wrapper>
      <Field ref={fieldRef}>
        <StaticText>{staticPrefix}</StaticText>
        {isEmpty ? (
          <PlaceholderText>{getEditableMask()}</PlaceholderText>
        ) : (
          <EditableText>{displayValue}</EditableText>
        )}
      </Field>
    </Wrapper>
  )
}

export default IbanInput