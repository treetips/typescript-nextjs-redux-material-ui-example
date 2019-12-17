import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import {
  IReduxSagaDebounceFailurePayload,
  IReduxSagaDebounceSuccessPayload,
  IReduxSagaThrottleFailurePayload,
  IReduxSagaThrottleSuccessPayload,
  ReduxSagaActions,
} from "./actions"
import { IReduxSagaState, ReduxSagaInitialState } from "./states"

export const reduxSagaDebounceReducer = reducerWithInitialState(
  ReduxSagaInitialState
)
  .case(
    ReduxSagaActions.fetchDebounce,
    (state: Readonly<IReduxSagaState>): IReduxSagaState => {
      return state
    }
  )
  .case(
    ReduxSagaActions.debounceSuccess,
    (
      state: Readonly<IReduxSagaState>,
      payload: IReduxSagaDebounceSuccessPayload
    ): IReduxSagaState => {
      const { input, timestamp } = payload
      return produce(state, (draft: IReduxSagaState) => {
        draft.input = input
        draft.timestamp = timestamp
      })
    }
  )
  .case(
    ReduxSagaActions.debounceFailure,
    (
      state: Readonly<IReduxSagaState>,
      payload: IReduxSagaDebounceFailurePayload
    ): IReduxSagaState => {
      const { error } = payload
      return produce(state, (draft: IReduxSagaState) => {
        draft.error = error
      })
    }
  )

export const reduxSagaThrottleReducer = reducerWithInitialState(
  ReduxSagaInitialState
)
  .case(
    ReduxSagaActions.fetchThrottle,
    (state: Readonly<IReduxSagaState>): IReduxSagaState => {
      return state
    }
  )
  .case(
    ReduxSagaActions.throttleSuccess,
    (
      state: Readonly<IReduxSagaState>,
      payload: IReduxSagaThrottleSuccessPayload
    ): IReduxSagaState => {
      const { input, timestamp } = payload
      return produce(state, (draft: IReduxSagaState) => {
        draft.input = input
        draft.timestamp = timestamp
      })
    }
  )
  .case(
    ReduxSagaActions.throttleFailure,
    (
      state: Readonly<IReduxSagaState>,
      payload: IReduxSagaThrottleFailurePayload
    ): IReduxSagaState => {
      const { error } = payload
      return produce(state, (draft: IReduxSagaState) => {
        draft.error = error
      })
    }
  )
