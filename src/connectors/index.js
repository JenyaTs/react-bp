import { additionalDateConnector } from './additional-date-connector';
import { currentDateConnector } from './current-date-connector';
import { currentMonthConnector } from './month-list-connector';
import { buttonConnector } from './button-connector';

export const currentDate = currentDateConnector;
export const dateMini = additionalDateConnector;
export const thisMonth = currentMonthConnector;
export const updateDate = buttonConnector;