// src/components/common/Header.jsx
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiShoppingBag, FiUser } from "react-icons/fi";
import { FaCut } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

export default function Header({ toggleSidebar }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/order", label: "New Order" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 text-b  border-b-2 border-orange-100 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16 ">
          {/* Left section - Logo with animation and Mobile Menu */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 mr-2 text-gray-700 md:hidden"
            >
              <FiMenu size={20} />
            </button>
            <Link to="/" className="flex items-center ">
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
              <div className="flex flex-col ml-2">
                <span className="text-2xl font-bold text-black ">
                  Prabhakar
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tailors
                </span>
              </div>
            </Link>
          </div>

          {/* Center section - Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 ml-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right section - User actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-primary relative"
            >
              <FiShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/account"
              className="p-2 text-gray-700 hover:text-primary"
            >
              <FiUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
