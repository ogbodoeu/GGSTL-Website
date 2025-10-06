import Searchbar from '~/components/swift-route/Searchbar';
import { Card } from '../components/swift-route/Card';
import image from 'app/routes/swift-route/flight.jpeg';
import { useState } from 'react';
import { Carousel } from '~/components/swift-route/carousel';
import { PopUp } from '~/components/swift-route/pop-up';
import SwiftFooter from '~/components/swift-route/swiftFooter';
import { SlideButton } from '~/components/swift-route/action-menu';

export default function SwiftRoute() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState<'book-flight' | 'money-transfer' | 'diaspora'>(
    'book-flight'
  );
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white pt-10 px-4 sm:px-8 md:px-16 lg:px-40 min-h-screen">
        <PopUp isOpen={open} onClose={() => setOpen(false)} flights={flights} />

        <Searchbar onSearch={() => alert('Search clicked')} onSwap={() => alert('Swap clicked')} />
        <Carousel />

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-text-main-swift pt-10">
          Available Flights
        </h1>

        <SlideButton
          icon="$"
          label="Money Transfer"
          onClick={() => alert('Clicked!')}
          position="top"
        />
        <SlideButton
          icon="💬"
          label="AI chat"
          onClick={() => alert('Clicked!')}
          position="middle"
        />
        <SlideButton
          icon="⭐"
          label="Loyalty Program"
          onClick={() => alert('Clicked!')}
          position="bottom"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pb-10">
          {flights.map((flight) => (
            <Card
              onClick={() => setOpen(true)}
              key={flight.id}
              type="flight"
              image={image}
              flightProps={{
                cost: flight.cost,
                currency: flight.currency,
                from: flight.from,
                destination: flight.destination,
                isPromo: flight.isPromo,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const flights = [
  {
    id: 1,
    title: 'Flight to Paris',
    imageUrl: 'app/routes/swift-route/flight.jpeg',
    origin: 'SAO',
    destination: 'PAR',
    dateRange: 'Mon 02 Sep – Sun 07 Sep',
    tripType: 'Round Trip',
    price: '1.840',
    currency: 'U$',
    airlineLogo: 'public/companies/Gol.png',
    cost: '1.840',
    from: 'SAO',
    isPromo: true,
  },
  {
    id: 2,
    title: 'Flight to New York',
    imageUrl: 'app/routes/swift-route/flight.jpeg',
    origin: 'SAO',
    destination: 'NYC',
    dateRange: 'Tue 10 Sep – Mon 16 Sep',
    tripType: 'Round Trip',
    price: '2.120',
    currency: 'U$',
    airlineLogo: 'public/companies/Azul.png',
    cost: '2.120',
    from: 'SAO',
    isPromo: false,
  },
];
