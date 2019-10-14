import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { date } from '../selectors/index';

const dateData = createSelector(
    date,
    (date) => {        
       return ({
        month: date.toLocaleString('en', { month: 'long' }),
        year: date.getFullYear()
    })}
);

export const currentDateConnector = connect(
    dateData
);
