import HerokuBots from "./Components/HerokuBots"
import Layout from "./Components/Layout"
import OurWork from "./Components/OurWork"
import Services from "./Components/Services"
import SideModal from "./Components/SideModal"
import Contact from "./Layouts/Contact"
import Home from "./Layouts/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
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
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
