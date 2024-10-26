import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './pages/About'
import Create from './pages/Create'
import Drops from './pages/Drops'
import Learn from './pages/Learn'
import Support from './pages/Support'
import Home from './pages/Home'
import Stats from './pages/Stats'


function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drops" element={<Drops />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/create" element={<Create />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
