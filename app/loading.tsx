
import React from 'react'
import './globals.css'
import AppLoader from '@/components/loading'

function Loading() {
  return (
    <div className=' bg-black justify-center flex align-middle items-center m-9 w-full h-[100vh]' >  
    <AppLoader />
 </div>

  )
}

export default Loading