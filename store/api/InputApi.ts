import { Env } from "../../constants"
import { InputResponseModel } from "../../model"
import { IReduxSagaFetchPayload } from "../redux-saga"

export const fetchInputApi = (
  payload: IReduxSagaFetchPayload
): Promise<InputResponseModel> => {
  const url = `${Env.API_SERVER_URL}/api/input?value=${payload.input}`
  return fetch(url).then<InputResponseModel>(response => response.json())
}
