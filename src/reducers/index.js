import { combineReducers } from 'redux-immutable';
import { daysCount } from './days-count-reducer';
import { currentDay } from './current-date-reducer';

export default combineReducers({
    calendarData: combineReducers({
        daysCount,
        currentDay
    })
});