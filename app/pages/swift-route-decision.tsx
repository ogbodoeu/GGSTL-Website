export default function ServiceCards() {
  const services = [
    {
      title: 'Book a Flight',
      emoji: '✈️',
      description:
        'Gilead SwiftRoute enables you to search and book flights to destinations worldwide with the best prices and options from our trusted partners. Book your flight with confidence today.',
      url: '/swift-route',
      url: 'https://www.trip.com/t/JcLp0yZAuS2',
    },
    {
      title: 'Transfer Money',
      emoji: '💸',
      description: 'Gilead SwiftRoute enables you to send money securely and instantly through our trusted global partners to friends and family worldwide. Make your money transfer with confidence today.',
      url: '/swift-route/money-transfer',
      url: 'https://wise.prf.hn/l/4PReX5q/',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full p-8 justify-center items-center">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.url}
          className="bg-inherit border-2 border-primary-gray min-h-96 w-full md:w-1/3 rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <div className="p-4 flex flex-col items-center overflow-hidden">
            <div className="text-6xl mb-4">{service.emoji}</div>
            <h4 className="text-lg font-semibold mb-2 text-inherit">{service.title}</h4>
            <p className="text-sm text-inherit text-center">{service.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
