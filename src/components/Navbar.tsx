import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/classes', label: 'Classes' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 shadow-lg' : 'bg-white/95 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-all duration-300 group-hover:rotate-6" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ZenFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link font-medium transition-colors ${isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/get-started" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 font-medium hover:-translate-y-0.5 hover:shadow-lg">
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
          <div className="md:hidden pb-4 border-t border-gray-100 animate-fadeInDown">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 transition-colors ${isActive ? 'text-emerald-700 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-started"
              className={({ isActive }) =>
                `block py-2 transition-colors ${isActive ? 'text-emerald-700 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
              }
            >
              Get Started
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
