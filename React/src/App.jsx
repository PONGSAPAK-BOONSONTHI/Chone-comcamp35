import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhatisComCamp from './components/WhatisComCamp.jsx'
import Learning from './components/Learning.jsx'
import Conditions from './components/Conditions.jsx'
import Timeline from './components/Timeline.jsx'
import FAQ from './components/FAQ.jsx'
import SPONSOR from './components/SPONSOR.jsx'
import Contact from './components/Contact.jsx'
import By from './components/By.jsx'

function App() {
  const [count, setCount] = useState(0)

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if(element) {
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  return (
    <main className='text-xl'>
      <Navbar scrollToSection={scrollToSection}/>
      <Hero />
      <WhatisComCamp />
      <Learning />
      <Conditions />
      <Timeline />
      <FAQ />
      <SPONSOR />
      <Contact />
      <By />
    </main>
  )
}

export default App
