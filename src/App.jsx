import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Projects from './Projects';
import ArtCollections from './ArtCollections';
import WallArts from './WallArts';
import CeilingDesign from './CeilingDesign';
import StairDesign from './StairDesign';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artcollections" element={<ArtCollections />} />
        <Route path="/wall-arts" element={<WallArts />} />
        <Route path="/ceiling-design" element={<CeilingDesign />} />
        <Route path="/stair-design" element={<StairDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
