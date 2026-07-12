"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, Bot, Zap, Shield, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function AuditPage() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    
    // Simulate a scan process
    setTimeout(() => {
      setIsScanning(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <main className="relative bg-[#050510] min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center">
        
        <Link href="/" className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span className="text-sm font-mono tracking-widest uppercase">Back to Hub</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Bot size={14} /> J.A.R.V.I.S. Diagnostics
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Deep Scan</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Paste your website URL below. Our autonomous agent will analyze your current funnels, speed, and conversion bottlenecks in real-time.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <form onSubmit={handleScan} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center bg-[#0a0f1c] rounded-2xl border border-white/10 p-2 shadow-2xl">
                
                <div className="pl-4 pr-2 text-white/40">
                  <Search size={24} />
                </div>
                
                <input 
                  type="url" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg px-2 py-4 placeholder:text-white/20 font-mono"
                  required
                  disabled={isScanning}
                />
                
                <button 
                  type="submit"
                  disabled={isScanning || !url}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    isScanning 
                      ? 'bg-blue-500/20 text-blue-400 cursor-wait' 
                      : 'bg-blue-500 text-white hover:bg-blue-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  }`}
                >
                  {isScanning ? (
                    <>
                      <Zap size={18} className="animate-pulse" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      Deploy Agent <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 flex justify-center gap-8 text-sm font-mono text-white/30">
              <span className="flex items-center gap-2"><Shield size={14} /> Safe & Anonymous</span>
              <span className="flex items-center gap-2"><Zap size={14} /> Takes ~3 seconds</span>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl bg-[#0a0f1c] rounded-2xl border border-blue-500/30 p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Scan Complete: Critical Vulnerabilities Found</h3>
            <p className="text-white/50 mb-8">
              J.A.R.V.I.S. analyzed <span className="text-white font-mono">{url}</span> and detected 3 conversion bottlenecks and 2 operational inefficiencies.
            </p>
            
            <button 
              onClick={() => window.location.href = '/booking'} 
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              Book a Call to Review Full Report
            </button>
            
            <button 
              onClick={() => {
                setShowResult(false);
                setUrl('');
              }}
              className="mt-4 block w-full text-white/40 text-sm hover:text-white transition-colors"
            >
              Scan another website
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
