import React from 'react';

export default function Introduction() {
  return (
    <div id="introduction" className="home my-16 flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl font-bold py-8">
        GILEAD GLOBAL SYSTEMS TECHNOLOGIES LTD
      </h1>
      <div className="mt-8 max-w-2xl flex flex-row gap-5 md:gap-2 md:flex-row justify-center items-center">
        <h3>
          Gilead is the parent company overseeing SmartMedX, SwiftRoute, and other innovative
          ventures in healthcare and technology.
        </h3>
        {/* <p>Here you have a space to share with public a text about your company.</p> */}
      </div>
    </div>
  );
}
