import { ReactElement } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default function SolarSystem(): ReactElement {
	return (
		<div data-testid="solar-system">
			<Title headline="Planetas" />
			{ planets.map(({ name, image }) => (
				<PlanetCard planetName={name} planetImage={image} />
			)) }
		</div>
	);
}