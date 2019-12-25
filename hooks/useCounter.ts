import { useDispatch, useSelector } from "react-redux"
import { CounterActions, countSelector } from "../store/counter"

type CounterOperators = {
  count: number
  increment: () => void
  decrement: () => void
  calculate: (inputNumber: number) => void
}

/**
 * Counter custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useCounter = (): Readonly<CounterOperators> => {
  const dispatch = useDispatch()

  return {
    count: useSelector(countSelector),
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement()),
    calculate: (inputNumber: number) => {
      dispatch(
        CounterActions.calculate({
          inputNumber: inputNumber,
        })
      )
    },
  }
}
