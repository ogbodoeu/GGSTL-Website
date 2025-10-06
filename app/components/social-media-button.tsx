import React from 'react';

export default function SocialMediaButton({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center bg-white shadow-lg rounded-full cursor-pointer hover:shadow-xl transition m-2 p-2 w-[300px] h-[60px]">
      {children} <span className="ml-2">{text}</span>
    </div>
  );
}
