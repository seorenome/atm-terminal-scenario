export type ScreenMode = '800p' | '1024p' | '1080p'

type ScreenResolution = {
  width: number
  height: number
}

export const SCREEN_RESOLUTIONS: Record<ScreenMode, ScreenResolution> = {
  '800p': {
    width: 1280,
    height: 800,
  },
  '1024p': {
    width: 1280,
    height: 1024,
  },
  '1080p': {
    width: 1920,
    height: 1080,
  },
}

export const ACTIVE_SCREEN_MODE: ScreenMode = '1024p'


export const INACTIVITY_TIMEOUT_SECONDS = 30