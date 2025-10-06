'use client';

import { useState } from 'react';

interface Chatprops {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Chatbot = ({ open, setOpen }: Chatprops) => {
  return (
    <>
      {open && (
        <div className="fixed bottom-4 right-4 w-full max-w-sm sm:max-w-lg md:max-w-xl h-[600px] sm:h-[686px] bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col z-30">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-t-[30px]">
            <div className="text-2xl font-medium text-zinc-700 font-montserrat">AI Advisor</div>
            <button
              className="text-pink-600 text-2xl font-inter font-normal"
              onClick={() => setOpen(false)}
            >
              x
            </button>
          </div>

          {/* Chat area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="text-zinc-700 text-lg sm:text-2xl font-medium font-montserrat">
              Hello! Of course, what destination you want to search?
            </div>
            <div className="text-zinc-700 text-lg sm:text-2xl font-medium font-montserrat">
              I want to see opportunities to go to India! But I also want to see travels to all
              Asia! Like Japan, China, South Korea...
            </div>
            <div className="text-zinc-700 text-lg sm:text-2xl font-medium font-montserrat">
              Great choice! Here are some great Offers for you:
            </div>
            <div className="text-pink-600 text-4xl sm:text-6xl font-medium tracking-widest">
              ...
            </div>
          </div>

          {/* Input area */}
          <div className="p-4 bg-neutral-200 rounded-full flex items-center gap-3">
            <div className="flex-1 text-neutral-400 text-lg sm:text-2xl font-medium font-montserrat">
              Type here...
            </div>
            <button className="w-20 h-10 bg-white rounded-xl shadow-md border text-text-highlight-swift">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};
