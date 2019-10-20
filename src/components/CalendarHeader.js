import React from 'react';
import common from '../styles/common.module.sass';

export const CalendarHeader = props => {
	const { month, year } = props;

	return (
		<div className={common.header}>
			<span className={common.month}>{month} </span>
			<span className="calendar-year">{year}</span>
		</div>
	);
}
