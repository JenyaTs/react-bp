import React from 'react';
import { Day } from './Day';
import common from '../styles/common.module.sass';

export const DaysList = props => {
    const { days, mark, currentDay } = props; 
    
	return (
		<ul className={common["days-list"]}>
            {days.map( (el, index) => {
                if (index > mark[0] && index < mark[1] && index === currentDay) {
                    return (
                        <Day key={index} el={el} currentMonth="current-month" currentDay={currentDay}/>
                    )
                } 
                
                if (index > mark[0] && index < mark[1]) {
                    return (
                        <Day key={index} el={el} currentMonth="current-month"/>
                    )
                } 
                
                return (
                    <Day key={index} el={el}/>
                )
            })}
        </ul>
	);
}
