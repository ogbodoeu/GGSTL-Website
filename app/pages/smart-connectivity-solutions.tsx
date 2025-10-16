import UnderConstruction from './smart-medx';
import { Outlet } from 'react-router';
export default function SmartConnectivitySolutions() {
  const solution = {
    title: "Smart Connectivity Solutions",
    imageName: "SmartConnectivitySolutions.png",
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <img
          src={`/images/${solution.imageName}`}
          alt={solution.title}
          className="w-40 h-40 object-contain"
      />
      <h1 className="text-2xl font-bold mb-6">
        Gilead Smart Connectivity Solutions (SCS)™ — Private 5G & Edge
      </h1>
      <section className="max-w-xl space-y-4">
        <p>
          <strong>Vision:</strong> Private 5G as simple and dependable as Wi-Fi—powering industry,
          campuses, and farms.
        </p>
        <p>
          <strong>Mission:</strong> Design, deploy, and manage Open5GS/O-RAN networks with
          containerized edge, QoS/slicing, and 24/7 observability—backed by training, SLAs, and
          cost-efficient operations.
        </p>
      </section>
    </main>
  );
}
