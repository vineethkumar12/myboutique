import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import CustomDesignTool from "./components/CustomDesignTool";
import Moreservices from "./components/Moreservices";
import MeasurementGuidePage from "./components/MeasurementGuidePage";

// Layout Component to encapsulate common structure

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route for the main page with Layout */}
        <Route
          path="/myboutique"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Route for More Services */}
        <Route path="/myboutique/Moreservices" element={<Moreservices />} />

        {/* Route for Measurement Guide */}
        <Route
          path="/myboutique/measurement-guide"
          element={<MeasurementGuidePage />}
        />

        {/* Route for Custom Design Tool */}
        <Route
          path="/myboutique/custom-design-tool"
          element={<CustomDesignTool />}
        />
      </Routes>
    </div>
  );
}

export default App;
