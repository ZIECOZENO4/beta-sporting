import Alerts from '@/components/alert component/alerts'
import AlertsMd from '@/components/alert component/alerts2'
import Footer2 from '@/components/features component/footer2'
import React from 'react'

function AlertPage() {
  return (
    <div className=' w-[100vw] overflow-hidden'>
        <Alerts />
        <AlertsMd />
        <div className=' my-5 h-[3px] md:h-[5px] bg-slate-100 w-full'/>
        <Footer2 />
    </div>
  )
}

export default AlertPage