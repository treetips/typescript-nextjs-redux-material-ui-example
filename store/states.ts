import { Page } from "../constants"

/**
 * Counter
 */
export interface ICounterState {
  count: number
}
export const CounterInitialState: ICounterState = {
  count: 1,
}

/**
 * Page
 */
export interface IPageState {
  selectedPage: Page
}
export const PageInitialState: IPageState = {
  selectedPage: Page.TOP,
}

/**
 * Initial state tree interface
 */
export interface IInitialState {
  /**
   * Root counter state
   */
  counter: ICounterState
  /**
   * Root page state
   */
  page: IPageState
}

/**
 * Initial state tree
 */
export const InitialState: IInitialState = {
  /**
   * Root counter state
   */
  counter: CounterInitialState,
  /**
   * Root page state
   */
  page: PageInitialState,
}
