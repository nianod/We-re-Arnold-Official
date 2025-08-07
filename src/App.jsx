import Layout from "./Components/Layout"
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
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
