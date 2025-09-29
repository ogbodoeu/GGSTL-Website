import React from 'react';
import ButtonSwift from './button';

export default function SwiftNavbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex items-center justify-between bg-bg-app-swift drop-shadow-xl h-2/12 pr-6 md:pr-12">
      <div className="flex items-center gap-6 h-full">
        <div
          className="hidden md:flex w-52 h-full items-center justify-center hover:cursor-pointer shadow-[0px_4px_13.3px_1px_rgba(0,0,0,0.25)] z-10"
          onClick={() => (window.location.href = '/')}
        >
          <img className="w-52 h-full object-contain" src="/LOGO_SQUARE.png" />
        </div>

        <div
          className="hidden md:flex w-52 h-full items-center justify-center hover:cursor-pointer"
          onClick={() => (window.location.href = '/swift-route')}
        >
          <img className=" md:h-full object-contain" src="/GSROUTE_LOGO.jpeg" />
        </div>

        <div
          className="flex md:hidden h-full items-center cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          <img className="h-12 object-contain" src="/LOGO_SQUARE.png" alt="Logo" />
        </div>
      </div>
      <button
        className="md:hidden text-text-main-swift text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-end gap-6 md:gap-12 text-xl font-medium text-text-main-swift absolute md:static top-full left-0 w-full md:w-auto bg-bg-app-swift md:bg-transparent p-6 md:p-0`}
      >
        <a href="/swift/book" className="hover:text-text-highlight-swift transition-colors">
          Book Flight
        </a>
        <a
          href="/swift/money-transfer"
          className="hover:text-text-highlight-swift transition-colors"
        >
          Money Transfer
        </a>
        <a href="/swift/blog" className="hover:text-text-highlight-swift transition-colors">
          Blog Diaspora
        </a>
        <a href="/swift/contact" className="hover:text-text-highlight-swift transition-colors">
          Contact
        </a>

        <div className="flex gap-4 mt-4 md:mt-0">
          <ButtonSwift onClick={() => (window.location.href = '/swift/login')} BgType="clear">
            Log in
          </ButtonSwift>
          <ButtonSwift onClick={() => (window.location.href = '/swift/signup')} BgType="colored">
            Sign up
          </ButtonSwift>
        </div>
      </div>
    </nav>
  );
}
