/* 
function to reset index to our locale
*/

export const getFirstMonthDayIndex = (index) => {
    --index;

    if (index <= 0)  {
        index = 6;
    } 

    return index;
}
