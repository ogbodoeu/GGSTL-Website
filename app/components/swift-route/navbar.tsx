import ButtonSwift from './button';

export default function SwiftNavbar() {
  return (
    <nav className="flex items-center justify-around bg-bg-app-swift drop-shadow-xl h-56 text-xl">
      <div className="flex h-full w-full items-center">
        <div
          className="w-52 h-full flex items-center justify-center hover:cursor-pointer shadow-[4px_0_8px_-3px_rgba(0,0,0,0.2)] z-10 mr-20"
          onClick={() => (window.location.href = '/')}
        >
          <img className="w-52 h-full object-contain" src="/GGSTL_LOGO.png" />
        </div>

        <div
          className="w-52 h-full flex items-center justify-center hover:cursor-pointer"
          onClick={() => (window.location.href = '/swift-route')}
        >
          <img className="w-52 h-full object-contain" src="/GSROUTE_LOGO.jpeg" />
        </div>
      </div>
      <div className="hidden md:flex space-x-12 text-xl font-medium text-text-main-swift items-end flex-row w-full h-15 ml-10">
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
      </div>
      {/* Auth Buttons */}
      <div className="flex items-center space-x-4 mr-15">
        <ButtonSwift onClick={() => (window.location.href = '/swift/login')} BgType="clear">
          Log in
        </ButtonSwift>
        <ButtonSwift onClick={() => (window.location.href = '/swift/signup')} BgType="colored">
          Sign up
        </ButtonSwift>
      </div>
    </nav>
  );
}
