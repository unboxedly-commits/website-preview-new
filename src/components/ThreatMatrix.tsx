"use client";

import React from 'react';
import BentoLayout from './threat-matrix/BentoLayout';

export default function ThreatMatrix() {
  return (
    <div className="w-full relative z-10 flex flex-col gap-16 pb-20">
      {/* Title Area */}
      <div className="text-center mb-4 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#faf9f5] mb-4" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97757] to-[#6a9bcc]">Threat Matrix</span>
        </h2>
        <p className="text-[#faf9f5]/70 max-w-2xl mx-auto" style={{ fontFamily: "Lora, Georgia, serif" }}>
          Every slow page load and missed call costs you money. We plug the revenue leaks in your business.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <BentoLayout />
      </div>
    </div>
  );
}


