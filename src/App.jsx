import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import ServicesPage from "./pages/Servicespage";
import MeasurementGuide from "./pages/MeasurementGuide";
import GalleryPage from "./pages/GalleryPage";
import TailorDashboard from "./pages/TailorDashboard";
import VirtualTryOnPage from "./pages/VirtualTryOnPage";
import Preview3DPage from "./pages/Preview3DPage";
import AdminPanel from "./pages/AdminPanel";
import Layout from "./Components1/common/Layout";
import Contact from "./pages/Contact";
import CustomDesignTool from "./pages/CustomDesignTool";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/myboutique/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/measurements" element={<MeasurementGuide />} />
          <Route path="/ai-designer" element={<CustomDesignTool />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tailor-dashboard" element={<TailorDashboard />} />
          <Route path="/virtual-tryon" element={<VirtualTryOnPage />} />
          <Route path="/3d-preview" element={<Preview3DPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
