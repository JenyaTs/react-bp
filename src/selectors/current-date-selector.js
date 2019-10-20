import { createSelector } from 'reselect'

const calendarData = createSelector(
    state => state.get('calendarData'),
    calendarData => calendarData
);

export const currentDate = createSelector(
    calendarData,
    currentDate => currentDate.get('currentDate')
);
