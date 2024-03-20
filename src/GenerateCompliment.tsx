import React, { useState } from 'react';
import Compliments from './Compliments';

function GenerateCompliment() {
	const [randomCompliment, setRandomCompliment] = useState('');
	const [showButton, setShowButton] = useState(true);

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

		setShowButton(false);
	};

	return (
		<main className="flex justify-center items-center h-screen">
			{showButton && (
				<button
					onClick={generateRandomCompliment}
					className="bg-red-500 text-white text-3xl font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transform transition duration-400 ease-in-out hover:scale-110 w-100 h-15"
				>
					Your compliment for today is..
				</button>
			)}
			{randomCompliment && (
				<p className="text-3xl font-bold text-white bg-red-500 py-3 px-4 rounded-full shadow-md w-100 h-15">
					{randomCompliment}
					{/* {TODO: CSS fireworks + present animation} */}
				</p>
			)}
		</main>
	);
}

export default GenerateCompliment;
