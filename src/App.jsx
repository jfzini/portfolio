import { useState } from 'react'
import HeaderPortfolio from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import ProjectsCarousel from './components/projects/ProjectsCarousel'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
      <HeaderPortfolio/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
      <Sidebar/>
    </>
  )
}

export default App
