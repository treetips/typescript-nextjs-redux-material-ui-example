import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory("counter")

export interface ICounterPayload {
  inputNumber: number
}

export const CounterActions = {
  // no arguments
  increment: actionCreator("increment"),
  decrement: actionCreator("decrement"),
  // with arguments
  calculate: actionCreator<ICounterPayload>("calculate"),
}
