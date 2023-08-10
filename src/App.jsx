import { useState } from 'react'
import HeaderPortfolio from './header/Header'
import Hero from './hero/Hero'
import About from './about/About'
import ProjectsCarousel from './projects/ProjectsCarousel'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

function App() {

  return (
    <>
      <HeaderPortfolio/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
