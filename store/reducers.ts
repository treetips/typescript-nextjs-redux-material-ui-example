import { combineReducers } from "redux"
import { countReducer } from "./counter/reducers"
import { pageReducer } from "./page/reducers"
import {
  reduxSagaDebounceReducer,
  reduxSagaThrottleReducer,
} from "./redux-saga/reducers"
import { IInitialState } from "./states"

export const combinedReducers = combineReducers<IInitialState>({
  counter: countReducer,
  page: pageReducer,
  reduxSagaDebounce: reduxSagaDebounceReducer,
  reduxSagaThrottle: reduxSagaThrottleReducer,
})
