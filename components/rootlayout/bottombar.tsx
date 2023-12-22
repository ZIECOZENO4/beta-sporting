'use client'
import Image from 'next/image'
import {allbarLinks} from '../../constants/index'
import React from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation';

function Bottombar() {
const pathname = usePathname();
  return (
    <section className='fixed bottom-0 z-10 w-[100vw] mt-[20px] pt-[20px] rounded-t-3xl bg-glassmorphism p-0  m-0 backdrop-blur-lg xs:px-4 md:hidden bg-gradient-to-t from-slate-800 to-slate-950'>
       <div className='flex items-center justify-between gap-3 xs:gap-3 -ml-3 '>
       {
        allbarLinks.map ((link) =>{
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          return(
         <Link href={link.route} key={link.label} className={` relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5  ${isActive && ' bg-red'}`}>
          <Image src={link.imgURL} alt={link.label} width={28} height={28}/>
          <p className=' text-subtle-medium text-white text-light-1 '>{link.label.split(/\s+/)[0]}</p>
         </Link> 
        )
        } )
      }
    </div>   
    </section>

  )
}

export default Bottombar;
