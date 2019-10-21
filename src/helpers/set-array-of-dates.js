import { createDaysObject } from './internal-functions/create-days-object';
import { setPairOfDates } from './internal-functions/set-pair-of-dates';
import { getFirstMonthDayIndex } from './internal-functions/get-first-month-day-index';
import { getDaysInMonth } from './internal-functions/get-days-in-month';

//memo variable
// let memorizedDaysList = {};
// _____________

export const setArrayOfDates = (data, flag) => {
    let daysList = {},
        daysCount = getDaysInMonth(data.getYear(), data.getMonth()),
        prevMonthDaysCount = getDaysInMonth(data.getYear(), data.getMonth() - 1);
        // nextMonthDaysCount = getDaysInMonth(data.getYear(), data.getMonth() + 1);
    
    // if (flag) {
    //     switch (flag) {
    //         case 1:	
    //         let nextCalendarData = { ...memorizedDaysList };	
    //         nextCalendarData.prevMonth = memorizedDaysList.thisMonth;
    //         nextCalendarData.thisMonth = memorizedDaysList.nextMonth;
    //         let next = {      
    //             nextMonth: {
    //                 daysCount: nextMonthDaysCount,
    //                 firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() + 1, 1).getDay()),
    //                 prevMonthDaysCount: daysCount,
    //                 id: 'nextMonth'
    //             }
    //         };  
    //         createDaysObject(setPairOfDates(next), nextCalendarData);

    //         memorizedDaysList = nextCalendarData;
    //         return  nextCalendarData;

    //         case -1:	
    //         let prevCalendarData = { ...memorizedDaysList };	
    //         prevCalendarData.nextMonth = memorizedDaysList.thisMonth;
    //         prevCalendarData.thisMonth = memorizedDaysList.prevMonth;
    //         let prev = {
    //             previousMonth: {
    //                 daysCount: prevMonthDaysCount,
    //                 firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() - 1, 1).getDay()),
    //                 prevMonthDaysCount: getDaysInMonth(data.getYear(), data.getMonth() - 2),
    //                 id: 'prevMonth'
    //             }
    //         };  
    //         createDaysObject(setPairOfDates(prev), prevCalendarData);

    //         memorizedDaysList = prevCalendarData;
    //         return  prevCalendarData;
    
    //         default:
    //             return memorizedDaysList;
    //     }
    // }

    let calendarData = {
        // previousMonth: {
        //     daysCount: prevMonthDaysCount,
        //     firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() - 1, 1).getDay()),
        //     prevMonthDaysCount: getDaysInMonth(data.getYear(), data.getMonth() - 2),
        //     id: 'prevMonth'
        // },

        currentMonth: {
            day: data.getDate(),
            daysCount: daysCount,
            firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth(), 1).getDay()),
            id: 'thisMonth',
            month: data.getMonth(),
            prevMonthDaysCount: prevMonthDaysCount,
            year: data.getFullYear()
        },

        // nextMonth: {
        //     daysCount: nextMonthDaysCount,
        //     firstDayIndex: getFirstMonthDayIndex(new Date(data.getFullYear(), data.getMonth() + 1, 1).getDay()),
        //     prevMonthDaysCount: daysCount,
        //     id: 'nextMonth'
        // }
    };  

    //creates object of dates for current, next and previous month
    createDaysObject(setPairOfDates(calendarData), daysList);
    //_______
    
    // memorizedDaysList = daysList; 
    return daysList;
}
