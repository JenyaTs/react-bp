import React from 'react';
import common from '../styles/common.module.sass';
import '../styles/common.sass';

export const Day = props => {
	const { el, currentMonth, currentDay } = props;
	console.log(currentDay);
	
	if (currentMonth && currentDay) {
		return (
			<li className={`${common["days-item"]} ${currentMonth} now`} onClick={() => {
				// @TODO set color
			}}>
				{el}
			</li>
		);
	}

	if (currentMonth) {
		return (
			<li className={`${common["days-item"]} ${currentMonth}`} onClick={() => {
				// @TODO set color
			}}>
				{el}
			</li>
		);
	}
	
	return (
		<li className={`${common["days-item"]}`} onClick={() => {
			// @TODO set color
		}}>
            {el}
		</li>
	);
}
