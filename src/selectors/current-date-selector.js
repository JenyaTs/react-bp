import { createSelector } from 'reselect'

const calendarData = createSelector(
    state => state.get('calendarData'),
    calendarData => calendarData
);

const dateData = createSelector(
    calendarData,
    dateData => dateData.get('currentDay')
);

export const day =  createSelector(
    dateData,
    day => day.get('day')
);

export const month =  createSelector(
    dateData,
    month => month.get('month')
);

export const year =  createSelector(
    dateData,
    year => year.get('year')
);
