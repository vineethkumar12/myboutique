// src/components/order/OrderStepper.jsx
export default function OrderStepper({ steps, activeStep }) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between relative">
        {/* Progress line */}
        <div className="absolute  top-4 left-0 right-0 h-1 bg-gray-200  ">
          <div
            className="h-full bg-orange-600 transition-all duration-300"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${
                  index <= activeStep
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
            >
              {index + 1}
            </div>
            <span
              className={`text-sm mt-2 ${
                index === activeStep
                  ? "font-medium text-primary"
                  : "text-gray-600"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
