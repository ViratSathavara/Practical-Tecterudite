import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/services" 
              className="hover:text-blue-200 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/blogs" 
              className="hover:text-blue-200 transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-blue-200 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/case-studies" 
              className="hover:text-blue-200 transition-colors"
            >
              Case Studies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}