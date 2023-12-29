import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-8 md:pr-5 p-3 ">
       <h1 className=" text-xl md:text-2xl font-heading text-slate-50">Short Advert</h1>
      <div className="mt-8 flex flex-col justify-center md:flex-row  items-center gap-12">
        <div className="flex-1 relative h-full w-full">
          <Image src="/images/add2.jpeg" alt="" height={328} width={528} className="" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl text-slate-300">Official Beta Sporting</h1>
          <p className="text-lg font-light text-gray-500">
            Have you lost a lot of money on betting? it is over because Hurray BETA SPORTING &quot; is here for you. We predict game with a guarantee of 80% win rate and other betting tips. We not only predict football but other games and sports. Come and experience the BETA SPORTING and its power
          </p>
          <button className="px-5 py-4 bg-gradient-to-r from-red-500 to-orange-500text-white rounded-md self-start">Read More</button>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center md:flex-row  items-center gap-12">
      
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl text-slate-300">Official Beta Sporting</h1>
          <p className="text-lg font-light text-gray-500">
            Have you lost a lot of money on betting? it is over because Hurray BETA SPORTING &quot; is here for you. We predict game with a guarantee of 80% win rate and other betting tips. We not only predict football but other games and sports. Come and experience the BETA SPORTING and its power
          </p>
          <button className="px-5 py-4 bg-gradient-to-r from-red-500 to-orange-500text-white rounded-md self-start">Read More</button>
        </div>
          <div className="flex-1 relative h-full w-full">
          <Image src="/images/add2.jpeg" alt="" height={328} width={528} className="" />
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center md:flex-row  items-center gap-12">
        <div className="flex-1 relative h-full w-full">
          <Image src="/images/add2.jpeg" alt="" height={328} width={528} className="" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl text-slate-300">Official Beta Sporting</h1>
          <p className="text-lg font-light text-gray-500">
            Have you lost a lot of money on betting? it is over because Hurray BETA SPORTING &quot; is here for you. We predict game with a guarantee of 80% win rate and other betting tips. We not only predict football but other games and sports. Come and experience the BETA SPORTING and its power
          </p>
          <button className="px-5 py-4 bg-gradient-to-r from-red-500 to-orange-500text-white rounded-md self-start">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
