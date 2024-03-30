import { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import WhatisComCamp from './component/WhatisComCamp.jsx'
import Learning from './component/Learning.jsx'
import Conditions from './component/Conditions.jsx'
import Timeline from './component/Timeline.jsx'
import FAQ from './component/FAQ.jsx'

function App() {
  const [count, setCount] = useState(0)

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if(element) {
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  return (
    <main className='text-xl h-[10000px]'>
      <Navbar scrollToSection={scrollToSection}/>
      <Hero />
      <WhatisComCamp />
      <Learning />
      <Conditions />
      <Timeline />
      <FAQ />
    </main>
  )
}

export default App
