import ButtonSwift from './button';

export default function SwiftNavbar() {
  return (
    <nav className="flex items-center justify-around bg-bg-app-swift drop-shadow-xl h-56 text-xl">
      <div className="flex h-full w-full items-center">
        <div
          className="w-52 h-full flex items-center justify-center hover:cursor-pointer shadow-[0px_4px_13.300000190734863px_1px_rgba(0,0,0,0.25)] z-10 mr-20"
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

{
  /* <div class="w-[1920px] h-[3296px] relative bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
    <div class="w-[1920px] h-56 left-0 top-0 absolute bg-white shadow-[0px_4px_13.300000190734863px_1px_rgba(0,0,0,0.25)]"></div>
    <div class="w-[1920px] h-96 left-0 top-[2773px] absolute bg-zinc-700"></div>
    <div class="w-[1920px] h-28 left-0 top-[3179px] absolute bg-pink-600"></div>
    <div class="w-52 h-56 left-[-2px] top-0 absolute bg-white shadow-[4px_-1px_8.100000381469727px_3px_rgba(0,0,0,0.25)]"></div>
    <div class="w-40 h-20 left-[1532px] top-[82px] absolute bg-white rounded-[50px] shadow-[0px_4px_11.699999809265137px_1px_rgba(0,0,0,0.25)] border-2 border-pink-600"></div>
    <div class="w-40 h-20 left-[1701px] top-[82px] absolute bg-pink-600 rounded-[50px] shadow-[0px_4px_11.699999809265137px_1px_rgba(0,0,0,0.25)] border-2"></div>
    <div class="left-[794px] top-[122px] absolute justify-start text-pink-600 text-xl font-bold font-['Montserrat']">Book Flight</div>
    <div class="left-[971px] top-[122px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Money Transfer</div>
    <div class="left-[1182px] top-[122px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Blog Diaspora</div>
    <div class="left-[1380px] top-[122px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Contact</div>
    <div class="left-[1577px] top-[111px] absolute justify-start text-pink-600 text-xl font-medium font-['Montserrat']">Log in</div>
    <div class="left-[1739px] top-[111px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Sign up</div>
    <div class="w-[1560px] h-32 left-[198px] top-[288px] absolute bg-white rounded-[100px] outline outline-[3px] outline-pink-600"></div>
    <img class="w-[1373px] h-96 left-[274px] top-[887px] absolute rounded-[50px]" src="https://placehold.co/1373x387" />
    <div class="w-96 h-24 left-[783px] top-[2622px] absolute bg-white rounded-[50px] border-2 border-pink-600"></div>
    <img class="w-[475px] h-60 left-[218px] top-[460px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[218px] top-[706px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[248px] top-[719px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Paris</div>
    <div class="left-[540px] top-[738px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[511px] top-[748px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[248px] top-[765px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[248px] top-[797px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <div class="w-56 h-10 left-[218px] top-[495px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[237px] top-[504px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <img class="w-[475px] h-60 left-[722px] top-[460px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-56 h-10 left-[722px] top-[495px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[741px] top-[504px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <div class="w-[475px] h-32 left-[722px] top-[706px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[752px] top-[719px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Rio de...</div>
    <div class="left-[1044px] top-[738px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1015px] top-[748px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[752px] top-[765px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[752px] top-[797px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[1226px] top-[460px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-56 h-10 left-[1226px] top-[495px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[1245px] top-[504px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <div class="w-[475px] h-32 left-[1226px] top-[706px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[1256px] top-[719px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Japan</div>
    <div class="left-[1548px] top-[738px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1519px] top-[748px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[1256px] top-[765px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[1256px] top-[797px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <div class="w-96 h-20 left-[248px] top-[311px] absolute bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600"></div>
    <div class="w-96 h-20 left-[627px] top-[311px] absolute bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600"></div>
    <div class="w-72 h-20 left-[1006px] top-[311px] absolute bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600"></div>
    <div class="w-60 h-20 left-[1328px] top-[311px] absolute bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600"></div>
    <div class="w-20 h-20 left-[1584px] top-[311px] absolute bg-pink-600 rounded-[50px] border"></div>
    <div class="w-52 h-28 left-[1805px] top-[749px] absolute bg-white rounded-[20px] shadow-[6px_9px_13.800000190734863px_7px_rgba(0,0,0,0.25)]"></div>
    <div class="w-52 h-28 left-[1805px] top-[627px] absolute bg-white rounded-[20px] shadow-[6px_9px_13.800000190734863px_7px_rgba(0,0,0,0.25)]"></div>
    <div class="w-80 h-28 left-[1652px] top-[505px] absolute bg-white rounded-[20px] shadow-[6px_9px_13.800000190734863px_7px_rgba(0,0,0,0.25)]"></div>
    <img class="w-48 h-48 left-[313px] top-[14px] absolute" src="https://placehold.co/189x189" />
    <img class="w-32 h-32 left-[39px] top-[39px] absolute" src="https://placehold.co/131x130" />
    <div class="left-[277px] top-[318px] absolute justify-start text-pink-600 text-base font-medium font-['Montserrat']">Origin</div>
    <div class="left-[300px] top-[344px] absolute justify-start text-zinc-400 text-xl font-medium font-['Montserrat']">São Paulo - Guarulh...</div>
    <div class="left-[686px] top-[344px] absolute justify-start text-zinc-400 text-xl font-medium font-['Montserrat']">enter your destination ci...</div>
    <div class="left-[1059px] top-[344px] absolute justify-start text-zinc-400 text-xl font-medium font-['Montserrat']">outward</div>
    <div class="left-[1196px] top-[344px] absolute justify-start text-zinc-400 text-xl font-medium font-['Montserrat']">return</div>
    <div class="left-[1379px] top-[344px] absolute justify-start text-zinc-400 text-xl font-medium font-['Montserrat']">1 person, eco...</div>
    <div class="left-[657px] top-[318px] absolute justify-start text-pink-600 text-base font-medium font-['Montserrat']">Destination</div>
    <div class="left-[1036px] top-[318px] absolute justify-start text-pink-600 text-base font-medium font-['Montserrat']">Date</div>
    <div class="left-[1360px] top-[318px] absolute justify-start text-pink-600 text-base font-medium font-['Montserrat']">Passengers and Class</div>
    <div class="left-[1734px] top-[546px] absolute justify-start text-zinc-700 text-xl font-bold font-['Montserrat']">Money Transfer</div>
    <div class="left-[1682px] top-[533px] absolute justify-start text-pink-600 text-4xl font-black font-['Montserrat']">$</div>
    <div class="left-[1734px] top-[546px] absolute justify-start text-zinc-700 text-xl font-bold font-['Montserrat']">Money Transfer</div>
    <div class="left-[1682px] top-[533px] absolute justify-start text-pink-600 text-4xl font-black font-['Montserrat']">$</div>
    <div class="w-20 h-20 left-[1584px] top-[311px] absolute"></div>
    <img class="w-14 h-14 left-[1598px] top-[323px] absolute" src="https://placehold.co/53x53" />
    <img class="w-[475px] h-60 left-[220px] top-[1320px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[220px] top-[1566px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[250px] top-[1579px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Paris</div>
    <div class="left-[542px] top-[1598px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[513px] top-[1608px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[250px] top-[1625px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[250px] top-[1657px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[724px] top-[1320px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[724px] top-[1566px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[754px] top-[1579px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Rio de...</div>
    <div class="left-[1046px] top-[1598px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1017px] top-[1608px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[754px] top-[1625px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[754px] top-[1657px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[1228px] top-[1320px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[1228px] top-[1566px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[1258px] top-[1579px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Japan</div>
    <div class="left-[1550px] top-[1598px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1521px] top-[1608px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[1258px] top-[1625px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[1258px] top-[1657px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[220px] top-[2168px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[220px] top-[2414px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[250px] top-[2427px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Paris</div>
    <div class="left-[542px] top-[2446px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[513px] top-[2456px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[250px] top-[2473px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[250px] top-[2505px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[724px] top-[2168px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-56 h-10 left-[724px] top-[2203px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[743px] top-[2212px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <div class="w-[475px] h-32 left-[724px] top-[2414px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[754px] top-[2427px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Rio de...</div>
    <div class="left-[1046px] top-[2446px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1017px] top-[2456px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[754px] top-[2473px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[754px] top-[2505px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[1228px] top-[2168px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[1228px] top-[2414px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[1258px] top-[2427px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Japan</div>
    <div class="left-[1550px] top-[2446px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1521px] top-[2456px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[1258px] top-[2473px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[1258px] top-[2505px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[220px] top-[1744px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[220px] top-[1990px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[250px] top-[2003px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Paris</div>
    <div class="left-[542px] top-[2022px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[513px] top-[2032px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[250px] top-[2049px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[250px] top-[2081px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <div class="w-56 h-10 left-[220px] top-[1779px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[239px] top-[1788px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <img class="w-[475px] h-60 left-[724px] top-[1744px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-[475px] h-32 left-[724px] top-[1990px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[754px] top-[2003px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Rio de...</div>
    <div class="left-[1046px] top-[2022px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1017px] top-[2032px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[754px] top-[2049px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[754px] top-[2081px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <img class="w-[475px] h-60 left-[1228px] top-[1744px] absolute rounded-tl-[30px] rounded-tr-[30px]" src="https://placehold.co/475x246" />
    <div class="w-56 h-10 left-[1228px] top-[1779px] absolute bg-pink-600 rounded-tr-[30px] rounded-br-[30px]"></div>
    <div class="left-[1247px] top-[1788px] absolute justify-start text-white text-xl font-extrabold font-['Montserrat']">Unmissable Offer</div>
    <div class="w-[475px] h-32 left-[1228px] top-[1990px] absolute bg-white rounded-bl-[30px] rounded-br-[30px] border border-stone-300"></div>
    <div class="left-[1258px] top-[2003px] absolute justify-start text-zinc-700 text-3xl font-medium font-['Montserrat']">Flight to Japan</div>
    <div class="left-[1550px] top-[2022px] absolute justify-start text-zinc-700 text-5xl font-medium font-['Montserrat']">1.840</div>
    <div class="left-[1521px] top-[2032px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">U$</div>
    <div class="left-[1258px] top-[2049px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Leaving Sao Paulo</div>
    <div class="left-[1258px] top-[2081px] absolute justify-start text-zinc-700 text-xl font-medium font-['Montserrat']">Round Trip</div>
    <div class="left-[879px] top-[2652px] absolute justify-start text-pink-600 text-3xl font-light font-['Montserrat']">Load more</div>
    <div class="w-16 h-16 left-[583px] top-[321px] absolute bg-white rounded-[330px] border-[3px] border-pink-600"></div>
    <img class="w-10 h-10 left-[596px] top-[332px] absolute" src="https://placehold.co/40x40" />
    <div class="w-6 h-6 left-[265px] top-[343px] absolute rounded-full border-2 border-zinc-700"></div>
    <img class="w-9 h-11 left-[648px] top-[333px] absolute" src="https://placehold.co/38x45" />
    <img class="w-6 h-6 left-[1026px] top-[344px] absolute" src="https://placehold.co/23x24" />
    <img class="w-6 h-6 left-[1165px] top-[344px] absolute" src="https://placehold.co/23x24" />
    <img class="w-8 h-8 left-[1345px] top-[336px] absolute" src="https://placehold.co/34x34" />
    <div class="left-[144px] top-[3226px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Copyright 2025 Travelator, Inc. dba Gilead. All rights reserved. XXX #0000000-00</div>
    <div class="w-52 left-[1363px] top-[3226px] absolute justify-start text-white text-xl font-bold font-['Montserrat']">Terms & Conditions</div>
    <div class="w-52 left-[244px] top-[2935px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 1</div>
    <div class="w-52 left-[604px] top-[2935px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 1</div>
    <div class="w-52 left-[244px] top-[2865px] absolute justify-start text-white text-4xl font-bold font-['Montserrat']">Tittle</div>
    <div class="w-52 left-[604px] top-[2865px] absolute justify-start text-white text-4xl font-bold font-['Montserrat']">Tittle</div>
    <div class="w-52 left-[244px] top-[2988px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 2</div>
    <div class="w-52 left-[604px] top-[2988px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 2</div>
    <div class="w-52 left-[244px] top-[3041px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 3</div>
    <div class="w-52 left-[604px] top-[3041px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">Option 3</div>
    <div class="w-64 left-[1392px] top-[2943px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">SAC 00000000-000</div>
    <div class="w-80 left-[1392px] top-[2982px] absolute justify-start text-white text-xl font-medium font-['Montserrat']">emailfilead@empresa.com</div>
    <div class="w-52 left-[1600px] top-[3229px] absolute justify-start text-white text-base font-semibold font-['Montserrat']">Privacy Policy</div>
    <img class="w-10 h-10 left-[1392px] top-[3024px] absolute" src="https://placehold.co/41x41" />
    <img class="w-10 h-10 left-[1451px] top-[3024px] absolute" src="https://placehold.co/41x41" />
    <div class="w-10 h-10 left-[1510px] top-[3024px] absolute bg-white rounded-full"></div>
    <img class="w-12 h-12 left-[1507px] top-[3021px] absolute" src="https://placehold.co/47x47" />
</div> */
}
