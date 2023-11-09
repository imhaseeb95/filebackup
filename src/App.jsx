import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Plans from "./pages/Plans"
import Trainers from "./pages/Trainers"
import Notfound from "./pages/Notfound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App