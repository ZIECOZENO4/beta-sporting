import React from 'react'

function TopMatches() {
  return (
    <div>
        <div className=' mx-8 mt-4 mb-0 flex flex-row items-start align-middle justify-start bg-green-100 rounded-tr-md rounded-tl-[3rem]  bg-opacity-50 '>
        <img  src='/images/premier_league.webp' className=' h-full rounded-full w-20 m-2 flex justify-start'/>
        <p className=' text-2xl font-heading text-slate-300 mx-3 mt-5 flex align-middle'>Premier League</p>
        </div>
       <div className=' flex justify-center align-top mx-8 mb-2 items-center bg-black opacity-80'>
    <div className=' flex flex-row justify-between  m-2 mx-4 lign-middle bg-blue'>
        <div className='  h-[10%] w-[30%]'>
         <img src='/images/ch1.png' alt='chealsea' className=' h-full w-full m-4 align-middle items-center flex justify-center' />
        </div>
        <div className=' flex justify-center text-center items-center align-middle w-[15%] '>
        <button className=" border-none bg-green-400 text-white text-xl font-bold  rounded-md shadow-lg flex justify-center items-center align-middle">
         <h1 className='p-1'>
         View Details
         </h1>
        </button>
        </div>
         <div className='  h-[10%] w-[30%]'>
         <img src='/images/ch2.png' alt='fullham' className=' h-full w-full m-4 align-middle items-center flex justify-center' />
        </div>
    </div>
       </div>
       <div className=' flex justify-center align-top m-4 items-center mt-8 mx-8 bg-slate-400'>
    
       </div>
    </div>
  )
}

export default TopMatches