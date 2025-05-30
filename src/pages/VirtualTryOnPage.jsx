import { useState } from "react";
/*import ModelViewer from "../components/pages/virtual-tryon/ModelViewer";
import SizeEditor from "../components/pages/virtual-tryon/SizeEditor";*/

export default function VirtualTryOnPage() {
  const [bodyMeasurements, setBodyMeasurements] = useState({
    height: 170,
    chest: 90,
    waist: 76,
    // ...other measurements
  });

  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-2/3">
        {/*<ModelViewer measurements={bodyMeasurements} design={selectedDesign} />*/}
      </div>

      <div className="lg:w-1/3 space-y-4">
        {/*<SizeEditor
          measurements={bodyMeasurements}
          onChange={setBodyMeasurements}
        />

        <DesignSelector onSelect={setSelectedDesign} />*/}
      </div>
    </div>
  );
}
