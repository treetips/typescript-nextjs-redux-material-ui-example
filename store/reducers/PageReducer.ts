import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { IPagePayload, PageActions } from "../actions"
import { IPageState, PageInitialState } from "../states"

export const pageReducers = reducerWithInitialState(PageInitialState).case(
  PageActions.changePage,
  (state: IPageState, payload: IPagePayload) => {
    return produce(state, draft => {
      draft.selectedPage = payload.selectedPage
    })
  }
)
