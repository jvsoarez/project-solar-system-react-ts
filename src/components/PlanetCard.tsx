import * as React from 'react';

export interface Props {
  planetName: string,
  planetImage: string,
}

export default function PlanetCard ({ planetName, planetImage }: Props) {
  return (
    <div data-testid="planet-card" className="w-full">
      <div className="text-center">
        <p data-testid="planet-name">{ planetName }</p>
      </div>
      <div className="flex h-full items-center">
        <div className="mx-auto">
          <img id={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    </div>
  );
}
