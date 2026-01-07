import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Cheap Flight Booking | SwiftRoute" },
  {
    name: "description",
    content:
      "Book cheap international flights with SwiftRoute using trusted partners like Trip.com.",
  },
  { rel: "canonical", href: "https://ggstltd.com/flights" },
];

export default function FlightsPage() {
  return (
    <main>
      <h1>Book a Flight</h1>
      <p>Choose a trusted partner to book your flight.</p>
    </main>
  );
}

