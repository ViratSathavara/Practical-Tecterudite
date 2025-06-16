import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import { Suspense, lazy } from 'react';

const Services = lazy(() => import('./pages/Services'));
const Blogs = lazy(() => import('./pages/Blogs'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-black">
        <Navbar />

        <main className="flex-grow pt-20">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="*" element={<div className="text-center py-10">404 - Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
