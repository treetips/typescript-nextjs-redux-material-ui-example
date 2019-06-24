import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory("counter")

export interface ICounterPayload {
  inputNumber: number
}

export const CounterActions = {
  increment: actionCreator("increment"),
  decrement: actionCreator("decrement"),
  calculate: actionCreator<ICounterPayload>("calculate"),
}
