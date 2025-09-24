interface ButtonSwiftProps {
  onClick?: () => void;
  BgType: 'clear' | 'colored';
  children?: React.ReactNode;
}
export default function ButtonSwift({ onClick, children, BgType }: ButtonSwiftProps) {
  if (BgType === 'clear') {
    return (
      <button
        className="h-20 w-40 px-4 py-2 rounded-full border-2 bg-inherit border-btn-secondary-swift text-text-main-swift font-medium transition-colors"
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (BgType === 'colored') {
    return (
      <button
        className="h-20 w-40 px-4 py-2 rounded-full border-2 bg-btn-secondary-swift text-white font-medium text-sm hover:bg-pink-700 transition-colors"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
// width: 153;
// height: 82;
// angle: 0 deg;
// opacity: 1;
// top: 82px;
// left: 1532px;
// border-radius: 50px;
// border-width: 2px;
