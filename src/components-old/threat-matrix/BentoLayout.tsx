"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import { VULNERABILITIES } from './data';

export default function BentoLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const activeData = VULNERABILITIES[activeIndex];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VULNERABILITIES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative rounded-2xl backdrop-blur-xl overflow-hidden group bg-[#080d1a]/50 shadow-[0_0_80px_rgba(11,17,32,0.6)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
        <motion.div 
          key={activeIndex}
          className="h-full bg-gradient-to-r from-blue-500 to-sky-500"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "0%" : "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      <div className="flex flex-col md:flex-row relative z-10 min-h-[300px]">
        {/* Vulnerability Side */}
        <div className="w-full md:w-5/12 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-red-950/10 to-transparent">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-red-500/50 mb-6 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Detected Vulnerability
          </h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`vuln-${activeData.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4 text-white/80">
                <div className="p-3 bg-red-500/5 rounded-xl text-red-500/70">
                  {activeData.icon}
                </div>
                <h4 className="text-2xl font-bold">{activeData.title}</h4>
              </div>
              <p className="text-white/40 text-lg leading-relaxed">
                {activeData.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Countermeasure Side */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/30"
            animate={{ y: ['0px', '300px', '0px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          
          <h3 className="text-[10px] uppercase tracking-[0.2em] mb-6 font-mono flex items-center gap-2 text-blue-400">
            <Shield className="w-3 h-3" />
            Active Countermeasure
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={`counter-${activeData.id}`}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                    {activeData.countermeasure.icon}
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300 mb-2">
                      {activeData.countermeasure.title}
                    </h4>
                    <p className="text-white/50 text-lg leading-relaxed">
                      {activeData.countermeasure.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {activeData.countermeasure.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                       <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-1">Impact {i + 1}</span>
                       <span className="font-bold text-xl text-blue-400">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
