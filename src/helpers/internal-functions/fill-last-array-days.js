import { daysArrayHelper } from './days-array-creator';

/*
fills last items of array, depending on its length
*/

export const fillLastArrayDays = (datesObject) => {
    
    for (let daysArr in datesObject) {
        const length = datesObject[daysArr].length
        if (length === 28 || length === 35) {
            continue;
        }

        else if (length < 35) {
            daysArrayHelper(1, 35 - datesObject[daysArr].length, datesObject[daysArr])
        }

        else if (length < 42) {
            daysArrayHelper(1, 42 - datesObject[daysArr].length, datesObject[daysArr])
        }
    }
};
