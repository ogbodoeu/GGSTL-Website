export default function ServiceCards() {
  const services = [
    {
      title: 'Book a Flight',
      emoji: '✈️',
      description:
        'Search and book flights to destinations worldwide with the best prices and options.',
      url: 'https://www.trip.com/t/kUSM6OpqpS2',
    },
    {
      title: 'Transfer Money',
      emoji: '💸',
      description: 'Send money securely and instantly to friends and family across the globe.',
      url: '/swift-route/money-transfer',
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
