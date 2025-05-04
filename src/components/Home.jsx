import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // For navigation
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons
import Navbar from "../components/Navbar";

import bgimage from "../assets/bgimage.webp";
import shop from "../assets/shop.webp";
import bgimage1 from "../assets/bgimageservices.webp";

function Home() {
  const [dark, setdark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [shop, bgimage, bgimage1];

  // Handle scroll event for background zoom effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images]); // Added images to dependency array

  // Smooth scroll to introduction section
  const scrollToSection = () => {
    document
      .getElementById("introduction")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className={dark ? "dark" : "light"}>
      {/* Navbar */}
      <Navbar setdark={setdark} dark={dark} />

      {/* Hero Section with Background Zoom Effect */}
      <header
        className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-200"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: `${100 + scrollY * 0.05}%`, // Zoom effect
        }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            dark ? "bg-black" : "bg-gray-800"
          } bg-opacity-55`}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Prabhakar Tailors
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Style, Our Stitch with Perfect Fit
          </p>

          {/* Link to More Services */}
          <Link
            to="/myboutique/Moreservices"
            className={`${
              dark ? "bg-orange-600" : "bg-orange-500"
            } text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 mr-4`}
          >
            Explore Our Services
          </Link>

          {/* Scroll Indicator */}
          <div
            className="mt-12 animate-bounce cursor-pointer"
            onClick={scrollToSection}
            aria-label="Scroll to introduction section"
          >
            <span className="block text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 mx-auto"></div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section
        id="introduction"
        className="flex items-center justify-center flex-col md:flex-row p-6 md:p-16 bg-gray-50"
      >
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
            Welcome to Prabhakar Tailors
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With decades of experience, we specialize in creating custom-fit
            dresses for all occasions. From wedding outfits to casual wear, we
            ensure perfection in every stitch.
          </p>
        </div>

        {/* Introduction Image */}
        <div className="w-full md:w-96 flex justify-center">
          <img
            src={shop}
            alt="Prabhakar Tailors shop interior"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full max-w-md"
            loading="lazy"
          />
        </div>
      </section>

      {/* Custom Design Tool Section */}
      <section className=" py-8 bg-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Design Your Dream Blouse – Powered by AI!
          </h2>
          <p className="text-lg  mb-8">
            Create a unique blouse tailored to your style with our AI-powered
            Custom Design Tool. Describe your design, and let our AI bring it to
            life. Click “Start Designing” to begin!
          </p>

          {/* Button to Navigate to Custom Design Tool */}
          <Link
            to="/myboutique/custom-design-tool"
            className={` animated-bg
            } text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block`}
          >
            Start Designing
          </Link>
        </div>
      </section>

      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/9704455879?text=Hello%20Prabhakar%20Tailors."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}

export default Home;
