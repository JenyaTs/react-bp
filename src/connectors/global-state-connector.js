import { connect } from 'react-redux';
import { updateGlobalState } from '../actions/actions';
import { stateSelector } from '../selectors/index';
import { createSelector } from 'reselect'

const applicationState = createSelector(
    stateSelector,
    (stateSelector) => ({
        stateSelector
    })
);

export const applicationStateConnector = connect(
    applicationState,
    {
        updateGlobalState
    }
);
