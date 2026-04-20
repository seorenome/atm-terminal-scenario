import { useEffect, useRef, useState, type ComponentType } from 'react'
import { useNavigate } from 'react-router-dom'
import InactivityPopup from '../components/ui/InactivityPopup/InactivityPopup'
import { INACTIVITY_TIMEOUT_SECONDS } from '../config/screenConfig'

export const withInactivity = <P extends object>(
  WrappedComponent: ComponentType<P>,
  timeoutSeconds: number = INACTIVITY_TIMEOUT_SECONDS
) => {
  return (props: P) => {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const resetTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      setShowPopup(false)

      timerRef.current = setTimeout(() => {
        setShowPopup(true)
      }, timeoutSeconds * 1000)
    }

    const handleUserActivity = () => {
      if (showPopup) {
        return
      }
      resetTimer()
    }

    const handleContinue = () => {
      resetTimer()
    }

    const handleTimeout = () => {
      navigate('/choose-operation-type')
    }

    useEffect(() => {
      const events = ['click', 'keydown', 'touchstart']
      events.forEach((event) => {
        document.addEventListener(event, handleUserActivity)
      })

      resetTimer()

      return () => {
        events.forEach((event) => {
          document.removeEventListener(event, handleUserActivity)
        })
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }, [])

    return (
      <>
        <WrappedComponent {...props} />
        {showPopup && (
          <InactivityPopup
            timeoutSeconds={timeoutSeconds}
            onContinue={handleContinue}
            onTimeout={handleTimeout}
          />
        )}
      </>
    )
  }
}