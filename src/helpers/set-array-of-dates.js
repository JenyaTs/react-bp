import { createDaysArray } from './create-days-array'

export const setArrayOfDates = (count, index) => {
    const days = createDaysArray(count);
    
    let array = new Array(35).fill(null);
    
    array.splice(index, days.length, ...days);

    if (array.length > 35) {
        array.splice(35);
    }

    console.log(array);

}