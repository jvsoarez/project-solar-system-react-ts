export interface Props {
  name: string,
  year: string,
  country: string,
  destination: string,
}

export default function MissionCard ({ name, year, country, destination }: Props) {
  return (
    <div 
      data-testid="mission-card"
      className={ `w-1/4 border-solid border-2 border-slate-400
      rounded-md mx-1.5 mb-8 text-center` }
    >
      <div className="border-solid border-2 border-slate-400">
        <p 
          data-testid="mission-name"
          className="text-xl font-medium"  
        >
          { name }
        </p>
      </div>
      <p data-testid="mission-year">{ year }</p>
      <p data-testid="mission-country">{ country }</p>
      <p data-testid="mission-destination">{ destination }</p>
    </div>
  );
}