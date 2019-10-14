import { combineReducers } from 'redux-immutable';
import { data } from './current-date-reducer';

export default combineReducers({
    calendarData: combineReducers({
        data
    })
});