import { ReactElement } from 'react';
import '../components/SolarSystem.css';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default function SolarSystem(): ReactElement {
	return (
		<div data-testid="solar-system" className="h-96">
			<Title headline="Planetas" />
			<div className="flex text-white my-8 w-9/12 mx-auto">
				{ planets.map(({ name, image }) => (
					<PlanetCard
						data-testid="planet-card" 
						key={name} 
						planetName={name} 
						planetImage={image} 
					/>
				)) }
			</div>
		</div>
	);
}