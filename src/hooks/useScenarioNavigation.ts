import { useNavigate } from 'react-router-dom'
import type { ScenarioId } from '../config/scenarioConfig'
import { scenarios, type Step } from '../config/scenarioConfig'

export const useScenarioNavigation = (scenarioId: ScenarioId) => {
  const navigate = useNavigate()
  const scenario = scenarios[scenarioId]

  const goToStep = (stepId: string, state?: unknown) => {
    const step = scenario.steps[stepId]
    if (step) {
      navigate(step.path, { state: { ...(state as object), scenarioId } })
    } else {
      console.error(`Step ${stepId} not found in scenario ${scenarioId}`)
    }
  }

  const goToNext = (currentStepId: string, state?: unknown) => {
    const currentStep = scenario.steps[currentStepId]
    if (currentStep?.nextStep) {
      goToStep(currentStep.nextStep, state)  // ← тут state передається в goToStep
    } else {
      console.error(`Next step not defined for ${currentStepId}`)
    }
  }

  const goToError = (currentStepId: string, state?: unknown) => {
    const currentStep = scenario.steps[currentStepId]
    if (currentStep?.errorStep) {
      goToStep(currentStep.errorStep, state)
    } else {
      console.error(`Error step not defined for ${currentStepId}`)
    }
  }

  const getCurrentStep = (stepId: string): Step | undefined => {
    return scenario.steps[stepId]
  }

  return {
    goToStep,
    goToNext,
    goToError,
    getCurrentStep,
    scenario,
  }
}