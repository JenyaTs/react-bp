import { daysArrayHelper } from './days-array-creator';
import { fillLastArrayDays } from './fill-last-array-days';

export const createDaysArray = (data, objList) => {        
    for (let month in data) {
        const prevPair = data[month].prevPair,
              thisPair = data[month].thisPair,
              daysArray = [],
              title = data[month].id;
              
        daysArrayHelper(prevPair[0], prevPair[1], daysArray);
        daysArrayHelper(thisPair[0], thisPair[1], daysArray);
        objList[title] = daysArray;
    }

    fillLastArrayDays(objList);
    
    return objList;
}
