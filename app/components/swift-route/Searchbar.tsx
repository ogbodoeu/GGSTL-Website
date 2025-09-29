interface SearchBarProps {
  onSearch: () => void;
  onSwap: () => void;
}

export const SearchBar = ({ onSearch, onSwap }: SearchBarProps) => {
  return (
    <div className="w-full max-w-[1560px] h-32 relative mx-auto">
      {/* Background */}
      <div className="absolute w-full h-32 left-0 top-0 bg-white rounded-[100px] outline outline-[3px] outline-pink-600" />

      {/* Origin input */}
      <div className="absolute left-[50px] top-[23px] w-96 h-20 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600 flex flex-col justify-center px-6">
        <label className="text-pink-600 text-base font-medium font-['Montserrat']">Origin</label>
        <input
          type="text"
          placeholder="São Paulo - Guarulh..."
          className="text-zinc-400 text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
        />
      </div>

      {/* Destination input */}
      <div className="absolute left-[429px] top-[23px] w-96 h-20 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600 flex flex-col justify-center px-6">
        <label className="text-pink-600 text-base font-medium font-['Montserrat']">
          Destination
        </label>
        <input
          type="text"
          placeholder="Enter your destination..."
          className="text-zinc-400 text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
        />
      </div>

      {/* Swap button */}
      <div
        className="absolute left-[385px] top-[33px] w-16 h-16 bg-white rounded-full border-3 border-pink-600 flex items-center justify-center cursor-pointer z-10"
        onClick={onSwap}
      >
        <img src="https://placehold.co/40x40" alt="Swap" className="w-10 h-10" />
      </div>

      {/* Date input */}
      <div className="absolute left-[808px] top-[23px] w-72 h-20 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600 flex flex-col justify-center px-6">
        <label className="text-pink-600 text-base font-medium font-['Montserrat']">Date</label>
        <input
          type="text"
          placeholder="Outward / Return"
          className="text-zinc-400 text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
        />
      </div>

      {/* Passengers/Class input */}
      <div className="absolute left-[1130px] top-[23px] w-60 h-20 bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-pink-600 flex flex-col justify-center px-6">
        <label className="text-pink-600 text-base font-medium font-['Montserrat']">
          Passengers and Class
        </label>
        <input
          type="text"
          placeholder="1 person, eco..."
          className="text-zinc-400 text-xl font-medium font-['Montserrat'] bg-transparent outline-none placeholder:text-zinc-400"
        />
      </div>

      {/* Search button */}
      <button
        onClick={onSearch}
        className="absolute left-[1386px] top-[23px] w-20 h-20 bg-pink-600 rounded-[50px] border flex items-center justify-center hover:bg-pink-700 transition-colors"
      >
        <img src="https://placehold.co/53x53" alt="Search" className="w-14 h-14" />
      </button>
    </div>
  );
};
export default SearchBar;
