import { InitialState } from "../store/states"

const configureStoreComponent = (() => {
  if (process.env.NODE_ENV === "production") {
    return require("./configureStore.production")
  }
  return require("./configureStore.development")
})()

export const configureStore = (initialState = InitialState) => (
  state = initialState
) => configureStoreComponent.configureStore(state)
