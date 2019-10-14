import { createDaysArray } from './create-days-array';
import { getDaysInMonth } from './get-days-in-month';

export const setArrayOfDates = (data) => {
    let daysArray = [];
    
    let currentMonthData = {
            daysCount: getDaysInMonth(data.getYear(), data.getMonth()),
            firstDayIndex: new Date(data.getFullYear(), data.getMonth(), 1).getDay()
        },

        previousMonthData = {
            daysCount: getDaysInMonth(data.getYear(), data.getMonth() - 1),
            firstDayIndex: new Date(data.getFullYear(), data.getMonth() - 1, 1).getDay()
        };

    let firstArg = currentMonthData.firstDayIndex - 1;

    if (firstArg < 0)  {
        firstArg = 6;
    } 

    createDaysArray(previousMonthData.daysCount - firstArg + 1, previousMonthData.daysCount, daysArray);

    createDaysArray(1, currentMonthData.daysCount, daysArray);

    if (daysArray.length < 35) {
        createDaysArray(1, 35 - daysArray.length, daysArray);
    }

    else if (daysArray.length < 42) {
        createDaysArray(1, 42 - daysArray.length, daysArray);
    }

    else if (daysArray.length === 35 || daysArray.length === 42) {
        return daysArray;
    }

    console.log(daysArray);
    return daysArray;

}