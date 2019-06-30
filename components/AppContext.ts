import { NextDocumentContext } from "next/document"
import { Store } from "redux"

/**
 * NextDocumentContext with redux store context
 * @tree
 */
export type AppContext = NextDocumentContext & {
  readonly store: Store
}
