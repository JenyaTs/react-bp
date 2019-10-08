import React from 'react';

export const Day = props => {
	return (
		<li className="date-item" onClick={() => {
			// @TODO set color
		}}>
            {props.el}
		</li>
	);
}
