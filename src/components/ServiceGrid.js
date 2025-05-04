const ServicesGrid = ({ services, filter, subFilter, setSelectedService }) => {
  const filteredServices =
    filter === "all"
      ? services
      : subFilter === "all"
      ? services.filter((service) => service.category === filter)
      : services.filter(
          (service) =>
            service.category === filter && service.subcategory === subFilter
        );

  return (
    <div className="flex flex-wrap justify-center w-full">
      {filteredServices.map((service) => (
        <div
          key={service.id}
          className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {service.description}
              </p>
              <p className="text-orange-500 font-semibold mb-2">
                {service.price}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
