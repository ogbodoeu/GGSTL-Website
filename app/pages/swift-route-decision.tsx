export default function ServiceCards() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Gilead SwiftRoute
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
        SwiftRoute is GGSTL&apos;s digital travel and international money-transfer
        portal. Explore international flight options and a developing
        cross-border transfer experience in one place.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="border-2 border-primary-gray rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">International Flight Search</h2>
          <p className="mt-3 text-gray-600">
            Search and compare flight options in our test environment.
            Live ticket booking and payment are not yet available.
          </p>
          <a href="https://swift.ggstltd.com/?service=flights" target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-block rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white hover:bg-gray-700">
            Search Flights
          </a>
        </div>

        <div className="border-2 border-primary-gray rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">International Money Transfer</h2>
          <p className="mt-3 text-gray-600">
            Preview SwiftRoute&apos;s developing money-transfer experience.
            No live transfers, payments, or exchange-rate quotations are available.
          </p>
          <a href="https://swift.ggstltd.com/?service=transfers" target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-block rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white hover:bg-gray-700">
            Explore Transfers
          </a>
        </div>
      </div>
    </section>
  );
}
