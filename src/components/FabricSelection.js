import React from "react";

const fabrics = ["Silk", "Cotton", "Linen", "Chiffon"];

const FabricSelection = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Fabric Selection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fabrics.map((fabric, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={`/path/to/${fabric.toLowerCase()}.jpg`} // Replace with actual fabric images
                alt={fabric}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-bold mb-2">{fabric}</h3>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricSelection;