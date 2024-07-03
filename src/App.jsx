import { Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./Views/Footer/Footer"
import Landing from "./Views/Landing/Landing"
import Catalougue from "./Views/Catalogue/Catalogue"
import Detail from "./Views/Detail/Detail"
import About from "./Views/About/About"
import Contact from "./Views/Contact/Contact"
import NavBar from "./Views/NavBar/NavBar"


function App() {


  return (
    <>
     
     <NavBar />
   
    <Routes>
      <Route path="/"            element={ <Landing />} />
      <Route path="/service"     element={ <Catalougue />} />
      <Route path="/detail"      element={ <Detail />} />
      <Route path="/about"       element={ <About />} />
      <Route  path="/contact"    element={ <Contact />} />
      
    </Routes>

    <Footer />
      
    </>
  )
}

export default App;