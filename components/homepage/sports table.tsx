'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopGoals from './Top Goals';
import TopNews from './Top News';

function SportsTables() {
 const [activeTab, setActiveTab] = useState('Statistics');

 return (
 <div>
   <div className='flex flex-row mx-2 justify-between'>
     <motion.header
       onClick={() => setActiveTab('Matches')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'Matches' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
       animate={{ scale: activeTab === 'Matches' ? 1.2 : 1 }}
     >
     Matches
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('News')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'News' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
     News
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Table')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'Table' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
      Table
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Statistics')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'Statistics' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
       Statistics
     </motion.header>
     <motion.header
       onClick={() => setActiveTab('Top Goals')}
       className={`text-slate-200 font-heading  text-2xl border-b-2 mx-5 pt-4  cursor-pointer ${activeTab === 'Top Goals' ? 'border-green-700  rounded-md  bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent animate-gradient' : 'border-amber-100'}`}
     >
    Top Goals
     </motion.header>
   </div>
   <div  className=' h-1 w-full bg-slate-300 mt-2 mb-5'/>
   {activeTab === 'Matches' && <div>Football content</div>}
   {activeTab === 'News' && <div><TopNews /></div>}
   {activeTab === 'Table' && <div>American Football content</div>}
   {activeTab === 'Top Goals' && <div><TopGoals /></div>}
   {activeTab === 'Statistics' && <div>Table Tennis content</div>}
 </div>
 );
}

export default SportsTables;
