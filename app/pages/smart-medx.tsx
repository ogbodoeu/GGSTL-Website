export default function SmartMedX() {
  const solution = {
    title: 'SmartMedX',
    imageName: 'SmartMedX.png',
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <img
        src={`/images/${solution.imageName}`}
        alt={solution.title}
        className="w-40 h-40 object-contain"
      />
      <h1 className="text-2xl font-bold mb-6">Gilead SmartMedX™ — AI Health Diagnostics</h1>
      <section className="max-w-xl space-y-4">
        <p>
          <strong>Vision:</strong> Timely, high-quality diagnostics for every clinic—regardless of
          location.
        </p>
        <p>
          <strong>Mission:</strong> Deploy privacy-preserving AI that ingests DICOM studies,
          automates structured findings, and enables secure telehealth collaboration to reduce
          time-to-diagnosis and improve outcomes.
        </p>
      </section>
    </main>
  );
}
