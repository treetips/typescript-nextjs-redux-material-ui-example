import { IInitialState } from "../states"

export const selectedPageSelector = (state: IInitialState) =>
  state.page.selectedPage
