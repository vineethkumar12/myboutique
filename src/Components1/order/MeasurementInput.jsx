// src/components/order/MeasurementInput.jsx
import { useState, useEffect } from "react";

const measurementFields = [
  { id: "chest", label: "Chest (inches)", min: 30, max: 60 },
  { id: "waist", label: "Waist (inches)", min: 24, max: 50 },
  { id: "hips", label: "Hips (inches)", min: 30, max: 60 },
  // Add more measurement fields...
];

export default function MeasurementInput({ onNext, onBack, initialData }) {
  const [measurements, setMeasurements] = useState(
    initialData.measurements || {}
  );
  const [useVirtualFitting, setUseVirtualFitting] = useState(false);

  const handleChange = (id, value) => {
    setMeasurements((prev) => ({
      ...prev,
      [id]: value ? parseInt(value) : "",
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Enter Measurements</h2>

      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={useVirtualFitting}
            onChange={() => setUseVirtualFitting(!useVirtualFitting)}
            className="mr-2"
          />
          <span>Use Virtual Fitting Room instead</span>
        </label>
      </div>

      {useVirtualFitting ? (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="mb-4">Redirecting to virtual fitting room...</p>
          <button className="text-primary underline">
            Open Virtual Fitting
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {measurementFields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="number"
                min={field.min}
                max={field.max}
                value={measurements[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ measurements })}
          disabled={
            !useVirtualFitting &&
            Object.keys(measurements).length < measurementFields.length
          }
          className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Design Options
        </button>
      </div>
    </div>
  );
}
