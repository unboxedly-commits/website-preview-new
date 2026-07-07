"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Dynamic values based on scroll
  const navWidth = useTransform(scrollY, [0, 100], ["95%", "70%"]);
  const blurValue = useTransform(scrollY, [0, 100], ["blur(10px)", "blur(20px)"]);
  const bgOpacity = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.05)", "rgba(10,10,15,0.8)"]);
  const borderOpacity = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)"]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          width: navWidth, 
          backdropFilter: blurValue,
          backgroundColor: bgOpacity,
          borderColor: borderOpacity,
          borderWidth: "1px"
        }}
        className="flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-white/20 to-white/5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            <Hexagon size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-lg text-white/90">AGENCY_OS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
          <button onClick={() => scrollTo('showcases')} className="hover:text-white transition-colors tracking-wide">Showcases</button>
          <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors tracking-wide">How it works</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors tracking-wide">Pricing</button>
        </div>

        <button 
          onClick={() => window.location.href = '/onboarding'}
          className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Initialize Project
        </button>
      </motion.nav>
    </div>
  );
}
