import { IInitialState } from "../states"

export const countSelector = (state: IInitialState) => state.counter.count
