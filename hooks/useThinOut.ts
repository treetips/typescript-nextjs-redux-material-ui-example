import { useDispatch, useSelector } from "react-redux"
import {
  IReduxSagaState,
  ReduxSagaActions,
  reduxSagaDebounceSelector,
  reduxSagaThrottleSelector,
} from "../store/redux-saga"

type ThinOutOperators = {
  debounce: (inputValue: string) => void
  debounceState: IReduxSagaState
  throttle: (inputValue: string) => void
  throttleState: IReduxSagaState
}

/**
 * Debounce and throttle custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useThinOut = (): Readonly<ThinOutOperators> => {
  const dispatch = useDispatch()
  const reduxSagaDebounceState = useSelector(reduxSagaDebounceSelector)
  const reduxSagaThrottleState = useSelector(reduxSagaThrottleSelector)

  const handleDebounce = (inputValue: string) => {
    dispatch(
      ReduxSagaActions.fetchDebounce({
        input: inputValue,
      })
    )
  }

  const handleThrottle = (inputValue: string) => {
    dispatch(
      ReduxSagaActions.fetchThrottle({
        input: inputValue,
      })
    )
  }

  return {
    debounce: handleDebounce,
    debounceState: reduxSagaDebounceState,
    throttle: handleThrottle,
    throttleState: reduxSagaThrottleState,
  }
}
