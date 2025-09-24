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
      <div
        className="w-[475px] h-[384px] rounded-[30px] border border-stone-300 bg-white shadow-[3px_6px_19.4px_4px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer"
        onClick={() => {
          if (href) {
            window.location.href = href;
          }
        }}
      >
        <div className="relative">
          <img src={image} alt="" className="w-[475px] h-[246px] object-cover rounded-t-[30px]" />

          {isPromo && (
            <div className="absolute left-0 top-[35px] w-56 h-10 bg-border-swift rounded-tr-[30px] rounded-br-[30px]">
              <span className="absolute left-[19px] top-[6px] text-bg-app-swift text-xl font-extrabold">
                Unmissable Offer
              </span>
            </div>
          )}
        </div>
        <div className="px-[30px] pt-[13px] pb-[20px] text-text-main-swift">
          <h3 className="text-3xl font-medium">Flight to {destination}</h3>

          <div className="flex justify-between items-end mt-[15px]">
            <div className="space-y-2">
              <p className="text-xl font-medium">Leaving {from}</p>
              <p className="text-xl font-medium">Round Trip</p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-xl font-medium">{currency}</span>
              <span className="text-5xl font-medium">{cost}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-app rounded-[20px] shadow-md overflow-hidden w-80">
      <img src={image} alt="" className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};
