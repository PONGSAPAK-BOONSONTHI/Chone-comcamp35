import React, { useState } from 'react';
import { logoImage, MenuImage, MenuPath, MenuPathX } from '../utils'
import navbar from '../data/navbar.json'

const Navbar = ({ scrollToSection }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToImage = (image) => {
    const element = document.getElementById(image)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <header className='text-xl'>
      {isMenuOpen ? (
        <nav id='Closedmenu' className='navbar flex-navbar px-5 m-3 rounded-2xl fixed z-10 text-white hidden'>
        </nav>
      ) : (
        <nav id='Closedmenu' className='navbar flex-navbar px-5 m-3 rounded-2xl fixed z-10 text-white'>

          <a onClick={() => scrollToImage('logoImage')} className='cursor-pointer mt-2 mb-1.5'><img className='pointer-events-none overflow-clip' src={logoImage} width={100} height={100} alt="logoImage" /></a>

          <div className='max-mb:hidden'>
            {navbar.map((item, id) => (
              <a onClick={() => scrollToSection(item.section)} className='justify-start cursor-pointer p-3' key={id}><span className='textPR text-sm leading-5 font-normal hover:-navbar duration-200'>{item.title}</span></a>
            ))}
          </div>

          <div className='max-mb:hidden'>
            <a className='cursor-pointer register hover:-register duration-200'>ลงทะเบียน</a>
          </div>

          <div className='mb:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} className='rounded-[5.7px] appearance-none w-[38px] h-[38px] items-center inline-flex justify-center box-border bg-[#ddeaf814] hover:bg-[#d3edf8]/[0.114]'>
              <svg xmlns={MenuImage} width={15} viewBox="0 0 15 15" fill="none">
                <path d={MenuPath} fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

        </nav>
      )}

      {isMenuOpen && (
        <nav id='MenuOpen' className='navbar-menu flex-navbar-menu min-h-[100dvh] pt-2 px-3 pb-3 rounded-2xl fixed z-10 text-white'>

          <div className='flex flex-row items-center justify-between py-[5px] px-[20px]'>
            <a onClick={() => scrollToImage('logoImage')} className='cursor-pointer mt-2 mb-1.5'><img className='pointer-events-none overflow-clip' src={logoImage} width={100} height={100} alt="logoImage" /></a>
            <div className='mb:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)} className='rounded-[5.7px] appearance-none w-[38px] h-[38px] items-center inline-flex justify-center box-border bg-[#ddeaf814] hover:bg-[#d3edf8]/[0.114]'>
                <svg xmlns={MenuImage} width={15} viewBox="0 0 15 15" fill="none">
                  <path d={MenuPathX} fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className='flex-center flex-col py-[20px] gap-[22.8px]'>
            {navbar.map((item, id) => (
              <a onClick={() => scrollToSection(item.section)} className='cursor-pointer' key={id}><span className='textPR text-sm leading-5 font-normal hover:-navbar duration-200 box-border'>{item.title}</span></a>
            ))}
          </div>

        </nav>
      )}
    </header>
  )
}

export default Navbar;


