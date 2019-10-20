import { createSelector } from 'reselect'

const calendarData = createSelector(
    state => state.get('calendarData'),
    calendarData => calendarData
);

export const dynamicDate = createSelector(
    calendarData,
    dynamicDate => dynamicDate.get('dynamicDate')
);

export const dateFlag = createSelector(
    calendarData,
    dateFlag => dateFlag.get('monthFlag')
);
