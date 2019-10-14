import Immutable from 'immutable';

const initialState = Immutable.fromJS({
	currentDate: new Date()
});

export const data = (state = initialState, action) => {		
    switch (action.type) {
		default:
			return state
    }
};