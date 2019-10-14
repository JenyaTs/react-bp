import { createSelector } from 'reselect'

const calendarData = createSelector(
    state => state.get('calendarData'),
    calendarData => calendarData
);

const getData = createSelector(
    calendarData,
    getData => getData.get('data')
);

export const currentDate = createSelector(
    getData,
    getYear => getYear.get('currentDate')
);
