import React from 'react';

export default function Navbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-primary-gray text-white font-sans sticky top-0 z-50 ">
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
          <a
            href="/"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Home
          </a>
          <a
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('about');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            About us
          </a>
          <a
            href="/products"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('products');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Products
          </a>
          <a
            href="/contact"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
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
