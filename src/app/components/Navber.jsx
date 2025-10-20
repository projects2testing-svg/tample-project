'use client'
import React, { useState } from "react";
import navData from "./links.json";

const Navber = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdowns

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg text-gray-700 py-3"
          : "bg-white text-gray-700 py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10">
        <a href="/" className="flex items-center gap-2 font-semibold text-lg">
          <img
                src="https://www.maakamakhya.org/assets/images/logo.png"
                alt="Borbheti Logo"
                className="h-10 w-10"
            />
          <span className="tracking-wide">Borbheti</span>
        </a>


        <div className="hidden lg:flex items-center gap-8">
          {navData.navLinks.map((link, i) => (
            <div key={i} className="relative group">
              <a
                href={link.link}
                className={`text-sm font-medium hover:text-[var(--primary-color)] ${
                  isScrolled ? "text-gray-700" : "text-gray"
                }`}
              >
                {link.name}
              </a>

              {link.sublinks && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 min-w-[180px]">
                  {link.sublinks.map((sublink, j) => (
                    <a
                      key={j}
                      href={sublink.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {sublink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}



          <div className="ctrs ">
             <button
              className={`border px-5 py-3 rounded-full text-sm transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? "secondary-btn": "primary-btn"
              }`}
            >
              Book Now
            </button>

            <button
              className={`ml-3 px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                isScrolled ? "primary-btn" : "secondary-btn"
              }`}
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={`w-7 h-7 ${isScrolled ? "text-gray-700" : "text-gray-900"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col pt-16 text-lg font-medium transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navData.navLinks.map((link, i) => (
          <div key={i} className="w-full text-center">
            <button
              className="w-full py-2 px-5 text-gray-800 font-medium flex gap-2"
              onClick={() =>
                setOpenDropdown(openDropdown === i ? null : i)
              }
            >
              {link.name}
              {link.sublinks && (
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openDropdown === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {/* Mobile Dropdown */}
            {link.sublinks && openDropdown === i && (
              <div className="flex flex-col bg-gray-100 rounded-md mt-1">
                {link.sublinks.map((sublink, j) => (
                  <a
                    key={j}
                    href={sublink.link}
                    className="py-2 text-gray-700 hover:bg-gray-200 transition-all"
                  >
                    {sublink.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className="secondary-btn max-w-50 ml-3 mt-5">
          Book Now
        </button>

        <button className="primary-btn mt-4 ml-3 max-w-50">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navber;
