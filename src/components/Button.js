import React from 'react';

export const Button = props => {
	const { text, updateDate, flag } = props;	
    
	return (
		<button className="App" onClick={() => {
			updateDate(+flag);
		}}>
            {text}
		</button>
	);
}
