import React, { useEffect, useState } from "react";
import { FaTshirt, FaRuler, FaFemale, FaShoppingBag } from "react-icons/fa";
import bgimage from "../assets/bgimageservices.webp";
import casualTop1 from "../assets/img2.webp";
import casualTop2 from "../assets/img1.webp";
import casualBottom1 from "../assets/img1.webp";
import casualBottom2 from "../assets/img1.webp";
import alterationDress1 from "../assets/img1.webp";
import alterationDress2 from "../assets/img1.webp";
import alterationSuit1 from "../assets/img1.webp";
import alterationSuit2 from "../assets/img1.webp";
import blouse1 from "../assets/img1.webp";
import blouse2 from "../assets/img2.webp";
import accessory1 from "../assets/img1.webp";
import accessory2 from "../assets/img2.webp";
import { useLocation } from "react-router-dom";
import ServiceShowcase from "./ServiceShowcase";
import MeasurementGuide from "./MeasurementGuide";

function Moreservices() {
  const { pathname } = useLocation();

  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");
  const [design, setDesign] = useState(null);

  console.log(selectedService);
  // Define filter categories and subcategories
  const filters = [
    { id: "all", label: "All" },
    {
      id: "casual",
      label: "Casual Wear",
      subcategories: [
        { id: "tops", label: "Tops" },
        { id: "bottoms", label: "Bottoms" },
      ],
    },
    {
      id: "alterations",
      label: "Alterations",
      subcategories: [
        { id: "dresses", label: "Dresses" },
        { id: "suits", label: "Suits" },
      ],
    },
    { id: "blouses", label: "Custom Blouses" },
    { id: "accessories", label: "Accessories" },
  ];

  // Define services with categories, subcategories, and images
  const services = [
    {
      id: 1,
      title: "Casual Top - Design 1",
      description:
        "Stylish and comfortable tops for everyday wear, tailored to your unique preferences.",
      image: casualTop1,
      icon: <FaTshirt className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,200",
      category: "casual",
      subcategory: "tops",
    },
    {
      id: 2,
      title: "Casual Top - Design 2",
      description:
        "Perfect for casual outings, these tops are designed for comfort and style.",
      image: casualTop2,
      icon: <FaTshirt className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,500",
      category: "casual",
      subcategory: "tops",
    },
    {
      id: 3,
      title: "Casual Bottom - Design 1",
      description:
        "Comfortable and trendy bottoms to complete your casual look.",
      image: casualBottom1,
      icon: <FaTshirt className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,800",
      category: "casual",
      subcategory: "bottoms",
    },
    {
      id: 4,
      title: "Casual Bottom - Design 2",
      description: "Tailored bottoms for a perfect fit and stylish appearance.",
      image: casualBottom2,
      icon: <FaTshirt className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹2,000",
      category: "casual",
      subcategory: "bottoms",
    },
    {
      id: 5,
      title: "Alteration - Dress 1",
      description:
        "Expert alterations to ensure your dresses fit perfectly and look their best.",
      image: alterationDress1,
      icon: <FaRuler className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹500",
      category: "alterations",
      subcategory: "dresses",
    },
    {
      id: 6,
      title: "Alteration - Dress 2",
      description:
        "Tailored alterations for dresses to give you a flawless look.",
      image: alterationDress2,
      icon: <FaRuler className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹600",
      category: "alterations",
      subcategory: "dresses",
    },
    {
      id: 7,
      title: "Alteration - Suit 1",
      description:
        "Expert alterations for suits to ensure a sharp and polished look.",
      image: alterationSuit1,
      icon: <FaRuler className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹800",
      category: "alterations",
      subcategory: "suits",
    },
    {
      id: 8,
      title: "Alteration - Suit 2",
      description:
        "Tailored suit alterations for a perfect fit and professional appearance.",
      image: alterationSuit2,
      icon: <FaRuler className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,000",
      category: "alterations",
      subcategory: "suits",
    },
    {
      id: 9,
      title: "Custom Blouse - Design 1",
      description:
        "Elegant and personalized blouses designed to match your style and occasion.",
      image: blouse1,
      icon: <FaFemale className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹2,000",
      category: "blouses",
    },
    {
      id: 10,
      title: "Custom Blouse - Design 2",
      description:
        "Unique blouse designs crafted to perfection for a flawless fit.",
      image: blouse2,
      icon: <FaFemale className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹2,500",
      category: "blouses",
    },
    {
      id: 11,
      title: "Accessory - Bag 1",
      description:
        "Custom-made bags to complement your outfits and elevate your style.",
      image: accessory1,
      icon: <FaShoppingBag className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,000",
      category: "accessories",
    },
    {
      id: 12,
      title: "Accessory - Bag 2",
      description:
        "Handcrafted bags designed to match your personality and wardrobe.",
      image: accessory2,
      icon: <FaShoppingBag className="text-4xl text-orange-500 mb-4" />,
      price: "Starting at ₹1,200",
      category: "accessories",
    },
  ];
  // Filter services based on selected category and subcategory
  const filteredServices =
    filter === "all"
      ? services
      : subFilter === "all"
      ? services.filter((service) => service.category === filter)
      : services.filter(
          (service) =>
            service.category === filter && service.subcategory === subFilter
        );

  // Get the current category's subcategories
  const currentCategory = filters.find((item) => item.id === filter);
  const subcategories = currentCategory?.subcategories || [];

  // Handle design upload
  const handleDesignUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDesign(URL.createObjectURL(file));
    }
  };

  return (
    <div id="services" className="">
      {/* Hero Section */}
      <header
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto">
            Crafting perfection, one stitch at a time. Explore our tailored
            services designed to bring your vision to life.
          </p>
        </div>
      </header>

      {/* Service Showcase Section */}
      <ServiceShowcase />

      {/* Services Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
          {/* Main Category Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => {
                  setFilter(filterItem.id);
                  setSubFilter("all"); // Reset subfilter when main category changes
                }}
                className={`px-3 py-2 text-sm md:text-base rounded-lg ${
                  filter === filterItem.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </div>

          {/* Subcategory Buttons */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
              <button
                onClick={() => setSubFilter("all")}
                className={`px-3 py-2 text-sm md:text-base rounded-lg ${
                  subFilter === "all"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                All
              </button>
              {subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSubFilter(sub.id)}
                  className={`px-3 py-2 text-sm md:text-base rounded-lg ${
                    subFilter === sub.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* Filtered Services */}
          <div className="flex flex-wrap justify-center w-full">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {service.description}
                    </p>
                    <p className="text-orange-500 font-semibold mb-2">
                      {service.price}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedService(service);
                      }}
                      className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Tool */}

      {/* Fabric Selection */}

      {/* Measurement Guide */}

      {/* Service Details Modal */}

      {selectedService && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white   rounded-lg p-4 md:p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {selectedService.description}
            </p>
            <p className="text-orange-500 font-semibold mb-2">
              {selectedService.price}
            </p>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moreservices;
