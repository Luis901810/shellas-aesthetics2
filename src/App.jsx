import { Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./Views/Footer/Footer"
import Landing from "./Views/Landing/Landing"
import Catalougue from "./Views/Catalogue/Catalogue"
import SearchBar from "./Components/SearchBar/SearchBar"

function App() {


  return (
    <>

      <SearchBar />
    <Routes>
      <Route path="/"            element={ <Landing />} />
      <Route path="/catalogue"   element={ <Catalougue />} />
    </Routes>

    <Footer />
      
    </>
  )
}

export default App
