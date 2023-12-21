
import React from 'react'
import './globals.css'
import AppLoader from '@/components/loading'

function Loading() {
  return (
    <div className=' bg-black justify-center m-0 p-0 flex align-middle items-center  w-full h-[100vh]' >  
    <AppLoader />
 </div>

  )
}

export default Loading