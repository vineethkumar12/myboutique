// src/components/home/CTASection.jsx
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 bg-orange-600  text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for Your Perfect Fit?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Start your custom tailoring journey today
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/order"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition shadow-lg hover:shadow-xl"
          >
            Create Your Custom Outfit
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
