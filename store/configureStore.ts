import { Env } from "../constants"
import { RootState } from "./reducers"

const configureStoreComponent = (() => {
  if (Env.NODE_ENV === "production") {
    return require("./configureStore.production")
  }
  return require("./configureStore.development")
})()

export const configureStore = (initialState?: RootState) =>
  configureStoreComponent.configureStore(initialState)
