'use client'
import React from 'react'
import './globals.css'
import { CirclesWithBar } from 'react-loader-spinner'
function Loading() {
  return (
    <div className=' bg-black justify-center flex align-middle items-center m-9 w-full h-[100vh]' >  
        <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></div>
  )
}

export default Loading