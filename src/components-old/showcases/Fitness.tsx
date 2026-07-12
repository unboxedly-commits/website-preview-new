"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Dumbbell, ArrowUpRight, Play, Activity } from "lucide-react";

export default function FitnessShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Kinetic Typography Transforms
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // Custom Cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-[#F4F4F4] min-h-[300vh] font-sans selection:bg-[#FF3300] selection:text-white cursor-none overflow-x-hidden relative">
      
      {/* Brutalist Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-[#FF3300] rounded-full pointer-events-none z-[100] mix-blend-exclusion"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Nav */}
      <nav className="fixed w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col font-black tracking-tighter text-3xl leading-none uppercase">
          <span>VOID</span>
          <span className="text-[#FF3300]">ATHLETICS</span>
        </div>
        <div className="flex gap-2">
          <Activity className="animate-pulse text-[#FF3300]" />
          <span className="font-mono text-sm uppercase font-bold">Live Status: Max Capacity</span>
        </div>
      </nav>

      <main className="w-full relative z-10 pt-[25vh]">
        
        {/* Kinetic Hero */}
        <div className="w-full overflow-hidden flex flex-col gap-2 pointer-events-none">
          <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
            <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.8] text-white">
              PUSH PAST THE <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF3300" }}>LIMIT.</span> PUSH PAST THE <span className="text-transparent" style={{ WebkitTextStroke: "2px #FF3300" }}>LIMIT.</span>
            </h1>
          </motion.div>
          <motion.div style={{ x: xRight }} className="whitespace-nowrap">
            <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.8] text-[#FF3300]">
              DEFY GRAVITY. <span className="text-white">DEFY GRAVITY.</span> DEFY GRAVITY.
            </h1>
          </motion.div>
        </div>

        {/* Floating Brutalist Video/Image Block */}
        <div className="mt-32 w-full max-w-5xl mx-auto px-4 relative flex justify-center">
          <motion.div 
            style={{ rotate: rotateImage, scale: scaleImage }}
            className="w-[80vw] md:w-[600px] aspect-[4/5] bg-[#111] relative overflow-hidden group cursor-none"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" />
            
            {/* Play Button Follower (shows on hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="w-24 h-24 bg-[#FF3300] rounded-full flex items-center justify-center text-black">
                <Play fill="black" size={32} />
              </div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 -right-10 md:right-20 -translate-y-1/2 max-w-sm hidden md:block">
            <div className="font-mono text-[#FF3300] mb-4 text-sm font-bold">[ 01 / THE DOCTRINE ]</div>
            <p className="text-2xl font-bold uppercase tracking-tight leading-snug">
              We don't do comfort zones. We shatter plateaus. An elite underground training facility built for those who demand excellence.
            </p>
          </div>
        </div>

        {/* Hover-reveal Class Schedule */}
        <div className="mt-[40vh] w-full px-4 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-[8vw] font-black uppercase tracking-tighter leading-none mb-20">
            The <br/> <span className="text-[#FF3300]">Gauntlet.</span>
          </h2>

          <div className="flex flex-col w-full border-t border-white/20">
            {[
              { time: "05:00 AM", name: "HYPERTROPHY X", trainer: "Kaelen V." },
              { time: "07:30 AM", name: "VO2 MAX SPRINT", trainer: "Sarah J." },
              { time: "12:00 PM", name: "KETTLEBELL HELL", trainer: "Marcus T." },
              { time: "06:00 PM", name: "MOBILITY & RECOVERY", trainer: "Dr. Chen" }
            ].map((cls, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-b border-white/20 py-10 flex flex-col md:flex-row justify-between items-start md:items-center cursor-none relative overflow-hidden"
              >
                {/* Background Fill on Hover */}
                <div className="absolute inset-0 bg-[#FF3300] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] -z-10" />
                
                <div className="font-mono text-xl md:text-3xl font-bold text-white/40 group-hover:text-black transition-colors duration-300 z-10 mb-4 md:mb-0">
                  {cls.time}
                </div>
                
                <div className="flex items-center gap-8 z-10">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-black transition-colors duration-300">
                    {cls.name}
                  </h3>
                  <div className="hidden md:flex w-16 h-16 rounded-full border border-white/20 group-hover:border-black items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
                    <ArrowUpRight size={32} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Roster (Trainers) */}
        <section className="mt-40 max-w-[90vw] mx-auto border-t-2 border-[#333] pt-20 relative z-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center text-white">The Roster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jaxson 'The Anvil' Vance", spec: "Hypertrophy / Powerlifting", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" },
              { name: "Elena Rostova", spec: "Combat Conditioning", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop" },
              { name: "Marcus Thorne", spec: "Biomechanics & Recovery", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" }
            ].map((trainer, i) => (
              <div key={i} className="group cursor-pointer relative overflow-hidden bg-[#111]">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${trainer.img})` }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-[#FF3300] mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                  <h3 className="text-2xl font-black uppercase text-white mb-1">{trainer.name}</h3>
                  <p className="font-mono text-[#FF3300] text-sm uppercase tracking-widest">{trainer.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="mt-40 w-full bg-[#111] py-32 border-y-2 border-[#222] relative z-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-center text-white">Join The Elite</h2>
            <p className="text-center font-mono text-zinc-500 mb-16 uppercase tracking-widest text-sm">No Contracts. No Excuses.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {[
                { name: "Drop-In", price: "$40", freq: "Per Session", desc: "Single access to any Gauntlet or Recovery session.", feats: ["1 Class Pass", "Towel Service", "Locker Access"] },
                { name: "The Syndicate", price: "$299", freq: "Monthly", desc: "Unlimited access to all facilities and group training.", feats: ["Unlimited Classes", "Open Gym Access", "1 PT Session/mo", "Recovery Lounge"], highlight: true },
                { name: "Apex", price: "$899", freq: "Monthly", desc: "For those who demand uncompromising performance.", feats: ["Unlimited Classes", "4 PT Sessions/mo", "Private Locker", "Nutrition Coaching", "24/7 Access"] }
              ].map((tier, i) => (
                <div key={i} className={`p-8 md:p-12 border-2 ${tier.highlight ? 'border-[#FF3300] bg-[#FF3300]/5 scale-100 md:scale-105' : 'border-[#333] bg-black'} flex flex-col relative`}>
                  {tier.highlight && <div className="absolute top-0 right-0 bg-[#FF3300] text-black font-black uppercase text-xs px-4 py-1">Recommended</div>}
                  <h3 className="text-3xl font-black uppercase mb-2 text-white">{tier.name}</h3>
                  <p className="text-zinc-400 text-sm h-12">{tier.desc}</p>
                  <div className="mt-8 mb-8">
                    <span className={`text-6xl font-black ${tier.highlight ? 'text-[#FF3300]' : 'text-white'}`}>{tier.price}</span>
                    <span className="font-mono text-zinc-500 text-sm ml-2">{tier.freq}</span>
                  </div>
                  <ul className="space-y-4 mb-12 flex-1">
                    {tier.feats.map((feat, j) => (
                      <li key={j} className="flex items-center gap-4 text-white font-mono text-sm uppercase">
                        <div className={`w-2 h-2 ${tier.highlight ? 'bg-[#FF3300]' : 'bg-zinc-600'}`} /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-6 font-black uppercase tracking-widest text-lg transition-colors ${tier.highlight ? 'bg-[#FF3300] text-black hover:bg-white' : 'bg-[#222] text-white hover:bg-[#333]'}`}>
                    Select {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Massive Footer */}
      <footer className="mt-[30vh] bg-[#FF3300] text-black w-full overflow-hidden flex flex-col items-center justify-center py-40 relative z-20 cursor-none">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="text-center"
        >
          <Dumbbell size={80} className="mx-auto mb-10" />
          <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none mb-10">
            JOIN THE <br/> CULT.
          </h2>
          <button className="px-16 py-8 bg-black text-white text-2xl font-black uppercase tracking-widest hover:scale-110 transition-transform duration-300">
            Apply Now
          </button>
        </motion.div>
      </footer>
    </div>
  );
}
