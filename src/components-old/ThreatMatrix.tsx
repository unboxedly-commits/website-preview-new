"use client";

import React from 'react';
import BentoLayout from './threat-matrix/BentoLayout';

export default function ThreatMatrix() {
  return (
    <div className="w-full relative z-10 flex flex-col gap-16 pb-20">
      {/* Title Area */}
      <div className="text-center mb-4 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">Threat Matrix</span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          Traditional agencies are vulnerable. We deploy autonomous AI systems to eliminate bottlenecks and scale infinitely.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <BentoLayout />
      </div>
    </div>
  );
}
