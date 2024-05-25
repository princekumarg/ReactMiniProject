import React from 'react'
import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Works/Skills'
import Project from './Pages/Projects/Project'
import './single.css'
function SingleApp() {
  return (
    <div id="singleapp">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Project/>
      
    </div>
  )
}

export default SingleApp
