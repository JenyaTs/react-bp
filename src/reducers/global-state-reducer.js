import { GLOBAL_STATE_UPDATE } from '../actions/constants'
import Immutable from 'immutable';

const initialState = Immutable.Map( {
  state: false
});

export const applicationState = (state = initialState, action) => {		
    switch (action.type) {
		case GLOBAL_STATE_UPDATE:
			return state.set('state', true);
			
		default:
			return state
    }
};