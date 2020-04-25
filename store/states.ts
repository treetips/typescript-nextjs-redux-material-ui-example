import { ICounterState } from "./counter"
import { IPageState } from "./page"
import { IReduxSagaState } from "./redux-saga"

/**
 * Initial state tree interface
 */
export interface IInitialState {
  counter: Readonly<ICounterState>
  page: Readonly<IPageState>
  reduxSagaDebounce: Readonly<IReduxSagaState>
  reduxSagaThrottle: Readonly<IReduxSagaState>
}
