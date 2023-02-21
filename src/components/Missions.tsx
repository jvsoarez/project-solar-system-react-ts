import Title from "./Title";
import missions from "../data/missions";
import MissionCard from "./MissionCard";

export default function Missions () {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <div className="flex text-white my-8 w-4/6 mx-auto flex-wrap justify-between">
        { missions.map(({ name, year, country, destination}) => (
          <MissionCard 
          key={name}
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
          />
          ))}
      </div>
    </div>
  );
}
