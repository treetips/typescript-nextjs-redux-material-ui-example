import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory("counter")

export interface ICounterPayload {
  inputNumber: number
}

export const CounterActions = {
  increment: actionCreator<ICounterPayload>("increment"),
  decrement: actionCreator<ICounterPayload>("decrement"),
  calculate: actionCreator<ICounterPayload>("calculate"),
}
