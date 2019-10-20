import { daysArrayHelper } from './days-array-creator';

/*
fills last items of array, depending on its length
*/

export const fillLastArrayDays = (datesObject) => {
    for (let daysArr in datesObject) {
        const arrLength = datesObject[daysArr].days.length,
              days = datesObject[daysArr].days;

        daysArrayHelper(1, 42 - arrLength, days)
    }
};
