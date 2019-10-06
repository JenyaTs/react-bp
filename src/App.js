import React from 'react';
import './App.css';
import Button from './components/Button';
import { globalState } from './connectors/index'

const ConnectedButton = globalState(Button)

function App() {
	return (
		<div className="App">
			<ConnectedButton text="Hello" />
		</div>
	);
}

export default App;
