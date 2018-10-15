import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { CounterActions, ICounterPayload } from "../actions"
import { CounterInitialState, ICounterState } from "../states"

export const countReducers = reducerWithInitialState(CounterInitialState)
  .case(
    CounterActions.increment,
    (state: ICounterState, _: ICounterPayload) => {
      return produce(state, draft => {
        draft.count = state.count + 1
      })
    }
  )
  .case(
    CounterActions.decrement,
    (state: ICounterState, _: ICounterPayload) => {
      return produce(state, draft => {
        draft.count = state.count - 1
      })
    }
  )
  .case(
    CounterActions.calculate,
    (state: ICounterState, payload: ICounterPayload) => {
      const { inputNumber } = payload
      return produce(state, draft => {
        draft.count = state.count + inputNumber
      })
    }
  )
