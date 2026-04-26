import { ACTIVE_SCREEN_MODE, type ScreenMode } from './screenConfig'

// Імпорт банерів для 800p
import banner800_1 from '../assets/banner/800p/banner1.png'
import banner800_2 from '../assets/banner/800p/banner2.png'
import banner800_3 from '../assets/banner/800p/banner3.png'

// Імпорт банерів для 1024p
import banner1024_1 from '../assets/banner/1024p/banner1.png'
import banner1024_2 from '../assets/banner/1024p/banner2.png'
import banner1024_3 from '../assets/banner/1024p/banner3.png'

// Імпорт банерів для 1080p
import banner1080_1 from '../assets/banner/1080p/banner1.png'
import banner1080_2 from '../assets/banner/1080p/banner2.png'
import banner1080_3 from '../assets/banner/1080p/banner3.png'

export type AdConfig = {
  enabled: boolean
  idleTimeoutSeconds: number
  bannerDurationSeconds: number
  banners: Record<ScreenMode, string[]>
}

export const adConfig: AdConfig = {
  enabled: true,
  idleTimeoutSeconds: 60,
  bannerDurationSeconds: 10,
  banners: {
    '800p': [banner800_1, banner800_2, banner800_3],
    '1024p': [banner1024_1, banner1024_2, banner1024_3],
    '1080p': [banner1080_1, banner1080_2, banner1080_3],
  },
}