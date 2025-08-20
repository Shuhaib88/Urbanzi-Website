// components/Header.jsx
'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Our Client" },
    { href: "/careers", label: "Careers" },
    { href: "/product", label: "Product" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];
  
  return (
    <header className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between max-w-[1500px] w-full mx-auto relative">
      {/* Left - Logo */}
      <div className="text-white flex flex-col leading-none text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] tracking-wide">
        <span>URBANZI</span>
        <span>SOLUTIONS</span>
      </div>

      {/* Desktop Navigation - Only visible on xl screens */}
      <nav className="hidden xl:flex flex-1 justify-center">
        <div className="flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-xs xl:text-sm uppercase tracking-wide px-3 py-2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button - Visible on sm, md, lg but hidden on xl */}
      <button
        onClick={toggleMobileMenu}
        className="block sm:block md:block lg:block xl:hidden text-white p-2 hover:bg-gray-800 rounded transition-colors"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Button - Only visible on xl screens */}
      <button className="hidden xl:block bg-white text-black px-4 py-2 xl:px-5 rounded-sm text-xs font-semibold uppercase hover:bg-gray-300 transition-colors">
        Let's Talk
      </button>

      {/* Mobile Dropdown Menu - Hidden on xl screens */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-50">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-sm uppercase tracking-wide px-6 py-3 hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Button in Dropdown */}
            <div className="px-6 py-4 border-t border-gray-700">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-white text-black px-4 py-3 rounded-sm text-xs font-semibold uppercase hover:bg-gray-300 transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}