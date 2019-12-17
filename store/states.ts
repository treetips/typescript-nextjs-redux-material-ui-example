import { CounterInitialState, ICounterState } from "./counter"
import { IPageState, PageInitialState } from "./page"
import { IReduxSagaState, ReduxSagaInitialState } from "./redux-saga"

/**
 * Initial state tree interface
 */
export interface IInitialState {
  counter: Readonly<ICounterState>
  page: Readonly<IPageState>
  reduxSagaDebounce: Readonly<IReduxSagaState>
  reduxSagaThrottle: Readonly<IReduxSagaState>
}

/**
 * Initial state tree
 */
export const InitialState: IInitialState = {
  counter: CounterInitialState,
  page: PageInitialState,
  reduxSagaDebounce: ReduxSagaInitialState,
  reduxSagaThrottle: ReduxSagaInitialState,
}
