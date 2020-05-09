import { call, debounce, put, throttle } from "redux-saga/effects"
import { SagaSetting } from "../../constants"
import { InputResponseModel } from "../../model"
import { fetchInputApi } from "../api"
import {
  IReduxSagaDebounceFailurePayload,
  IReduxSagaDebounceSuccessPayload,
  IReduxSagaFetchPayload,
  IReduxSagaThrottleFailurePayload,
  IReduxSagaThrottleSuccessPayload,
  ReduxSagaActions,
  ReduxSagaActionTypes,
} from "./actions"

function* executeFetchDebounce(action: ReduxSagaActionTypes) {
  const fetchPayload = action.payload as IReduxSagaFetchPayload

  try {
    // call api
    const fetchResult: InputResponseModel = yield call(
      fetchInputApi,
      fetchPayload
    )

    // Pack the fetch result into a redux successful action,
    // and the caller gets the result from there
    const successPayload: IReduxSagaDebounceSuccessPayload = {
      input: fetchResult.input,
      timestamp: fetchResult.timestamp,
    }
    yield put({
      type: ReduxSagaActions.debounceSuccess.toString(),
      payload: successPayload,
    })
  } catch (e) {
    console.error(e)

    // Pack exception error object into failure action, caller gets it
    const failurePayload: IReduxSagaDebounceFailurePayload = {
      error: e,
    }
    yield put({
      type: ReduxSagaActions.debounceFailure.toString(),
      payload: failurePayload,
    })
  }
}

/**
 * Monitor specific redux-debounce-action fire when detected
 */
export const watchFetchDebounce = function* () {
  yield debounce(
    SagaSetting.DEBOUNCE_INTERVAL,
    ReduxSagaActions.fetchDebounce,
    executeFetchDebounce
  )
}

function* executeFetchThrottle(action: ReduxSagaActionTypes) {
  const fetchPayload = action.payload as IReduxSagaFetchPayload

  try {
    const fetchResult: InputResponseModel = yield call(
      fetchInputApi,
      fetchPayload
    )

    const successPayload: IReduxSagaThrottleSuccessPayload = {
      input: fetchResult.input,
      timestamp: fetchResult.timestamp,
    }
    yield put({
      type: ReduxSagaActions.throttleSuccess.toString(),
      payload: successPayload,
    })
  } catch (e) {
    console.error(e)

    const failurePayload: IReduxSagaThrottleFailurePayload = {
      error: e,
    }
    yield put({
      type: ReduxSagaActions.throttleFailure.toString(),
      payload: failurePayload,
    })
  }
}

/**
 * Monitor specific redux-throttle-action fire when detected
 */
export const watchFetchThrottle = function* () {
  yield throttle(
    SagaSetting.THROTTLE_INTERVAL,
    ReduxSagaActions.fetchThrottle,
    executeFetchThrottle
  )
}
