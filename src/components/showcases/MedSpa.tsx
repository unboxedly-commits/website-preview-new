"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, Droplets, ArrowRight, Star, Clock, MapPin, Phone } from "lucide-react";

const treatments = [
  { name: "Neuromodulators", desc: "Smooth fine lines and prevent wrinkles with precision Botox and Dysport treatments.", price: "from $14/unit" },
  { name: "Dermal Fillers", desc: "Restore lost volume, enhance facial contours, and achieve a youthful, lifted appearance.", price: "from $650" },
  { name: "Laser Genesis", desc: "Non-invasive laser technology to safely and effectively treat fine lines, redness, and scars.", price: "from $300" },
  { name: "Morpheus8", desc: "Advanced microneedling with radiofrequency for deep tissue remodeling and skin tightening.", price: "from $800" },
];

export default function MedSpaShowcase() {
  return (
    <div className="min-h-screen bg-[#fffdfb] text-zinc-900 font-sans selection:bg-rose-200 selection:text-rose-900 overflow-hidden">
      {/* Soft Rose Gold Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[700px] h-[700px] bg-rose-100/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Elegant Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-between px-8 py-6 relative z-10 sticky top-0 bg-[#fffdfb]/80 backdrop-blur-md border-b border-rose-100/50"
      >
        <div className="text-xl font-serif tracking-widest text-zinc-800">AURA AESTHETICS</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-zinc-500 font-medium">
          <a href="#treatments" className="hover:text-rose-500 transition-colors">Treatments</a>
          <a href="#philosophy" className="hover:text-rose-500 transition-colors">Philosophy</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2 text-sm uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
          Book Consultation
        </button>
      </motion.header>

      <main className="relative z-10 flex flex-col items-center pt-24 px-4 text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles className="mx-auto mb-6 text-rose-400" size={32} strokeWidth={1} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-serif font-light text-zinc-800 leading-tight max-w-4xl"
        >
          Discover your most <span className="italic text-rose-500">radiant</span> self.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg text-zinc-600 max-w-2xl font-light leading-relaxed"
        >
          Experience the pinnacle of clinical luxury. Our advanced aesthetic treatments are tailored to enhance your natural beauty with precision and care.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-white p-12 text-left hover:shadow-2xl hover:shadow-rose-100 transition-all duration-500 rounded-sm">
            <Droplets className="text-rose-400 mb-6" size={28} strokeWidth={1.5} />
            <h3 className="text-2xl font-serif text-zinc-800 mb-3">Skin Rejuvenation</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Medical-grade facials and laser therapies to restore your skin's youthful vitality and flawless texture.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-white p-12 text-left hover:shadow-2xl hover:shadow-rose-100 transition-all duration-500 rounded-sm">
            <CalendarCheck className="text-rose-400 mb-6" size={28} strokeWidth={1.5} />
            <h3 className="text-2xl font-serif text-zinc-800 mb-3">Concierge Booking</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Seamlessly manage your treatment plan with our AI-powered intelligent scheduling assistant.
            </p>
          </div>
        </motion.div>

        {/* Treatments Section */}
        <section id="treatments" className="mt-40 w-full max-w-6xl text-left">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <div>
              <h2 className="text-4xl font-serif text-zinc-800 mb-4">Curated Treatments</h2>
              <p className="text-zinc-500 font-light max-w-lg">
                We utilize only FDA-approved, industry-leading technology and injectables to ensure safe, stunning results.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium tracking-wide transition-colors">
              View Full Menu <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {treatments.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={item.name} 
                className="group border-b border-rose-100 py-8 flex flex-col justify-between hover:bg-rose-50/30 transition-colors px-6"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-serif text-zinc-800">{item.name}</h4>
                    <span className="text-sm font-mono text-zinc-400">{item.price}</span>
                  </div>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-40 w-full max-w-4xl px-4 text-center">
          <div className="flex justify-center gap-1 mb-8 text-rose-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-zinc-800 italic leading-snug">
            "The team at Aura Aesthetics didn't just change my skin; they completely renewed my confidence. The Morpheus8 treatment was life-changing, and the clinic feels like a luxury retreat."
          </h3>
          <p className="mt-8 text-zinc-500 uppercase tracking-widest text-sm">— Elena V., Verified Patient</p>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="mt-40 bg-zinc-900 text-white pt-24 pb-12 px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-zinc-800 pb-16">
          <div>
            <div className="text-2xl font-serif tracking-widest mb-6 text-rose-100">AURA</div>
            <p className="text-zinc-400 font-light text-sm max-w-xs leading-relaxed">
              Elevating aesthetic medicine through precision, artistry, and uncompromising patient care.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-zinc-300">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400 font-light text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-rose-400"/> 1240 Luxury Blvd, Beverly Hills, CA</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-rose-400"/> (310) 555-0192</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-zinc-300">Hours</h4>
            <ul className="space-y-2 text-zinc-400 font-light text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between text-zinc-600"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-light">
          <p>© 2026 Aura Aesthetics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-rose-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
