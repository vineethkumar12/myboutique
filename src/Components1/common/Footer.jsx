// src/components/common/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-orange-500">TailorPro</h3>
            <p className="text-gray-400">
              Crafting perfect fits with premium fabrics since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/order"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Start New Order
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/fabrics"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Fabric Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/virtual-tryon"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Virtual Fitting
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#suits"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Bespoke Suits
                </Link>
              </li>
              <li>
                <Link
                  to="/services#dresses"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Bridal Lehengas
                </Link>
              </li>
              <li>
                <Link
                  to="/services#shirts"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Custom Shirts
                </Link>
              </li>
              <li>
                <Link
                  to="/services#alterations"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Alterations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Contact Us
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <FiMapPin className="flex-shrink-0 mt-1 mr-3 text-orange-500" />
                <span className="text-gray-400">
                  sapthagiri colony, Hanamakonda District
                </span>
              </div>
              <div className="flex items-center">
                <FiMail className="flex-shrink-0 mr-3 text-orange-500" />
                <a
                  href="mailto:hello@tailorpro.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  adepuprabhakar@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone className="flex-shrink-0 mr-3 text-orange-500" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  +91 9704455879
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-orange-500/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TailorPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
