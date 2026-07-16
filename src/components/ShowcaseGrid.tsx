"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const showcases = [
  { id: "real-estate", name: "Premium Real Estate", desc: "Futuristic AI concierge.", color: "from-cyan-500/20 to-emerald-500/0" },
  { id: "accountant", name: "CPA & Accounting", desc: "Professional & trustworthy.", color: "from-blue-500/20 to-slate-500/0" },
  { id: "medspa", name: "MedSpa & Aesthetics", desc: "High-end clinical luxury.", color: "from-rose-500/20 to-pink-500/0" },
  { id: "aaa", name: "AI Automation Agency", desc: "Futuristic & technical.", color: "from-blue-500/20 to-cyan-500/0" },
  { id: "legal", name: "Boutique Legal Tech", desc: "Trust, authority, precision.", color: "from-slate-500/20 to-zinc-500/0" },
  { id: "petcare", name: "Premium Pet Care", desc: "Warm, playful, premium.", color: "from-orange-500/20 to-amber-500/0" },
  { id: "eco", name: "Sustainable DTC", desc: "Earthy, clean, minimalistic.", color: "from-green-500/20 to-emerald-500/0" },
  { id: "fitness", name: "Boutique Fitness", desc: "Energetic & bold.", color: "from-red-500/20 to-orange-500/0" },
  { id: "saas", name: "B2B SaaS Analytics", desc: "Data-driven & sleek.", color: "from-indigo-500/20 to-purple-500/0" },
  { id: "ghostkitchen", name: "Ghost Kitchens", desc: "Appetizing & fast.", color: "from-yellow-500/20 to-orange-500/0" },
  { id: "landscaping", name: "Luxury Landscaping", desc: "Architectural & grounded.", color: "from-lime-500/20 to-green-500/0" },
  { id: "creator", name: "Creator Economy", desc: "Vibrant & social.", color: "from-fuchsia-500/20 to-pink-500/0" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function ShowcaseGrid() {
  return (
    <section id="showcases" className="py-32 px-4 max-w-7xl mx-auto relative">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
          Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97757] to-[#6a9bcc]">Designs</span>
        </h2>
        <p className="text-[#faf9f5]/70 text-lg max-w-2xl" style={{ fontFamily: "Lora, Georgia, serif" }}>
          We design sites that turn local traffic into actual phone calls and booked appointments. See how it works in your industry.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {showcases.map((showcase) => (
          <motion.div 
            key={showcase.id} 
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
          >
            <Link href={`/showcase/${showcase.id}`}>
              <div 
                className="relative h-64 bg-zinc-950/80 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer border border-white/10 rounded-2xl group-hover:border-white/40 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(/showcases/${showcase.id}.jpg)` }}
              >
                {/* Dark overlay to make text readable */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Default subtle gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${showcase.color} opacity-30 group-hover:opacity-0 transition-opacity duration-700`} />
                
                {/* Intense hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${showcase.color} opacity-0 group-hover:opacity-100 mix-blend-screen scale-110 group-hover:scale-100 transition-all duration-700`} />
                
                {/* Animated scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#faf9f5]/70 group-hover:bg-[#faf9f5] group-hover:text-[#141413] transition-colors duration-500"
                  >
                    {showcase.id.substring(0, 2).toUpperCase()}
                  </motion.div>
                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="w-8 h-8 rounded-full bg-[#faf9f5] text-[#141413] flex items-center justify-center shadow-[0_0_20px_rgba(250,249,245,0.5)]"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>

                <div className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-1 text-[#faf9f5]" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>{showcase.name}</h3>
                  <p className="text-sm text-[#faf9f5]/50 group-hover:text-[#faf9f5]/80 transition-colors duration-500" style={{ fontFamily: "Lora, Georgia, serif" }}>{showcase.desc}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
