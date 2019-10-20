import React from 'react';
import { Day } from './Day';
import common from '../styles/common.module.sass';

export const DaysList = props => {
    const { days, mark } = props; 
    
	return (
		<ul className={common["days-list"]}>
            {days.map( (el, index) => {
                if (index > mark[0] && index < mark[1]) {
                    return (
                        <Day key={index} el={el} current="current"/>
                    )
                }
                return (
                    <Day key={index} el={el} />
                )
            })}
        </ul>
	);
}
