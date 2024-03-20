import './App.css';
import GenerateCompliment from './GenerateCompliment';

function App() {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-image bg-[url('./assets/stacked-waves-haikei.svg')]">
			<GenerateCompliment />
		</div>
	);
}

export default App;
