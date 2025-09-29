import React from 'react';

export const SwiftFooter = () => {
  return (
    <footer className="bg-btn-primary-hover-swift text-white p-6 md:px-20 flex flex-row justify-around content-around items-center gap-4">
      <div className="text-lg font-bold  md:flex-row justify-around gap-8 md:gap-4">
        Copyright 2025 Travelator, Inc. dba Gilead. All rights reserved.
      </div>

      <div className="flex flex-row gap-2 text-center md:text-left">
        <h3 className="text-lg font-bold">Terms and Conditions</h3>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default SwiftFooter;
