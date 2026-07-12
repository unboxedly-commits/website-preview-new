"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
      >
        <Bot size={16} className="text-blue-400" />
        <span className="text-xs font-mono text-white/80 uppercase tracking-wider">Automated Lead Generation for Local Businesses</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight max-w-5xl leading-tight"
      >
        Websites with built-in AI that<br />
        <span className="text-gradient">capture leads 24/7.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 text-lg md:text-xl text-white/60 text-center max-w-2xl font-light leading-relaxed"
      >
        We build fixed-price web platforms equipped with AI receptionists to handle your after-hours calls and automated follow-ups. Save hours of manual work. No meetings required.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-4"
      >
        <button 
          onClick={() => {
            const pricingElement = document.getElementById('pricing');
            if(pricingElement) pricingElement.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
        >
          View Packages
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => window.location.href = '/audit'}
          className="px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
        >
          <Zap size={18} />
          Get a Free Video Audit
        </button>
      </motion.div>
    </div>
  );
}
