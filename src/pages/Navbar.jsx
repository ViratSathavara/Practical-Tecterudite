import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (location.pathname === '/services') {
        setIsTransparent(scrollY < window.innerHeight * 0.9);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isTransparent ? 'bg-transparent text-black shadow-md' : 'bg-white text-black shadow-md'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/Bitmaplogo.png"
            alt="Company Logo"
            className="h-14 sm:h-16"
          />
        </Link>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`lg:flex space-x-0 lg:space-x-8 gap-3 pr-4 items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none z-40 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} lg:flex-row flex-col`}>
          <li className="px-6 py-2 lg:py-0">
            <Link
              to="/services"
              className="hover:text-gray-800 transition-colors font-medium block"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="px-6 py-2 lg:py-0">
            <Link
              to="/blogs"
              className="hover:text-gray-800 transition-colors font-medium block"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li className="px-6 py-2 lg:py-0">
            <Link
              to="/services?section=about"
              className="hover:text-gray-800 transition-colors font-medium block"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="px-6 py-2 lg:py-0">
            <Link
              to="/services?section=case-studies"
              className="hover:text-gray-800 transition-colors font-medium block"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>
          </li>
          <li className="px-6 py-2 lg:py-0">
            <Link
              to="/services?section=contact"
              className="bg-[#FF6400] hover:bg-[#E55C00] px-4 py-2 rounded-full font-medium transition-colors block text-center"
              onClick={() => setMenuOpen(false)}
            >
              <span
                style={{
                  WebkitTextStroke: '1px black',
                  color: 'transparent',
                }}
              >
                CONTACT US
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
