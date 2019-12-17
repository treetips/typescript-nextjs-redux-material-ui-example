/**
 * redux-saga
 */
export interface IReduxSagaState {
  input: string
  timestamp: string
  error?: Error
}
export const ReduxSagaInitialState: IReduxSagaState = {
  input: undefined,
  timestamp: undefined,
}
