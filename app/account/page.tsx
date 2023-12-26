import MdAccount from '@/components/account/mdaccount'
import SmAccount from '@/components/account/smaccount'
import React from 'react'

function AccountPage() {
  return (
    <div className=' w-[100vw] overflow-hidden'>
        <div className=' md:hidden'>
            <SmAccount />
        </div>
        <div className=' md:flex hidden'>
        <MdAccount />
        </div>
       
    </div>
  )
}

export default AccountPage