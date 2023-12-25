'use client'
import { useState } from 'react';
import SlipComponent from './slipcomponent';
import { WalletComponent } from './wallet component';

export default function Bet() {
  const [activeTab, setActiveTab] = useState('Slip');
  return (
    <div className='h-[100vh] w-[100vw] m-0 p-0'>
      <div className="flex items-center justify-center h-screen w-screen align-top">
        <div id="bg-img" className="flex h-[100vh] w-[100vw] bg-no-repeat bg-cover">      
      <div className=' bg-dark-3 m-5 rounded-md w-[80vw] md:w-[30vw] md:h-[80vh] h-[90vh] relative md:top-10 top-10 mx-auto p-9 mt-[10px]  pb-[500px] mb-[20vh]'>   
      <div className=' m-3 bg-green-600 rounded-lg align-middle items-center md:h-[50px] h-[40px]'>
        <h1 className=' font-heading text-white font-extrabold m-3 flex justify-center text-[1.4rem] md:text-3xl align-middle '>BET NOW</h1></div>
      <div className='flex flex-row justify-between  text-header mt-4 w-[80]' >
  <h2 
    className={`text-slate-200 font-mono border-b-2 mr-0 md:text-xl  cursor-pointer ${activeTab === 'Slip' ? 'border-green-600' : '  border-amber-100'}`}
    onClick={() => setActiveTab('Slip')}
  >
   BET SLIP
  </h2>
  <h2 
    className={`text-slate-200 font-mono border-b-2 ml-0 md:text-xl cursor-pointer ${activeTab === 'Wallet' ? ' border-green-700' : '  border-amber-100'}`}
    onClick={() => setActiveTab('Wallet')}
  >
   ALL BOOKED
  </h2>
</div>

      <div className=' hover:text-amber-200 my-4 w-full'>
        {activeTab === 'Slip' && <SlipComponent />}
        {activeTab === 'Wallet' && <WalletComponent />}
      </div>
    </div>
          </div>
        </div>
      </div>

  )
}
