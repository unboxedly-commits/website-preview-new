"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { VULNERABILITIES } from './data';

export default function TerminalLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeData = VULNERABILITIES[activeIndex];

  // Auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VULNERABILITIES.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  // Simulate scrolling logs
  useEffect(() => {
    setLogs(prev => {
      const newLogs = [...prev, `[${new Date().toISOString().split('T')[1].substring(0, 8)}] [SCAN] Analyzing sector ${Math.floor(Math.random() * 999)}... OK`];
      if (newLogs.length > 20) newLogs.shift();
      return newLogs;
    });
    
    const timeout = setTimeout(() => {
      setLogs(prev => {
        const newLogs = [...prev, `[${new Date().toISOString().split('T')[1].substring(0, 8)}] [ALERT] ${activeData.title} detected!`];
        if (newLogs.length > 20) newLogs.shift();
        return newLogs;
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeIndex, activeData.title]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="relative rounded-2xl border bg-[#080d1a]/95 border-slate-800 shadow-[0_0_50px_rgba(11,17,32,0.8)] overflow-hidden font-mono flex flex-col md:flex-row min-h-[400px]">
      
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 z-20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="mx-auto text-xs text-slate-500 flex items-center gap-2">
          <Terminal size={12} /> root@zevenbots-core
        </div>
      </div>

      {/* Logs Section (Left) */}
      <div className="w-full md:w-1/2 pt-10 p-6 border-b md:border-b-0 md:border-r border-slate-800/50 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/20" />
        <div 
          ref={containerRef}
          className="h-full overflow-hidden text-[11px] md:text-xs text-slate-400 space-y-1 flex flex-col justify-end"
        >
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${log.includes('[ALERT]') ? 'text-red-400 font-bold' : ''}`}
            >
              {log}
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080d1a] to-transparent" />
      </div>

      {/* Execution Section (Right) */}
      <div className="w-full md:w-1/2 pt-10 p-8 flex flex-col justify-center relative bg-gradient-to-br from-blue-950/10 to-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Threat Box */}
            <div className="border border-red-500/20 bg-red-500/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 text-red-400 mb-2">
                <ShieldAlert size={16} />
                <span className="text-xs uppercase tracking-widest font-bold">Threat Identified</span>
              </div>
              <h4 className="text-white/80 font-sans font-bold text-lg">{activeData.title}</h4>
              <p className="text-white/40 text-sm font-sans mt-1">{activeData.description}</p>
            </div>

            {/* Connecting Line */}
            <div className="flex flex-col items-center -my-2 z-10">
              <div className="w-[1px] h-6 bg-slate-800" />
              <div className="bg-slate-800 px-2 text-[9px] text-slate-500 tracking-widest rounded-full">DEPLOYING</div>
              <div className="w-[1px] h-6 bg-blue-500/30" />
            </div>

            {/* Countermeasure Box */}
            <div className="border border-blue-500/30 bg-blue-500/10 p-5 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="flex items-center gap-3 text-blue-400 mb-3">
                <CheckCircle2 size={16} />
                <span className="text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                  Countermeasure Active
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-4 bg-blue-400 inline-block"
                  />
                </span>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="text-blue-400 mt-1">{activeData.countermeasure.icon}</div>
                <div>
                  <h4 className="text-blue-100 font-sans font-bold text-xl mb-1">{activeData.countermeasure.title}</h4>
                  <p className="text-white/50 text-sm font-sans">{activeData.countermeasure.description}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4 pt-4 border-t border-blue-500/10">
                {activeData.countermeasure.metrics.map((m, idx) => (
                  <div key={idx} className="bg-blue-950/40 px-3 py-1.5 rounded border border-blue-500/20 text-blue-300 text-xs">
                    {m}
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
