"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter AI",
      price: "$250",
      period: "/ month",
      desc: "Perfect for local businesses wanting a modern website and basic AI lead capture.",
      features: [
        "Premium Mobile-Optimized Website",
        "Website Hosting & Maintenance",
        "Basic On-Page SEO",
        "AI Chatbot for Lead Capture",
        "Email Support"
      ],
      missing: [
        "Automated SMS Follow-ups",
        "Zapier/CRM Integrations",
        "Priority Support"
      ],
      popular: false
    },
    {
      name: "Growth Automation",
      price: "$500",
      period: "/ month",
      desc: "The standard for growing businesses looking to automate their daily workflows.",
      features: [
        "Everything in Starter AI",
        "24/7 AI Receptionist (Voice/Text)",
        "Automated SMS Lead Follow-ups",
        "Zapier Integration with your CRM",
        "Weekly Performance Reports",
        "Priority 24hr Support"
      ],
      missing: [
        "Custom Multi-Agent Workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise Workflow",
      price: "$1000+",
      period: "/ month",
      desc: "Custom multi-agent setups and complex backend automation for scaling teams.",
      features: [
        "Everything in Growth Automation",
        "Custom Multi-Agent AI Workflows",
        "Full Backend Data Automation",
        "Internal Team Training",
        "Dedicated Account Manager",
        "Unlimited Workflow Revisions",
        "Instant Slack Support"
      ],
      missing: [],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Automated Lead Generation, <span className="text-gradient">Fixed Monthly Price.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          No surprise project fees. Just powerful AI workflows and high-converting websites delivered as a simple monthly subscription. Cancel anytime.
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
                <span className="text-white/40 text-sm ml-2 font-mono">{tier.period}</span>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const tierId = tier.name.toLowerCase().includes("starter") ? "starter" : tier.name.toLowerCase().includes("growth") ? "growth" : "enterprise";
                  window.location.href = `/onboarding?tier=${tierId}`;
                }}
                className={`w-full py-4 rounded-full font-bold transition-all mb-8 ${tier.popular ? 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                Start Subscription
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
