import { Suspense } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarBlog from '../../components/blog component/navbar/Navbar'
import FooterBlog from '../../components/blog component/footer/Footer'
import Bottombar from '@/components/rootlayout/bottombar';
import AppLoad from '@/components/loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: 'Beta Sporting Blog Page',
 description: 'The Beta Sporting Community',
}

export default function BlogLayout({ children,
}: {
 children: React.ReactNode
}) {
 return (

          <Suspense fallback={   
          <div className=' bg-black justify-center m-0 p-0 flex align-middle items-center w-full h-[100vh]' > 
           <AppLoad />
           </div>}>
           <div className={inter.className}>
          <div className=' overflow-hidden bg-gradient-to-tl from-black via-slate-700 to-slate-900 items-center w-[100vw] '>
             <div className=''>
             </div>
             <div className=" ">           
                <NavbarBlog />
                {children}
                <FooterBlog />         
             </div>
           <Bottombar />
             </div>
             </div>
          </Suspense>
  


 )
}
