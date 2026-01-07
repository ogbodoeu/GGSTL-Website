import type { MetaFunction } from "react-router";
import MoneyTransfer from "../components/swift-route/money-transfer";

export const meta: MetaFunction = () => [
  { title: "International Money Transfer | SwiftRoute" },
  {
    name: "description",
    content:
      "Send money internationally with SwiftRoute using trusted partners like Wise.",
  },
  { rel: "canonical", href: "https://ggstltd.com/remittance" },
];

export default function RemittancePage() {
  return (
    <main>
      <h1>Money Remittance</h1>
      <p>Select a trusted partner to send money internationally.</p>
      <MoneyTransfer />
    </main>
  );
}
