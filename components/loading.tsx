'use client'
import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
function AppLoader() {
  return (
    <div className=' w-[100vw] h-[100vh]'>       
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

export default AppLoader