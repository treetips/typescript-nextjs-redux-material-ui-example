import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Page } from "../constants"
import { PageActions, selectedPageSelector } from "../store/page"

type PageOperators = {
  selectedPage: Page
  changePage: (selectedPage: Page) => void
}

/**
 * Page custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const usePage = (): Readonly<PageOperators> => {
  const dispatch = useDispatch()
  const pageState = useSelector(selectedPageSelector)

  return {
    selectedPage: pageState,
    changePage: useCallback(
      (selectedPage: Page) => {
        dispatch(
          PageActions.changePage({
            selectedPage: selectedPage,
          })
        )
      },
      [dispatch]
    ),
  }
}
