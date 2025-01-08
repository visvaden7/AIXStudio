import {PageReducerType} from "../@types/domain.ts";

export const pageReducer = (state: number, action: PageReducerType): number => {
  const {type, maxPage = 0, page} = action;
  switch (type) {
    case 'NEXTPAGE':
      return Math.min(state + 1, maxPage - 1);
    case "PREVPAGE":
      return Math.max(state - 1, 0)
    case 'GOTOPAGE':
      console.log('')
      return page !== undefined && page >= 0 && page < maxPage ? page : state;
    default:
      return state
  }
}