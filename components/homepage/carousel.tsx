'use client'
import { Carousel } from 'flowbite-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from 'react';
import { WalletComponent } from './wallet component';
import SlipComponent2 from './slipcomponent2';
import PhoneHero from './phonehero/phonehero'
export default function Herosection() {
  const [activeTab, setActiveTab] = useState('Slip');
  return (
    <div>
      <div className=' md:hidden'><PhoneHero /> </div>
    <div className='hidden  md:flex md:flex-row md:w-[100wh] md:h[10vh] md:h-[400px] md:justify-start md:align-middle md:p-0 md:m-0 md:bg-no-repeat md:bg-cover md:bg-carosel1' >
      <div className='hidden  md:ml-0 md:pl-0 md:mx-0 md:w-[20vw] md:justify-items-center md:bg-opacity-50    md:bg-slate-200 md:h-[400px] md:flex  md:p-0 md:m-0'>
      <header className=' mx-5 my-5'>
        <h1 className=' justify-center text-black text-[30px] font-serif font-bold '>Predictions</h1>
        <div>
          <br className=' text-[5xl] font-bold text-black mt-3 bg-black' />     
          <h1>
            No prediction is available till the offical lunch day
          </h1>
        </div>
   
      </header>
    
      </div>

      <div className="md:w-[40vw] md:h-[300px] h-[300px] md:p-0 m-0 ">
      <Carousel>
        <img src="/images/bsi.png"  alt="..." />
        <img src="/images/football.jpg" alt="..." />
        <img src="/images/field.JPG" alt="..." />
        <img src="/images/add.jpeg"  alt="..." />
        <img src="/images/xb.png"  alt="..." />
        <img  src="/images/field2.JPG"  alt="..." />
        <img src="/images/a1.jpg"   alt="..." />
        <img src="/images/a6.jpg"  alt="..." />
        <img src="/images/zeno web.png"  alt="..." />
        <img src="/images/xb.png"  alt="..." />
        <img src="/images/xb.png"  alt="..." />
      </Carousel>
    </div>

    <div className='hidden   md:flex md:flex-row md:p-0 md:m-0 md:bg-opacity-80   md:bg-slate-100  md:h-[400px] md:w-[40vw] '>
 
    <header className=' mx-1 ml-[5px] pl-[5px] mt-[40px] bg-opacity-70 justify-center'>
        <h1 className='  text-black text-[40px] font-serif  font-bold mt-[25px]'>PLACE A <span className=' text-center text-green-700 ml-2 mt-2  '>BET</span></h1>
        <div>
          <br className=' text-[5xl] font-bold text-black mt-3 bg-black' />     
          <h1 className=' justify-center text-[10px] font-thin'> 
            Beta Sporting, We Dey Win
          </h1>
        </div>
   
      </header>

      <div className=' bg-dark-3 m-5 rounded-sm   '>   
      <div className=' m-3 bg-green-600 rounded-lg align-middle items-center'>
        <h1 className=' font-heading text-white font-extrabold m-3 flex justify-center text-[4xl]'>BET NOW</h1></div>
      <div className='flex flex-row justify-between ml-8 text-header mt-4'>
  <h2 
    className={`text-slate-200 font-mono border-b-2 mx-2 cursor-pointer ${activeTab === 'Slip' ? 'border-green-600' : '  border-amber-100'}`}
    onClick={() => setActiveTab('Slip')}
  >
    Slip
  </h2>
  <h2 
    className={`text-slate-200 font-mono border-b-2 mx-2 cursor-pointer ${activeTab === 'Wallet' ? ' border-green-700' : '  border-amber-100'}`}
    onClick={() => setActiveTab('Wallet')}
  >
    Wallet
  </h2>
</div>

      <div className=' hover:text-amber-200 my-4 mx-2'>
        {activeTab === 'Slip' && <SlipComponent2 />}
        {activeTab === 'Wallet' && <WalletComponent />}
      </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}
