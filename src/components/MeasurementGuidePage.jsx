import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { GiClothes, GiDress, GiSkirt, GiTankTop } from "react-icons/gi"; // Example icons from React Icons

const MeasurementGuidePage = () => {
  const [activeSection, setActiveSection] = useState("blouse");

  // Data for navigation links and sections
  const measurementData = [
    {
      id: "blouse",
      title: "Blouse Measurements",
      icon: <GiClothes className="inline-block mr-2" />, // Icon for Blouse
      instructions: [
        "Bust: Measure around the fullest part of your bust.",
        "Waist: Measure around the narrowest part of your waist.",
        "Shoulder: Measure from one shoulder edge to the other.",
        "Sleeve Length: Measure from the shoulder to the desired sleeve end.",
      ],
    },
    {
      id: "dress",
      title: "Dress Measurements",
      icon: <GiDress className="inline-block mr-2" />, // Icon for Dress
      instructions: [
        "Bust: Measure around the fullest part of your bust.",
        "Waist: Measure around the narrowest part of your waist.",
        "Hips: Measure around the fullest part of your hips.",
        "Length: Measure from the shoulder to the desired dress length.",
      ],
    },
    {
      id: "langa",
      title: "Langa Measurements",
      icon: <GiSkirt className="inline-block mr-2" />, // Icon for Langa
      instructions: [
        "Waist: Measure around the narrowest part of your waist.",
        "Hips: Measure around the fullest part of your hips.",
        "Length: Measure from the waist to the desired langa length.",
      ],
    },
    {
      id: "top",
      title: "Top Measurements",
      icon: <GiTankTop className="inline-block mr-2" />, // Icon for Top
      instructions: [
        "Bust: Measure around the fullest part of your bust.",
        "Waist: Measure around the narrowest part of your waist.",
        "Shoulder: Measure from one shoulder edge to the other.",
        "Length: Measure from the shoulder to the desired top length.",
      ],
    },
    {
      id: "skirt",
      title: "Skirt Measurements",
      icon: <GiSkirt className="inline-block mr-2" />,
      instructions: [
        "Waist: Measure around the narrowest part of your waist.",
        "Hips: Measure around the fullest part of your hips.",
        "Length: Measure from the waist to the desired skirt length.",
      ],
    },
  ];

  // Track active section on scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 md:py-16 bg-white w-screen text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Measurement Guide
        </h1>

        {/* Navigation Links for Each Measurement Type */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {measurementData.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className={`px-4 py-2 flex items-center ${"bg-orange-500"} text-white rounded-lg hover:bg-orange-600 cursor-pointer`}
            >
              {item.icon} {/* Render the icon */}
              {item.title.split(" ")[0]}{" "}
              {/* Display the first word (e.g., "Blouse") */}
            </Link>
          ))}
        </div>

        {/* Measurement Sections */}
        <div className="space-y-8">
          {measurementData.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                {item.icon} {/* Render the icon */}
                <span className="ml-2">{item.title}</span>
              </h2>
              <ul className="list-disc list-inside">
                {item.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeasurementGuidePage;
