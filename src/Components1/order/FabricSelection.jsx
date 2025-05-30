// src/components/order/FabricSelection.jsx
import { useState } from "react";

const fabricOptions = [
  {
    id: "wool_001",
    name: "Premium Italian Wool",
    image: "/fabrics/wool.jpg",
    price: "₹3,500/m",
    properties: ["Breathable", "Wrinkle-resistant", "All-season"],
  },
  // Add more fabric options...
];

export default function FabricSelection({ onNext, onBack, initialData }) {
  const [selectedFabric, setSelectedFabric] = useState(
    initialData.fabric || null
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Select Fabric</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fabricOptions.map((fabric) => (
          <div
            key={fabric.id}
            className={`border rounded-lg overflow-hidden transition-all
              ${
                selectedFabric?.id === fabric.id
                  ? "ring-2 ring-primary"
                  : "hover:shadow-md"
              }`}
            onClick={() => setSelectedFabric(fabric)}
          >
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{fabric.name}</h3>
                <span className="text-primary font-semibold">
                  {fabric.price}
                </span>
              </div>
              <ul className="mt-2 text-sm text-gray-600">
                {fabric.properties.map((prop, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span> {prop}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ fabric: selectedFabric })}
          disabled={!selectedFabric}
          className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Measurements
        </button>
      </div>
    </div>
  );
}
