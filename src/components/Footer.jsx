import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content Flexbox */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-8">
          {/* Column 1: Quick Links */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home" // ID of the home section
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about" // ID of the about section
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services" // ID of the services section
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery" // ID of the gallery section
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact" // ID of the contact section
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="text-center flex-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Column 3: Additional Information */}
          <div className="text-center md:text-right flex-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Prabhakar Tailors
            </h3>
            <p className="text-gray-300">
              Your trusted partner for custom tailoring and fashion.
            </p>
            <p className="text-gray-300 mt-2">
              &copy; 2023 Prabhakar Tailors. All rights reserved.
            </p>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm">
            Designed and developed with ❤️ by{" "}
            <span className="text-orange-500 hover:underline">
              Prabhakar Tailors
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
