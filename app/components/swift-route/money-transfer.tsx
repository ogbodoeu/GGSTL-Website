import { useState } from 'react';

export default function MoneyTransfer() {
  type Currency = {
    code: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'BRL';
    name: string;
  };

  const currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'BRL', name: 'Brazilian Real' },
  ];

  const currencyFlags: Record<Currency['code'], string> = {
    USD: '🇺🇸',
    EUR: '🇪🇺',
    GBP: '🇬🇧',
    JPY: '🇯🇵',
    AUD: '🇦🇺',
    CAD: '🇨🇦',
    BRL: '🇧🇷',
  };

  const [toCurrency, setToCurrency] = useState<Currency['code']>(currencies[0].code);
  const [fromCurrency, setFromCurrency] = useState<Currency['code']>(currencies[1].code);
  const [amountToConvert, setAmountToConvert] = useState<number | string>('');

  return (
    <div className="w-[80%] min-h-[400px] flex flex-col items-center justify-center shadow-2xl drop-shadow-2xl rounded-xl md:rounded-[90px] md:p-12">
      <h1 className="text-md md:text-xl font-bold my-4">Make your transfer or Conversion here</h1>
      <div className="flex flex-col gap-4">
        <label className="flex items-center justify-between">
          <span>From:</span>
          <select
            className="border-2 border-primary-pink rounded-full p-2 outline-0 ml-2 w-48"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value as Currency['code'])}
          >
            <option value="">Select currency</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name} {currencyFlags[currency.code]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center justify-between">
          <span>To:</span>
          <select
            className="border-2 border-primary-pink rounded-full p-2 outline-0 ml-2 w-48"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value as Currency['code'])}
          >
            <option value="">Select currency</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name} {currencyFlags[currency.code]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        1 {fromCurrency} = 1.23 {toCurrency}
      </div>
      <div className="flex items-center flex-col md:flex-row gap-2 mt-4">
        <input
          className="border-2 border-primary-pink rounded-full p-2 outline-0 no-spinners"
          type="number"
          placeholder="Amount"
          min={0}
          value={amountToConvert}
          onChange={(e) => {
            const value = e.target.value;
            if (Number(value) >= 0 || value === '') {
              setAmountToConvert(value);
            }
          }}
        />
        <button className="border-2 border-primary-pink rounded-full px-4 py-2 font-semibold text-primary-pink">
          <img src="/icons/convert.svg" alt="Convert" className="w-4 h-4" />
        </button>
        <input
          className="border-2 border-primary-pink rounded-full p-2 outline-0"
          type="text"
          placeholder="Converted Amount"
          readOnly
          value={amountToConvert ? (Number(amountToConvert) * 1.23).toFixed(2) : ''}
        />
      </div>
      <div className="w-[80%] border-1 border-primary-pink rounded-full my-8" />
      {/*  bank account or store cash  */}
      <div className="w-[90%] flex items-center justify-center flex-col">
        <h4 className="text-md md:text-lg font-bold my-2">Select your payout method</h4>
        <div className="flex flex-row items-center justify-center   ">
          <div className="flex flex-col items-center">
            <img className="h-20 m-2" src="/icons/store.svg" />
            <button className="cursor-pointer min-w-[100px] md:min-w-[200px] min-h-[45px] md:min-h-[87px] flex text-xs md:text-[1rem] items-center justify-center font-bold border-2 border-primary-pink rounded-bl-full rounded-br-full rounded-tr-full bg-primary-pink text-white">
              Receive cash in a <br /> store
            </button>
          </div>
          <div className="flex flex-col items-center m-2">
            <img className="h-20 m-2" src="/icons/bank.svg" />
            <button className="cursor-pointer min-w-[100px] md:min-w-[200px] min-h-[45px] md:min-h-[87px] flex text-xs md:text-[1rem] items-center justify-center font-bold border-2 border-primary-pink rounded-bl-full rounded-br-full rounded-tr-full bg-white text-primary-pink">
              Bank account
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] border-1 border-primary-pink rounded-full my-8" />
      {/*  payment method  */}
      <div className="w-[90%] flex items-center justify-center flex-col">
        <h4 className="text-md md:text-lg font-bold my-2">Payment Method</h4>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center">
            <img className="h-20 m-2" src="/icons/store.svg" />
            <button className="cursor-pointer min-w-[100px] md:min-w-[200px] min-h-[45px] md:min-h-[87px] flex text-xs md:text-[1rem] items-center justify-center font-bold border-2 border-primary-pink rounded-bl-full rounded-br-full rounded-tr-full bg-primary-pink text-white">
              PIX or Bank <br /> account
            </button>
          </div>
          <div className="flex flex-col items-center m-2">
            <img className="h-20 m-2" src="/icons/cellphone-payment.svg" />
            <button className="cursor-pointer min-w-[100px] md:min-w-[200px] min-h-[45px] md:min-h-[87px] flex text-xs md:text-[1rem] items-center justify-center font-bold border-2 border-primary-pink rounded-bl-full rounded-br-full rounded-tr-full bg-white text-primary-pink">
              Online Payment
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] border-1 border-primary-pink rounded-full my-4" />
      <div className=" min-w-[50%] max-w-[200px] flex flex-row items-center justify-center">
        <img className="h-12 m-2" src="/icons/coupon.svg" />
        <input
          className="rounded-full p-2 outline-0 shadow-2xl"
          type="text"
          placeholder="Promotional code"
        />
      </div>
      <div className="w-[80%] border-1 border-primary-pink rounded-full my-4" />
      <button className="cursor-pointer min-w-[150px] md:min-w-[250px] min-h-[50px] flex text-md md:text-[1.2rem] items-center justify-center font-bold border-2 border-primary-pink rounded-full bg-white text-primary-pink mt-8 mb-4">
        Continue
      </button>
    </div>
  );
}
