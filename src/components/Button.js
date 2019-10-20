import React from 'react';
import button from '../styles/button-common.module.sass';
import '../styles/common.sass';

export const Button = props => {
	const { text, updateDate, flag, action } = props;	
    
	return (
		<button className={`${button.button} ${action}`} onClick={() => {
			updateDate(+flag);
		}}>
            {text}
		</button>
	);
}
