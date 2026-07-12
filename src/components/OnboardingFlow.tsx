"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

// Types
type Package = "starter" | "growth" | "enterprise" | null;
type AddOns = { seo: boolean; socials: boolean; linkedin: boolean };
type BusinessInfo = { name: string; industry: string; reference: string };
type ContactInfo = { name: string; email: string; phone: string };

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.4, ease: "easeOut" }
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<Package>(null);
  const [hasUrlTier, setHasUrlTier] = useState(false);
  const [addOns, setAddOns] = useState<AddOns>({ seo: false, socials: false, linkedin: false });
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({ name: "", industry: "", reference: "" });
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", email: "", phone: "" });
  const [isGeneratingSnippet, setIsGeneratingSnippet] = useState(false);
  const [resolvedDomain, setResolvedDomain] = useState<string | null>(null);

  useEffect(() => {
    // Read the tier from URL on mount
    const params = new URLSearchParams(window.location.search);
    const tier = params.get('tier');
    if (tier === 'starter' || tier === 'growth' || tier === 'enterprise') {
      setSelectedPackage(tier as Package);
      setHasUrlTier(true);
    }
  }, []);

  const nextStep = async () => {
    if (step === 3) {
      setIsGeneratingSnippet(true);
      setStep(4);
      
      let domainToUse = null;
      // 1. Check if they explicitly typed a URL in any field (accounting for mix-ups)
      const explicitUrl = [businessInfo.reference, businessInfo.industry, businessInfo.name].find(s => /\.[a-z]{2,}/i.test(s) || s.startsWith('http'));
      
      if (explicitUrl) {
        domainToUse = explicitUrl;
      } else if (businessInfo.reference) {
        // 2. No URL found? Use AI Search (Clearbit Autocomplete API) to find the domain for the plain text!
        try {
          const res = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(businessInfo.reference)}`);
          if (res.ok) {
            const data = await res.json();
            if (data && data.length > 0 && data[0].domain) {
              domainToUse = data[0].domain;
            }
          }
        } catch (e) {
          console.error("AI Search failed", e);
        }
      }
      
      setResolvedDomain(domainToUse);
      // Ensure the "Generating" loader runs for at least 1.5s for dramatic effect
      setTimeout(() => setIsGeneratingSnippet(false), 1500);
      return;
    }
    setStep((s) => Math.min(s + 1, 7));
  };
  
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const packages = [
    { id: "starter", name: "Starter", price: 250, desc: "Essential web presence & lead capture." },
    { id: "growth", name: "Growth", price: 500, desc: "Automated reception & CRM sync." },
    { id: "enterprise", name: "Enterprise", price: 1000, desc: "Custom multi-agent workflows." },
  ];

  const calculateTotal = () => {
    let monthly = 0;
    let setup = 0;

    if (selectedPackage === "starter") monthly += 250;
    if (selectedPackage === "growth") monthly += 500;
    if (selectedPackage === "enterprise") monthly += 1000;

    if (addOns.seo) monthly += 100;
    if (addOns.socials) monthly += 200;
    if (addOns.linkedin) setup += 150;

    return { monthly, setup };
  };

  const { monthly, setup } = calculateTotal();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative flex flex-col items-center justify-center py-20 selection:bg-amber-900/50 selection:text-amber-200">
      
      {/* Sun God Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Core Sun */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-amber-500 to-orange-500 rounded-full blur-[120px]"
        />
        {/* Radiant Beams */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_10px_#f59e0b]"
          initial={{ width: 0 }}
          animate={{ width: `${(step / 7) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10 px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 mt-8">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">ZevenBots</span>
          </h1>
          <motion.p 
            key={step}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white/60 font-mono text-sm tracking-widest uppercase"
          >
            Phase 0{step} // 07
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          
          {/* STEP 1: PACKAGE */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl mx-auto"
            >
              {hasUrlTier && selectedPackage ? (
                // Single Confirmation View if they came from landing page
                <div className="flex flex-col items-center">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-2 text-center">Foundation Selection</motion.h2>
                  <motion.p variants={itemVariants} className="text-center text-white/50 mb-8">You selected this tier on the previous page. Confirm to proceed.</motion.p>
                  
                  <motion.div variants={itemVariants} className="bg-amber-950/40 border border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.2)] rounded-3xl p-8 w-full max-w-md text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
                    <h3 className="text-2xl font-bold mb-2 text-amber-400 capitalize">{selectedPackage} Package</h3>
                    <div className="text-4xl font-black mb-4">
                      ${selectedPackage === "starter" ? 250 : selectedPackage === "growth" ? 500 : 1000}
                      <span className="text-lg font-normal text-white/40">/mo</span>
                    </div>
                    <p className="text-white/60 mb-6">
                      {packages.find(p => p.id === selectedPackage)?.desc}
                    </p>
                    <div className="mx-auto w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center">
                      <Check size={24} />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-8">
                    <button
                      onClick={() => setHasUrlTier(false)}
                      className="text-white/40 text-sm hover:text-white transition-colors underline underline-offset-4"
                    >
                      Wait, I want to see the other options
                    </button>
                  </motion.div>
                </div>
              ) : (
                // Standard 3-Grid View
                <>
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-2 text-center">Foundation Selection</motion.h2>
                  <motion.p variants={itemVariants} className="text-center text-white/50 mb-8">Confirm your digital infrastructure tier.</motion.p>
                  
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <motion.div
                        key={pkg.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPackage(pkg.id as Package)}
                        className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden group ${
                          selectedPackage === pkg.id 
                            ? 'bg-amber-950/40 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                            : 'bg-white/5 border-white/10 hover:border-amber-500/50 hover:bg-white/10'
                        }`}
                      >
                        {selectedPackage === pkg.id && (
                          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
                        )}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{pkg.name}</h3>
                        <div className="text-3xl font-black mb-4">${pkg.price}<span className="text-sm font-normal text-white/40">/mo</span></div>
                        <p className="text-sm text-white/60">{pkg.desc}</p>
                        
                        <div className={`mt-6 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                          selectedPackage === pkg.id ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/20 text-transparent'
                        }`}>
                          <Check size={16} />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}

              <motion.div variants={itemVariants} className="mt-12 flex justify-center md:justify-end">
                <button
                  onClick={nextStep}
                  disabled={!selectedPackage}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Confirm Foundation <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 2: ADD-ONS */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">Accelerate Your Growth</motion.h2>
              <div className="space-y-4">
                
                {/* SEO */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setAddOns({...addOns, seo: !addOns.seo})}
                  className={`cursor-pointer rounded-2xl p-6 border flex items-center justify-between transition-all ${
                    addOns.seo ? 'bg-amber-950/40 border-amber-500' : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-lg">Local SEO Domination</h3>
                    <p className="text-sm text-white/60">Rank higher in local searches and Google Maps.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-amber-400">+$100/mo</span>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${addOns.seo ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/30'}`}>
                      {addOns.seo && <Check size={14} />}
                    </div>
                  </div>
                </motion.div>

                {/* Socials */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setAddOns({...addOns, socials: !addOns.socials})}
                  className={`cursor-pointer rounded-2xl p-6 border flex items-center justify-between transition-all ${
                    addOns.socials ? 'bg-amber-950/40 border-amber-500' : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-lg">Social Media Autopilot</h3>
                    <p className="text-sm text-white/60">Automated content posting to keep your feeds active.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-amber-400">+$200/mo</span>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${addOns.socials ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/30'}`}>
                      {addOns.socials && <Check size={14} />}
                    </div>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setAddOns({...addOns, linkedin: !addOns.linkedin})}
                  className={`cursor-pointer rounded-2xl p-6 border flex items-center justify-between transition-all ${
                    addOns.linkedin ? 'bg-amber-950/40 border-amber-500' : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-lg">LinkedIn Authority Audit</h3>
                    <p className="text-sm text-white/60">Complete profile overhaul to attract B2B connections.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-amber-400">+$150 once</span>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${addOns.linkedin ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/30'}`}>
                      {addOns.linkedin && <Check size={14} />}
                    </div>
                  </div>
                </motion.div>

              </div>

              <motion.div variants={itemVariants} className="mt-12 flex justify-between">
                <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors">Back</button>
                <button
                  onClick={nextStep}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all"
                >
                  Proceed to Setup <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 3: INTAKE */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">Business Intelligence</motion.h2>
              <div className="space-y-6">
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Business Name</label>
                  <input 
                    type="text" 
                    value={businessInfo.name}
                    onChange={e => setBusinessInfo({...businessInfo, name: e.target.value})}
                    placeholder="e.g. Apex Plumbing"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Primary Industry</label>
                  <input 
                    type="text" 
                    value={businessInfo.industry}
                    onChange={e => setBusinessInfo({...businessInfo, industry: e.target.value})}
                    placeholder="e.g. Home Services, Medical, Real Estate"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Reference Architecture</label>
                  <input 
                    type="text" 
                    value={businessInfo.reference}
                    onChange={e => setBusinessInfo({...businessInfo, reference: e.target.value})}
                    placeholder="e.g. apple.com OR 'minimalist dark mode'"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>

              </div>

              <motion.div variants={itemVariants} className="mt-12 flex justify-between">
                <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors">Back</button>
                <button
                  onClick={nextStep}
                  disabled={!businessInfo.name || !businessInfo.industry}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Analyze Parameters <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 4: VISUAL WEBSITE SNIPPET */}
          {step === 4 && (
            <motion.div
              key="step4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full flex flex-col items-center justify-center text-center py-10 max-w-4xl mx-auto"
            >
              {isGeneratingSnippet ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full mb-8 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                  />
                  <p className="text-amber-400 font-mono animate-pulse tracking-widest uppercase text-sm">Generating Live Preview...</p>
                </motion.div>
              ) : (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden" 
                  animate="visible" 
                  className="w-full"
                >
                  <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-2">Aesthetic Blueprint Locked</motion.h2>
                  <motion.p variants={itemVariants} className="text-white/50 mb-10 max-w-lg mx-auto">Here is a generated snippet of how your new website architecture will look.</motion.p>
                  
                  {/* High-Fidelity Website Preview Snippet */}
                  <motion.div variants={itemVariants} className="w-full aspect-[16/9] bg-[#0a0a0a] border border-amber-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col relative group">
                    
                    {/* Browser-like Header */}
                    <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="mx-auto bg-white/5 rounded px-4 py-1 flex items-center gap-2 text-[10px] font-mono text-white/40">
                        www.{businessInfo.name.toLowerCase().replace(/\s+/g, '') || 'yourbusiness'}.com
                      </div>
                    </div>

                    {/* Website Snippet Content */}
                    <div className="flex-1 relative overflow-hidden flex flex-col bg-[#0a0a0a]">
                      {(() => {
                        if (resolvedDomain) {
                          return (
                            <iframe 
                              src={resolvedDomain.startsWith('http') ? resolvedDomain : `https://${resolvedDomain}`}
                              className="w-full h-full border-0 pointer-events-none bg-white"
                              sandbox="allow-scripts allow-same-origin"
                              title="Reference Website"
                            />
                          );
                        }
                        return (
                          <>
                            {/* Dynamic Background based on vibe */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15)_0%,transparent_60%)] pointer-events-none" />
                            
                            {/* Navbar */}
                            <div className="px-8 py-6 flex justify-between items-center relative z-10">
                              <div className="font-black text-xl tracking-tighter text-white">
                                {businessInfo.name.toUpperCase() || "BRAND"}
                              </div>
                              <div className="flex gap-6 text-xs font-bold text-white/60 uppercase tracking-wider">
                                <span>Services</span>
                                <span>About</span>
                                <span>Contact</span>
                              </div>
                            </div>

                            {/* Hero Section (Dynamically Injected) */}
                            <div className="flex-1 flex flex-col justify-center px-12 relative z-10 text-left max-w-2xl">
                              
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-6 w-fit">
                                {businessInfo.industry || 'Industry'} Leader
                              </div>

                              {businessInfo.reference ? (
                                // Keyword/Vibe Reference Logic
                                <>
                                  <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight capitalize">
                                    The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">{businessInfo.reference}</span> Experience.
                                  </h1>
                                  <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
                                    A highly-optimized digital storefront designed around your exact aesthetic vision, engineered to dominate the {businessInfo.industry} market.
                                  </p>
                                </>
                              ) : (
                                // No Reference
                                <>
                                  <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                    Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Automation</span>.
                                  </h1>
                                  <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
                                    Deployed with ZevenBots standard high-conversion architecture for maximum lead generation.
                                  </p>
                                </>
                              )}

                              <div className="flex gap-4">
                                <div className="px-6 py-3 bg-white text-black font-bold text-sm rounded flex items-center gap-2">
                                  Get Started
                                </div>
                                <div className="px-6 py-3 border border-white/20 text-white font-bold text-sm rounded">
                                  Learn More
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between items-center w-full mt-8">
                    <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors font-bold">Edit Details</button>
                    <button
                      onClick={nextStep}
                      className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all"
                    >
                      Acknowledge Blueprint <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* STEP 5: TIMELINE & LOGISTICS */}
          {step === 5 && (
            <motion.div
              key="step5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full text-center max-w-3xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">The 7-Day Guarantee</motion.h2>
              <motion.p variants={itemVariants} className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-12">
                We don't do endless revision loops or month-long discovery calls. From the moment you checkout, our systems and engineers get to work. Your fully automated, high-converting website will be deployed in exactly <strong className="text-white">7 Days</strong>. Pure execution.
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-between w-full">
                <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors">Back</button>
                <button
                  onClick={nextStep}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all"
                >
                  Understood <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 6: ADMIN CONTACT */}
          {step === 6 && (
            <motion.div
              key="step6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl mx-auto"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">Account Administrator</motion.h2>
              <motion.p variants={itemVariants} className="text-center text-white/50 mb-8">Who will be the primary point of contact for handover?</motion.p>

              <div className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Full Name</label>
                  <input 
                    type="text" 
                    value={contactInfo.name}
                    onChange={e => setContactInfo({...contactInfo, name: e.target.value})}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Email Address</label>
                  <input 
                    type="email" 
                    value={contactInfo.email}
                    onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
                    placeholder="e.g. john@business.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Phone Number</label>
                  <input 
                    type="tel" 
                    value={contactInfo.phone}
                    onChange={e => setContactInfo({...contactInfo, phone: e.target.value})}
                    placeholder="e.g. +1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 focus:bg-amber-950/20 transition-all placeholder:text-white/20"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mt-12 flex justify-between">
                <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors">Back</button>
                <button
                  onClick={nextStep}
                  disabled={!contactInfo.name || !contactInfo.email}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Finalize Setup <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 7: CHECKOUT & TERMS */}
          {step === 7 && (
            <motion.div
              key="step7"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
                {/* Glowing edge */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
                
                <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
                
                <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-bold capitalize">{selectedPackage} Package</span>
                    <span>${selectedPackage === "starter" ? 250 : selectedPackage === "growth" ? 500 : 1000}/mo</span>
                  </div>
                  {addOns.seo && (
                    <div className="flex justify-between items-center text-sm text-white/60">
                      <span>Local SEO Domination</span>
                      <span>$100/mo</span>
                    </div>
                  )}
                  {addOns.socials && (
                    <div className="flex justify-between items-center text-sm text-white/60">
                      <span>Social Media Autopilot</span>
                      <span>$200/mo</span>
                    </div>
                  )}
                  {addOns.linkedin && (
                    <div className="flex justify-between items-center text-sm text-white/60">
                      <span>LinkedIn Audit (One-time)</span>
                      <span>$150</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-white/60 text-sm">Due Today (Setup + First Month)</span>
                    <span className="text-3xl font-black text-amber-400">${monthly + setup}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-white/60 text-sm">Recurring Monthly</span>
                    <span className="text-lg font-bold">${monthly}/mo</span>
                  </div>
                </div>

                <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 flex items-start gap-4 mb-8">
                  <div className="text-sm text-amber-100/80 leading-relaxed">
                    <strong className="text-amber-400 block mb-1">Transparent Terms: 1-Year Commitment</strong>
                    By proceeding, you agree to a 12-month minimum term. We invest heavily upfront in building your custom infrastructure and automations. Cancel anytime after 12 months with zero penalties.
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-lg rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all hover:scale-[1.02]"
                >
                  Ignite Project <ChevronRight size={20} />
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 flex justify-center">
                <button onClick={prevStep} className="px-6 py-4 text-white/60 hover:text-white transition-colors font-bold">Edit Details</button>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
