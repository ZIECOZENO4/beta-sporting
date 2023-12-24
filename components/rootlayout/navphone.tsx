'use client'

import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Phonenav() {
  const pathname = usePathname();

  return (
    <Navbar className={`bg-slate-400 md:hidden flex justify-between px-2 w-[100vw]`}>
      <NavbarContent className="md:hidden w-[100vw] gap-8" justify="center">
        {['Sports  | ', 'Predictions', 'Games', 'Blog'].map((link, index) => {
          const route = link.replace("|", "").trim().toLowerCase();
          const isActive = pathname.includes(route);
          
          const isSportsLink = link === 'Sports  | ';
          const linkClassNames = isSportsLink 
            ? `text-[20px] font-bold font-serif ${isActive ? 'text-green-300' : 'text-black-900'} -ml-2` 
            : `text-[15px] font-bold font-serif ${isActive ? 'text-green-300' : 'text-gray-900'}`;

          return (
            <NavbarItem key={index} isActive={isActive}>
              <Link href={`/${route}`} className={linkClassNames}>
                {link}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
}
