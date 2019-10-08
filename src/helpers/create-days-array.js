export const createDaysArray = days => {
    const array = [];
    
    for (let i = 1; i <= days; i++) {
        array.push(i);
    }
    
    return array;
}
