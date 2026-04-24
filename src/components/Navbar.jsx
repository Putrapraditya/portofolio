import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#work' },
    { name: 'Work', href: '#built' },
    { name: 'Contact', href: '#contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 w-full flex justify-center transition duration-300 ease-linear z-[99] bg-bgLight bg-opacity-70 backdrop-blur-sm border-b-[0.2px] border-textLight border-opacity-20">
      <div className="container flex justify-between items-center px-3 py-2">
        <div className="px-4 py-3 group relative">
          <Link to="/" className="logo relative z-10">
            <img src="/img/icon.png" alt="Logo" className="w-[45px] lg:w-[55px]" />
          </Link>
          <div className="absolute -inset-1 border border-primary/40 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </div>

        <button 
          className={`hamburger px-4 py-3 lg:hidden ${isOpen ? 'hamburger-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out bg-textLight"></span>
          <span className="hamburger-line transition duration-300 ease-in-out bg-textLight"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out bg-textLight"></span>
        </button>

        <nav className={`${isOpen ? 'block' : 'hidden'} absolute top-full right-4 px-4 py-4 min-w-[250px] lg:static lg:block lg:border-0 bg-bgLight lg:bg-transparent lg:shadow-none`}>
          <ul className="lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="text-textLight text-xs font-mono uppercase tracking-[0.2em] mt-3 hover:text-redval transition duration-300 ease-linear lg:mt-0 group flex items-center gap-1">
                <span className="text-redval/0 group-hover:text-redval transition-colors">//</span>
                {isHome ? (
                  <a href={item.href}>{item.name}</a>
                ) : (
                  <Link to={`/${item.href}`}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
