import { InputResponseModel } from "../../model"
import { IReduxSagaFetchPayload } from "../redux-saga"

export const fetchInputApi = (
  payload: IReduxSagaFetchPayload
): Promise<InputResponseModel> => {
  const url = `http://localhost:3000/api/input?value=${payload.input}`
  return fetch(url).then<InputResponseModel>(response => response.json())
}
