import { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
