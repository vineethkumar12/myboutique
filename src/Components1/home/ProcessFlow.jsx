export default function ProcessFlow() {
  const steps = [
    {
      number: "1",
      title: "Design Consultation",
      description: "Share your vision with our designers",
    },
    {
      number: "2",
      title: "Precise Measurements",
      description: "We guide you through accurate measuring",
    },
    {
      number: "3",
      title: "Fabric Selection",
      description: "Choose from premium materials",
    },
    {
      number: "4",
      title: "Delivery",
      description: "Receive your custom outfit in 2-3 weeks",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our <span className="text-orange-600">Process</span>
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white p-6 rounded-lg text-center border border-orange-50 hover:border-orange-100 transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-inner">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              <span className="text-orange-600">
                {step.title.split(" ")[0]}
              </span>{" "}
              {step.title.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-gray-600 text-sm">
              <span className="text-orange-500">
                {step.description.split(" ")[0]}
              </span>{" "}
              {step.description.split(" ").slice(1).join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
