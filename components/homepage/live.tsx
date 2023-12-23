import Image from 'next/image'
import React from 'react'

function Live() {
    const nd = new Date()
    const dateConvert = nd.toDateString()
  return (
    <div className=' flex flex-col md:hidden text-white bg-gradient-to-tr from-slate-900 to-slate-600'>
            <div className="px-4 py-0  rounded-md text-textPrimary bg-slate-800 flex justify-center m-2 text-[25px] text-white ">
                <Image src='assets/calendar.svg' alt='calendar' width={30} height={30}/>
          <p className='px-2'>{`${dateConvert}`}</p>
        </div>
        <div className=' flex flex-row items-center align-middle justify-between m-3 px-6'>
<div className=' border-spacing-2 border-spacing-x-2 rounded-lg border border-sky-800'><h1 className=' gap-3 p-2'>All Live Games</h1></div>
<Image src='assets/sort.svg' alt='sort' height={30} width={30}/>
        </div>
        <div className=' flex-col flex justify-between  bg-slate-800'>
            <div className=' flex flex-row mx-4 justify-between'>
<Image src='assets/fav.svg' width={30} height={30} alt='star' className='' />
<div className=' flex align-middle items-end justify-end gap-10'>
<div className=' pt-1 '><h1>1</h1></div>
    <div className=' pt-1 text-green-300 '><h1>X</h1></div>
    <div className=' pt-1 '><h1>2</h1></div>
</div>
</div>

        </div>
        <div className=' flex-col flex justify-between mt-1 mb-0 pb-0  bg-slate-600'>
            <div className=' flex flex-row mx-2 mt-1 items-center align-middle justify-between'>
<Image src='/images/football.jpg' width={50} height={50} alt='star' className='' />
<p className=' pl-1'>name of club or country</p>
<div className=' flex align-middle items-end justify-end gap-4 '>
<div className=' pt-1 '><h1>1.99</h1></div>
    <div className=' pt-1 text-green-300 '><h1>2.93</h1></div>
    <div className=' pt-1 '><h1>6.80</h1></div>
</div>
</div>
</div>

<div className=' flex-col flex justify-betwee mt-0 bg-slate-600'>
            <div className=' flex flex-row items-center mt-[2px] justify-between align-middle gap-12 px-2'>
<div className=' bg-slate-800 flex flex-col h-[80px] w-[50px] border-r-amber-100 rounded-bl-lg'>
<h1 className=' flex justify-center m-1 align-middle items-center '>FT</h1> 
<div className='  bg-slate-200' />
</div>
<div className=' flex flex-col gap-2  border-spacing-6 align-middle justify-center -mt-2 items-center'>
<div>
   Home
</div>
<div className=' h-[0.5px] w-[100%] bg-slate-300 flex flex-col' />
<div>
Away
</div>
  </div>
  <div className=' flex flex-col gap-2  border-spacing-6 align-middle justify-center -mt-2 items-center'>
<div>
  2
</div>
<div>
4
</div>
  </div>
<div className=' flex align-middle items-end justify-end gap-5 pr-3 m-4  border-spacing-2 rounded-lg border border-slate-400 bg-green-700'>
<div className='  flex flex-col p-2 -mr-2'>
<div>
   +2.5
</div>
<div>
   10%
</div>
<div>
80%
</div>
</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Live