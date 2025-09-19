import React from 'react';

export default function Navbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-primary-gray text-white font-sans">
      <div className="flex items-center justify-between w-full md:w-auto sm:min-h-12">
        <img
          src="/GGSTL_NAVBAR_LOGO.png"
          alt="Logo"
          className="object-contain h-12 md:h-16 lg:h-20 hidden max-sm:block md:block"
        />
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto py-2 mt-4 md:mt-0 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <div className="flex flex-col md:flex-row md:gap-4 items-center">
          <a href="/home" className="hover:underline">
            Home
          </a>
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
        <div className="flex gap-4 items-center justify-center mt-2 ml-4 md:mt-0">
          <a href="/login" className="bg-inherit text-white px-4 border-1 py-2 rounded-3xl">
            Log in
          </a>
          <a href="/signup" className="bg-white text-primary-gray px-4 py-2 rounded-3xl">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
