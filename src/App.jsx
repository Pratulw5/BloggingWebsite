import { useState } from 'react'
import './index.css'
import Navbar from './Navbar'
import CoverPage from './CoverPage'
import Articles from './Articles'
import Timeline from './Timeline'
import Contact from './Contact'
function App() {


  return (
    <div><Navbar/>
    <CoverPage/>
    <Articles/>
    <Timeline />
    <Contact/></div>
  )
}

export default App
