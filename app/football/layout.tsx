import { Suspense } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Bottombar from '@/components/rootlayout/bottombar';
import AppLoad from '@/components/loading';
import Topbar from '@/components/rootlayout/Tobar';
import Navtwo from '@/components/rootlayout/topnav';
import Phonenav from '@/components/rootlayout/navphone';
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
      <body className={inter.className}>
        <main className=''>
        <Topbar />
<Navtwo />     
<Phonenav />
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
          <div className=' w-full md:hidden h-[100px] bg-black' />
              <Bottombar />      
            </div>
        </main>
      </body>
      </Suspense>

  )
}
