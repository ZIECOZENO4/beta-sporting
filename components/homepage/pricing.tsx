'use client'
import React, { useState } from 'react';

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [basicPlan, setBasicPlan] = useState({annualPrice: 210.99, monthlyPrice: 20.99, items: ['1 Free Odd', 'No Refund', 'Join Open Source']});
  const [proPlan, setProPlan] = useState({annualPrice: 399.99, monthlyPrice: 39.99, items: ['10 Free Odds', '50% refund','Post Your Prediction' ]});
  const [regularPlan, setRegularPlan] = useState({annualPrice: 300.99, monthlyPrice: 30.99, items: ['5 Free Odds', '10% Refund','Join The Community' ]});

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="text-gray-900 sm:h-[240vh] font-sans h-[235vh] md:h-[150vh] lg:h-[140vh] -mt-[20px]  bg-no-repeat bg-bottom sm:bg-bottom bg-slate-400 mb-auto">
      <h1 className="text-center font-bold text-3xl md:text-5xl md:pt-[70px] pt-[50px] tracking-wide relative  ">Our Pricing</h1>
      <h2 className="text-center font-bold md:text-3xl text-[30px] mt-8 tracking-wide relative">Join Beta Sporting Pro Now</h2>

      <div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
        <p className="mx-3 font-heading">Annually</p>

        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input id="toggle" type="checkbox" className="hidden" onClick={handleToggle} />
            <div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className={`absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0 ${isChecked ? 'translate-x-full bg-blue-500' : ''}`}></div>
          </div>
        </label>

        <p className="mx-3 font-heading ">Monthly</p>
      </div>

      <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center ">
        {['Basic', 'Pro', 'Regular'].map((plan, index) => {
          let currentPlan;
          if (plan === 'Basic') {
            currentPlan = basicPlan;
          } else if (plan === 'Pro') {
            currentPlan = proPlan;
          } else {
            currentPlan = regularPlan;
          }

          return (
            <div key={index} className={`border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 ${plan === 'Pro' ? 'bg-sky-700 text-green-400 tracking-widest transition-transform-colors ' : 'bg-slate-600'} text-[25px] md:text-[40px] z-10 shadow-lg`}>
              <div className="">{plan}</div>
              <div id="month" className={`font-bold md:text-[45px] text-[20px]  month ${isChecked ? '' : 'hidden'}`}> $ {currentPlan.monthlyPrice}</div>
              <div id="annual" className={`font-bold md:text-[45px] text-[20px] annual ${isChecked ? 'hidden' : ''}`}> $ {currentPlan.annualPrice}</div>
              <hr />
              {currentPlan.items.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="md:text-[25px] text-[17px] my-3">{item}</div>
                  <hr />
                </React.Fragment>
              ))}
              <a href="#" target="_blank">
                <div className="bg-blue-500 hover:bg-black text-black hover:text-sky-600 border border-blue-600 hover:border-transparent font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer md:text-[30px] text-[15px]">Join Now</div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Pricing;
