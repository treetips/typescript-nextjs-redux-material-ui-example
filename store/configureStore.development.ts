import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { combinedReducers } from "./reducers"
import { rootSaga } from "./sagas"
import { IInitialState } from "./states"

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState?: IInitialState) {
  const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
