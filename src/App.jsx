import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home'
import About from './pages/About';
import DreamDetails from './pages/DreamDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Nav />
      {/* define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:blogId" element={<DreamDetails />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App