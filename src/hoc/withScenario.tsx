import { ComponentType } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { routePaths } from '../constants/routePaths'
import { useScenarioNavigation } from '../hooks/useScenarioNavigation'
import type { ScenarioId } from '../config/scenarioConfig'

export const withScenario = <P extends object>(
  WrappedComponent: ComponentType<P & { navigation: ReturnType<typeof useScenarioNavigation>; currentStepId: string }>,
  stepId: string
) => {
  return (props: P) => {
    const location = useLocation()
    const scenarioId = location.state?.scenarioId as ScenarioId

    if (!scenarioId) {
      return <Navigate to={routePaths.chooseOperationType} replace />
    }

    const navigation = useScenarioNavigation(scenarioId)

    return (
      <WrappedComponent
        {...props}
        navigation={navigation}
        currentStepId={stepId}
      />
    )
  }
}