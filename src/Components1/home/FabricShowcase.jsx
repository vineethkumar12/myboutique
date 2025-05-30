import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FabricShowcase() {
  const fabrics = [
    {
      id: 1,
      name: "Italian Wool",
      image: "/fabrics/wool.jpg",
      price: "₹3,500/m",
    },
    {
      id: 2,
      name: "Egyptian Cotton",
      image: "/fabrics/cotton.jpg",
      price: "₹2,200/m",
    },
    {
      id: 3,
      name: "Silk Chiffon",
      image: "/fabrics/silk.jpg",
      price: "₹4,800/m",
    },
    {
      id: 4,
      name: "Linen Blend",
      image: "/fabrics/linen.jpg",
      price: "₹2,900/m",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active bg-orange-500",
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {fabrics.map((fabric) => (
        <SwiperSlide key={fabric.id}>
          <div className="border border-orange-100 rounded-lg overflow-hidden hover:shadow-lg transition hover:border-orange-200">
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg text-gray-800">
                <span className="text-orange-600">
                  {fabric.name.split(" ")[0]}
                </span>{" "}
                {fabric.name.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-gray-600 mt-1">
                <span className="text-orange-500 font-medium">
                  {fabric.price}
                </span>
              </p>
              <button className="mt-3 text-sm text-orange-600 hover:text-orange-700 hover:underline transition-colors">
                View Details →
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
