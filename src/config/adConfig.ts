import { ACTIVE_SCREEN_MODE, type ScreenMode } from './screenConfig'

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
    '800p': [
      '/src/assets/banner/800p/banner1.png',
      '/src/assets/banner/800p/banner2.png',
      '/src/assets/banner/800p/banner3.png',
    ],
    '1024p': [
      '/src/assets/banner/1024p/banner1.png',
      '/src/assets/banner/1024p/banner2.png',
      '/src/assets/banner/1024p/banner3.png',
    ],
    '1080p': [
      '/src/assets/banner/1080p/banner1.png',
      '/src/assets/banner/1080p/banner2.png',
      '/src/assets/banner/1080p/banner3.png',
    ],
  },
}