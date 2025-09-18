import { useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
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
            <button className="bg-inherit text-white px-4 border-1 py-2 rounded-3xl">Log in</button>
            <button className="bg-white text-primary-gray px-4 py-2 rounded-3xl">Sign Up</button>
          </div>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center h-screen bg-white p-8 text-center text-primary-gray ">
        <h1 className="text-6xl font-bold">
          Impact phrase to welcome the <br /> Gilead's clients
        </h1>
        <div className="mt-8 max-w-2xl flex flex-row gap-10">
          <h3>Phrase that describes the company</h3>
          <p>
            Here you have a space to share with public a text about your company.You can write just
            a resume because the real text will be on about us page,
          </p>
        </div>
      </main>
      <footer className="bg-primary-gray text-white p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-2 text-center md:text-left pl-30">
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

          <div className="flex flex-col gap-2 text-center md:text-left pr-30">
            <h3 className="text-lg font-bold">Support</h3>
            <p>SAC: (11) 99999-9999</p>
            <p>Email: support@company.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
