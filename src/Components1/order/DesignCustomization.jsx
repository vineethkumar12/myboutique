// src/components/order/DesignCustomization.jsx
import { useState } from "react";

const designOptions = {
  collar: [
    { id: "classic", name: "Classic Collar", image: "/design/collar1.jpg" },
    { id: "mandarin", name: "Mandarin Collar", image: "/design/collar2.jpg" },
  ],
  cuffs: [
    { id: "standard", name: "Standard Cuffs", image: "/design/cuff1.jpg" },
    { id: "french", name: "French Cuffs", image: "/design/cuff2.jpg" },
  ],
  // Add more design options...
};

export default function DesignCustomization({ onNext, onBack, initialData }) {
  const [designChoices, setDesignChoices] = useState(
    initialData.designOptions || {}
  );
  const [notes, setNotes] = useState(initialData.notes || "");

  const handleSelect = (category, optionId) => {
    setDesignChoices((prev) => ({
      ...prev,
      [category]: optionId,
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Customize Design</h2>

      {Object.entries(designOptions).map(([category, options]) => (
        <div key={category} className="mb-8">
          <h3 className="capitalize font-medium mb-3">{category} Options</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.map((option) => (
              <div
                key={option.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all
                  ${
                    designChoices[category] === option.id
                      ? "ring-2 ring-primary"
                      : "hover:shadow-md"
                  }`}
                onClick={() => handleSelect(category, option.id)}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-24 object-contain mb-2"
                />
                <p className="text-sm text-center">{option.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
          placeholder="Any special instructions for our tailors..."
        />
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="border border-gray-300 text-white hover:text-black px-6 py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ designOptions: designChoices, notes })}
          className="bg-primary text-white px-6 py-2 rounded-lg"
        >
          Review Order
        </button>
      </div>
    </div>
  );
}
