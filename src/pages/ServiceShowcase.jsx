import React, { useState } from "react";
import { FaTshirt, FaRuler, FaFemale } from "react-icons/fa";

const ServiceShowcase = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Define the services data
  const services = [
    {
      id: 1,
      icon: <FaTshirt className="text-4xl text-orange-500 mx-auto mb-4" />,
      title: "Bridal Wear",
      description: "Exquisite bridal outfits tailored to perfection.",
      details: "More details about Bridal Wear...",
    },
    {
      id: 2,
      icon: <FaRuler className="text-4xl text-orange-500 mx-auto mb-4" />,
      title: "Alterations",
      description: "Perfect fit adjustments for your existing outfits.",
      details: "More details about Alterations...",
    },
    {
      id: 3,
      icon: <FaFemale className="text-4xl text-orange-500 mx-auto mb-4" />,
      title: "Custom Blouses",
      description: "Elegant and personalized blouses for every occasion.",
      details: "More details about Custom Blouses...",
    },
  ];

  // Handle Explore button click
  const handleExploreClick = (service) => {
    setSelectedService(service); // Set the selected service
  };

  // Close the modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Service Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => handleExploreClick(service)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{selectedService.title}</h3>
            <p className="text-gray-600 mb-4">{selectedService.details}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceShowcase;
