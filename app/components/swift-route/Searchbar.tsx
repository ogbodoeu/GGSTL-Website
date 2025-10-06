interface SearchBarProps {
  onSearch: () => void;
  onSwap: () => void;
}

export const SearchBar = ({ onSearch, onSwap }: SearchBarProps) => {
  return (
    <div className="w-full max-w-[1560px] mx-auto p-4">
      <div className="w-full bg-white rounded-3xl lg:rounded-full outline-[3px] outline-pink-600 flex flex-col gap-4 p-4 md:flex-row md:items-center md:gap-4 flex-wrap">
        {/* Origin input */}
        <div className="flex flex-col flex-1 min-w-[200px] bg-white rounded-full shadow-md outline-[3px] outline-pink-600 px-4 py-2">
          <label className="text-pink-600 text-sm md:text-base font-medium font-['Montserrat']">
            Origin
          </label>
          <input
            type="text"
            placeholder="São Paulo - Guarulh..."
            className="text-zinc-400 text-base md:text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        {/* Swap button */}
        <div
          className="self-center md:self-auto w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-2 md:border-3 border-pink-600 flex items-center justify-center cursor-pointer z-10"
          onClick={onSwap}
        >
          <img
            src="app/components/swift-route/arrows.png"
            alt="Swap"
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </div>

        {/* Destination input */}
        <div className="flex flex-col flex-1 min-w-[200px] bg-white rounded-full shadow-md outline-[3px] outline-pink-600 px-4 py-2">
          <label className="text-pink-600 text-sm md:text-base font-medium font-['Montserrat']">
            Destination
          </label>
          <input
            type="text"
            placeholder="Enter your destination..."
            className="text-zinc-400 text-base md:text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        {/* Date input */}
        <div className="flex flex-col flex-1 min-w-[150px] bg-white rounded-full shadow-md outline-[3px] outline-pink-600 px-4 py-2">
          <label className="text-pink-600 text-sm md:text-base font-medium font-['Montserrat']">
            Date
          </label>
          <input
            type="text"
            placeholder="Outward / Return"
            className="text-zinc-400 text-base md:text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        {/* Passengers/Class input */}
        <div className="flex flex-col flex-1 min-w-[180px] bg-white rounded-full shadow-md outline-[3px] outline-pink-600 px-4 py-2">
          <label className="text-pink-600 text-sm md:text-base font-medium font-['Montserrat']">
            Passengers and Class
          </label>
          <input
            type="text"
            placeholder="1 person, eco..."
            className="text-zinc-400 text-base md:text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
          />
        </div>

        {/* Search button */}
        <button
          onClick={onSearch}
          className="self-center md:self-auto w-14 h-14 md:w-20 md:h-20 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
        >
          <img
            src="app/components/swift-route/magnifier.png"
            alt="Search"
            className="w-8 h-8 md:w-8 md:h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
