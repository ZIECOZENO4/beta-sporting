
'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useUser } from '@clerk/nextjs';


const NavbarBlog = () => {
  // Get the user object from Clerk
  const { user } = useUser();

  return (
    <div className='flex align-middle bg-gradient-to-r from-zinc-900 via-gray-800 to-stone-700 justify-between h-[90px] w-full md:p-[10px]'>
      <div className='hidden md:flex md:gap-[20px] md:flex-1 md:p-5 md:align-middle'>
        <Link href='/'> <Image src="/images/fb.png" alt="facebook" width={30} height={30} /></Link> 
        <Link href='/'> <Image src="/images/in.png" alt="instagram" width={30} height={30} /></Link> 
        <Link href='/'>  <Image src="/images/wa.png" alt="tiktok" width={30} height={30} /></Link>
        <Link href='/'> <Image src="/images/xb.png" alt="youtube" width={30} height={30} /></Link> 
      </div>
      <div className='flex justify-between md:flex-1 p-5 text-[30px] md:p-0 items-center md:text-[36px] gap-16 font-bold  font-heading text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'><Link href='/blog'>Beta Sporting</Link> <div className=" md:hidden flex justify-between items-end"> </div></div>
      <div className='hidden md:flex md:align-middle md:gap-8 md:flex-1 md:text-[20px] md:p-5 text-header text-transparent bg-clip-text   bg-gradient-to-t from-slate-50 via-gray-200 to-orange-200' >
        <Link href="/blog/feature" className=' hidden md:flex align-middle'>Features</Link>
        <Link href="/blog/contact" className=' hidden md:flex align-middle'>Contact</Link>
        <Link href="/blog/about" className=' hidden md:flex align-middle'>About</Link>
        {user && (
          <>
            <Link href="/blog/write" className=' hidden md:flex md:align-middle'>Create</Link>
            <Link href="/blog/sponsor" className=' hidden md:flex md:align-middle'>Sponsor</Link>
          </>
        )}
  
      </div>
    </div>
  );
};

export default NavbarBlog;
