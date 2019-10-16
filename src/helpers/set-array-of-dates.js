import { createDaysArray } from './internal-functions/create-days-object';
import { setPairOfDates } from './internal-functions/set-pair-of-dates';
import { getFirstMonthDayIndex } from './internal-functions/get-first-month-day-index';
import { getDaysInMonth } from './internal-functions/get-days-in-month';

export const setArrayOfDates = (data) => {
    let daysList = {},
        daysCount = getDaysInMonth(data.getYear(), data.getMonth()),
        prevMonthDaysCount = getDaysInMonth(data.getYear(), data.getMonth() - 1),
        nextMonthDaysCount = getDaysInMonth(data.getYear(), data.getMonth() + 1);
    
    let calendarData = {
        previousMonth: {
            daysCount: prevMonthDaysCount,
            firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() - 1, 1).getDay()),
            prevMonthDaysCount: getDaysInMonth(data.getYear(), data.getMonth() - 2),
            id: 'prevMonth'
        },

        currentMonth: {
            daysCount: daysCount,
            firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth(), 1).getDay()),
            prevMonthDaysCount: prevMonthDaysCount,
            id: 'thisMonth'
        },

        nextMonth: {
            daysCount: nextMonthDaysCount,
            firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() + 1, 1).getDay()),
            prevMonthDaysCount: daysCount,
            id: 'nextMonth'
        }
    };  

    //creates object of dates for current, next and previous month
    createDaysArray(setPairOfDates(calendarData), daysList);
    //_______
    
    console.log(daysList);
    
    return daysList;

}


