'use client'
import { useEffect, useState } from 'react';
import { getMatchesfootball } from '../../../app/api/index'; // replace with actual path

type Match = {
 id: string;
 utcDate: string;
 homeTeam: {
  name: string;
 };
 awayTeam: {
  name: string;
 };
 // Add other properties as needed
};

const MatchesComponent = () => {
 const [matches, setMatches] = useState<Match[] | null>(null);

 useEffect(() => {
  const fetchMatches = async () => {
    const data = await getMatchesfootball();
    setMatches(data);
  };

  fetchMatches();
 }, []);

 if (!matches) {
  return <div>Loading...</div>;
 }

 return (
  <div>
    {matches.map((match) => (
      <div key={match.id}>
        <h2>{match.homeTeam.name} vs {match.awayTeam.name}</h2>
        <p>{new Date(match.utcDate).toLocaleString()}</p>
      </div>
    ))}
  </div>
 );
};

export default MatchesComponent;
