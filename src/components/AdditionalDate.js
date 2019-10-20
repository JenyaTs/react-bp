import React from 'react';
import common from '../styles/common.module.sass';

export const Date = props => { 
    const { day, month, year } = props.date; 
	return (
		<div className={common['additional-date']}>
            <span>{day}.</span>
            <span>{month}.</span>
            <span>{year}</span>
        </div>
	);
}
