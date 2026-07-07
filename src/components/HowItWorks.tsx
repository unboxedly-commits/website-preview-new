"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Strategy",
      desc: "We dive deep into your brand identity, target audience, and revenue goals to engineer a platform that converts."
    },
    {
      icon: PenTool,
      title: "Design & Architecture",
      desc: "Our architects wireframe and design a bespoke digital experience tailored specifically to dominate your industry."
    },
    {
      icon: Rocket,
      title: "Deployment & Growth",
      desc: "We launch your scalable, high-performance platform and hand over the keys to your new digital empire."
    }
  ];

  return (
    <section id="process" className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The <span className="text-gradient">Process</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
          A seamless, transparent journey from initial concept to a high-converting digital product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Animated Connecting Data Stream for desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
          />
        </div>
        
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 300 }}
            className="flex flex-col items-center text-center relative z-10 group cursor-default"
          >
            <div className="relative w-24 h-24 mb-8">
              {/* Spinning/pulsing aura on hover */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
              
              <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-white/30 group-hover:bg-white/10 transition-colors duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
                {/* Sweep effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <step.icon size={32} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4 group-hover:text-blue-400 transition-colors">Phase 0{i + 1}</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{step.title}</h3>
            <p className="text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
