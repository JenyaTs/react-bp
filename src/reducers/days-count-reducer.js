import Immutable from 'immutable';
import { currentMonthDays, firstMonthDayIndex } from '../helpers/get-days-in-month';

const initialState = Immutable.fromJS({
	  days: currentMonthDays,
	  monthStartDayIndex: firstMonthDayIndex
});

export const daysCount = (state = initialState, action) => {		
    switch (action.type) {
		default:
			return state
    }
};