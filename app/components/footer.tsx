import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary-gray text-white p-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-4">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-lg font-bold">Company</h3>
          <a href="/about" className="hover:underline">
            About us
          </a>
          <a href="/products" className="hover:underline">
            Products
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-lg font-bold">Support</h3>
          <p>SAC: (11) 99999-9999</p>
          <p>Email: support@company.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
