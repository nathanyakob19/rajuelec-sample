import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/SiteChrome.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import { Phone } from 'lucide-react';

export default function App() {
  return <><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/projects" element={<Projects />} /><Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /><a className="floating-call" href="https://wa.me/919769049289?text=Hello%20Raju%20Electrical%20Works%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Contact Raju Electrical Works on WhatsApp"><Phone size={20} /><span>WhatsApp us</span></a></>;
}
