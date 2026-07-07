"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Essential",
      price: "$500",
      desc: "For lean startups and solo creators needing a professional presence fast.",
      features: [
        "Premium Template Customization",
        "Mobile Responsive Design",
        "Basic On-Page SEO",
        "Contact Form Integration",
        "1 Round of Revisions"
      ],
      missing: [
        "Custom Branding/Logo Design",
        "CMS Setup (Blog/Portfolio)",
        "Complex Animations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,500",
      desc: "The standard for growing businesses looking to scale lead generation.",
      features: [
        "Fully Custom Design & Layout",
        "CMS Integration (Webflow/Next.js)",
        "Advanced SEO & Performance Ops",
        "Copywriting Assistance",
        "Interactive Scroll Animations",
        "3 Rounds of Revisions"
      ],
      missing: [
        "Complex Web App Functionality"
      ],
      popular: true
    },
    {
      name: "Studio Partner",
      price: "$10k+",
      desc: "A complete bespoke transformation for enterprises commanding market authority.",
      features: [
        "Comprehensive Rebrand & Strategy",
        "Bespoke 3D/WebGL Interactions",
        "Complex Web App & DB Integrations",
        "Dedicated Engineering Team",
        "Custom Lead-Capture Funnels",
        "Unlimited Revisions",
        "30-Day Priority Support"
      ],
      missing: [],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Premium Engineering, <span className="text-gradient">At Every Scale.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          From $500 bootstrap launches to $10,000+ enterprise transformations. We believe world-class design shouldn't be gatekept. We scale our tech to fit your exact budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className={`relative flex flex-col p-8 rounded-3xl ${tier.popular ? 'bg-zinc-900/80 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)]' : 'bg-black/50 border-white/10'} border backdrop-blur-xl group cursor-default`}
          >
            {/* Animated Hover Background */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${tier.popular ? 'from-white/10 to-transparent' : 'from-white/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {tier.popular && (
              <>
                {/* Glowing orb behind popular tier */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-white/40 group-hover:scale-150 transition-all duration-700" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 group-hover:scale-110 transition-transform">
                  Most Chosen
                </div>
              </>
            )}
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{tier.name}</h3>
              <p className="text-white/60 text-sm mb-6 h-10 group-hover:text-white/80 transition-colors">{tier.desc}</p>
              
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-white/40 text-sm ml-2 font-mono">/ project</span>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/onboarding'}
                className={`w-full py-4 rounded-full font-bold transition-all mb-8 ${tier.popular ? 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                Start Project
              </motion.button>

              <div className="flex-1 space-y-4">
                {tier.features.map((feat, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (j * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <Check size={18} className="text-green-400 shrink-0 mt-0.5 group-hover:text-green-300 transition-colors" />
                    <span className="text-sm text-white/80 group-hover:text-white transition-colors">{feat}</span>
                  </motion.div>
                ))}
                {tier.missing.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
                    <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm line-through">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
