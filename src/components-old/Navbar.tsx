"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SHADES = [
    { name: 'slate', class: 'bg-slate-500' },
    { name: 'zinc', class: 'bg-zinc-500' },
    { name: 'red', class: 'bg-red-500' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'amber', class: 'bg-amber-500' },
    { name: 'yellow', class: 'bg-yellow-500' },
    { name: 'lime', class: 'bg-lime-500' },
    { name: 'green', class: 'bg-green-500' },
    { name: 'emerald', class: 'bg-emerald-500' },
    { name: 'cyan', class: 'bg-cyan-500' },
    { name: 'sky', class: 'bg-sky-500' },
    { name: 'blue', class: 'bg-blue-500' },
    { name: 'indigo', class: 'bg-indigo-500' },
    { name: 'violet', class: 'bg-violet-500' },
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'fuchsia', class: 'bg-fuchsia-500' },
    { name: 'pink', class: 'bg-pink-500' },
    { name: 'rose', class: 'bg-rose-500' },
  ];

  return (
    <>
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
            <span className="font-bold tracking-tight text-lg text-white/90">ZevenBots</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
            <button onClick={() => scrollTo('showcases')} className="px-4 py-2 rounded-lg text-[11px] uppercase tracking-widest font-mono text-white/50 hover:text-blue-200 border border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">Showcases</button>
            <button onClick={() => scrollTo('process')} className="px-4 py-2 rounded-lg text-[11px] uppercase tracking-widest font-mono text-white/50 hover:text-blue-200 border border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">How it works</button>
            <button onClick={() => scrollTo('pricing')} className="px-4 py-2 rounded-lg text-[11px] uppercase tracking-widest font-mono text-white/50 hover:text-blue-200 border border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">Pricing</button>
          </div>

          <button 
            onClick={() => window.location.href = '/audit'}
            className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Get Free Audit
          </button>
        </motion.nav>
      </div>
    </>
  );
}
