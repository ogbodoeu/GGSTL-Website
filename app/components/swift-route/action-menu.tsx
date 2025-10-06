import { useState } from 'react';

interface SlideButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  position: 'top' | 'middle' | 'bottom';
}

enum Position {
  top = 'lg:top-4/15 top-4/15 ',
  middle = 'lg:top-5/15 top-5/15 ',
  bottom = 'lg:top-6/15 top-6/15',
}

export const SlideButton = ({ icon, label, onClick, position }: SlideButtonProps) => {
  const pos = Position[position];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed right-0 ${pos} flex items-center group cursor-pointer z-31`}
    >
      <div
        className={`
          bg-white shadow-md rounded-l-2xl flex items-center gap-3
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${hovered ? 'w-48 display-block' : 'w-14 display-none'}
        `}
      >
        <div className="flex justify-center self-center items-center w-24 h-14 text-pink-600 translate-x-4">
          {icon}
        </div>
        <span
          className={`whitespace-nowrap font-medium text-gray-800 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
