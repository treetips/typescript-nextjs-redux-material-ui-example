import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { InitialState } from "../store/states"
import { combinedReducers } from "./reducers"
import { rootSaga } from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState = InitialState) {
  const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
