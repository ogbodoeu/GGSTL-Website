export default function Products() {
  const products = [
    {
      title: 'SwiftRoute',
      description:
        'SwiftRoute is a versatile platform for seamless money remittance and convenient flight booking ✈️, making global transfers and travel planning faster and simpler.',
      url: 'https://www.trip.com/t/kUSM6OpqpS2',
    },
    {
      title: 'SmartMedX',
      description:
        'SmartMedX integrates artificial intelligence with medical expertise to deliver smarter diagnostics, treatment insights, and healthcare solutions.',
      url: '/smart-medx',
    },
    {
      title: 'SmartConnectivitySolutions',
      description:
        'SmartConnectivitySolutions provides cutting-edge solutions for seamless connectivity and communication.',
      url: '/smart-connectivity-solutions',
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
              src={`/images/${product.title}.png`}
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
