import { combineReducers } from "redux"
import { countReducers } from "./reducers/CounterReducer"
import { pageReducers } from "./reducers/PageReducer"
import { IInitialState } from "./states"

export const combinedReducers = combineReducers<IInitialState>({
  counter: countReducers,
  page: pageReducers,
})
