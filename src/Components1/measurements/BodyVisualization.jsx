import { FiAlertCircle } from "react-icons/fi";
import img3 from "../../assets/img1.webp";
const bodyParts = {
  chest: {
    position: { x: "45%", y: "20%" },
    instructions:
      "Measure around the fullest part of your chest, under your arms",
  },
  waist: {
    position: { x: "45%", y: "40%" },
    instructions:
      "Measure around your natural waistline, keeping the tape slightly loose",
  },
  hips: {
    position: { x: "45%", y: "60%" },
    instructions: "Measure around the fullest part of your hips",
  },
  // Add more body parts...
};

export default function BodyVisualization({ activePart, onPartSelect }) {
  return (
    <div>
      <div className="relative mb-6">
        <img
          src={img3}
          alt="Human body measurement points"
          className="w-full max-w-md mx-auto"
        />

        {Object.entries(bodyParts).map(([part, data]) => (
          <button
            key={part}
            className={`absolute w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all
              ${
                activePart === part
                  ? "bg-orange-500 border-white shadow-lg text-white"
                  : "bg-white border-orange-500 text-orange-600"
              }`}
            style={{ left: data.position.x, top: data.position.y }}
            onClick={() => onPartSelect(part)}
            aria-label={`Select ${part} measurement`}
          >
            <span className="text-xs font-bold">
              {part.charAt(0).toUpperCase()}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-orange-50 p-4 rounded-lg flex items-start border border-orange-100">
        <FiAlertCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
        <p className="text-sm text-orange-800">
          {bodyParts[activePart]?.instructions ||
            "Select a body part for measurement instructions"}
        </p>
      </div>
    </div>
  );
}
