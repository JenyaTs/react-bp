import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { monthDays } from '../selectors/index';

const daysNumber = createSelector(
    monthDays,
    (days) => ({
        days
    })
);

export const daysNumberConnector = connect(
    daysNumber
);
