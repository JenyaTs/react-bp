import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { currentMonth, currentYear } from '../selectors/index';

const date = createSelector(
    currentMonth, currentYear,
    (month, year) => ({
        month,
        year
    })
);

export const currentDateConnector = connect(
    date
);
