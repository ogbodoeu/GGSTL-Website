export default function TrustedPartners() {
  return (
    <section className="w-full bg-gray-50 py-16 border-t border-b">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Trusted Technology & Service Partners
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          GGSTL collaborates with trusted international service providers to
          extend digital mobility and financial services through secure
          technology partnerships. The following third-party platforms support
          international travel planning and cross-border payments.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-primary-gray rounded-lg p-8 shadow-md hover:shadow-xl transition">
            <div className="text-6xl mb-4">✈️</div>

            <h3 className="text-2xl font-semibold mb-4">
              International Flight Booking
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Search and book flights to destinations worldwide through our
              trusted travel partner, offering competitive fares, flexible
              travel options and secure online booking.
            </p>

            <a
              href="https://www.trip.com/t/JcLp0yZAuS2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition font-medium"
            >
              Book a Flight
            </a>
          </div>

          <div className="border-2 border-primary-gray rounded-lg p-8 shadow-md hover:shadow-xl transition">
            <div className="text-6xl mb-4">💸</div>

            <h3 className="text-2xl font-semibold mb-4">
              International Money Transfer
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Send money securely across multiple countries through our trusted
              international payment partner with fast, reliable and transparent
              cross-border transfer services.
            </p>

            <a
              href="https://wise.prf.hn/l/4PReX5q/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 transition font-medium"
            >
              Transfer Money
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 max-w-5xl mx-auto">
          <strong>Disclaimer:</strong> Flight booking and international money
          transfer services are provided directly by independent third-party
          partners. GGSTL does not operate airline reservation systems, process
          customer payments or execute money transfers. GGSTL may receive a
          referral commission from qualifying transactions completed through
          these trusted partners.
        </p>
      </div>
    </section>
  );
}
