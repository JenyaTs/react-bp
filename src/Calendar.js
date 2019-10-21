import React from 'react';
import { Button } from './components/Button';
import { Week } from './components/Week';
import { Date } from './components/AdditionalDate';
import { CalendarHeader } from './components/CalendarHeader';
import { DaysList } from './components/DaysList';
import { currentDate, updateDate, dateMini } from './connectors/index';
import common from './styles/common.module.sass';
import './styles/common.module.sass';
import './styles/common.sass';

const ConnectedCalendarHeader = currentDate(CalendarHeader);
const ConnectedButton = updateDate(Button);
const ConnectedDate = dateMini(Date);

export function Calendar(props) {	
	const data = props.days;
	return (
		<>
			<div className={common["calendar-wrapper"]}>
				<div className={common["header-wrapper"]}>
					<ConnectedButton flag='-1' action='prev'/>
					<ConnectedCalendarHeader />
					<ConnectedButton flag='1' action='next'/>
				</div>
				<div className="week-wrapper">
					<Week />
				</div>
				<div className={common["days-wrapper"]}>
					{Object.keys(data).map((month, index) => <DaysList 
						key={index}
						days={data[month].days} 
						mark={data[month].currentMonthDays}
						currentDay={data[month].currentDay}
						/>
					)}
				</div>
			</div>
			<div className="additional-date-wrapper">
				<ConnectedDate />
			</div>
		</>
	);
}
