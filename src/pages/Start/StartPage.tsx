import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adConfig } from '../../config/adConfig'
import AdOverlay from '../../components/ui/AdOverlay/AdOverlay'
import { routePaths } from '../../constants/routePaths'

const StartPage = () => {
  const navigate = useNavigate()
  const [showAd, setShowAd] = useState(adConfig.enabled)

  const handleAdComplete = () => {
    setShowAd(false)
    navigate(routePaths.chooseOperationType)
  }

  if (showAd) {
    return <AdOverlay onComplete={handleAdComplete} />
  }

  return null
}

export default StartPage