import './App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home'
import About from './pages/About';
import AboutProject from './pages/AboutProject';
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
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/details/:blogId" element={<DreamDetails />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;
