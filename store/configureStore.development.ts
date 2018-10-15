import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { InitialState } from "../store/states"
import { combinedReducers } from "./reducers"

export function configureStore(initialState = InitialState) {
  return createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
