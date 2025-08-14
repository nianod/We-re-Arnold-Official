import HerokuBots from "./Components/HerokuBots"
import "aos/dist/aos.css"
import AOS from "aos"
import Layout from "./Components/Layout"
import OurWork from "./Components/OurWork"
import Services from "./Components/Services"
import SideModal from "./Components/SideModal"
import Contact from "./Layouts/Contact"
import Home from "./Layouts/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import PortFolio from "./Components/PortFolio"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      twice: true,
    })
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>} >
            <Route path="/" element={<Home />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="modal" element={<SideModal />}/>
            <Route path="services" element={<Services />}/>
            <Route path="/work" element={<OurWork />} />
            <Route path="/bots" element={<HerokuBots />} />
            <Route path="/portfolio" element={<PortFolio />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
