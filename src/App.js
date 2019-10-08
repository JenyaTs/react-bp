import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { CalendarHeader } from './components/CalendarHeader';
import { DaysList } from './components/DaysList';
import { daysNumber, currentDate } from './connectors/index'

const ConnectedDaysList = daysNumber(DaysList);
const ConnectedCalendarHeader = currentDate(CalendarHeader);

function App() {
	return (
		<div className="calendar-wrapper">
			<Button />
			<ConnectedCalendarHeader />
			<Button />
			<ConnectedDaysList />
		</div>
	);
}

export default App;
