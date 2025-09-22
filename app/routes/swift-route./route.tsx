import { Card } from '../../components/swift-route/Card';
export default function SwiftRoute() {
  return (
    <>
      <div className=" bg-white">
        <Card
          type="flight"
          image="/eiffel-tower-sunrise1.jpg.webp"
          flightProps={{
            cost: 199,
            from: 'New York',
            destination: 'London',
            isPromo: true,
          }}
        />
      </div>
    </>
  );
}
