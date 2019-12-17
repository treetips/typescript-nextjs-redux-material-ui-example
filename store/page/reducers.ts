import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { IPagePayload, IPageState, PageActions, PageInitialState } from "."

export const pageReducer = reducerWithInitialState(PageInitialState).case(
  PageActions.changePage,
  (
    state: Readonly<IPageState>,
    payload: Readonly<IPagePayload>
  ): IPageState => {
    return produce(state, (draft: IPageState) => {
      draft.selectedPage = payload.selectedPage
    })
  }
)
