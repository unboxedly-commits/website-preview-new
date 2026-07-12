"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, AlertTriangle } from 'lucide-react';
import { VULNERABILITIES } from './data';

export default function RadarLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = VULNERABILITIES[activeIndex];

  // Auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VULNERABILITIES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl border bg-[#080d1a]/95 border-slate-800 shadow-[0_0_50px_rgba(11,17,32,0.8)] overflow-hidden font-sans flex flex-col md:flex-row min-h-[500px]">
      
      {/* Radar Section (Left) */}
      <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-slate-800 flex items-center justify-center relative min-h-[400px]">
        
        {/* Radar Rings */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/10" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-500/20" />
        <div className="absolute w-[100px] h-[100px] rounded-full border border-blue-500/30 bg-blue-900/10 flex items-center justify-center">
          <Shield className="w-8 h-8 text-blue-400/50" />
        </div>
        
        {/* Crosshairs */}
        <div className="absolute w-[400px] h-[1px] bg-blue-500/10" />
        <div className="absolute h-[400px] w-[1px] bg-blue-500/10" />

        {/* Sweeping Radar Line */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150px] h-[150px] origin-bottom-right bottom-1/2 right-1/2 bg-gradient-to-tr from-transparent via-blue-500/20 to-blue-400/40 border-r border-t border-blue-400/50 rounded-tr-full"
        />

        {/* Threat Blips */}
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute z-20 flex flex-col items-center"
            style={{ 
              top: '25%', 
              left: '60%' 
            }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-red-500 relative" />
            <div className="mt-2 bg-red-950/80 border border-red-500/30 px-2 py-1 rounded text-[9px] text-red-400 font-mono tracking-widest whitespace-nowrap">
              {activeData.title}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Analysis Section (Right) */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-transparent to-blue-950/20">
        
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-blue-400/50 mb-8 font-mono flex items-center gap-2">
          <Zap className="w-3 h-3" />
          Tactical Analysis
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Threat Description */}
            <div>
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <AlertTriangle size={14} />
                <h4 className="font-bold text-sm">Vulnerability Target</h4>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">{activeData.description}</p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/20 to-transparent my-2" />

            {/* Countermeasure */}
            <div>
              <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400 mb-3">
                {activeData.countermeasure.title}
              </h4>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {activeData.countermeasure.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {activeData.countermeasure.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                     <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-1">Projected Impact</span>
                     <span className="font-bold text-xl text-blue-300">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
