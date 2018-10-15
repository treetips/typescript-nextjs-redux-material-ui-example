import actionCreatorFactory from "typescript-fsa"
import { Page } from "../../constants"

const actionCreator = actionCreatorFactory("page")

export interface IPagePayload {
  selectedPage: Page
}

export const PageActions = {
  changePage: actionCreator<IPagePayload>("changePage"),
}
