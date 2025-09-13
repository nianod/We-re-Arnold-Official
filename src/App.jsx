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
import Pricing from "./services/pricing"
import { ThemeProvider } from "./Components/Theme"
 
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      twice: true,  
    })
  }, [])

  return (
    <ThemeProvider>
      <Router>
         
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modal" element={<SideModal />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/bots" element={<HerokuBots />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/prices" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
