import React from 'react'
import { logoImage } from '../utils'
import navbar from '../data/navbar.json'

const Navbar = () => {
  return (
    <header>
      <nav className='navbar flex-navbar px-5 m-3 rounded-2xl fixed z-10 text-white'>
        <a className='cursor-pointer'><img className='pointer-events-none mt-2.5 overflow-clip' src={logoImage} width={100} alt="logoImage"/></a>

        <div>
          {navbar.map((navbar,id) => (
            <a className='justify-start cursor-pointer p-3' key={id}><span className='textPR text-sm leading-5 font-normal hover:-navbar'>{navbar.title}</span></a>
          ))}
        </div>

        <div>
          <a className='cursor-pointer register hover:-register'>ลงทะเบียน</a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar