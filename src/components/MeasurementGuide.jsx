import React from "react";
import { useNavigate } from "react-router-dom";

const MeasurementGuide = () => {
  const navigate = useNavigate();

  // Navigate to the measurement guide page
  const handleViewGuideClick = () => {
    navigate("/myboutique/measurement-guide"); // Replace with your actual path
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Measurement Guide
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600 mb-4">
            Follow our guide to submit accurate measurements for a perfect fit.
          </p>
          <button
            onClick={handleViewGuideClick}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            View Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeasurementGuide;
