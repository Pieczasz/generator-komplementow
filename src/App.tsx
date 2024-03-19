import React from 'react';
import './App.css';
import GenerateCompliment from './GenerateCompliment';

function App() {
	return (
		<div className="h-screen flex flex-col justify-center items-center from-purple-700 via-yellow-700 to-pink-900 bg-gradient-to-br">
			<GenerateCompliment />
		</div>
	);
}

export default App;
