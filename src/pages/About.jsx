import { useEffect } from "react";
import { Link } from "react-router-dom"; // For navigation
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing the map marker icon
import { motion } from "framer-motion"; // For animations
import men from "../assets/men.webp";

function About() {
  const googleMapLink =
    "https://www.google.com/maps/place/18%C2%B000'17.9%22N+79%C2%B031'36.1%22E/@18.004973,79.5241201,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.004973!4d79.526695?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"; // Replace with actual location link

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 md:py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Prabhakar Tailors",
              "image": "${men}",
              "description": "Prabhakar Tailors has been serving the community for over 30 years, providing high-quality custom-tailored outfits.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tailor Street",
                "addressLocality": "Your City",
                "postalCode": "12345",
                "addressCountry": "Your Country"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "url": "https://www.prabhakartailors.com",
              "telephone": "+1234567890"
            }
          `}
        </script>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          About Us
        </h2>

        {/* Split Layout: Text + Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-96 h-full">
            <img
              src={men}
              alt="Prabhakar Tailors team working on custom outfits"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              Prabhakar Tailors has been serving the community for over 30
              years. Our mission is to provide high-quality, custom-tailored
              outfits that fit perfectly and reflect your unique style.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              With decades of experience, we specialize in creating custom-fit
              dresses for all occasions. From wedding outfits to casual wear, we
              ensure perfection in every stitch.
            </p>

            {/* Google Maps Link */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
              <Link
                to="/contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 hover-effect"
              >
                Visit Us Today!
              </Link>
              <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Prabhakar Tailors on Google Maps"
                className="flex items-center gap-2 px-4 py-3  bg-transparent  border-2 border-orange-500   text-gray-800 font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 hover-effect"
              >
                <FaMapMarkerAlt className="text-orange-500  " />
                My Location
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-full timeline-item"
              >
                <div className="w-1/2 pr-4 md:pr-8 text-right">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    1990
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Established Prabhakar Tailors
                  </p>
                </div>
                <div className="w-1/2 pl-4 md:pl-8">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center w-full timeline-item"
              >
                <div className="w-1/2 pr-4 md:pr-8 text-right">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
                <div className="w-1/2 pl-4 md:pl-8">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    2005
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    First Wedding Outfit Stitched
                  </p>
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center w-full timeline-item"
              >
                <div className="w-1/2 pr-4 md:pr-8 text-right">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    2020
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Expanded to Online Services
                  </p>
                </div>
                <div className="w-1/2 pl-4 md:pl-8">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
