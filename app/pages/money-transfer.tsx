import { Carousel } from '~/components/swift-route/carousel';
import MoneyTransfer from '~/components/swift-route/money-transfer';

export default function MoneyTransferPage() {
  return (
    <div className="bg-white justify-center items-center min-h-dvh text-primary-gray ">
      <img
        src="/images/cashback.png"
        alt="Money Transfer"
        className="mr-4 w-full max-h-60 object-scale-down"
      />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-primary-pink text-4xl">Security in Transfer</h2>
        {/* <p className="text-primary-gray">
          Here you can write informations about how the transferences work and how people can do it
          in this site. Its important to explain everything, so your clients will be well informed
          and less people will ask for help.
        </p> */}
      </div>
      <div className="w-[90%] flex justify-center items-center">
        {/* <Carousel /> */}
      </div>
      <div className="flex flex-col items-center">
        <MoneyTransfer />
      </div>
    </div>
  );
}
