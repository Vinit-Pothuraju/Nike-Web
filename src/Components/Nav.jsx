import React from 'react'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full bg-white '>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
        <img src={headerLogo} alt="Logo"  width={130} height={29}/>
      </a>
      <ul className='width-[500px] height[29] flex-1 flex justify-center items-center gap-9 max-lg:hidden '>
       { navLinks.map((item)=>(
        <li key={item.label}>
        <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-gray  hover:text-coral-red'>
          {item.label}
          </a>
        </li>

        ))}
      </ul>
      <div className='hidden max-lg:block'>
        <img src={hamburger} alt="Hamburger"
        width={25}
        height={25} />
      </div>
    </nav>
   </header>
  )
}

export default Nav