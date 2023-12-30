import { Carousel } from 'flowbite-react';

function SmSidebar() {
    const Leagues = [
        { id:1,name:"Premier League",href:"/football/premier-league",emblem:"/images/premier_league.webp"},
        { id:2,name:"Primera Division",href:"/football/la-liga",emblem:"/images/laliga.svg"},
        { id:3,name:"Bundesliga",href:"/football/bundesliga",emblem:"/images/bundesliga.webp"},
        { id:4,name:"Serie A",href:"/football/serie-a",emblem:"/images/serie_a.webp"},
        { id:5,name:"Ligue 1",href:"/football/ligue-1",emblem:"/images/ligue_1.webp"},
        { id:6,name:"Championship",href:"/football/championship",emblem:"/images/championship.webp"},
        { id:7,name:"Primeira Liga",href:"/football/primeira-liga",emblem:"/images/liga_portugal.webp"},
        { id:8,name:"Brazilian Championship Series A",href:"/football/brazilian-series-a",emblem:"/images/brazilian_serie_a.webp"},
        { id:9,name:"Copa Libertadores",href:"/football/copa-libertadores",emblem:"/images/copa_libertadores.webp"},
      ]

 return (
   <div className="md:hidden w-full h-[100px] p-2 pb-3">
     <Carousel>
       {Leagues.map((league) => (
         <div key={league.id}>
           <a href={league.href}>
             <img src={league.emblem} alt={league.name} />
             <h2>{league.name}</h2>
           </a>
         </div>
       ))}
     </Carousel>
   </div>
 );
}

export default SmSidebar;
