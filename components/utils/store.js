import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'
import { bigNum } from 'lib/utils'
const persistState = (get, set) => (updateFn) => {
  const currentState = get()
  set(updateFn(currentState))
}

const initialStepState = {
  formStatus: 0,
  stepperStage: 0,
  toBonded: false,
  openOrderHash: '',
  amountSource: bigNum(0),
  savedSteps: [],
  stepperStatus: undefined,
}

export const useStore = create(
  persist(
    (set, get) => {
      const updateState = persistState(get, set)

      return {
        ...initialStepState,
        setStepperStatus: (status) =>
          updateState(
            produce((state) => {
              state.stepperStatus = status
            })
          ),
        setStepActive: (index) =>
          updateState(
            produce((state) => {
              state.savedSteps[index].active = true
            })
          ),
        setStepHash: (index, hash) =>
          updateState(
            produce((state) => {
              state.savedSteps[index].hash = hash
            })
          ),
        setStepStatus: (index, status) =>
          updateState(
            produce((state) => {
              state.savedSteps[index].status = status
            })
          ),
        setActiveStage: (stepNumber) =>
          updateState(
            produce((state) => {
              state.stepperStage = stepNumber
            })
          ),
        setSteps: (steps) =>
          updateState(
            produce((state) => {
              state.savedSteps = steps
            })
          ),
        setFormStatus: (formStatus) =>
          updateState(
            produce((state) => {
              state.formStatus = formStatus
            })
          ),
        clearState: () =>
          updateState(
            produce((state) => {
              state.formStatus = initialStepState.formStatus
              state.stepperStage = initialStepState.stepperStage
              state.toBonded = initialStepState.toBonded
              state.openOrderHash = initialStepState.openOrderHash
              state.amountSource = initialStepState.amountSource
              state.savedSteps = initialStepState.savedSteps
              state.stepperStatus = initialStepState.stepperStatus
            })
          ),
        setAmountSource: (amount) =>
          updateState(
            produce((state) => {
              state.amountSource = amount
            })
          ),
        setOrderHash: (amount) =>
          updateState(
            produce((state) => {
              state.openOrderHash = amount
            })
          ),
        setIsBonded: (bonded) =>
          updateState(
            produce((state) => {
              state.toBonded = bonded
            })
          ),
      }
    },
    {
      name: 'conversion-status', // name of item in the storage (must be unique)
    }
  )
)
