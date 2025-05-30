import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import HeroSection from "../Components1/home/HeroSection";
import ValueProposition from "../Components1/home/ValueProposition";
import FabricShowcase from "../Components1/home/FabricShowcase";
import ProcessFlow from "../Components1/home/ProcessFlow";
import TestimonialSlider from "../Components1/home/TestimonialSlider";
import CTASection from "../Components1/home/CTASection";

import bgimage from "../assets/bgimage.webp";
import shop from "../assets/shop.webp";
import bgimage1 from "../assets/bgimageservices.webp";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const images = [shop, bgimage, bgimage1];

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Banner/Slider Section */}
        <header
          className="relative h-96 flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            transition: "background-image 1s ease-in-out",
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Banner Content */}
          <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-orange-400">Prabhakar</span> Tailors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 text-orange-200"
            >
              Your Style, Our Stitch with Perfect Fit
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-all inline-flex items-center justify-center text-sm sm:text-base"
              >
                Explore Services <FiArrowRight className="ml-2" />
              </Link>
              <button
                onClick={() => scrollToSection("value-proposition")}
                className="bg-white/10 border border-orange-300 text-orange-200 px-5 py-2 rounded-md hover:bg-orange-600/30 transition-all text-sm sm:text-base"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </header>

        {/* Introduction Section */}
        <section
          id="introduction"
          className="py-12 md:py-16 bg-white px-4 sm:px-6"
        >
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2 order-2 md:order-1"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                Welcome to{" "}
                <span className="text-orange-600">Prabhakar Tailors</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With{" "}
                <span className="text-orange-600 font-medium">
                  decades of experience
                </span>
                , we specialize in creating custom-fit dresses for all
                occasions. From wedding outfits to casual wear, we ensure{" "}
                <span className="text-orange-600 font-medium">
                  perfection in every stitch
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-all text-sm sm:text-base"
                >
                  Our Story
                </Link>
                <Link
                  to="/contact"
                  className="border border-orange-600 text-orange-600 px-5 py-2 rounded-md hover:bg-orange-50 transition-all text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
              <img
                src={shop}
                alt="Tailor shop interior"
                className="rounded-lg shadow-md w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300 border-2 border-orange-100"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section
          id="value-proposition"
          className="py-12 md:py-16 bg-gray-50 px-4 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <ValueProposition />
          </div>
        </section>

        {/* Fabric Showcase */}
        <section className="py-12 md:py-16 bg-white px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800"
              >
                Premium{" "}
                <span className="text-orange-600">Fabric Collection</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Handpicked materials from the{" "}
                <span className="text-orange-600">finest mills</span> around the
                world
              </motion.p>
            </div>
            <FabricShowcase />
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-12 md:py-16 bg-gray-50 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <ProcessFlow />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-white px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <TestimonialSlider />
          </div>
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9704455879?text=Hello%20Prabhakar%20Tailors."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </div>
  );
}
