// src/components/measurements/MeasurementTabs.jsx
export default function MeasurementTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "guide", label: "Measurement Guide" },
    { id: "videos", label: "Video Tutorials" },
    { id: "regional", label: "Regional Standards" },
  ];

  return (
    <div className="flex border-b ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium ${
            activeTab === tab.id
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
