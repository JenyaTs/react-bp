import { createSelector } from 'reselect'

const calendarData = createSelector(
    state => state.get('calendarData'),
    calendarData => calendarData
);

const dayData = createSelector(
    calendarData,
    dayData => dayData.get('daysCount')
);

export const days =  createSelector(
    dayData,
    days => days.get('days')
);
