export default function SmartChargeWash() {
  const solution = {
    title: "Smart Charge&Wash",
    imageName: "GileadChargeWash.png",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <img
        src={`/images/${solution.imageName}`}
        alt={solution.title}
        className="w-40 h-40 object-contain"
      />
      <h1 className="text-2xl font-bold mb-6">
        Gilead Smart Charge&Wash™ — EV Charging & Smart Laundromat
      </h1>
      <section className="max-w-xl space-y-4">
        <p>
          <strong>Vision:</strong> Ubiquitous self-service infrastructure that makes clean mobility
          and daily chores effortless.
        </p>
        <p>
          <strong>Mission:</strong> Deploy and operate cashless EV chargers and automated
          laundromats with real-time telemetry, dynamic pricing, and high uptime—delivering a
          smooth, modern customer experience.
        </p>
      </section>
    </main>
  );
}
