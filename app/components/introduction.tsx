import React from 'react';

export default function Introduction() {
  return (
    <div id="introduction" className="home my-16 flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl font-bold py-8">
        Transforming Advanced Research into Intelligent Digital Technologies
      </h1>
      <h1 className="text-xl md:text-5xl font-bold py-8">
         GILEAD GLOBAL SYSTEMS TECHNOLOGIES LTD
      </h1>
      <div className="mt-8 max-w-2xl flex flex-row gap-5 md:gap-2 md:flex-row justify-center items-center">
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl text-center">
  Transforming advanced research into practical digital technologies through
  Artificial Intelligence (AI), private 5G and 6G networks, Open Radio Access
  Network (O-RAN), cloud native infrastructure, cybersecurity and intelligent
  systems for healthcare, digital agriculture, enterprise connectivity and smart
  infrastructure.
</p>
        {/* <p>Here you have a space to share with public a text about your company.</p> */}
      </div>
    </div>
  );
}
