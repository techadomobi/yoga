import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ZenFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/classes"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Classes
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link to="/get-started" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/classes"
              className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Classes
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/get-started"
              className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
