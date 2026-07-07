"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Cpu, Database, Network, Server, Shield, Activity, Terminal, CheckCircle2, FileText } from "lucide-react";

const PALETTES = [
  { id: "cyan", name: "J.A.R.V.I.S Cyan", colors: ["#0891b2", "#06b6d4", "#22d3ee"] },
  { id: "amber", name: "Overdrive Amber", colors: ["#d97706", "#f59e0b", "#fbbf24"] },
  { id: "emerald", name: "Matrix Emerald", colors: ["#059669", "#10b981", "#34d399"] },
  { id: "violet", name: "Deep Space Violet", colors: ["#7c3aed", "#8b5cf6", "#a78bfa"] },
  { id: "crimson", name: "Sith Crimson", colors: ["#991b1b", "#dc2626", "#f87171"] },
  { id: "monochrome", name: "Stealth Mono", colors: ["#171717", "#404040", "#a3a3a3"] },
  { id: "ocean", name: "Pacific Ocean", colors: ["#0369a1", "#0ea5e9", "#7dd3fc"] },
  { id: "sunset", name: "Vaporwave Sunset", colors: ["#c026d3", "#db2777", "#fb923c"] }
];

const VIBES = [
  { 
    id: "minimal", name: "Minimal / Clean", desc: "High white-space, stark typography, essentialist.",
    snippet: <div className="w-full h-8 bg-white/5 border border-white/10 rounded-sm flex items-center px-2"><div className="w-1/2 h-2 bg-white/20 rounded-full"/></div>
  },
  { 
    id: "brutalist", name: "Brutalist / Edgy", desc: "Raw, unconventional, heavy borders, mono fonts.",
    snippet: <div className="w-full h-8 bg-[#030712] border-2 border-cyan-500 flex items-center justify-center"><span className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest">RAW_DATA</span></div>
  },
  { 
    id: "holographic", name: "Holographic / Glass", desc: "Translucent layers, glowing accents, 3D elements.",
    snippet: <div className="w-full h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-300/30 rounded-full flex items-center justify-between px-2"><div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"/></div>
  },
  { 
    id: "corporate", name: "Corporate / Trust", desc: "Symmetrical, balanced, professional blues/grays.",
    snippet: <div className="w-full h-8 flex gap-1"><div className="w-1/3 h-full bg-slate-800/60 rounded-sm"/><div className="w-2/3 h-full bg-slate-900/60 rounded-sm flex flex-col gap-1 p-1 justify-center"><div className="w-full h-1 bg-slate-700 rounded-full"/><div className="w-3/4 h-1 bg-slate-700 rounded-full"/></div></div>
  }
];

const BLOCKS = [
  { id: "hero", name: "Dynamic Hero", icon: Activity },
  { id: "features", name: "Feature Grid", icon: Database },
  { id: "social", name: "Social Proof", icon: Shield },
  { id: "pricing", name: "Pricing Engine", icon: Network },
  { id: "faq", name: "Knowledge Base", icon: Server },
  { id: "contact", name: "Terminal Form", icon: Terminal }
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    profession: "",
    brandGuidelines: "",
    vibe: "",
    colorPalette: "cyan",
    budget: "",
    sections: [] as string[]
  });
  const [scanning, setScanning] = useState(false);

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const toggleSection = (section: string) => {
    setSelections(prev => ({
      ...prev,
      sections: prev.sections.includes(section) 
        ? prev.sections.filter(s => s !== section)
        : [...prev.sections, section]
    }));
  };

  const getPrimaryColor = () => {
    const p = PALETTES.find(p => p.id === selections.colorPalette);
    return p ? p.colors[1] : "#06b6d4";
  };

  const primaryHex = getPrimaryColor();

  useEffect(() => {
    if (step === 5) {
      setScanning(true);
      const timer = setTimeout(() => setScanning(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden relative flex flex-col items-center p-4 selection:bg-cyan-900 selection:text-cyan-50 py-32 overflow-y-auto">
      
      {/* Jarvis HUD Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-cyan-500/10 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-cyan-500/20 rounded-full opacity-50 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-cyan-500/10 rounded-full opacity-50" />
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-500/50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-500/50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50" />
      </div>

      {/* System Status Top Bar */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 font-mono text-[10px] text-cyan-500/70 tracking-[0.2em] uppercase bg-[#030712]/80 backdrop-blur-sm border-b border-cyan-500/10">
        <div className="flex items-center gap-2"><Cpu size={14} /> SYS.CORE.ONLINE</div>
        <div className="flex items-center gap-4">
          <span>PROGRESS: {(step / 5 * 100).toFixed(0)}%</span>
          <div className="w-32 h-1 bg-cyan-950 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">NET.LINK.SECURE <Crosshair size={14} /></div>
      </div>

      <div className="w-full max-w-4xl relative z-10 my-auto">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: PROFESSION */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center w-full max-w-xl mx-auto"
            >
              <div className="mb-8 p-4 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md">
                <Crosshair size={32} className="text-cyan-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-4 text-cyan-50">
                Identify <span className="font-bold text-cyan-400">Target</span>
              </h1>
              <p className="text-cyan-700 font-mono text-sm uppercase tracking-widest mb-12">
                [INPUT REQUIRED] State your profession or business sector.
              </p>
              
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-cyan-500 font-mono text-lg animate-pulse">&gt;</span>
                </div>
                <input 
                  type="text"
                  autoFocus
                  value={selections.profession}
                  onChange={e => setSelections({...selections, profession: e.target.value})}
                  onKeyDown={e => e.key === 'Enter' && selections.profession && nextStep()}
                  className="w-full bg-cyan-950/10 border border-cyan-500/30 text-cyan-50 text-xl font-mono px-12 py-6 outline-none focus:border-cyan-400 focus:bg-cyan-950/30 transition-all placeholder:text-cyan-800"
                  placeholder="e.g. Real Estate Agency, Boutique Fitness"
                />
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity" />
              </div>

              <div className="mt-12 flex justify-center w-full">
                <motion.button 
                  onClick={nextStep}
                  disabled={!selections.profession}
                  className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 hover:text-cyan-300 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Confirm Target <Crosshair size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: BRAND VALUES & AESTHETICS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-4 text-cyan-50">
                  Brand <span className="font-bold text-cyan-400">Parameters</span>
                </h1>
                <p className="text-cyan-700 font-mono text-sm uppercase tracking-widest">
                  [DATA INTAKE] Define your core values and visual identity.
                </p>
              </div>
              
              <div className="w-full max-w-5xl mx-auto space-y-12">
                
                {/* Brand Guidelines Text Area */}
                {/* Brand Guidelines Text Area */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-cyan-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 border-b border-cyan-500/20 pb-2 flex items-center gap-2">
                    <FileText size={14}/> 01 // Brand Values & Guidelines
                  </h3>
                  <div className="relative w-full group">
                    <textarea 
                      value={selections.brandGuidelines}
                      onChange={e => setSelections({...selections, brandGuidelines: e.target.value})}
                      rows={4}
                      className="w-full bg-cyan-950/10 border border-cyan-500/30 text-cyan-50 text-sm font-mono p-6 outline-none focus:border-cyan-400 focus:bg-cyan-950/30 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 placeholder:text-cyan-800 resize-none relative z-10"
                      placeholder="Type your brand details here..."
                    />
                    {/* Glowing corners on focus */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-[4.5rem] right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 font-mono text-[10px] text-cyan-600 uppercase tracking-wider leading-relaxed bg-cyan-950/30 p-3 border-l-2 border-cyan-500/50"
                    >
                      <span className="text-cyan-400 font-bold">EXAMPLE:</span> "We are a luxury MedSpa targeting women 30-50. Our voice is calming, professional, and authoritative. Avoid bright neon colors, stick to soft neutrals."
                    </motion.p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                  {/* Vibe Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-cyan-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 border-b border-cyan-500/20 pb-2">02 // Structural Architecture</h3>
                    <div className="space-y-4">
                      {VIBES.map((vibe) => (
                        <motion.div 
                          key={vibe.id}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelections({...selections, vibe: vibe.id})}
                          className={`p-4 border cursor-pointer transition-colors duration-300 flex flex-col group relative overflow-hidden ${selections.vibe === vibe.id ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-500/50 hover:bg-cyan-950/20'}`}
                        >
                          {selections.vibe === vibe.id && (
                            <motion.div 
                              layoutId="vibe-indicator" 
                              className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" 
                            />
                          )}
                          
                          <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            {vibe.snippet}
                          </div>

                          <h4 className={`font-mono text-sm uppercase tracking-wider mb-1 transition-colors duration-300 ${selections.vibe === vibe.id ? 'text-cyan-300' : 'text-cyan-500 group-hover:text-cyan-400'}`}>[{vibe.name}]</h4>
                          <p className="text-cyan-700 text-xs font-mono group-hover:text-cyan-600 transition-colors duration-300">{vibe.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Color Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-cyan-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 border-b border-cyan-500/20 pb-2">03 // Spectral Palette</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {PALETTES.map((palette) => (
                        <motion.div
                          key={palette.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelections({...selections, colorPalette: palette.id})}
                          className={`p-4 border cursor-pointer transition-colors duration-300 flex flex-col items-center justify-center gap-4 relative overflow-hidden ${selections.colorPalette === palette.id ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-500/50 hover:bg-cyan-950/20'}`}
                        >
                          {selections.colorPalette === palette.id && (
                            <motion.div 
                              layoutId="palette-indicator" 
                              className="absolute inset-0 bg-cyan-400/5 pointer-events-none" 
                            />
                          )}
                          <div className="flex gap-2">
                            {palette.colors.map((c, i) => (
                              <motion.div 
                                key={i} 
                                whileHover={{ y: -4 }}
                                className="w-6 h-6 rounded-full shadow-lg border border-white/10" 
                                style={{ backgroundColor: c, boxShadow: `0 0 15px ${c}50` }} 
                              />
                            ))}
                          </div>
                          <span className={`font-mono text-xs uppercase tracking-widest text-center transition-colors duration-300 ${selections.colorPalette === palette.id ? 'text-cyan-300 font-bold' : 'text-cyan-600'}`}>{palette.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="mt-12 flex justify-between w-full max-w-5xl mx-auto">
                <button onClick={prevStep} className="px-6 py-2 text-cyan-600 font-mono text-sm uppercase hover:text-cyan-400 transition-colors">&lt; Back</button>
                <button 
                  onClick={nextStep}
                  disabled={!selections.vibe || !selections.brandGuidelines}
                  className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 transition-all disabled:opacity-20 flex items-center gap-2"
                >
                  Save Parameters <CheckCircle2 size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PRICING / BUDGET */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="mb-8 p-4 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md">
                <Shield size={32} className="text-cyan-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-4 text-cyan-50">
                Resource <span className="font-bold text-cyan-400">Allocation</span>
              </h1>
              <p className="text-cyan-700 font-mono text-sm uppercase tracking-widest mb-12">
                [INPUT REQUIRED] State your allocated financial runway.
              </p>
              
              <div className="relative w-full group max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-cyan-500 font-mono text-lg animate-pulse">$</span>
                </div>
                <input 
                  type="text"
                  autoFocus
                  value={selections.budget}
                  onChange={e => setSelections({...selections, budget: e.target.value})}
                  onKeyDown={e => e.key === 'Enter' && selections.budget && nextStep()}
                  className="w-full bg-cyan-950/10 border border-cyan-500/30 text-cyan-50 text-xl font-mono px-12 py-6 outline-none focus:border-cyan-400 focus:bg-cyan-950/30 transition-all placeholder:text-cyan-800"
                  placeholder="e.g. 500, 2500, 10000"
                />
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity" />
              </div>

              <div className="mt-12 flex justify-between w-full max-w-xl mx-auto">
                <button onClick={prevStep} className="px-6 py-2 text-cyan-600 font-mono text-sm uppercase hover:text-cyan-400 transition-colors">&lt; Back</button>
                <motion.button 
                  onClick={nextStep}
                  disabled={!selections.budget}
                  className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 hover:text-cyan-300 transition-all disabled:opacity-20 flex items-center gap-2"
                >
                  Confirm Allocation <Shield size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: BLOCKS */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center text-center"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-4 text-cyan-50">
                Allocate <span className="font-bold text-cyan-400">Modules</span>
              </h1>
              <p className="text-cyan-700 font-mono text-sm uppercase tracking-widest mb-12">
                [SYSTEM LOAD] Select required infrastructure blocks.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {BLOCKS.map((block) => {
                  const isSelected = selections.sections.includes(block.id);
                  return (
                    <div 
                      key={block.id}
                      onClick={() => toggleSection(block.id)}
                      className={`p-6 border cursor-pointer transition-all flex flex-col items-center justify-center gap-4 relative group ${isSelected ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-500/50'}`}
                    >
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500/50" />
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-500/50" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-500/50" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-500/50" />

                      <block.icon className={`transition-colors ${isSelected ? 'text-cyan-300' : 'text-cyan-800 group-hover:text-cyan-600'}`} size={32} />
                      <h3 className={`font-mono text-sm uppercase tracking-wider ${isSelected ? 'text-cyan-100' : 'text-cyan-600'}`}>{block.name}</h3>
                      
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 bg-cyan-500 text-black p-1 rounded-sm">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-between w-full">
                <button onClick={prevStep} className="px-6 py-2 text-cyan-600 font-mono text-sm uppercase hover:text-cyan-400 transition-colors">&lt; Back</button>
                <button 
                  onClick={nextStep}
                  disabled={selections.sections.length === 0}
                  className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 transition-all disabled:opacity-20 flex items-center gap-2"
                >
                  Confirm Loadout <Crosshair size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: HOLOGRAPHIC SNIPPET PREVIEW */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col items-center"
            >
              <h1 className="text-3xl font-light tracking-widest uppercase mb-8 text-cyan-50">
                Blueprint <span className="font-bold text-cyan-400">Generated</span>
              </h1>

              <div 
                className="w-full max-w-3xl aspect-[16/9] border-2 bg-[#030712] relative overflow-hidden flex flex-col p-8"
                style={{ borderColor: `${primaryHex}80`, boxShadow: `0 0 40px ${primaryHex}20` }}
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.5)_3px)] pointer-events-none z-20 opacity-50" />
                
                {scanning ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-[#030712]/80 backdrop-blur-sm">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-16 h-16 border-4 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full mb-4"
                      style={{ borderTopColor: primaryHex, borderRightColor: primaryHex }}
                    />
                    <div className="font-mono text-sm uppercase tracking-widest animate-pulse" style={{ color: primaryHex }}>
                      Compiling Visual Algorithms...
                    </div>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="flex justify-between items-center mb-12 border-b pb-4" style={{ borderColor: `${primaryHex}30` }}>
                      <div className="font-mono font-bold tracking-widest uppercase text-lg" style={{ color: primaryHex }}>
                        {selections.profession.slice(0, 12) || "UNKNOWN"}...
                      </div>
                      <div className="flex gap-4">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-2 rounded-full opacity-30" style={{ backgroundColor: primaryHex }} />)}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center max-w-xl">
                      <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 opacity-70" style={{ color: primaryHex }}>
                        // Vibe: {selections.vibe}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white leading-tight">
                        Next-Gen <br/><span style={{ color: primaryHex }}>{selections.profession || "Business"}</span>
                      </h2>
                      <p className="text-sm font-mono opacity-50 mb-8 max-w-md line-clamp-2" style={{ color: primaryHex }}>
                        Allocated Budget: ${selections.budget}. {selections.brandGuidelines}
                      </p>
                      
                      <div className="flex gap-4">
                        <div className="px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold text-[#030712]" style={{ backgroundColor: primaryHex }}>
                          Primary Action
                        </div>
                        <div className="px-6 py-3 font-mono text-xs uppercase tracking-widest border" style={{ borderColor: `${primaryHex}50`, color: primaryHex }}>
                          Secondary
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2">
                      <div className="font-mono text-[8px] uppercase tracking-widest opacity-50" style={{ color: primaryHex }}>System Modules Detected:</div>
                      <div className="flex gap-2">
                        {selections.sections.map((sec, i) => (
                          <div key={i} className="w-6 h-6 border flex items-center justify-center opacity-70" style={{ borderColor: primaryHex, color: primaryHex }}>
                            <div className="w-2 h-2" style={{ backgroundColor: primaryHex }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mt-8 font-mono text-[10px] text-cyan-600 uppercase tracking-[0.2em] grid grid-cols-2 gap-x-12 gap-y-2">
                <div>TARGET: <span className="text-cyan-300">{selections.profession || 'UNKNOWN'}</span></div>
                <div>AESTHETIC: <span className="text-cyan-300">{selections.vibe || 'UNKNOWN'}</span></div>
                <div>PALETTE: <span className="text-cyan-300">{selections.colorPalette || 'UNKNOWN'}</span></div>
                <div>MODULES: <span className="text-cyan-300">{selections.sections.length}</span></div>
                <div>BUDGET: <span className="text-cyan-300">${selections.budget || 'UNKNOWN'}</span></div>
                <div>STATUS: <span className="text-emerald-400 animate-pulse">DEPLOYMENT READY</span></div>
              </div>

              <div className="mt-12 flex justify-between w-full max-w-3xl">
                <button onClick={prevStep} className="px-6 py-2 text-cyan-600 font-mono text-sm uppercase hover:text-cyan-400 transition-colors">&lt; Back</button>
                <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 hover:text-cyan-300 transition-all flex items-center gap-2">
                  Save Blueprint to Core <Database size={16} />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
