import React from 'react';

export default function Products() {
  const products = [
    {
      title: 'SwiftRoute',
      description: 'Description for SwiftRoute',
      url: '/swift-route',
    },
    {
      title: 'SmartMedX',
      description: 'Description for SmartMedX.',
      url: '/smart-medx',
    },
    {
      title: 'SmartConnectivitySolutions',
      description: 'Description for SmartConnectivitySolutions.',
      url: '/smart-connectivity-solutions',
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full p-8">
      {products.map((product, index) => (
        <a
          href={product.url}
          className="bg-inherit border-2 border-primary-gray h-96 w-full md:w-1/3 rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          key={index}
        >
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2 text-inherit">{product.title}</h4>
            <p className="text-sm text-inherit">{product.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
