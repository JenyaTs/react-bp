import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { additionalDate } from '../selectors/index';
import { getCurrentDate } from '../helpers/get-current-date';

const date = createSelector(
    additionalDate,
    (additionalDate) => {
        return ({
            date: getCurrentDate(additionalDate)
        })
    }
    
);

export const additionalDateConnector = connect(
    date
);
