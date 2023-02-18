import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

function App() {
	return (
		<div className="App">
			<Header />
      <SolarSystem />
			<Missions />
		</div>
	);
}

export default App;
