import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar'
import About from './componentes/About'
import Ourservices from './componentes/Ourservices'
import Projects from './componentes/Projects'
import Contact from './componentes/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Aboutus from './componentes/Aboutus/Aboutus'
import Projectes from './componentes/Projectes/Projectes'
import Contactus from './componentes/contactus/Contactus'
import Skill from './componentes/Skill/Skill'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/home" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/projectes" element={<Projectes />} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/skill" element={<Skill/>} />


        </Routes>
      </BrowserRouter>

      {/* <Navbar/>
      <About/>
      <Ourservices/>
      <Projects/>
      <Contact/> */}
    </>
  )
}

export default App
