import { Env } from "../constants"
import { IInitialState } from "../store/states"

const configureStoreComponent = (() => {
  if (Env.NODE_ENV === "production") {
    return require("./configureStore.production")
  }
  return require("./configureStore.development")
})()

export const configureStore = (initialState?: IInitialState) =>
  configureStoreComponent.configureStore(initialState)
