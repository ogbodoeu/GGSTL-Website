import React from 'react';

export default function Introduction() {
  return (
    <div id="introduction" className="home my-16">
      <h1 className="text-2xl md:text-5xl font-bold py-8">
        Impact phrase to welcome the <br /> Gilead's clients
      </h1>
      <div className="mt-8 max-w-2xl flex flex-col  gap-5 md:gap-0 md:flex-row justify-center items-center">
        <h3>Phrase that describes the company</h3>
        <p>Here you have a space to share with public a text about your company.</p>
      </div>
    </div>
  );
}
