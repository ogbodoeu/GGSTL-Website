export default function ServiceCards() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Gilead SwiftRoute
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
        Gilead SwiftRoute is an intelligent digital mobility platform designed
        to simplify international travel planning, cross-border payment access
        and journey management through secure digital technologies and trusted
        service providers.
      </p>

      <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
        The platform brings together travel information, booking access,
        payment support and AI-enabled journey guidance within a unified
        digital experience. It is intended to help individuals, families and
        businesses plan international journeys more efficiently while
        maintaining transparency, convenience and security.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="border-2 border-primary-gray rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Intelligent Travel Planning
          </h2>

          <p className="mt-3 text-gray-600">
            Supports informed journey planning through digital tools, travel
            information and access to trusted external booking platforms.
          </p>
        </div>

        <div className="border-2 border-primary-gray rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Secure Payment Access
          </h2>

          <p className="mt-3 text-gray-600">
            Connects users to established international payment providers for
            eligible cross-border transactions without GGSTL holding or
            processing customer funds.
          </p>
        </div>

        <div className="border-2 border-primary-gray rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            AI-Enabled Journey Support
          </h2>

          <p className="mt-3 text-gray-600">
            Supports the future provision of intelligent guidance,
            personalised travel assistance and improved digital mobility
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}