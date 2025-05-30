// src/pages/MeasurementGuide.jsx
import { useState } from "react";
import MeasurementTabs from "../Components1/measurements/MeasurementTabs";
import BodyVisualization from "../Components1/measurements/BodyVisualization";
import VideoTutorials from "../Components1/measurements/VideoTutorials";
import MeasurementTable from "../Components1/measurements/MeasurementTable";

export default function MeasurementGuide() {
  const [activeTab, setActiveTab] = useState("guide");
  const [activeBodyPart, setActiveBodyPart] = useState("chest");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl text-orange-600 font-bold mb-2">
          Measurement Guide
        </h1>
        <p className="text-gray-600">
          Learn how to take accurate measurements for perfect-fitting clothes
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Body Visualization */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <MeasurementTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "guide" && (
            <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
              <BodyVisualization
                activePart={activeBodyPart}
                onPartSelect={setActiveBodyPart}
              />
              <MeasurementTable activePart={activeBodyPart} />
            </div>
          )}

          {activeTab === "videos" && (
            <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
              <VideoTutorials />
            </div>
          )}

          {activeTab === "regional" && (
            <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
              <h3 className="font-semibold mb-4">
                Regional Measurement Standards
              </h3>
              <p className="text-gray-600">
                Different regions have varying measurement standards. Select
                your preference:
              </p>
              {/* Regional standards dropdown/options would go here */}
            </div>
          )}
        </div>

        {/* Right Column - Quick Reference */}
        <div className="lg:col-span-1 order-1 lg:order-2 text-black ">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
            <h3 className="font-semibold mb-4">Quick Tips</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                  ✓
                </span>
                <span>Use a soft measuring tape</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                  ✓
                </span>
                <span>Measure over thin clothing or underwear</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                  ✓
                </span>
                <span>Keep the tape snug but not tight</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                  ✓
                </span>
                <span>Stand naturally with arms at sides</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                  ✓
                </span>
                <span>Have someone help for more accuracy</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Need Help?</h4>
              <button className="w-full bg-primary text-white py-2 rounded-lg text-sm">
                Book Virtual Measurement Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
