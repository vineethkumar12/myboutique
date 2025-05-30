import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Executive",
      content:
        "The perfect fit for my business suits. Never going back to ready-made!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Bride",
      content:
        "My wedding lehenga was tailored to perfection. The craftsmanship is exceptional!",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "Corporate Professional",
      content:
        "Best custom shirts I've ever owned. The attention to detail is remarkable.",
      rating: 5,
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Customer <span className="text-orange-600">Stories</span>
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active bg-orange-500",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="pb-12 max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-orange-50 hover:border-orange-100 transition-all">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-orange-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
