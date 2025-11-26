import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // We keep 'href' for external or hash links, and 'to' for internal router links
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Relationships', to: '#' },
    { name: 'How it Works', to: '/how-it-works' },
    { name: 'Pricing', to: '#' },
    { name: 'FAQ', to: '#' },
    { name: 'About Us', to: '/about-us' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-cyan-400 text-white text-xs py-1 text-center font-medium">
        AlignSynch 2 coming June 2025... Sign up for our launch announcement: 
        <button className="ml-2 bg-green-500 hover:bg-green-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition-colors">Insider Signup ⚡</button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-md flex items-center justify-center text-white font-bold italic text-lg shadow-sm">
                AS
             </div>
             <span className="font-bold text-xl tracking-tight text-slate-800">AlignSynch</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              link.to !== '#' ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-slate-600 hover:text-cyan-600 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.to}
                  className="text-slate-600 hover:text-cyan-600 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 text-sm font-medium">
              Sign in
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.to !== '#' ? (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                    key={link.name}
                    href={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50"
                >
                    {link.name}
                </a>
              )
            ))}
            <div className="pt-4 flex flex-col space-y-2 px-3">
                <button className="w-full text-left text-slate-600 font-medium py-2">Sign in</button>
                <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};