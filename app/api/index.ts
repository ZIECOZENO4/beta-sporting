import { apiOptions, matchesType } from "../../types"
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface Game {
 event_id: number;
 event_date: string;
 home_team: {
 team_name: string;
 };
 away_team: {
 team_name: string;
 };
 // Add other properties as needed
}

const options:apiOptions =  {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
}
export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options)
  return matchData.json()
}

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');
  
export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
  return matchData.json()
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}})
  return newsData.json()
}

export const getLiveMatches = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches?status=LIVE', options);
  return matchData.json();
 }
 

export const filterLeague = async (filterData:string) => {
  const getEnglishLeague = await getMatchesfootball()
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
  const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
  return getData
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get(`https://apiv3.apifootball.com/?action=get_events&match_live=1&APIkey=YOUR_API_KEY`);
  const data: Game[] = response.data;
 
  if (response.status !== 200) {
  return res.status(response.status).json({ error: data });
  }
 
  // Filter for today's matches
  const today = new Date().toISOString().split('T')[0];
  const liveToday = data.filter((game: Game) => new Date(game.event_date).toISOString().split('T')[0] === today);
 
  res.status(200).json(liveToday);
 }