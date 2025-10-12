import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Aboutus from './componentes/Aboutus/Aboutus'
import Projectes from './componentes/Projectes/Projectes'
import Contactus from './componentes/contactus/Contactus'
import Skill from './componentes/Skill/Skill'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* yaha basename add kiya */}
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/projectes" element={<Projectes />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
