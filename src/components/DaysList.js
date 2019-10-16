import React from 'react';
import { Day } from './Day';

export const DaysList = props => {
    const days = props.days; 
    
    console.log(props)
    
	return (
		<ul className="date-list">
            {/* {days.map( (el, index) => <Day key={index} el={el} />)} */}
        </ul>
	);
}
