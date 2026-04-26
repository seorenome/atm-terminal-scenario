import { useState, useEffect } from 'react'
import { ACTIVE_SCREEN_MODE } from '../../../config/screenConfig'
import { adConfig } from '../../../config/adConfig'
import AdFooter from '../AdFooter/AdFooter'
import {
  AdFrame,
  BannerContainer,
  BannerImage,
  ViewportBackground,
  ViewportCenter,
} from './AdOverlay.styled'

type AdOverlayProps = {
  onComplete: () => void
}

const AdOverlay = ({ onComplete }: AdOverlayProps) => {
  const [bannerIndex, setBannerIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(
    adConfig.bannerDurationSeconds * adConfig.banners[ACTIVE_SCREEN_MODE].length
  )

  const currentBanners = adConfig.banners[ACTIVE_SCREEN_MODE]

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIndex((prev) => {
        const next = prev + 1
        if (next >= currentBanners.length) {
          clearInterval(bannerInterval)
          return prev
        }
        return next
      })
    }, adConfig.bannerDurationSeconds * 1000)

    return () => clearInterval(bannerInterval)
  }, [currentBanners.length])

  const handleClick = () => {
    onComplete()
  }

  return (
    <ViewportBackground>
      <ViewportCenter>
        <AdFrame onClick={handleClick}>
          <BannerContainer>
            <BannerImage src={currentBanners[bannerIndex]} alt="Advertisement" />
          </BannerContainer>
          <AdFooter timerValue={formatTime(timeLeft)} />
        </AdFrame>
      </ViewportCenter>
    </ViewportBackground>
  )
}

export default AdOverlay