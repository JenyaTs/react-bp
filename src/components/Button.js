import React from 'react';

export const Button = props => {
    const { text, updateGlobalState } = props;
    
	return (
		<button className="App" onClick={() => {
			updateGlobalState();
		}}>
            {text}
		</button>
	);
}
