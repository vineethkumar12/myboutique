import { motion } from "framer-motion";
import { FiScissors, FiShield } from "react-icons/fi";
import { LuRuler } from "react-icons/lu";

export default function ValueProposition() {
  const features = [
    {
      icon: <FiScissors className="w-8 h-8" />,
      title: "Custom Designs",
      description: "Create unique garments that match your personal style",
    },
    {
      icon: <LuRuler className="w-8 h-8" />,
      title: "Precision Fit",
      description: "Clothing tailored to your exact body measurements",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "Premium materials with expert craftsmanship",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm border border-orange-50 hover:border-orange-100 hover:shadow-md transition-all"
        >
          <div className="text-orange-500 mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            <span className="text-orange-600">
              {feature.title.split(" ")[0]}
            </span>{" "}
            {feature.title.split(" ").slice(1).join(" ")}
          </h3>
          <p className="text-gray-600">
            <span className="text-orange-500">
              {feature.description.split(" ")[0]}
            </span>{" "}
            {feature.description.split(" ").slice(1).join(" ")}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
