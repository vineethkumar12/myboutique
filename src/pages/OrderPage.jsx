// src/pages/OrderPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "../Components1/order/OrderStepper";
import GarmentSelection from "../Components1/order/GarmentSelection";
import FabricSelection from "../Components1/order/FabricSelection";
import MeasurementInput from "../Components1/order/MeasurementInput";
import DesignCustomization from "../Components1/order/DesignCustomization";
import OrderSummary from "../Components1/order/OrderSummary";

const steps = [
  "Select Garment",
  "Choose Fabric",
  "Enter Measurements",
  "Customize Design",
  "Review Order",
];

export default function OrderPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderData, setOrderData] = useState({
    garmentType: "",
    fabric: null,
    measurements: {},
    designOptions: {},
    notes: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);
  const navigate = useNavigate();

  const handleNext = (stepData) => {
    setOrderData((prev) => ({ ...prev, ...stepData }));
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
    else navigate(-1);
  };

  const handleSubmit = () => {
    console.log("Order submitted:", orderData);
    navigate("/order-confirmation");
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <GarmentSelection onNext={handleNext} initialData={orderData} />;
      case 1:
        return (
          <FabricSelection
            onNext={handleNext}
            onBack={handleBack}
            initialData={orderData}
          />
        );
      case 2:
        return (
          <MeasurementInput
            onNext={handleNext}
            onBack={handleBack}
            initialData={orderData}
          />
        );
      case 3:
        return (
          <DesignCustomization
            onNext={handleNext}
            onBack={handleBack}
            initialData={orderData}
          />
        );
      case 4:
        return (
          <OrderSummary
            order={orderData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen text-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Custom Order</h1>
        <p className="text-gray-600">Create your perfect custom outfit</p>
      </div>

      <OrderStepper steps={steps} activeStep={activeStep} />

      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        {renderStep()}
      </div>
    </div>
  );
}
