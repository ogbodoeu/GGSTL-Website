export default function AboutSection() {
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
              Gilead Global Systems Technologies Ltd (GGSTL) is a UK incorporated digital technology and research translation company developing intelligent, secure and scalable solutions in Artificial Intelligence (AI), private 5G and 6G networks, Open Radio Access Network (O-RAN), cloud native infrastructure, cybersecurity, Internet of Things (IoT), Industrial IoT (IIoT), multi access edge computing (MEC) and digital transformation. Our technologies support digital agriculture, eHealth, enterprise connectivity and smart infrastructure.
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
          To translate research in Artificial Intelligence, advanced telecommunications,
          cloud computing and intelligent systems into secure, practical and scalable digital solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Eye.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="text-sm text-gray-600">
            To become a trusted international provider of intelligent and sustainable digital technologies connecting people, organisations and communities.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Diamond.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Values</h3>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
  <li>Innovation</li>
  <li>Research Translation</li>
  <li>Integrity</li>
  <li>Security</li>
  <li>Collaboration</li>
  <li>Excellence</li>
</ul>

<p className="mt-3 text-sm text-gray-600">
  We transform advanced research into practical digital technologies by developing secure,
  scalable and intelligent solutions. We are committed to technical excellence, responsible
  innovation, research translation and trusted partnerships that deliver measurable impact
  across telecommunications, healthcare, digital agriculture and enterprise technologies.
</p>
          </div>
        </div>
      </div>
    </section>
  );
}
