import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory("redux-saga")

export interface IReduxSagaFetchPayload {
  input: string
}

//-------------------------------------------------------
// debounce
//-------------------------------------------------------
export interface IReduxSagaDebounceSuccessPayload {
  input: string
  timestamp: string
}

export interface IReduxSagaDebounceFailurePayload {
  error: Error
}

//-------------------------------------------------------
// throttle
//-------------------------------------------------------
export interface IReduxSagaThrottleSuccessPayload {
  input: string
  timestamp: string
}

export interface IReduxSagaThrottleFailurePayload {
  error: Error
}

export const ReduxSagaActions = {
  // debounce
  fetchDebounce: actionCreator<IReduxSagaFetchPayload>("fetch debounce"),
  debounceSuccess: actionCreator<IReduxSagaDebounceSuccessPayload>(
    "debounce success"
  ),
  debounceFailure: actionCreator<IReduxSagaDebounceFailurePayload>(
    "debounce failure"
  ),

  // throttle
  fetchThrottle: actionCreator<IReduxSagaFetchPayload>("fetch throttle"),
  throttleSuccess: actionCreator<IReduxSagaThrottleSuccessPayload>(
    "throttle success"
  ),
  throttleFailure: actionCreator<IReduxSagaThrottleFailurePayload>(
    "throttle failure"
  ),
}

export type ReduxSagaActionTypes =
  | ReturnType<typeof ReduxSagaActions.fetchDebounce>
  | ReturnType<typeof ReduxSagaActions.debounceSuccess>
  | ReturnType<typeof ReduxSagaActions.debounceFailure>
  | ReturnType<typeof ReduxSagaActions.fetchThrottle>
  | ReturnType<typeof ReduxSagaActions.throttleSuccess>
  | ReturnType<typeof ReduxSagaActions.throttleFailure>
