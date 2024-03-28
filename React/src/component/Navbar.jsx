import React from 'react'
import { logoImage, MenuImage, MenuPath } from '../utils'
import navbar from '../data/navbar.json'

const Navbar = ({ scrollToSection }) => {
  const scrollToImage = (image) => {
    const element = document.getElementById(image)
    if(element) {
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  return (
    <header>
      <nav className='navbar flex-navbar px-5 m-3 rounded-2xl fixed z-10 text-white'>
        <a onClick={() => scrollToImage('logoImage')} className='cursor-pointer'><img className='pointer-events-none mt-2.5 overflow-clip' src={logoImage} width={100} alt="logoImage"/></a>

        <div className='max-mb:hidden'>
          {navbar.map((item, id) => (
            <a onClick={() => scrollToSection(item.section)} className='justify-start cursor-pointer p-3' key={id}><span className='textPR text-sm leading-5 font-normal hover:-navbar '>{item.title}</span></a>
          ))}
        </div>

        <div className='max-mb:hidden'>
          <a className='cursor-pointer register hover:-register'>ลงทะเบียน</a>
        </div>

        <div className='mb:hidden'>
          <button className='rounded-[5.7px] appearance-none w-[38px] h-[38px] items-center inline-flex justify-center box-border bg-[#ddeaf814] hover:bg-[#d3edf8]/[0.114]'>
            <svg xmlns={MenuImage} width={15} viewBox="0 0 15 15" fill="none">
              <path d={MenuPath} fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
