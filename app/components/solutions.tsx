import { useState } from 'react';

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState(null);

  const solutions = [
    {
      title: 'Gilead SmartMedX™ — AI Health Diagnostics',
      description:
        'Vision: Timely, high-quality diagnostics for every clinic—regardless of location.\nMission: Deploy privacy-preserving AI that ingests DICOM studies, automates structured findings, and enables secure telehealth collaboration to reduce time-to-diagnosis and improve outcomes.',
      imageName: 'SmartMedX.png',
    },
    {
      title: 'Gilead Smart Connectivity Solutions (SCS)™ — Private 5G & Edge',
      description:
        'Vision: Private 5G as simple and dependable as Wi-Fi—powering industry, campuses, and farms.\nMission: Design, deploy, and manage Open5GS/O-RAN networks with containerized edge, QoS/slicing, and 24/7 observability—backed by training, SLAs, and cost-efficient operations.',
      imageName: 'SmartConnectivitySolutions.png',
    },
    {
      title: 'Gilead SmartAgTech™ — Digital Agriculture Platform',
      description:
        'Vision: Climate-resilient, data-driven farming that lifts productivity and protects resources.\nMission: Deliver affordable field connectivity (LoRa/TVWS/LEO/UAV) and AI insights for irrigation, yield, and asset tracking—turning raw data into actionable decisions for growers.',
      imageName: 'GileadAgritechSolutions.png',
    },
    {
      title: 'Gilead Smart EdgeShield DevSecOps™ — Cloud & Kubernetes',
      description:
        'Vision: Software delivery that is secure-by-default, compliant-by-design, and effortlessly scalable.\nMission: Implement end-to-end DevSecOps—CI/CD, IaC, supply-chain security, and Kubernetes hardening—so teams ship faster with measurable reliability, cost control, and governance.',
      imageName: 'GileadEdgeShield.png',
    },
    {
      title: 'Gilead Smart Charge&Wash™ — EV Charging & Smart Laundromat',
      description:
        'Vision: Ubiquitous self-service infrastructure that makes clean mobility and daily chores effortless.\nMission: Deploy and operate cashless EV chargers and automated laundromats with real-time telemetry, dynamic pricing, and high uptime—delivering a smooth, modern customer experience.',
      imageName: 'GileadChargeWash.png',
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="solutions" className="w-full px-8 py-10">
      <h2 className="text-3xl font-bold text-primary-gray text-center mb-8">Solutions</h2>

      <div className="space-y-4">
        <div
          className="border-2 border-primary-gray rounded-xl overflow-hidden transition-all cursor-pointer hover:shadow-lg"
          onClick={() => {
  if (solution.url.startsWith('http')) {
    window.open(solution.url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = solution.url;
  }
}}

        >
          <div className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg text-primary-gray">
            <div className="flex items-center gap-4">
              <img
                src="/images/SwiftRoute.png"
                alt="Gilead SwiftRoute™ — Flights & Fintech"
                className="w-12 h-12 object-contain"
              />
              <span>Gilead SwiftRoute™ — Flights & Fintech</span>
            </div>
          </div>
          {/* <div className="p-4"> */}
          {/* <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
              Vision: A world where booking travel and moving money across borders is instant,
              transparent, and trusted.
              {'\n'}
              Mission: Build a unified platform that pairs smart flight search with compliant,
              secure remittances—delivering fair pricing, seamless UX, and reliable payouts across
              Africa-Americas corridors.
            </p> */}
          {/* </div> */}
        </div>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="border-2 border-primary-gray rounded-xl overflow-hidden transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg text-primary-gray"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/images/${solution.imageName}`}
                  alt={solution.title}
                  className="w-12 h-12 object-contain"
                />
                <span>{solution.title}</span>
              </div>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>

            <div
              className={`transition-all duration-300 ${
                openIndex === index ? 'max-h-96 p-4' : 'max-h-0 p-0'
              } overflow-hidden`}
            >
              <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
