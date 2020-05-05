import { RootState } from "../reducers"

export const countSelector = (state: RootState) => state.counter.count
