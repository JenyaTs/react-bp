import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { CalendarHeader } from './components/CalendarHeader';
import { DaysList } from './components/DaysList';
import { currentDate, thisMonth, updateDate } from './connectors/index';

const ConnectedCalendarHeader = currentDate(CalendarHeader);
const ConnectedDaysList = thisMonth(DaysList);
const ConnectedButton = updateDate(Button);

function App() {
	return (
		<div className="calendar-wrapper">
			<ConnectedButton flag="-1"/>
			<ConnectedCalendarHeader />
			<ConnectedButton flag="1"/>
			<ConnectedDaysList />
		</div>
	);
}

export default App;
