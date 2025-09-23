interface FlightProps {
  cost: number;
  currency?: string; // default "US$"
  from: string;
  destination: string;
  isPromo?: boolean;
}

interface CardProps {
  image: string;
  type: 'flight' | 'blog' | 'transfer';
  title?: string;
  flightProps?: FlightProps;
  href?: string;
}

export const Card = ({ type, image, title, flightProps, href }: CardProps) => {
  if (type === 'flight' && flightProps) {
    const { cost, currency = 'US$', from, destination, isPromo } = flightProps;
    return (
      <div className="bg-white rounded-2xl overflow-hidden w-80 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer">
        <a href={href}>
          <div className="relative">
            <img src={image} alt="" className="w-full h-48 object-cover" />
            {isPromo && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                Unmissable Offer
              </span>
            )}
          </div>

          <div className="p-5 flex justify-between items-end text-text-main-swift">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Flight to {destination}</h3>
              <p className="text-gray-500 text-sm">
                Leaving {from}
                <br />
                Round Trip
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm">{currency}</span>
              <span className="text-2xl font-bold">{cost}</span>
            </div>
          </div>
        </a>
      </div>
    );
  }

  // Blog & Transfer
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      {/* Image */}
      <img src={image} alt="" className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};
