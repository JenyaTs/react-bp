import { createSelector } from 'reselect'

export const fullState = createSelector(
    state => state.get('applicationState'),
    fullState => fullState
);

export const stateSelector = createSelector(
    fullState,
    stateSelector => stateSelector.get('state')
);
