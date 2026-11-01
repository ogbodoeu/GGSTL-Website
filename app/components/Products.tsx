export default function Products() {
  const products = [
    {
      title: "SwiftRoute",
      logoKey: "SwiftRoute",
      description:
        "Explore GGSTL SwiftRoute for international flight searches and a developing international money-transfer service. Flight booking and money transfers are not yet available for live transactions.",
      url: "https://swift.ggstltd.com",
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
    {
      title: "GGSTL Global Connect",
      logoKey: "GGSTLGlobalConnect",
      description:
        "GGSTL Global Connect is our developing prepaid international calling platform. Make calls to mobile and landline numbers using your existing Wi-Fi or mobile internet connection. Explore the demonstration portal while live calling and payments are being prepared for launch.",
      url: "https://connect.ggstltd.com",
    },
  ];
  return (
<div
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full p-8"
  id="companies"
>
      {products.map((product, index) => (
        <a
          href={product.url}
          target={product.url.startsWith("https://") ? "_blank" : undefined}
          rel={product.url.startsWith("https://") ? "noopener noreferrer" : undefined}
          className="bg-inherit border-2 border-primary-gray min-h-96 w-full rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
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

