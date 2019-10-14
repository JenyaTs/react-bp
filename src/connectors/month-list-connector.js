import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { date } from '../selectors/index';
import { setArrayOfDates } from '../helpers/set-array-of-dates';

const monthData = createSelector(
    date,
    (date) => ({
        days: setArrayOfDates(date)
    })
);

export const currentMonthConnector = connect(
    monthData
);
