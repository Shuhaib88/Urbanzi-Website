// components/Header.jsx
'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };
  
  const navItems = [
    { id: "home", href: "/home", label: "Home" },
    { id: "about", href: "/about", label: "About Us" },
    { 
      id: "services", // Add unique id for services
      label: "Services",
      hasDropdown: true,
      dropdownItems: [
        { href: "/webdevelopment", label: "Web Development" },
        { href: "/app_development", label: "Mobile Development" },
        { href: "/software_development", label: "Software Development" },
        { href: "/seo", label: "SEO" },
        { href: "/digital_marketing", label: "Digital Marketing" }
      ]
    },
    { id: "clients", href: "#", label: "Our Client" },
    { id: "careers", href: "/careers", label: "Careers" },
    { id: "product", href: "#", label: "Product" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contact", href: "/contact", label: "Contact Us" },
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
            <div key={item.id} className="relative group"> {/* Use item.id instead of item.href */}
              {item.hasDropdown ? (
                <>
                  <button
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className="text-white text-xs xl:text-sm uppercase tracking-wide px-3 py-2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-200 flex items-center"
                  >
                    {item.label}
                    <svg 
                      className="ml-1 w-3 h-3 transition-transform duration-200" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Desktop Dropdown */}
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
                      isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={closeAllMenus}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-white text-xs xl:text-sm uppercase tracking-wide px-3 py-2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
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
      <button
        onClick={() => {
          window.location.href = '/contact';
        }}
        className="hidden xl:block bg-white text-black px-4 py-2 xl:px-5 rounded-sm text-xs font-semibold uppercase hover:bg-gray-300 transition-colors"
      >
        Let's Talk
      </button>

      {/* Mobile Dropdown Menu - Hidden on xl screens */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-50">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <div key={item.id}> {/* Use item.id instead of item.href */}
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleServicesDropdown}
                      className="text-white text-sm uppercase tracking-wide px-6 py-3 hover:bg-gray-800 transition-colors border-b border-gray-800 w-full text-left flex items-center justify-between"
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="bg-gray-900">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={closeAllMenus}
                            className="block text-gray-300 text-sm px-8 py-2 hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAllMenus}
                    className="text-white text-sm uppercase tracking-wide px-6 py-3 hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Button in Dropdown */}
            <div className="px-6 py-4 border-t border-gray-700">
              <button 
                onClick={() => {
                  closeAllMenus();
                  window.location.href = '/contact';
                }}
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
