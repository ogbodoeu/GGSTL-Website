export default function Solutions() {
  const solutions = [
    {
      title: 'Gilead SwiftRoute™ — Flights & Fintech',
      description:
        'Vision: A world where booking travel and moving money across borders is instant, transparent, and trusted.\nMission: Build a unified platform that pairs smart flight search with compliant, secure remittances—delivering fair pricing, seamless UX, and reliable payouts across Africa–Americas corridors.',
      url: '/swift-route',
      imageName: 'SwiftRoute.png',
    },
    {
      title: 'Gilead SmartMedX™ — AI Health Diagnostics',
      description:
        'Vision: Timely, high-quality diagnostics for every clinic—regardless of location.\nMission: Deploy privacy-preserving AI that ingests DICOM studies, automates structured findings, and enables secure telehealth collaboration to reduce time-to-diagnosis and improve outcomes.',
      url: '/smart-medx',
      imageName: 'SmartMedX.png',
    },
    {
      title: 'Gilead Smart Connectivity Solutions (SCS)™ — Private 5G & Edge',
      description:
        'Vision: Private 5G as simple and dependable as Wi-Fi—powering industry, campuses, and farms.\nMission: Design, deploy, and manage Open5GS/O-RAN networks with containerized edge, QoS/slicing, and 24/7 observability—backed by training, SLAs, and cost-efficient operations.',
      url: '/smart-connectivity-solutions',
      imageName: 'SmartConnectivitySolutions.png',
    },
    {
      title: 'Gilead SmartAgTech™ — Digital Agriculture Platform',
      description:
        'Vision: Climate-resilient, data-driven farming that lifts productivity and protects resources.\nMission: Deliver affordable field connectivity (LoRa/TVWS/LEO/UAV) and AI insights for irrigation, yield, and asset tracking—turning raw data into actionable decisions for growers.',
      url: '/smart-agtech',
      imageName: 'GileadAgritechSolutions.png',
    },
    {
      title: 'Gilead Smart EdgeShield DevSecOps™ — Cloud & Kubernetes',
      description:
        'Vision: Software delivery that is secure-by-default, compliant-by-design, and effortlessly scalable.\nMission: Implement end-to-end DevSecOps—CI/CD, IaC, supply-chain security, and Kubernetes hardening—so teams ship faster with measurable reliability, cost control, and governance.',
      url: '/smart-edgeshield-devsecops',
      imageName: 'GileadEdgeShield.png',
    },
    {
      title: 'Gilead Smart Charge&Wash™ — EV Charging & Smart Laundromat',
      description:
        'Vision: Ubiquitous self-service infrastructure that makes clean mobility and daily chores effortless.\nMission: Deploy and operate cashless EV chargers and automated laundromats with real-time telemetry, dynamic pricing, and high uptime—delivering a smooth, modern customer experience.',
      url: '/smart-charge-wash',
      imageName: 'GileadChargeWash.png',
    },
  ];

  return (
    <div id="solutions">
      <h2 className="text-3xl font-bold text-primary-gray text-center pt-6 pb-4">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full p-8" id="solutions">
        {solutions.map((solution, index) => (
          <a
            href={solution.url}
            className="bg-inherit border-2 border-primary-gray rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer whitespace-pre-line"
            key={index}
          >
            <div className="p-4 flex flex-col items-center overflow-hidden text-center">
              <h4 className="text-lg font-semibold mb-2 text-inherit">{solution.title}</h4>
              <img
                src={`/images/${solution.imageName}`}
                alt={`${solution.title} logo`}
                className="mb-4 w-32 h-32 object-contain"
              />
              <p className="text-sm text-inherit whitespace-pre-line">{solution.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
