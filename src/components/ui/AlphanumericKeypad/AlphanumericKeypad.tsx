import { useState } from 'react'
import deleteIcon from '../../../assets/icons/delete.svg'
import shiftIcon from '../../../assets/icons/shift.svg'
import lngIcon from '../../../assets/icons/lng.svg'
import {
  DeleteIcon,
  DeleteKeyButton,
  DeleteLabel,
  KeyButton,
  KeyIcon,
  KeypadContainer,
  KeyRow,
  LngKeyButton,
  SpaceKeyButton,
  SpecialKeyButton,
} from './AlphanumericKeypad.styled'

type AlphanumericKeypadProps = {
  onKeyPress: (key: string) => void
  onDelete: () => void
  deleteLabel: string
  enLabel: string
  uaLabel: string
}

// Українська розкладка (малі літери)
const ukLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '№', "'"],
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї'],
  ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', 'ґ'],
  ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '-', '@'],
]

// Українська розкладка (великі літери)
const ukLayoutUpper = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '№', "'"],
  ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї'],
  ['Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', 'Ґ'],
  ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '-', '@'],
]

// Англійська розкладка (малі літери)
const enLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '№', "'"],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '(', ')'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '-', '@'],
]

// Англійська розкладка (великі літери)
const enLayoutUpper = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '№', "'"],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '(', ')'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '-', '@'],
]

// Функціональні кнопки (5-й рядок)
const getFunctionalRow = (language: 'uk' | 'en', enLabel: string, uaLabel: string, deleteLabel: string) => [
  { type: 'lng', label: language === 'uk' ? uaLabel : enLabel },
  { type: 'comma', label: ',' },
  { type: 'space', label: '' },
  { type: 'slash', label: '/' },
  { type: 'dot', label: '.' },
  { type: 'delete', label: deleteLabel },
]

const AlphanumericKeypad = ({
  onKeyPress,
  onDelete,
  deleteLabel,
  enLabel,
  uaLabel,
}: AlphanumericKeypadProps) => {
  const [isShiftActive, setIsShiftActive] = useState(false)
  const [language, setLanguage] = useState<'uk' | 'en'>('uk')

  const getCurrentLayout = () => {
    if (language === 'uk') {
      return isShiftActive ? ukLayoutUpper : ukLayout
    }
    return isShiftActive ? enLayoutUpper : enLayout
  }

  const handleShiftClick = () => {
    setIsShiftActive(!isShiftActive)
  }

  const handleLanguageClick = () => {
    setLanguage((prev) => (prev === 'uk' ? 'en' : 'uk'))
    setIsShiftActive(false)
  }

  const handleSpaceClick = () => {
    onKeyPress(' ')
  }

  const handleSpecialKey = (key: string) => {
    if (key === ',') onKeyPress(',')
    else if (key === '/') onKeyPress('/')
    else if (key === '.') onKeyPress('.')
  }

  const currentLayout = getCurrentLayout()
  const functionalRow = getFunctionalRow(language, enLabel, uaLabel, deleteLabel)

  return (
    <KeypadContainer>
      {/* 4 рядки по 12 кнопок */}
      {currentLayout.map((row, rowIndex) => (
        <KeyRow key={rowIndex}>
          {/* Перша кнопка 4-го рядка — Shift */}
          {rowIndex === 3 && (
            <SpecialKeyButton onClick={handleShiftClick}>
              <KeyIcon src={shiftIcon} alt="shift" />
            </SpecialKeyButton>
          )}
          {/* Інші кнопки рядка */}
          {row.map((key) => (
            <KeyButton key={key} onClick={() => onKeyPress(key)}>
              {key}
            </KeyButton>
          ))}
        </KeyRow>
      ))}

      {/* 5-й рядок: функціональні кнопки (без Shift) */}
      <KeyRow>
        {functionalRow.map((btn, idx) => {
          if (btn.type === 'lng') {
            return (
              <LngKeyButton key={idx} onClick={handleLanguageClick}>
                <KeyIcon src={lngIcon} alt="language" />
                <span>{btn.label}</span>
              </LngKeyButton>
            )
          }
          if (btn.type === 'space') {
            return (
              <SpaceKeyButton key={idx} onClick={handleSpaceClick}>
                <span> </span>
              </SpaceKeyButton>
            )
          }
          if (btn.type === 'delete') {
            return (
              <DeleteKeyButton onClick={onDelete}>
                <DeleteIcon src={deleteIcon} alt="delete" />
                <DeleteLabel>{deleteLabel}</DeleteLabel>
              </DeleteKeyButton>
            )
          }
          return (
            <SpecialKeyButton key={idx} onClick={() => handleSpecialKey(btn.label)}>
              <span>{btn.label}</span>
            </SpecialKeyButton>
          )
        })}
      </KeyRow>
    </KeypadContainer>
  )
}

export default AlphanumericKeypad