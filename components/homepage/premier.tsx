import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
const Match = () => {
 return (
   <div className="container flex items-center justify-center pt-4  w-full">
     <div className="match bg-white flex flex-col min-w-[600px] h-auto rounded-lg shadow-md">
       <div className="match-header flex justify-between space-between p-4 border-b border-gray-300">
         <div className="match-status bg-red-500 bg-opacity-30 text-red-600 px-3 py-2 rounded-full flex items-center space-x-2">
           <h1>Live</h1>
         </div>
         <div className="match-tournament flex items-center space-x-3 pl-[100px]">
           <img src="https://assets.codepen.io/285131/pl-logo.svg" className="w-5 h-5" />
           <span className=' text-zinc-700'>English Premier League</span>
         </div>
         <div className="match-actions flex ml-auto">
           <button className="btn-icon flex items-center justify-center bg-transparent text-gray-500 px-2">
           <Image src='assets/fav.svg' height={24} width={24} alt='fav'/>
           </button>
           <button className="btn-icon flex items-center justify-center bg-transparent text-gray-500 px-2">
           <Image src='assets/alert.svg' height={24} width={24} alt='fav'/>
           </button>
         </div>
       </div>
       <div className="match-content flex relative">
         <div className="column flex items-center justify-center p-8 -mt-[50px] w-1/3">
           <div className="team flex flex-col items-center">
             <div className="team-logo flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
               <img src="https://assets.codepen.io/285131/chelsea.svg" className="w-12 h-12" />
             </div>
             <h2 className="team-name text-center text-2xl font-bold text-black">Chelsea</h2>
           </div>
         </div>
         <div className="column flex flex-col items-center justify-center p-8 w-1/3">
           <div className="match-details flex flex-col items-center">
             <div className="match-date text-sm text-gray-500">
               3 May at <strong className="text-gray-800">17:30</strong>
             </div>
             <div className="match-score flex items-center space-x-2">
               <span className="match-score-number match-score-number--leading text-3xl font-bold text-green-500">3</span>
               <span className="match-score-divider text-2xl font-semibold text-gray-500">:</span>
               <span className="match-score-number text-slate-600 text-3xl font-bold">1</span>
             </div>
             <div className="match-time-lapsed text-sm text-orange-500">
               72&apos;
             </div>
             <div className="match-referee text-sm text-gray-500">
               Referee: <strong className="text-gray-800">Mike dean</strong>
             </div>
             <div className="match-bet-options flex space-x-2 mt-2 pb-3">
               <button className="match-bet-option border border-gray-500 bg-gray-100 text-green-500 text-sm font-bold px-2 py-1">1.48</button>
               <button className="match-bet-option border border-gray-500 bg-gray-100 text-slate-400 text-sm font-bold px-2 py-1">7.84</button>
               <button className="match-bet-option border border-gray-500 bg-gray-100 text-sky-700 text-sm font-bold px-2 py-1">3.24</button>
             </div>
             <button className="match-bet-place relative left-1/2 transform -translate-x-1/2 border-none bg-green-700 text-white text-2xl font-bold py-2 px-2 -ml-4 rounded-md shadow-lg justify-center items-center align-middle">BET LIVE</button>
           </div>
         </div>
         <div className="column flex flex-col items-center justify-center p-8  -mt-[50px] w-1/3">
           <div className="team flex flex-col items-center">
             <div className="team-logo flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
               <img src="https://resources.premierleague.com/premierleague/badges/t1.svg" className="w-12 h-12" />
             </div>
             <h2 className="team-name text-black text-center text-2xl font-bold">Man Utd</h2>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Match;
