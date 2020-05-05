import { RootState } from "../reducers"
import { IReduxSagaState } from "./states"

export const reduxSagaDebounceSelector = (state: RootState): IReduxSagaState =>
  state.reduxSagaDebounce

export const reduxSagaThrottleSelector = (state: RootState): IReduxSagaState =>
  state.reduxSagaThrottle
