
import React from 'react'



export default function Hero() {
  const images = [
    'https://source.unsplash.com/1600x900/?ronaldo',
  ];


  return (
    <div>
    <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl h-[40vh] md:h-[60vh]">
      {images.map((image, index) => (
        <figure key={index} className="h-96" >
          <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />
          <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
            Any kind of content here!
            Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius. 
          </figcaption>
        </figure>
      ))}

    </article>
                 <h1 className='text-[26px] md:text-[50px] md:mt-8  mt-5 font-bold text-gray-100 px-[10px]'>
                 <b>Hey, you are on the Official <br /><span className='text-[30px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500 justify-center  items-center '>BETA SPORTING BLOG PAGE!</span></b> <br /><span className='text-[25px] text-gray-400 md:text-[36px]'>Discover top sports news and predictions.</span>
               </h1>
               </div>
  );
}

