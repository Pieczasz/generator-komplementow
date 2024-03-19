import React, { useState } from 'react';
import Compliments from './Compliments';

function GenerateCompliment() {
	const [randomCompliment, setRandomCompliment] = useState('');

	const generateRandomCompliment = () => {
		const today = new Date().toLocaleDateString();
		const storedCompliment = localStorage.getItem(today);

		if (storedCompliment) {
			setRandomCompliment(storedCompliment);
		} else {
			const randomIndex = Math.floor(Math.random() * Compliments.length);
			const newCompliment = Compliments[randomIndex].text;

			localStorage.setItem(today, newCompliment);
			setRandomCompliment(newCompliment);
		}
	};

	return (
		<main>
			<button onClick={generateRandomCompliment}>Generate compliment</button>
			{randomCompliment && <p>{randomCompliment}</p>}
		</main>
	);
}

export default GenerateCompliment;
