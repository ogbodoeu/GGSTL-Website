import Searchbar from '~/components/swift-route/Searchbar';
import { Card } from '../components/swift-route/Card';
import image from 'app/routes/swift-route/flight.jpeg';
import { useState } from 'react';
import { Carousel } from '~/components/swift-route/carousel';
import { PopUp } from '~/components/swift-route/pop-up';
import SwiftFooter from '~/components/swift-route/swiftFooter';

export default function SwiftRoute() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState<'book-flight' | 'money-transfer' | 'diaspora'>(
    'book-flight'
  );

  return (
    <>
      <div className="bg-white pt-10 px-4 sm:px-8 md:px-16 lg:px-40 min-h-screen">
        <Searchbar onSearch={() => alert('Search clicked')} onSwap={() => alert('Swap clicked')} />
        <Carousel />

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-text-main-swift pt-10">
          Available Flights
        </h1>

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
