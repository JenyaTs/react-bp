import { actionCreator } from './action-creators';
import { GLOBAL_STATE_UPDATE } from './constants';

export const updateGlobalState = actionCreator(GLOBAL_STATE_UPDATE);