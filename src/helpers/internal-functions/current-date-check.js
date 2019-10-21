// checks if array has current date to highlight it
export const currentDateCheck = (...args) => {
    const [ dataMonth, dataYear, dataObject ] = args;
    
    const date = new Date(),
          day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear(),
          daysArr = dataObject.thisMonth.days,

          // indexes to check if current date present in array
          firstIndex = dataObject.thisMonth.currentMonthDays[0],
          lastIndex = dataObject.thisMonth.currentMonthDays[1];
          //_______________________________________
          
    if (month === dataMonth && year === dataYear) {
        daysArr.forEach((el, idx) => {
            if (idx > firstIndex && idx < lastIndex && el === day) {
                dataObject.thisMonth.currentDay = idx;
            }
        });
    }

    return dataObject;
}