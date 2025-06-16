import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import CaseStudies from './pages/CaseStudies';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;