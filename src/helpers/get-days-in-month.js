export const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const currentMonthDays = getDaysInMonth(new Date().getFullYear(), new Date().getMonth());

export const firstMonthDayIndex = new Date(new Date().getFullYear(), new Date().getMonth()).getDay();

