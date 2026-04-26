import fingerIcon from '../../../assets/icons/finger.svg'
import {
  FooterOverlay,
  Icon,
  IconWrapper,
  Text,
  TextWrapper,
  Timer,
  TimerWrapper,
} from './AdFooter.styled'

type AdFooterProps = {
  timerValue: string
}

const AdFooter = ({ timerValue }: AdFooterProps) => {
  return (
    <FooterOverlay>
      <IconWrapper>
        <Icon src={fingerIcon} alt="Торкніться" />
      </IconWrapper>

      <TextWrapper>
        <Text>Торкніться до екрану щоб почати</Text>
      </TextWrapper>

      <TimerWrapper>
        <Timer>{timerValue}</Timer>
      </TimerWrapper>
    </FooterOverlay>
  )
}

export default AdFooter