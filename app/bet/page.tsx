import React from 'react'
import Bet from "@/components/bet component/bet"

const BetHome = () => {
 return (
 <div className='relative w-full h-screen overflow-hidden'>
  <video src="/videos/betbg.mp4"  autoPlay loop muted className="absolute w-full h-full object-cover"/>
  <div className="relative z-10">
    <Bet />
  </div>
 </div>
 )
}

export default BetHome
