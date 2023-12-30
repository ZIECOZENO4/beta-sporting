import {FC} from 'react'
import LinkSide from './LinkSide'

const Leagues = [
  { id:1,name:"Premier League",href:"/football/premier-league",emblem:"/images/leagues/premier_league.webp"},
  { id:2,name:"Primera Division",href:"/football/la-liga",emblem:"/images/leagues/laliga.svg"},
  { id:3,name:"Bundesliga",href:"/football/bundesliga",emblem:"/images/leagues/bundesliga.webp"},
  { id:4,name:"Serie A",href:"/football/serie-a",emblem:"/images/leagues/serie_a.webp"},
  { id:5,name:"Ligue 1",href:"/football/ligue-1",emblem:"/images/leagues/ligue_1.webp"},
  { id:6,name:"Championship",href:"/football/championship",emblem:"/images/leagues/championship.webp"},
  { id:7,name:"Primeira Liga",href:"/football/primeira-liga",emblem:"/images/leagues/liga_portugal.webp"},
  { id:8,name:"Brazilian Championship Series A",href:"/football/brazilian-series-a",emblem:"/images/leagues/brazilian_serie_a.webp"},
  { id:9,name:"Copa Libertadores",href:"/football/copa-libertadores",emblem:"/images/leagues/copa_libertadores.webp"},
]

const Sidebar:FC = async() => {
  return (
    <section className='hidden md:flex  md:px-4 py-2 md:bg-[rgb(40,46,58)] '>
      <div>
        <h1 className='font-bold text-2xl mb-6 text-teal-400'>ALL LEAGUES</h1>
        <ul className='space-y-2'>
          {
            Leagues.map((league) => (
              <div key={league?.id} className='flex text-3xl text-gray-200 font-heading'>
                <LinkSide href={league.href} name={league?.name} src={league?.emblem} />
              </div>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Sidebar