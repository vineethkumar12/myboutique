import React, { useState } from "react";
import bgimage from "../assets/bgimageservices.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const galleryImages = [
  { id: 1, src: img1, alt: "Wedding Dress", category: "wedding" },
  { id: 2, src: img2, alt: "Casual Outfit", category: "casual" },
  { id: 3, src: img3, alt: "Alteration Example", category: "alterations" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "wedding", label: "Wedding Outfits" },
    { id: "casual", label: "Casual Wear" },
    { id: "alterations", label: "Alterations" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Gallery
        </h2>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                filter === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-lg w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[75vh] rounded-lg object-cover"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100"
              onClick={closeLightbox}
            >
              ✖
            </button>
            <button
              className="absolute top-1/2 left-4 bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              ◀
            </button>
            <button
              className="absolute top-1/2 right-4 bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
