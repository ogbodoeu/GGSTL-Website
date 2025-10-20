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
    <nav className="relative z-50 flex items-center justify-between h-20 md:h-24 bg-bg-app-swift drop-shadow-xl px-4 md:px-12 w-full">
      {/* Logo Section */}
      <div className="flex items-center gap-4 h-full flex-shrink-0">
        {/* Desktop Logo */}
        <div
          className="hidden md:flex h-full items-center justify-center cursor-pointer w-auto max-w-[13rem]"
          onClick={() => (window.location.href = '/')}
        >
          <img className="h-full w-auto object-contain" src="/LOGO_SQUARE.png" alt="Logo" />
        </div>

        {/* Swift Route Logo */}
        <div
          className="hidden md:flex h-full items-center justify-center cursor-pointer w-auto max-w-[13rem]"
          onClick={() => (window.location.href = '/swift-route')}
        >
          <img
            className="h-full w-auto object-contain"
            src="/GSROUTE_LOGO.jpeg"
            alt="Swift Route"
          />
        </div>

        {/* Mobile Logo */}
        <div
          className="flex md:hidden h-full items-center cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          <img className="h-12 object-contain" src="/LOGO_SQUARE.png" alt="Logo" />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-text-main-swift text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu Links */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center gap-6 md:gap-12 text-xl font-medium text-text-main-swift absolute md:static top-full left-0 w-full md:w-auto bg-bg-app-swift md:bg-transparent p-6 md:p-0`}
      >
        <a href="/swift-route" className="hover:text-text-highlight-swift transition-colors">
          Book Flight
        </a>
        <a
          href="/swift-route/money-transfer"
          className="hover:text-text-highlight-swift transition-colors"
        >
          Money Transfer
        </a>
        <a href="/swift-route/blog" className="hover:text-text-highlight-swift transition-colors">
          Blog Diaspora
        </a>
        <a
          href="/swift-route/contact"
          className="hover:text-text-highlight-swift transition-colors"
        >
          Contact
        </a>

        {/* Auth Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <ButtonSwift onClick={() => (window.location.href = '/login')} BgType="clear">
            Log in
          </ButtonSwift>
          <ButtonSwift onClick={() => (window.location.href = '/signup')} BgType="colored">
            Sign up
          </ButtonSwift>
        </div>
      </div>
    </nav>
  );
}
