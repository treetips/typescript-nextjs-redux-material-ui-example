import { CounterInitialState, ICounterState } from "./counter"
import { IPageState, PageInitialState } from "./page"

/**
 * Initial state tree interface
 */
export interface IInitialState {
  counter: Readonly<ICounterState>
  page: Readonly<IPageState>
}

/**
 * Initial state tree
 */
export const InitialState: IInitialState = {
  counter: CounterInitialState,
  page: PageInitialState,
}
