import { createContext, useContext, useState, ReactNode } from 'react'
import Loader from '../components/ui/Loader/Loader'

type LoaderContextType = {
  isLoading: boolean
  showLoader: () => void
  hideLoader: () => void
  withLoader: (callback: () => void, delay?: number) => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoader = () => setIsLoading(true)
  const hideLoader = () => setIsLoading(false)

  const withLoader = (callback: () => void, delay: number = 2000) => {
    showLoader()
    setTimeout(() => {
      callback()
      hideLoader()
    }, delay)
  }

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader, withLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  const context = useContext(LoaderContext)
  if (!context) {
    throw new Error('useLoader must be used within LoaderProvider')
  }
  return context
}