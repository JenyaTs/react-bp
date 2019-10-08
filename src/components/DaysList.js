import React from 'react';
import { Day } from './Day';
import { createDaysArray } from '../helpers/create-days-array';
import { setArrayOfDates } from '../helpers/set-array-of-dates'

export const DaysList = props => {
    const days = props.days;  

    setArrayOfDates(days, 6);
    
	return (
		<ul className="date-list">
            {createDaysArray(days).map( (el, index) => <Day key={index} el={el} />)}
        </ul>
	);
}
