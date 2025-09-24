interface SearchBarProps {
  onSearch: () => void;
  onSwap: () => void;
}

export const SearchBar = ({ onSearch, onSwap }: SearchBarProps) => {
  return (
    <div className="w-8/12 h-32 bg-white rounded-[100px] outline-[3px] outline-highlight-swift flex items-center px-6 gap-6 shadow-sm font-medium">
      {/* <div className="w-96 h-20 bg-bg-app-swift rounded-[50px] shadow-md outline-[3px] outline-highlight-swift flex flex-col justify-center px-6">
        <label className="text-text-highlight-swift text-base">Origin</label>
        <input
          type="text"
          placeholder="São Paulo - Guarulh..."
          className="bg-transparent text-text-input text-xl outline-none placeholder:text-text-muted-swift"
        />
      </div>

      <button
        onClick={onSwap}
        className="size-20 bg-highlight-swift rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
      >
        <img src="app/components/swift-route/arrows.png" alt="Swap" className="size-10" />
      </button>

      <div className="w-96 h-20 bg-bg-app-swift rounded-[50px] shadow-md outline-[3px] outline-highlight-swift flex flex-col justify-center px-6">
        <label className="text-text-highlight-swift text-base">Destination</label>
        <input
          type="text"
          placeholder="enter your destination ci..."
          className="bg-transparent text-text-input text-xl outline-none placeholder:text-text-muted-swift"
        />
      </div>

      <div className="w-72 h-20 bg-bg-app-swift rounded-[50px] shadow-md outline-[3px] outline-highlight-swift flex flex-col justify-center px-6">
        <label className="text-text-highlight-swift text-base">Date</label>
        <input
          type="text"
          placeholder="outward / return"
          className="bg-transparent text-text-input text-xl outline-none placeholder:text-text-muted-swift"
        />
      </div>

      <div className="w-60 h-20 bg-bg-app-swift rounded-[50px] shadow-md outline-[3px] outline-highlight-swift flex flex-col justify-center px-6">
        <label className="text-text-highlight-swift text-base">Passengers and Class</label>
        <input
          type="text"
          placeholder="1 person, eco..."
          className="bg-transparent text-text-input text-xl outline-none placeholder:text-text-muted-swift"
        />
      </div>

      <button
        onClick={onSearch}
        className="size-20 bg-highlight-swift rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
      >
        <img src="app/components/swift-route/magnifier.png" alt="Search" className="size-10" />
      </button> */}
    </div>
  );
};

export default SearchBar;
