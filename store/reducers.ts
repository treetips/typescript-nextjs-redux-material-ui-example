import { combineReducers } from "redux"
import countReducers from "./counter/reducers"
import pageReducers from "./page/reducers"
import { IInitialState } from "./states"

export const combinedReducers = combineReducers<IInitialState>({
  counter: countReducers,
  page: pageReducers,
})
