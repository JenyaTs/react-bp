import React from 'react';
import common from '../styles/common.module.sass';
import '../styles/common.sass';

export const Day = props => {
	if (props.current) {
		return (
			<li className={`${common["days-item"]} ${props.current}`} onClick={() => {
				// @TODO set color
			}}>
				{props.el}
			</li>
		);
	}
	
	return (
		<li className={`${common["days-item"]}`} onClick={() => {
			// @TODO set color
		}}>
            {props.el}
		</li>
	);
}
