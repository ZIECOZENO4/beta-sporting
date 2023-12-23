import Herosection from "./carousel";
import Body1 from "./laptop body";
import About from './about'
import Explore from './explore'
import MySwiperComponent from "./slide";
import GameComponent from "./game";
import MySwiper2Component from "./slide2";
import Table from "./table";
import MyTableBody from "./table 1";
import Live from "./live";
import Information from './information'
import Pricing from './pricing'
import Stats from './stats'
import Newsletter from './newsletter'
import DefaultAccordion from './accordion'
import PlayStore from './playstore'
import Banner from './baner'
import Xbit from './x-bit'
import Footer from './Footer/Footer'


export default function HomePage() {
  return (
    <div className=' w-[100vw] full-width m-0 p-0 overflow-hidden'>
         <Herosection  />
         <Body1 />
    <div className='py-4 bg-slate-400'>
     <About />    
     <Explore />
    </div>
<div className=' hidden md:flex md:flex-row '>
  <div className='   w-[60vw]'>
      <MySwiperComponent />
    <GameComponent />  
    <MySwiper2Component />
  </div>
  <div className=' w-[40vw] ml-[70px]'>
  <Table />    
  </div>
</div>
    <MyTableBody />
    <Live />
    <Information />
    <Pricing />
    <Stats />
    <Newsletter /> 
    <DefaultAccordion />
       <PlayStore />
      <Banner />
      <Xbit />
      <Footer />
    </div>

  )
}
