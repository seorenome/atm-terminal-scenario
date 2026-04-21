import { useEffect, useRef, useState } from 'react'
import ArrowNextIcon from '../../../assets/icons/arrow-next.svg'
import TimerIcon from '../../../assets/icons/icontimer.png'
import {
  ArrowNextIcon as ArrowNextIconStyled,
  ContinueButton,
  Icon,
  Overlay,
  Popup,
  TimerText,
  Title,
} from './InactivityPopup.styled'

type InactivityPopupProps = {
  timeoutSeconds: number
  onContinue: () => void
  onTimeout: () => void
}

const InactivityPopup = ({ timeoutSeconds, onContinue, onTimeout }: InactivityPopupProps) => {
  const [countdown, setCountdown] = useState(timeoutSeconds)
  const countdownRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setCountdown(timeoutSeconds)
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current)
          onTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [timeoutSeconds, onTimeout])

  const handleContinue = () => {
    if (countdownRef.current) clearInterval(countdownRef.current)
    onContinue()
  }

  return (
    <Overlay>
      <Popup>
        <Icon src={TimerIcon} alt="" />
        <Title>Вам потрібно більше часу?</Title>
        <TimerText>0:{countdown.toString().padStart(2, '0')}</TimerText>
        <ContinueButton onClick={handleContinue}>
          <span>Продовжити</span>
          <ArrowNextIconStyled src={ArrowNextIcon} alt="" />
        </ContinueButton>
      </Popup>
    </Overlay>
  )
}

export default InactivityPopup