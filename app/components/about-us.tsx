export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image placeholder */}
          <div className="w-full md:w-1/2 h-48 bg-gray-300" />
          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-700 text-sm leading-relaxed">
            <p>Here you have a space to share with public a text about your company.</p>
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
            <p className="text-sm text-gray-600">Here you’ll write the mission of Gilead.</p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Eye.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="text-sm text-gray-600">Here you`ll write the vision of Gilead.</p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12">
              <img src="/icons/Diamond.png" alt="Values Icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold">Values</h3>
            <p className="text-sm text-gray-600">Here you’ll write the values of Gilead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
