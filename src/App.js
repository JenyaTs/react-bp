import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { CalendarHeader } from './components/CalendarHeader';
import { DaysList } from './components/DaysList';
import { currentDate } from './connectors/index'
import { thisMonth } from './connectors/index'

const ConnectedCalendarHeader = currentDate(CalendarHeader);
const ConnectedDaysList = thisMonth(DaysList);

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
