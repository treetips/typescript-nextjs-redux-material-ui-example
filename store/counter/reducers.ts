import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import {
  CounterActions,
  CounterInitialState,
  ICounterPayload,
  ICounterState,
} from "."

export default reducerWithInitialState(CounterInitialState)
  .case(
    CounterActions.increment,
    (state: Readonly<ICounterState>): ICounterState => {
      return produce(state, (draft: ICounterState) => {
        draft.count = state.count + 1
      })
    }
  )
  .case(
    CounterActions.decrement,
    (state: Readonly<ICounterState>): ICounterState => {
      return produce(state, (draft: ICounterState) => {
        draft.count = state.count - 1
      })
    }
  )
  .case(
    CounterActions.calculate,
    (
      state: Readonly<ICounterState>,
      payload: ICounterPayload
    ): ICounterState => {
      const { inputNumber } = payload
      return produce(state, (draft: ICounterState) => {
        draft.count = state.count + inputNumber
      })
    }
  )
