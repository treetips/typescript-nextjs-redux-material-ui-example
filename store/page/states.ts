import { Page } from "../../constants"

/**
 * Page
 */
export interface IPageState {
  selectedPage: Page
}
export const PageInitialState: IPageState = {
  selectedPage: Page.TOP,
}
