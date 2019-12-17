import { IInitialState } from "../states"
import { IReduxSagaState } from "./states"

export const reduxSagaDebounceSelector = (
  state: IInitialState
): IReduxSagaState => state.reduxSagaDebounce

export const reduxSagaThrottleSelector = (
  state: IInitialState
): IReduxSagaState => state.reduxSagaThrottle
