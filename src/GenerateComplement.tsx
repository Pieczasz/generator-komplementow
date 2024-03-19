import React, { useState } from 'react';
import Complements from './Complements';

function GenerateComplement() {
	const [randomComplement, setRandomComplement] = useState('');

	const generateRandomComplement = () => {
		const today = new Date().toLocaleDateString();
		const storedComplement = localStorage.getItem(today);

		if (storedComplement) {
			setRandomComplement(storedComplement);
		} else {
			const randomIndex = Math.floor(Math.random() * Complements.length);
			const newComplement = Complements[randomIndex].text;

			localStorage.setItem(today, newComplement);
			setRandomComplement(newComplement);
		}
	};

	return (
		<main>
			<button onClick={generateRandomComplement}>Generuj komplement</button>
			{randomComplement && <p>{randomComplement}</p>}
		</main>
	);
}

export default GenerateComplement;
