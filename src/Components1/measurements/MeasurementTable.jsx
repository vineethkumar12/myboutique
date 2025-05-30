// src/components/measurements/MeasurementTable.jsx
const measurementData = {
  chest: [
    { step: 1, instruction: "Stand straight with arms at sides" },
    { step: 2, instruction: "Wrap tape around fullest part of chest" },
    { step: 3, instruction: "Keep tape parallel to ground" },
    { step: 4, instruction: "Record measurement in inches" },
  ],
  waist: [
    { step: 1, instruction: "Find your natural waistline" },
    { step: 2, instruction: "Wrap tape around waist" },
    { step: 3, instruction: "Keep one finger between tape and body" },
    { step: 4, instruction: "Record measurement in inches" },
  ],
  // Add data for other body parts...
};

export default function MeasurementTable({ activePart }) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-3 capitalize text-black">
        {activePart} Measurement Steps
      </h3>
      <div className="border rounded-lg overflow-hidden text-black">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left w-16">Step</th>
              <th className="px-4 py-2 text-left">Instructions</th>
            </tr>
          </thead>
          <tbody>
            {measurementData[activePart]?.map((row) => (
              <tr key={row.step} className="border-t text-black">
                <td className="px-4 py-3 font-medium">{row.step}</td>
                <td className="px-4 py-3">{row.instruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
