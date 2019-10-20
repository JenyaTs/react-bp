import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { date, flag } from '../selectors/index';
import { setArrayOfDates } from '../helpers/set-array-of-dates';

const monthData = createSelector(
    [date, flag],
    (date, flag) => {
        return ({
            days: setArrayOfDates(date, flag)
        })
    }
    
);

export const currentMonthConnector = connect(
    monthData
);
