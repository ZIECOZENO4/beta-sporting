import { Suspense } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Bottombar from '@/components/rootlayout/bottombar';
import AppLoad from '@/components/loading';
import Footer from '@/components/homepage/Footer/Footer';
import Sidebar from '@/components/football component/Sidebar';
import News from '@/components/football component/News';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Football Page',
  description: 'View all score line and news on football beta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={   
        <div className=' bg-black justify-center m-0 p-0 flex align-middle items-center w-full h-[100vh]' > 
         <AppLoad />
         </div>}>
      <div className={inter.className}>
        <div className='bg-gradient-to-tl from-black via-slate-700 to-slate-900'>

          <section className='md:flex md:space-x-4'>
            <Sidebar />

            {children}
          <div className=' hidden md:flex'>

            <News />
       </div>
          
          </section>
          <div>
    <Footer />  
          </div>
          <div className=''>
              <Bottombar />      
            </div>
        </div>
      </div>
      </Suspense>

  )
}
