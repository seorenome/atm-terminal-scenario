import icon01 from '../assets/icons/icon_01.png'
import icon02 from '../assets/icons/icon_02.png'
import icon03 from '../assets/icons/icon_03.png'
import icon04 from '../assets/icons/icon_04.png'
import icon05 from '../assets/icons/icon_05.png'
import icon06 from '../assets/icons/icon_06.png'
import icon07 from '../assets/icons/icon_07.png'
import icon08 from '../assets/icons/icon_08.png'
import icon09 from '../assets/icons/icon_09.png'
import icon10 from '../assets/icons/icon_10.png'
import icon11 from '../assets/icons/icon_11.png'
import icon12 from '../assets/icons/icon_12.png'
import icon13 from '../assets/icons/icon_13.png'
import icon14 from '../assets/icons/icon_14.png'
import icon15 from '../assets/icons/icon_15.png'

export interface UtilityOperator {
  id: string
  name: string
  icon: string
}

export const utilitiesData: UtilityOperator[] = [
  { id: '1', name: 'Рівнеоблводоканал', icon: icon01 },
  { id: '2', name: 'Рівненська обласна ЕК (електроенергія)', icon: icon02 },
  { id: '3', name: 'ДП «КиївГазЕнерджі»', icon: icon03 },
  { id: '4', name: '"Київтеплоенерго" Централізоване опалення і постачання гарячої води', icon: icon04 },
  { id: '5', name: 'YASNO Київські енергетичні послуги (електроенергія)', icon: icon05 },
  { id: '6', name: 'Київводоканал', icon: icon06 },
  { id: '7', name: 'Газмережі Рівненська філія за розподіл газу', icon: icon07 },
  { id: '8', name: 'ГК "Нафтогаз України"', icon: icon08 },
  { id: '9', name: 'Рівнеоблводоканал', icon: icon09 },
  { id: '10', name: 'Рівненська обласна ЕК (електроенергія)', icon: icon10 },
  { id: '11', name: 'Київводоканал', icon: icon11 },
  { id: '12', name: 'ДП «КиївГазЕнерджі»', icon: icon12 },
  { id: '13', name: 'Газмережі Рівненська філія за розподіл газу', icon: icon13 },
  { id: '14', name: 'Київтеплоенерго', icon: icon14 },
  { id: '15', name: 'Київводоканал', icon: icon15 },
]
