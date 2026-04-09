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

const NumericKeypad = ({
  onDigitClick,
  onDeleteClick,
  deleteLabel,
}: NumericKeypadProps) => {
  return (
    <Keypad>
      <KeyRows>
        <Row>
          <KeyButton type="button" onClick={() => onDigitClick('1')}>
            1
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('2')}>
            2
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('3')}>
            3
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => onDigitClick('4')}>
            4
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('5')}>
            5
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('6')}>
            6
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => onDigitClick('7')}>
            7
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('8')}>
            8
          </KeyButton>
          <KeyButton type="button" onClick={() => onDigitClick('9')}>
            9
          </KeyButton>
        </Row>

        <Row>
          <KeyButton type="button" onClick={() => onDigitClick('0')}>
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
}

export default NumericKeypad