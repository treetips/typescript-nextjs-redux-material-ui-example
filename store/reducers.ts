import { combineReducers } from "redux"
import { countReducer } from "./counter/reducers"
import { pageReducer } from "./page/reducers"
import {
  reduxSagaDebounceReducer,
  reduxSagaThrottleReducer,
} from "./redux-saga/reducers"

export const combinedReducers = combineReducers({
  counter: countReducer,
  page: pageReducer,
  reduxSagaDebounce: reduxSagaDebounceReducer,
  reduxSagaThrottle: reduxSagaThrottleReducer,
})

export type RootState = ReturnType<typeof combinedReducers>
