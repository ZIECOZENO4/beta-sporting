'use client'
import React from "react";
import { useUser } from "@clerk/clerk-react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import search from '../../public/assets/serch.svg'
import Image from "next/image";
import { useState } from 'react';
import { SignedIn, SignedOut, UserButton,  } from "@clerk/nextjs";
import AccoutDropdown from "./accountdropdown";
export default function Topbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  if (!isLoaded) {
    return null;
  }


  return (
    <Navbar className=" bg-gradient-to-tl from-violet-200 via-red-900 to-stone-500 bg-opacity-75 sticky ">
      <NavbarBrand>
        <Link href="/">
      <Image 
      alt='beta logo'
      src='/images/bsi.png'
      width={70}
      height={70}
      /> 
        </Link>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 hover:text-green-500 border-b-green-600" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/sports"  className=" text-[20px] font-bold font-serif">
            Sports
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/predictions"  className=" text-[20px] font-bold font-serif">
           Prediction
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/games" className=" text-[20px] font-bold font-serif">
            Games
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/features" className=" text-[20px] font-bold font-serif">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/results"  className=" text-[20px] font-bold font-serif">
           Results
          </Link>
        </NavbarItem>
        <NavbarItem
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              className="relative inline-block text-left"
        >
          <Link color="foreground" href="/account" className=" text-[20px] font-bold font-serif">
           Account
          </Link>
                {dropdownVisible && (
        <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white">
          <div className="py-1">
     <AccoutDropdown />
          </div>
        </div>
      )}
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/bet" className=" text-[20px] font-bold font-serif">
            Place Bet
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
               <Image 
          src={search}
          height={20}
          width={20}
          alt="serch bar"
          className=" ml-1 md:hidden"
          />   
   
 
      <SignedIn>
        <UserButton/>
        { isSignedIn && <div className=" flex text-header font-bold text-white ">  {user.firstName}</div> }
              </SignedIn>
      <SignedOut>
      <NavbarItem className=" lg:flex">

          <Link href="/sign-in" >Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </SignedOut>
  

       
      </NavbarContent>
    </Navbar>
  );
}
