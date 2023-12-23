'use client'
import Image from 'next/image';
import React from 'react';
import SportsTables from './sports table';

const MySwiper2Component = () => (
  <div className=' flex flex-row justify-between w-[100vw] p-0 m-0 px-10 mt-4 h-auto'>

   <div className=' w-[60vw]  '>
    <h1 className=' text-[20px]  font-bold ml-[20px] text-red-600'>CHECK UP FOR <span className=' text-green-700'>STATISTICS</span> ON BETA</h1>
    <div className=' w-full  bg-slate-600'> 
    <div className=' flex justify-start gap-3 align-middle pl-5'>
      <Image 
      height={34}
      width={34}
      alt='live stream'
      src='/assets/live.svg'
      className=''
      />
      <h1 className=' mx-3 font-header text-black text-[25px]'>Statistics</h1>
      </div>
      </div>
<div className=' bg-neutral-900  text-white'>

<div>
<SportsTables />
</div>
</div>

  </div>   

  </div>

)

export default MySwiper2Component;
