import React from "react";
import bgimage from "../assets/bgimageservices.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaRuler } from "react-icons/fa"; // ✅ Correct

function Services() {
  const navigate = useNavigate();

  // Services data
  const services = [
    {
      id: 1,
      title: "Casual Wear",
      description:
        "Stylish and comfortable outfits for everyday wear, tailored to your unique preferences.",
      image: img1, // Replace with your image
    },
    {
      id: 2,
      title: "Alterations",
      description:
        "Expert alterations to ensure your clothes fit perfectly and look their best.",
      image: img2, // Replace with your image
    },
    {
      id: 3,
      title: "Custom Blouses",
      description:
        "Elegant and personalized blouses designed to match your style and occasion.",
      image: img3, // Replace with your image
    },
  ];

  return (
    <div id="services">
      {/* Hero Section */}
      <header
        className="relative  h-64     flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Crafting perfection, one stitch at a time. Explore our tailored
            services designed to bring your vision to life.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                {/* Image with hover effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/* Learn More Button */}
                </div>
              </div>
            ))}
          </div>

          {/* More Services Button */}
          <button
            className="mt-10 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
            onClick={() => navigate("/myboutique/Moreservices")}
          >
            More Services
          </button>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="p-8 md:p-16 bg-orange-500 text-white text-center flex items-center justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stitch Your Perfect Outfit?
          </h2>
          <div className=" flex gap-4 h-10  justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-white text-orange-500 px-8 py-2  cursor-pointer rounded-lg hover:bg-gray-100  "
            >
              Contact Us
            </Link>
            <button
              onClick={() => navigate("/myboutique/measurement-guide")} // Navigate to the measurement guide page
              className="bg-transparent border-2 border-white text-white     w-36 md:w-auto px-2   md:px-8 md:py-3 cursor-pointer rounded-lg hover:bg-white hover:text-orange-500   flex items-center  hover:border-white justify-center gap-2"
            >
              <FaRuler className="text-lg md:text-lg" /> {/* Updated icon */}
              <span className=" text-xs  md:text-lg">
                {" "}
                See Measurement Guide
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
