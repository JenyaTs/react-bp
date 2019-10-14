export const createDaysArray = (from, to, array) => {    
    for (let i = from; i <= to; i++) {
        array.push(i);
    }
    return array;
}
