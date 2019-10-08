import React from 'react';

export const CalendarHeader = props => {
	const { month, year } = props;

	return (
		<div>
			<span className="calendar-month">{month} </span>
			<span className="calendar-year">{year}</span>
		</div>
	);
}
