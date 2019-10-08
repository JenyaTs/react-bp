import Immutable from 'immutable';

const initialState = Immutable.Map({
	year: new Date().getFullYear(),
	month: new Date().toLocaleString('en', { month: 'long' }),
	day: new Date().getDate()
});

export const currentDay = (state = initialState, action) => {		
    switch (action.type) {
		default:
			return state
    }
};