import React, { ReactNode } from 'react'
import MenuTab from './_components/MenuTab'

export default function UserDashboardLayout({children}:{children:ReactNode}) {
  return (
    <div className='relative'>
        <div className='fixed w-full md:w-[862px] z-30'>
            <MenuTab/>
        </div>
      <div className='pt-14 md:px-4'>
        {children}
      </div>
    </div>
  )
}
