import Immutable from 'immutable';
import * as constants  from '../actions/constants';
import { setNewDate }  from '../helpers/set-new-date';

const initialState = Immutable.fromJS({
	currentDate: new Date(),
	dynamicDate: new Date(),
	monthFlag: false
});

export const calendarData = (state = initialState, action) => {		
    switch (action.type) {
		case constants.UPDATE_DATE:			
            return state
				.set('monthFlag', Immutable.fromJS(action.payload))
				.set('dynamicDate', Immutable.fromJS(setNewDate(state.get('dynamicDate'), action.payload)))

		default:
			return state
    }
};