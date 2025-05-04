import React from "react";

const ServiceModal = ({ selectedService, setSelectedService }) => {
  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-4 md:p-6 max-w-md w-full">
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
  );
};

export default ServiceModal;
