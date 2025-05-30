import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 sm:text-5xl"
      >
        <span className="text-orange-400">Precision</span> Tailoring,{" "}
        <span className="text-orange-400">Perfect</span> Fit
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl mb-8 max-w-2xl mx-auto text-orange-100"
      >
        Custom clothing tailored to your exact measurements
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link
          to="/order"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition flex items-center justify-center"
        >
          Start Your Order <FiArrowRight className="ml-2" />
        </Link>
        <Link
          to="/gallery"
          className="border-2 border-orange-400 text-orange-100 hover:text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600/30 transition"
        >
          View Gallery
        </Link>
      </motion.div>
    </div>
  );
}
