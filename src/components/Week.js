import React from 'react';
import common from '../styles/common.module.sass';

export const Week = () => {    
    const week = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ]
	return (
		<ul className={common["week-list"]}>
            {week.map( (el, index) => {
                return (
                    <li key={index} className={common["week-item"]}>
                        {el}
                    </li>
                )
            })}
        </ul>
	);
}
