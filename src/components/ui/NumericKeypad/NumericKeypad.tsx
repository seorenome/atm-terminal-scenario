import { memo, useCallback } from 'react'
import deleteIcon from '../../../assets/icons/delete.svg'
import {
  DeleteButton,
  DeleteIcon,
  DeleteLabel,
  KeyButton,
  KeyRows,
  Keypad,
  Row,
} from './NumericKeypad.styled'
import type { NumericKeypadProps } from './NumericKeypad.types'

const NumericKeypad = memo(({
  onDigitClick,
  onDeleteClick,
  deleteLabel,
}: NumericKeypadProps) => {
  const handleDigitClick = useCallback((digit: string) => {
    onDigitClick(digit)
  }, [onDigitClick])

  return (
    <Keypad>
      <KeyRows>
        <Row>
          <KeyButton type="button" onClick={() => handleDigitClick('1')}>
            1
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('2')}>
            2
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('3')}>
            3
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => handleDigitClick('4')}>
            4
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('5')}>
            5
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('6')}>
            6
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => handleDigitClick('7')}>
            7
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('8')}>
            8
          </KeyButton>
          <KeyButton type="button" onClick={() => handleDigitClick('9')}>
            9
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => handleDigitClick('0')}>
            0
          </KeyButton>

          <DeleteButton type="button" onClick={onDeleteClick}>
            <DeleteIcon src={deleteIcon} alt="" />
            <DeleteLabel>{deleteLabel}</DeleteLabel>
          </DeleteButton>
        </Row>
      </KeyRows>
    </Keypad>
  )
})

NumericKeypad.displayName = 'NumericKeypad'

export default NumericKeypad