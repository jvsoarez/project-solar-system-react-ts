import { ReactElement } from 'react';
import Title from './Title';

export default function SolarSystem(): ReactElement {
	return (
		<div data-testid="solar-system">
			<Title headline="Planetas" />
		</div>
	);
}