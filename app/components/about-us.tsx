ureexport default function AboutSection() {
  return (
    <section className="w-full bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 my-4">
          <img
            src="/GGSTL_LOGO.png"
            alt="About Us"
            className="w-full md:w-1/2 h-48 object-contain"
          />
          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-700 text-sm leading-relaxed">
            <p>
              Gilead has been making lives better by driving innovation in FinTech (Money transfer/remittance), Air travel (cheap flight booking), healthcare, technology,
              and global connectivity. Gilead is registered and incorporated in the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="bg-gray-100 border-t shadow-sm mt-6">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Mission */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Target.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="text-sm text-gray-600">
              To harness the power of science, data, and intelligent systems to deliver better
              healthcare solutions, seamless travel, and secure financial services.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Eye.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="text-sm text-gray-600">
              Make advanced digital infrastructure simple, secure, and accessible—so travel,
              payments, healthcare, connectivity, agriculture, and everyday services work seamlessly
              everywhere, powered by AI, private 5G/edge, and cloud-native engineering for reliable,
              affordable, and sustainable impact.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Diamond.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Values</h3>
            <p className="text-sm text-gray-600">
              Deliver practical, compliant platforms with transparent pricing and measurable
              outcomes: SwiftRoute (flights & remittance), SmartMedX (AI diagnostics), SCS
              (Open5GS/O-RAN private networks), SmartAgTech (precision farming, field connectivity &
              insights), EdgeShield DevSecOps (secure software delivery), and Charge&Wash (cashless
              EV charging & laundromats). We build reliably, scale efficiently, protect data by
              design, and partner with clients across emerging and developed markets to turn complex
              technology into everyday value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
