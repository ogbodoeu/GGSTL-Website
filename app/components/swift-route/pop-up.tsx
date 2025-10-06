import { useState } from 'react';

interface FlightInfo {
  title: string;
  imageUrl: string;
  origin: string;
  destination: string;
  dateRange: string;
  tripType: string;
  price: string;
  currency: string;
  airlineLogo: string;
}

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  flights: FlightInfo[];
}

export const PopUp = ({ isOpen, onClose, flights }: PopUpProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="relative w-full max-w-md sm:max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative">
          <img
            src={flights[0].imageUrl}
            alt={flights[0].title}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white text-2xl font-bold"
          >
            ×
          </button>
          <h2 className="absolute bottom-3 left-3 text-white text-2xl sm:text-4xl font-semibold drop-shadow-md">
            {flights[0].title}
          </h2>
        </div>

        {/* Flight List */}
        <div className="p-4 space-y-4">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white rounded-xl shadow-md p-4"
              //href={checkoutLink}
            >
              {/* Route Info */}
              <div>
                <div className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-gray-700">
                  <span>{flight.origin}</span>
                  <img
                    src="app/components/swift-route/arrows.png"
                    alt="arrows"
                    className="w-5 h-5"
                  />
                  <span>{flight.destination}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{flight.dateRange}</p>
                <p className="text-sm text-gray-600">{flight.tripType}</p>
              </div>

              {/* Price + Airline */}
              <div className="flex flex-col items-end">
                <div className="flex items-baseline space-x-1">
                  <span className="text-sm text-gray-500">{flight.currency}</span>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                    {flight.price}
                  </span>
                </div>
                <img
                  src={flight.airlineLogo}
                  alt="airline"
                  className="w-10 h-10 object-contain mt-2"
                />
              </div>
            </div>
          ))}

          {/* CTA */}
          <button className="w-full bg-pink-600 text-white font-medium py-3 rounded-full shadow-md hover:bg-pink-700 transition">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};
