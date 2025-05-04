import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon, FaCut } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ setdark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { id: 1, to: "home", text: "Home" },
    { id: 2, to: "about", text: "About" },
    { id: 3, to: "services", text: "Services" },
    { id: 4, to: "gallery", text: "Gallery" },
    { id: 5, to: "contact", text: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setdark(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    setdark(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isSticky
          ? "bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-90"
          : "bg-transparent"
      } transition-all duration-300 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side: Logo and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100vw", y: 0, rotate: 0 }}
              animate={{ x: 0, y: 0, rotate: 360 }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.5,
              }}
            >
              <FaCut className="text-3xl text-orange-500" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Prabhakar
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Tailors
              </span>
            </div>
          </ScrollLink>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Right Side: Hamburger Menu (Mobile) and Navigation Links (Desktop) */}
        <div className="flex items-center space-x-6">
          <div
            className="block md:hidden text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full -left-6  w-full  dark:bg-gray-900 py-3 shadow-lg"
              >
                {navLinks.map((link) => (
                  <li key={link.id} className="my-2">
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className={`block px-4 py-2 ${
                        isDarkMode ? "text-white" : "text-orange-500"
                      } hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-orange-500 rounded transition-colors cursor-pointer`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      activeClass="active"
                      spy={true}
                    >
                      {link.text}
                    </ScrollLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <ul className="hidden    md:flex md:items-center  md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`block px-4 py-2 ${
                    isDarkMode ? "text-white" : "text-orange-500"
                  } hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-orange-500 rounded transition-colors cursor-pointer`}
                  activeClass="active"
                  spy={true}
                >
                  {link.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
