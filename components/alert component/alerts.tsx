import React from 'react'

function Alerts() {
  return (
    <div>
        <div className='flex flex-col md:hidden'>
            <h1 className="flex justify-center align-middle items-start m-10 text-slate-300 text-2xl font-heading ">
             View All Alerts
            </h1>
            <div>
            <h1 className="flex justify-center align-middle items-start m-5 text-slate-300 text-heading font-heading ">
             View your transactions alerts
            </h1>
              <div className="w-full mb-2 select-none border-l-4 border-green-400 bg-green-100 p-4 font-medium hover:border-green-500">    No Transaction Alert yet!</div>   
            </div>
            <div>
            <h1 className="flex justify-center align-middle items-start m-5 text-slate-300 text-heading font-heading ">
             View your bets alerts
            </h1>
            <div className="w-full mb-2 select-none rounded-l-lg border-l-4 border-yellow-400 bg-yellow-100 p-4 font-medium hover:border-yellow-500">No Bet Alerts Yet!</div>
            </div>
            <div>
            <h1 className="flex justify-center align-middle items-start m-5 text-slate-300 text-heading font-heading ">
             Warning from Beta Sporting
            </h1>
            <div className="w-full mb-2 select-none rounded-t-lg border-t-4 border-yellow-400 bg-yellow-100 p-4 font-medium hover:border-yellow-500">No Warning yet!</div>
            </div>
        </div>
    </div>
  )
}

export default Alerts