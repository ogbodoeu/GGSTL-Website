export default function TrustedPartners() {
  return (
    <section className="w-full bg-gray-50 py-16 border-t border-b">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          SwiftRoute Travel &amp; Money Transfer Services
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Explore international flight options and preview our developing
          money-transfer experience through GGSTL SwiftRoute.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-primary-gray rounded-lg p-8 shadow-md hover:shadow-xl transition">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-2xl font-semibold mb-4">
              International Flight Search
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Search and compare international flight options in SwiftRoute's
              test environment. Live ticket booking and payment are not yet available.
            </p>
            <a
              href="https://swift.ggstltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition font-medium"
            >
              Search Flights
            </a>
          </div>

          <div className="border-2 border-primary-gray rounded-lg p-8 shadow-md hover:shadow-xl transition">
            <div className="text-6xl mb-4">💸</div>
            <h3 className="text-2xl font-semibold mb-4">
              International Money Transfer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore SwiftRoute's money-transfer demonstration interface.
              Live transfers, payments, and exchange-rate quotations are not yet available.
            </p>
            <a
              href="https://swift.ggstltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition font-medium"
            >
              Explore Transfers
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 max-w-5xl mx-auto">
          <strong>Service status:</strong> Flight information is provided using test data.
          Flight booking, payments, and international money transfers are not yet enabled.
          No customer funds are collected through SwiftRoute at this stage.
        </p>
      </div>
    </section>
  );
}
