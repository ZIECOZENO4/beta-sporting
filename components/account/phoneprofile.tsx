'use client'
import Image from "next/image";
import React from 'react';
import { useUser } from '@clerk/clerk-react';
export default function Phonep1() {
  const { user } = useUser();
    return (
      <div className=" w-[100vw] flex justify-center flex-col items-center overflow-hidden">
  
      <div className=" font-sans  w-full flex flex-row h-[80vh] justify-center items-center">

<div className="bg-gray-200 font-sans h-[40vh] -mt-12 w-full flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={ user ? user.imageUrl : "/images/bsi.png"} alt=""/>
     <div className="text-center mt-1 text-3xl font-medium">zieco zeno</div>
     <div className="text-center font-normal text-lg">Total Balance</div>
     <div className="px-6 text-center mt-1 font-light text-sm">
       <p>
         200 Dollars
       </p>
     </div>
     <hr className="mt-4"/>
     <div className="flex p-4">
       <div className="w-1/2 text-center">
        <div className=" bg-green-700 flex flex-row p-2 place-items-center items-center justify-center align-middle">
          <Image 
          width={50}
          height={50}
          src='assets/deposit.svg'
          alt="deposite"
          
          />
          <h1 className=" font-bold text-white pl-1 font-heading text-[20px] ">
          Deposit
          </h1>
        </div>
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center flex-col">
       <div className=" bg-green-700 flex flex-row p-2 items-center justify-center align-middle">
       <Image 
          width={50}
          height={50}
          src='assets/withdrawal.svg'
          alt="deposite"
          
          />
         <h1 className=" font-bold text-white pl-1 font-heading text-[20px] ">
          Withdraw
          </h1>
       </div>
       </div>
     </div>
  </div>

</div>

      </div>
  
      </div>
    )
  }
  