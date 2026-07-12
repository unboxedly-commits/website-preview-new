"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, Cpu, Zap, Copy, Check } from "lucide-react";

// --- Custom Digital Rain Canvas Component ---
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#0F0"; // matrix green
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30 pointer-events-none" />;
};

export default function MatrixCorrectShowcase() {
  const [phase, setPhase] = useState<"BOOT" | "INPUT" | "AUDIT" | "RESULT">("BOOT");
  const [rawPrompt, setRawPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Phase 1: Boot Sequence
  useEffect(() => {
    if (phase === "BOOT") {
      setTimeout(() => setPhase("INPUT"), 2500);
    }
  }, [phase]);

  // Phase 3: The Audit (Gamification & Logic)
  const handleInitiate = () => {
    if (!rawPrompt.trim()) return;
    setPhase("AUDIT");
    
    // Fake terminal logs generating over time
    const fakeLogs = [
      "ESTABLISHING SECURE HANDSHAKE...",
      "SCANNING NEURAL PATHWAYS...",
      "ANALYZING SYNTAX EFFICIENCY...",
      "WARNING: VAGUE CONTEXT DETECTED AT LINE 1",
      "RECALIBRATING ROLE ASSUMPTIONS...",
      "INJECTING CONSTRAINT PARAMETERS...",
      "COMPILING OPTIMIZED ASSET...",
      "SYSTEM OVERRIDE SUCCESSFUL."
    ];
    
    let currentLog = 0;
    const logInterval = setInterval(() => {
      setLogs(prev => [...prev, fakeLogs[currentLog]]);
      currentLog++;
      if (currentLog >= fakeLogs.length) {
        clearInterval(logInterval);
        
        // JS Algorithm to actually modify the prompt
        const formatPrompt = (text: string) => {
          // A very basic structural algorithm
          return `### ROLE\nYou are a highly capable AI assistant.\n\n### CONTEXT\nThe user has provided the following raw objective:\n"${text.substring(0, 100)}${text.length > 100 ? '...' : ''}"\n\n### OBJECTIVE\n${text}\n\n### CONSTRAINTS\n- Provide a step-by-step breakdown.\n- Be concise and precise.\n- Output in markdown format.`;
        };
        
        setOptimizedPrompt(formatPrompt(rawPrompt));
        setTimeout(() => setPhase("RESULT"), 1000);
      }
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-black overflow-hidden relative">
      <MatrixRain />
      
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay z-10" />
      
      {/* Top Bar */}
      <nav className="fixed w-full flex justify-between p-6 z-50 border-b border-[#00FF41]/30 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.2)]">
        <div className="flex items-center gap-3 font-bold tracking-widest uppercase">
          <Terminal size={20} />
          <span>AMI-CORRECT // OS.v9.4</span>
        </div>
        <div className="text-xs uppercase animate-pulse">
          Connection Secure
        </div>
      </nav>

      <main className="relative z-20 w-full h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          
          {/* PHASE: BOOT */}
          {phase === "BOOT" && (
            <motion.div
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="text-center"
            >
              <motion.h1 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="text-4xl md:text-6xl font-black uppercase tracking-widest border-r-4 border-[#00FF41] whitespace-nowrap overflow-hidden"
              >
                WAKE UP, NEO...
              </motion.h1>
            </motion.div>
          )}

          {/* PHASE: INPUT */}
          {phase === "INPUT" && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
              className="w-full max-w-4xl"
            >
              <div className="mb-6 flex items-center gap-3 text-xl font-bold uppercase tracking-widest border-b border-[#00FF41]/30 pb-4">
                <Cpu size={24} /> ENTER RAW PROMPT DATA
              </div>
              <textarea 
                value={rawPrompt}
                onChange={(e) => setRawPrompt(e.target.value)}
                placeholder="> Type or paste your prompt here..."
                className="w-full h-64 bg-black/80 border border-[#00FF41] p-6 text-[#00FF41] font-mono focus:outline-none focus:ring-4 focus:ring-[#00FF41]/30 focus:shadow-[0_0_30px_rgba(0,255,65,0.4)] resize-none transition-shadow backdrop-blur-md rounded-none placeholder-[#00FF41]/40 text-lg"
              />
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleInitiate}
                  className="px-8 py-4 bg-[#00FF41] text-black font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors hover:shadow-[0_0_40px_rgba(0,255,65,0.8)] flex items-center gap-3 group"
                >
                  <ShieldAlert size={20} className="group-hover:animate-spin" /> INITIATE AUDIT
                </button>
              </div>
            </motion.div>
          )}

          {/* PHASE: AUDIT (Gameplay) */}
          {phase === "AUDIT" && (
            <motion.div
              key="audit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-4xl"
            >
              {/* Intense Red Glitch Screen Flash */}
              <motion.div 
                animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="fixed inset-0 bg-red-600 pointer-events-none mix-blend-overlay z-50"
              />
              
              <div className="border border-red-500 p-8 bg-black/90 shadow-[0_0_50px_rgba(255,0,0,0.4)]">
                <div className="text-red-500 font-black text-2xl uppercase mb-6 flex items-center gap-3 animate-pulse">
                  <ShieldAlert /> CRITICAL AUDIT IN PROGRESS
                </div>
                
                <div className="h-64 overflow-hidden border border-red-500/30 p-4 font-mono text-sm text-red-400">
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-2"
                    >
                      {">"} {log}
                    </motion.div>
                  ))}
                  {/* Blinking Cursor */}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-5 bg-red-400 mt-2"
                  />
                </div>
                
                <div className="mt-6 w-full h-2 bg-red-900 overflow-hidden">
                  <motion.div 
                    className="h-full bg-red-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(logs.length / 8) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* PHASE: RESULT */}
          {phase === "RESULT" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl"
            >
              {/* Massive Green Flash on Entry */}
              <motion.div 
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="fixed inset-0 bg-[#00FF41] pointer-events-none z-50"
              />
              
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-[#00FF41] font-black text-3xl uppercase flex items-center gap-3">
                    <Zap /> OPTIMIZED ASSET READY
                  </div>
                  <div className="mt-2 text-sm text-[#00FF41]/70">
                    Neural Rewrite Complete. System Efficiency Increased.
                  </div>
                </div>
                
                {/* Fake Score Counter */}
                <div className="text-right">
                  <div className="text-xs uppercase text-[#00FF41]/70 mb-1">Efficiency Score</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-5xl font-black text-white"
                    style={{ textShadow: "0 0 20px #00FF41" }}
                  >
                    99.9%
                  </motion.div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-[#00FF41]/5 blur-xl pointer-events-none" />
                <div className="border-2 border-[#00FF41] bg-black/80 p-8 font-mono text-[#00FF41] text-sm md:text-base leading-relaxed whitespace-pre-wrap relative z-10">
                  {optimizedPrompt}
                </div>
                
                <button 
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 z-20 px-4 py-2 bg-[#00FF41] text-black font-bold uppercase text-xs hover:bg-white transition-colors flex items-center gap-2"
                >
                  {copied ? <><Check size={14}/> COPIED</> : <><Copy size={14}/> COPY ASSET</>}
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => { setPhase("INPUT"); setRawPrompt(""); setLogs([]); }}
                  className="text-xs uppercase hover:text-white transition-colors border-b border-[#00FF41]/30 pb-1"
                >
                  [ INITIATE NEW AUDIT ]
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
