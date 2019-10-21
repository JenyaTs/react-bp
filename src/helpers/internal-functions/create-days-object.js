import { daysArrayHelper } from './days-array-creator';
import { fillLastArrayDays } from './fill-last-array-days';
import { currentDateCheck } from './current-date-check';

export const createDaysObject = (data, objList) => {    
    for (let month in data) {
        const prevPair = data[month].prevPair,
              thisPair = data[month].thisPair,
              daysArray = [],
              title = data[month].id,
              firstDay = data[month].firstDayIndex,
              lastDay = data[month].firstDayIndex + data[month].daysCount,
              thisMonth = data[month].month,
              thisYear = data[month].year;        
              
        daysArrayHelper(prevPair[0], prevPair[1], daysArray);
        daysArrayHelper(thisPair[0], thisPair[1], daysArray);
        objList[title] = {};
        objList[title].days = daysArray;
        objList[title].currentMonthDays = [firstDay - 1, lastDay];
        currentDateCheck(thisMonth, thisYear, objList);
    }

    fillLastArrayDays(objList);
    
    return objList;
}
