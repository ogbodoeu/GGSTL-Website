import { useState } from 'react';

interface SlideButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  position: 'top' | 'middle' | 'bottom';
}

enum Position {
  top = 'top-4/14',
  middle = 'top-5/14',
  bottom = 'top-6/14',
}

export const SlideButton = ({ icon, label, onClick, position }: SlideButtonProps) => {
  const pos = Position[position];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed right-0 ${pos} flex items-center group cursor-pointer z-21`}
    >
      <div
        className={`
          bg-white shadow-md rounded-l-2xl flex items-center gap-3
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${hovered ? 'w-48' : 'w-14'}
          h-18 w-20
        `}
      >
        <div className="flex justify-center items-center w-24 h-24 text-pink-600">{icon}</div>
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
