import { useCallback } from "react"
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
    increment: useCallback(() => dispatch(CounterActions.increment()), [
      dispatch,
    ]),
    decrement: useCallback(() => dispatch(CounterActions.decrement()), [
      dispatch,
    ]),
    calculate: useCallback(
      (inputNumber: number) => {
        dispatch(
          CounterActions.calculate({
            inputNumber: inputNumber,
          })
        )
      },
      [dispatch]
    ),
  }
}
