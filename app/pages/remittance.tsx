import type { MetaFunction } from "react-router";
import MoneyTransfer from "../components/swift-route/money-transfer";

export const meta: MetaFunction = () => [
  { title: "International Money Transfer | SwiftRoute" },
  {
    name: "description",
    content:
      "Send money internationally with SwiftRoute using trusted partners like Wise, WorldRemit, Remitly, and more.",
  },
];

export default function RemittancePage() {
  return (
    <main>
      <h1>Money Remittance</h1>
      <p>Select a trusted partner to send money internationally.</p>

      <MoneyTransfer />

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2>International Money Transfer with SwiftRoute</h2>
        <p>
          SwiftRoute helps users send money internationally using trusted global
          partners. Compare options, payout methods, and fees on trusted provider
          platforms before completing your transfer.
        </p>
      </section>
    </main>
  );
}
