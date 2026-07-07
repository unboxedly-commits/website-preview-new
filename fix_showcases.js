const fs = require('fs');
const path = require('path');

const generateShowcase = (title, subtitle, colorClass, gradientFrom, gradientTo) => `
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Activity, Shield } from "lucide-react";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-${gradientFrom} selection:text-black font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-r ${colorClass} rounded-full blur-[120px] opacity-20 mix-blend-screen" />
      </div>
      
      <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Core
        </Link>
        <div className="font-black tracking-widest uppercase text-xl">${title}</div>
      </nav>

      <main className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">${title}</h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light">${subtitle}</p>
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
              <feature.icon size={32} className="mb-6 text-${gradientFrom}" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
`;

const showcases = [
  { file: 'Creator.tsx', title: 'Creator Economy', subtitle: 'Monetize your influence with next-gen tools.', color: 'from-pink-500 to-violet-500', from: 'pink-400', to: 'violet-400' },
  { file: 'CreatorMasculine.tsx', title: 'Creator Pro', subtitle: 'The elite platform for top-tier creators.', color: 'from-zinc-500 to-black', from: 'white', to: 'zinc-500' },
  { file: 'GhostKitchen.tsx', title: 'Ghost Kitchen', subtitle: 'Appetizing, fast, and highly scalable.', color: 'from-orange-500 to-red-500', from: 'orange-400', to: 'red-400' },
  { file: 'PetCare.tsx', title: 'Premium PetCare', subtitle: 'Trust and warmth for your furry friends.', color: 'from-amber-500 to-yellow-500', from: 'amber-400', to: 'yellow-400' },
  { file: 'SaaS.tsx', title: 'B2B SaaS', subtitle: 'Data-driven, sleek, and conversion optimized.', color: 'from-indigo-500 to-blue-500', from: 'indigo-400', to: 'blue-400' },
  { file: 'Eco.tsx', title: 'Sustainable DTC', subtitle: 'Earthy, clean, and minimalistic.', color: 'from-emerald-500 to-teal-500', from: 'emerald-400', to: 'teal-400' }
];

showcases.forEach(s => {
  fs.writeFileSync(path.join('src/components/showcases', s.file), generateShowcase(s.title, s.subtitle, s.color, s.from, s.to));
});
console.log('Fixed showcases!');
