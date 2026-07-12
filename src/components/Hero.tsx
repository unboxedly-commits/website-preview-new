"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glowing effects using brand colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d97757]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#6a9bcc]/10 rounded-full blur-[100px] pointer-events-none" />
      


      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight max-w-5xl leading-tight"
        style={{ fontFamily: "Poppins, Arial, sans-serif" }}
      >
        Websites that drive traffic and<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97757] to-[#6a9bcc]">book jobs.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 text-lg md:text-xl text-[#faf9f5]/70 text-center max-w-2xl font-light leading-relaxed"
        style={{ fontFamily: "Lora, Georgia, serif" }}
      >
        We build fast, reliable websites designed to turn clicks into paying customers. Stop losing leads to bad design and slow pages. Optional AI workflows capture leads while you sleep.
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
          className="px-8 py-4 bg-[#d97757] text-[#141413] rounded-full font-medium hover:bg-[#d97757]/90 transition-colors flex items-center gap-2 group shadow-[0_0_40px_rgba(217,119,87,0.3)] hover:shadow-[0_0_60px_rgba(217,119,87,0.5)]"
        >
          View Packages
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => window.location.href = '/audit'}
          className="px-8 py-4 glass text-[#faf9f5] rounded-full font-medium hover:bg-[#faf9f5]/5 transition-colors flex items-center gap-2"
        >
          <Zap size={18} className="text-[#6a9bcc]" />
          Get a Free Site Audit
        </button>
      </motion.div>
    </div>
  );
}
