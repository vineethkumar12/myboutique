// src/components/order/GarmentSelection.jsx
import { useState } from "react";

const garmentTypes = [
  {
    id: "mens_suit",
    name: "Men's Suit",
    image: "/garments/suit.jpg",
    description: "Custom tailored business or formal suit",
  },
  {
    id: "womens_dress",
    name: "Women's Dress",
    image: "/garments/dress.jpg",
    description: "Elegant custom-fit dresses",
  },
  // Add more garment types...
];

export default function GarmentSelection({ onNext, initialData }) {
  const [selectedGarment, setSelectedGarment] = useState(
    initialData.garmentType || ""
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Select Garment Type</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {garmentTypes.map((garment) => (
          <div
            key={garment.id}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all
              ${
                selectedGarment === garment.id
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            onClick={() => setSelectedGarment(garment.id)}
          >
            <img
              src={garment.image}
              alt={garment.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-medium">{garment.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{garment.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => onNext({ garmentType: selectedGarment })}
          disabled={!selectedGarment}
          className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Choose Fabric
        </button>
      </div>
    </div>
  );
}
