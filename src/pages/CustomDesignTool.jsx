import React, { useState, useEffect } from "react";
const token = import.meta.env.VITE_HUGGING_FACE_API;

const CustomDesignTool = () => {
  const [design, setDesign] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showExamples, setShowExamples] = useState(false);

  // Categorized example prompts for ladies' fashion
  const examplePrompts = {
    Blouse: [
      "A floral blouse with puffed sleeves, V-neck, and lace trim.",
      "A silk blouse with a bow tie, button-up front, and tailored fit.",
      "A casual cotton blouse with a mandarin collar and embroidery details.",
      "A sheer blouse with ruffled sleeves and a peplum hem.",
      "A high-neck blouse with long sleeves and a fitted silhouette.",
    ],
    Dress: [
      "A floral summer dress with spaghetti straps and a flowing skirt.",
      "An elegant evening gown with a mermaid silhouette and sequin embellishments.",
      "A bohemian maxi dress with bell sleeves and a wrap design.",
      "A vintage-inspired dress with a tea-length skirt and polka dots.",
      "A sleek bodycon dress with a high neckline and long sleeves.",
    ],
    Langa: [
      "A traditional langa with a flared skirt, embroidered blouse, and dupatta.",
      "A modern langa with a crop top, high-waist skirt, and mirror work.",
      "A festive langa with a silk skirt, embroidered blouse, and heavy dupatta.",
      "A casual langa with a printed skirt and short blouse.",
      "A bridal langa with a heavily embroidered skirt and blouse.",
    ],
    Top: [
      "A casual t-shirt with a graphic print, crew neck, and relaxed fit.",
      "A crop top with ruffled sleeves and a tie-front design.",
      "A halter top with a fitted bodice and open back.",
      "A sleeveless top with a high neckline and lace detailing.",
      "A peplum top with a cinched waist and flared hem.",
    ],
    Skirt: [
      "A stylish midi skirt with a high waist and floral embroidery.",
      "A pleated skirt with a metallic finish and side slit.",
      "A denim skirt with distressed details and a button-up front.",
      "A pencil skirt with a high waist and side zipper.",
      "A tiered skirt with a flowing silhouette and floral print.",
    ],
  };

  const generateDesign = async () => {
    if (!prompt.trim()) {
      alert("Please describe your design before generating.");
      return;
    }

    setIsLoading(true);
    setDesign(null);

    try {
      const response = await fetch(
        "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate design");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDesign(imageUrl);
    } catch (error) {
      console.error("Error generating design:", error);
      alert("Failed to generate design. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    if (design) {
      const link = document.createElement("a");
      link.href = design;
      link.download = "custom-design.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section className="min-h-screen  py-4 md:py-8 px-2 sm:px-4 w-full bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-black font-serif">
          Custom Design Tool for Ladies
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-lg shadow-lg">
          {/* Design Input Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-black mb-1 md:mb-2 font-serif">
                Describe Your Design
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: A floral blouse with puffed sleeves, V-neck, and lace trim."
                className="w-full px-3 py-2 text-sm sm:text-base border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-white"
                rows={4}
              />
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Be as specific as possible. Mention colors, patterns, neckline,
                sleeve style, etc.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={generateDesign}
                disabled={isLoading}
                className="flex-1 px-4 py-2 md:px-6 md:py-3 text-sm sm:text-base bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-orange-300 transition-all duration-300 font-serif flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  "Generate Design"
                )}
              </button>

              {/* Only show this button on small and medium screens */}
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="lg:hidden px-4 py-2 text-sm sm:text-base bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-all duration-300 font-serif"
              >
                {showExamples ? "Hide Examples" : "Show Examples"}
              </button>
            </div>

            {/* Example Prompts - Only show on mobile when toggled */}
            {showExamples && (
              <div className="lg:hidden mt-4 space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-black">
                  Quick Ideas:
                </h3>
                <div className="space-y-2">
                  {Object.entries(examplePrompts).map(([category, prompts]) => (
                    <div
                      key={category}
                      className="border-b border-orange-200 pb-2"
                    >
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex justify-between items-center text-left text-sm sm:text-base font-medium text-orange-600 hover:text-orange-800"
                      >
                        <span>{category}</span>
                        <span>{activeCategory === category ? "−" : "+"}</span>
                      </button>
                      {activeCategory === category && (
                        <div className="mt-2 grid grid-cols-1 gap-2 pl-2">
                          {prompts.map((prompt, index) => (
                            <div
                              key={index}
                              className="p-2 text-xs sm:text-sm bg-orange-50 rounded hover:bg-orange-100 cursor-pointer text-black"
                              onClick={() => {
                                setPrompt(prompt);
                                setActiveCategory(null);
                              }}
                            >
                              {prompt}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Design Preview Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 mt-4 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-black font-serif">
              Design Preview
            </h3>
            {design ? (
              <>
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto border border-orange-200 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={design}
                    alt="Generated Design"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 md:px-6 md:py-2 text-sm sm:text-base bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-serif"
                >
                  Download Design
                </button>
              </>
            ) : (
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-64 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-lg bg-orange-50">
                <p className="text-xs sm:text-sm text-gray-600 text-center px-2">
                  {isLoading
                    ? "Generating your design..."
                    : "Your design will appear here"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Example Prompts Section - Desktop Layout (always visible on lg+ screens) */}
        <div className="hidden lg:block mt-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-orange-100">
            <h3 className="text-xl font-semibold text-black mb-4 font-serif text-center">
              Design Inspiration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(examplePrompts).map(([category, prompts]) => (
                <div
                  key={category}
                  className="border border-orange-200 rounded-lg p-4 bg-orange-50"
                >
                  <h4 className="text-lg font-semibold text-orange-600 mb-2">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {prompts.map((prompt, index) => (
                      <div
                        key={index}
                        className="p-3 text-sm bg-white rounded hover:bg-orange-100 cursor-pointer text-black border border-orange-100"
                        onClick={() => setPrompt(prompt)}
                      >
                        {prompt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignTool;
