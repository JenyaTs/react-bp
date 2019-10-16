/* 
set numbers to compare 
constucts 2 arrays with 2 values(previous and current month) used in for loop
this values will compare in loop and constuct array of month days
*/

export const setPairOfDates = (calendarData) => {
    for (let month in calendarData) {
        let data = calendarData[month],
            prevPairArray = data.prevPair = [],
            nextPairArray = data.thisPair = [];

        // prev pair    
        prevPairArray.push(data.prevMonthDaysCount - data.firstDayIndex + 1);
        prevPairArray.push(calendarData[month].prevMonthDaysCount);      
        //_______

        //current pair
        nextPairArray.push(1);
        nextPairArray.push(data.daysCount);
        //_______
    }

    return calendarData;
}