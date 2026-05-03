import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footor from './components/Footor'

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='m-20'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footor/>
      </div>
    </div>
  )
}

export default App
