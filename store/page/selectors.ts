import { RootState } from "../reducers"

export const selectedPageSelector = (state: RootState) =>
  state.page.selectedPage
