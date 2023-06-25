import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePages"
import { Navbar } from "./components/navigation/Navbar";
import Gallery from "./pages/GalleryPages";
import Jadwal from "./pages/Jadwal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/jadwal" element={<Jadwal/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
