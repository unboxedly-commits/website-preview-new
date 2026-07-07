
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Activity, Shield } from "lucide-react";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-400 selection:text-black font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-[120px] opacity-20 mix-blend-screen" />
      </div>
      
      <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Core
        </Link>
        <div className="font-black tracking-widest uppercase text-xl">Ghost Kitchen</div>
      </nav>

      <main className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Ghost Kitchen</h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light">Appetizing, fast, and highly scalable.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Sparkles, title: "Premium Aesthetics", desc: "World-class design system." },
            { icon: Activity, title: "High Conversion", desc: "Optimized for user retention." },
            { icon: Shield, title: "Enterprise Security", desc: "Built for scale." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <feature.icon size={32} className="mb-6 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
