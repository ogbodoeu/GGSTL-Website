export default function Products() {
  const products = [
    {
      title: "SwiftRoute",
      logoKey: "SwiftRoute",
      description:
        "Gilead SwiftRoute is an intelligent digital mobility platform that integrates secure international payments, travel services and AI-enabled journey management through trusted technology partners.",
      url: "/swift-route/decision",
    },
    {
      title: "SmartMedX",
      logoKey: "SmartMedX",
      description:
        "Gilead SmartMedX integrates artificial intelligence (AI) with medical expertise to deliver smarter diagnostics, treatment insights, and healthcare solutions.",
      url: "/smart-medx",
    },
    {
      title: "Smart Connectivity Solutions & Vehicle Tracking",
      logoKey: "SmartConnectivitySolutions",
      description:
        "Smart Connectivity Solutions develops intelligent telecommunications technologies including private 5G and 6G networks, Open Radio Access Network (Open RAN), cloud-native networking, Internet of Things (IoT), edge computing, secure enterprise connectivity, Surveillance, and Vehicle Tracking Solutions",
      url: "/smart-connectivity-solutions",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full p-8 over" id="companies">
      {products.map((product, index) => (
        <a
          href={product.url}
          className="bg-inherit border-2 border-primary-gray min-h-96 w-full md:w-1/3 rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          key={index}
        >
          <div className="p-4 flex flex-col items-center overflow-hidden ">
            <h4 className="text-lg font-semibold mb-2 text-inherit">{product.title}</h4>

            <img
              src={`/images/${product.logoKey}.png`}
              alt={`${product.title} logo`}
              className="mb-2"
            />

            <p className="text-sm text-inherit">{product.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

