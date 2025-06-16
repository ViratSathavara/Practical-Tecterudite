import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#e7f1f2] text-black border border-gray-300 px-6 py-10">
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-start gap-10 mb-10">
        <div className=" space-y-4">
          <p className="text-lg font-semibold max-w-96">
            Tagline will go here. Lorem ipsum d oler sit amet...
          </p>
          <p className="text-[#00D5F8] font-semibold">user@email.com</p>
        </div>

        <div className="hidden md:block w-px bg-gray-400 h-24 mx-4"></div>

        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-gray-600">
              101 Office No,<br />
              Road name,<br />
              India
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contacts</h4>
            <p className="text-gray-600">user@email.com</p>
            <p className="text-gray-600">(276) 341-7690</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm">
        <img src="/src/assets/Bitmaplogo.png" alt="Logo" className="h160 mb-4 md:mb-0" />

        <div className="flex gap-6 mb-4 md:mb-0">
          <ul className="flex space-x-8 gap-3 pr-4 items-center">
          <li>
            <Link
              to="/services?section=about"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/blogs" 
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              to="/services?section=contact" 
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/services?section=services" 
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
          </li>
        </ul>
        </div>

        <p className="text-gray-600">© 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
