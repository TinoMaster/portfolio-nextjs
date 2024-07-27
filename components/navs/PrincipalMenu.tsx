import React from 'react'
import { Links } from './Links'
import { principalLinks } from '@/data/common'
import { MobileMenu } from './MobileMenu'

export const PrincipalMenu = () => {
  return (
    <header className="flex h-[70px] justify-between items-center w-full px-3 lg:px-10 py-3 lg:py-5 absolute z-50 ">
      <header className="flex items-center gap-1">
        {/* <Logo /> */}
        <h1 className="text-2xl font-inter">TinoMaster</h1>
      </header>
      <nav className="flex gap-4 lg:gap-10 text-sm">
        <Links links={principalLinks} />
        <MobileMenu links={principalLinks} />
      </nav>
    </header>
  )
}
