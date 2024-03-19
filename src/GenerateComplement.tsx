import { useState } from 'react';
import Complements from './Complements';

function GenerateComplement() {
	const [randomComplement, setRandomComplement] = useState('');

	const generateRandomComplement = () => {
		const randomIndex = Math.floor(Math.random() * Complements.length);
		setRandomComplement(Complements[randomIndex].text);
	};

	return (
		<main>
			<button onClick={generateRandomComplement}>Generuj komplement</button>
			{randomComplement && <p>{randomComplement}</p>}
		</main>
	);
}

export default GenerateComplement;
