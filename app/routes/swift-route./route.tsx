import Searchbar from '~/components/swift-route/Searchbar';
import { Card } from '../../components/swift-route/Card';
import SwiftNavbar from '../../components/swift-route/navbar';
import image from 'app/routes/swift-route./flight.jpeg';
import Footer from '~/components/footer';
import { useState } from 'react';
export default function SwiftRoute() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SwiftNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className=" h-screen bg-white px-40 pt-10">
        <Searchbar
          onSearch={() => {
            alert('Search clicked');
          }}
          onSwap={() => {
            alert('Swap clicked');
          }}
        />
        <h1 className="text-3xl font-bold mb-6 text-center text-text-main-swift pt-10">
          Available Flights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center pb-10">
          {flights.map((flight) => (
            <Card
              href={`/swift/book/${flight.id}`}
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
      <Footer />
    </>
  );
}

const flights = [
  {
    id: 1,
    from: 'New York',
    destination: 'London',
    cost: 199,
    currency: 'US$',
    isPromo: true,
    image: '/flight.jpeg',
  },
  {
    id: 2,
    from: 'Los Angeles',
    destination: 'Tokyo',
    cost: 299,
    currency: 'US$',
    isPromo: false,
    image: '/flight.jpeg',
  },
  {
    id: 3,
    from: 'Chicago',
    destination: 'Paris',
    cost: 249,
    currency: 'US$',
    isPromo: true,
    image: '/flight.jpeg',
  },
  {
    id: 4,
    from: 'Miami',
    destination: 'Rome',
    cost: 279,
    currency: 'US$',
    isPromo: false,
    image: '/flight.jpeg',
  },
  {
    id: 5,
    from: 'San Francisco',
    destination: 'Berlin',
    cost: 319,
    currency: 'US$',
    isPromo: true,
    image: '/flight.jpeg',
  },
];
