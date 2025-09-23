export default function SwiftNavbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-1 bg-white drop-shadow-lg h-52">
      {/* Logo and Separator */}
      <div className=" flex items-center space-x-2">
        <div className=" w-52 h-full drop-shadow-[8px_0_4px_rgba(0,0,0,0.5)] bg-white flex items-center justify-center">
          <img className="w-52 h-full" src="/GGSTL_LOGO.png"></img>
        </div>
        <div className="flex items-center space-x-1">
          <img className="w-52 h-full" src="/GSROUTE_LOGO.jpeg"></img>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <a href="/swift/book" className="hover:text-pink-600 transition-colors">
          Book Flight
        </a>
        <a href="/swift/money-transfer" className="hover:text-pink-600 transition-colors">
          Money Transfer
        </a>
        <a href="/swift/blog" className="hover:text-pink-600 transition-colors">
          Blog Diaspora
        </a>
        <a href="/swift/contact" className="hover:text-pink-600 transition-colors">
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-2">
        <a
          href="/swift/login"
          className="px-4 py-1 border border-pink-600 text-pink-600 rounded-md font-semibold text-sm hover:bg-pink-50 transition-colors"
        >
          Log in
        </a>
        <a
          href="/swift/signup"
          className="px-4 py-1 bg-pink-600 text-white rounded-md font-semibold text-sm hover:bg-pink-700 transition-colors"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
}
