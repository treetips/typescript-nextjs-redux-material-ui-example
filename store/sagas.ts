import { all, fork } from "redux-saga/effects"
import { watchFetchDebounce, watchFetchThrottle } from "./redux-saga/sagas"

export const rootSaga = function* root() {
  yield all([fork(watchFetchDebounce), fork(watchFetchThrottle)])
}
