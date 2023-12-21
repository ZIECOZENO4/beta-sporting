import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
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
        <div className=' w-[100vw] bg-gradient-to-tl from-black via-slate-700 to-slate-900'>
        {children}
        </div>
    
        </body>
    </html>
    </ClerkProvider >
  )
}
