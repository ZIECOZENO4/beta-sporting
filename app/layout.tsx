import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/components/rootlayout/Tobar';
import Navtwo from '@/components/rootlayout/topnav';
import Phonenav from '@/components/rootlayout/navphone';
import Bottombar from '@/components/rootlayout/bottombar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beta Sporting',
  description: 'For all correct score and predictions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <div className=' w-[100vw] bg-gradient-to-tl from-black via-slate-700 to-slate-900'>
        <Topbar />
<Navtwo />     
<Phonenav />
<div className='w-[100vw] p-0 z-10  m-0'>{children}</div>
            <div className='z-0'>
              <div className=' w-full md:hidden h-[100px] bg-black' />
              <Bottombar />      
            </div>
        </div>
        </Providers>
        </body>
    </html>
    </ClerkProvider >
  )
}
