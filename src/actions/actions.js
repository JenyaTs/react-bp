import { actionCreator } from './action-creators';
import { NEXT_MONTH_GET } from './constants';
import { PREV_MONTH_GET } from './constants';

export const getNextMonth = actionCreator(NEXT_MONTH_GET);
export const getPreviousMonth = actionCreator(PREV_MONTH_GET);