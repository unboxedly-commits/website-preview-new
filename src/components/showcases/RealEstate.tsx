"use client";

import { motion } from "framer-motion";
import { Home, MapPin, Search, Star, Send, Bot, Building, Key } from "lucide-react";
import { useState, useEffect } from "react";

export default function RealEstateShowcase() {
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", text: "Welcome to Horizon Real Estate. I am your AI Property Concierge. What type of home are you looking for?" },
    { role: "user", text: "I'm looking for a 3-bedroom house in downtown with a balcony, under $800k." },
    { role: "bot", text: "I found 3 matches for you! The best fit is a 3-bed penthouse at 1420 Skyline Blvd for $750k. It features a wrap-around balcony." },
    { role: "user", text: "Does it have HOA fees? And is parking included?" },
  ]);

  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [
        ...prev, 
        { role: "bot", text: "Yes! Parking is included (2 deeded spots). The HOA is $350/mo, covering water, trash, and the rooftop pool access. Would you like me to schedule a viewing for tomorrow at 2 PM?" }
      ]);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-cyan-900 selection:text-cyan-100 overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between px-8 md:px-24 py-8 relative z-20 border-b border-white/5"
      >
        <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Building size={16} className="text-black" />
          </div>
          HORIZON <span className="font-light text-zinc-500">REALTY</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Buy</a>
          <a href="#" className="hover:text-white transition-colors">Sell</a>
          <a href="#" className="hover:text-white transition-colors">Agent AI</a>
        </div>
        <button className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
          List Your Home
        </button>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-24 pt-20 pb-32">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
            >
              <Bot size={14} /> AI-Powered Real Estate
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6"
            >
              Find your <br/>
              dream home, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">instantly.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zinc-400 max-w-lg leading-relaxed mb-10"
            >
              Skip the endless scrolling. Chat with our futuristic AI concierge to instantly find off-market listings, schedule tours, and get answers to complex property questions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-bold rounded-full hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Start Chatting
              </button>
            </motion.div>
          </div>

          {/* Futuristic AI Chatbot Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full relative"
          >
            {/* Glowing borders around the chat */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-transparent rounded-2xl opacity-30 blur-sm pointer-events-none" />
            
            <div className="bg-[#0f0f13]/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[500px] relative z-10">
              <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping" />
                    <Bot size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">Horizon Core AI</h3>
                    <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> System Online
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 text-sm custom-scrollbar">
                {chatMessages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.3 }}
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      msg.role === "bot" 
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-300 self-start rounded-tl-sm shadow-md" 
                        : "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white self-end rounded-tr-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-zinc-900 border border-zinc-800 text-cyan-500 self-start p-4 rounded-2xl rounded-tl-sm flex items-center gap-2 shadow-md w-16 h-12"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_#06b6d4]" />
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_#06b6d4]" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_#06b6d4]" style={{ animationDelay: "0.4s" }} />
                  </motion.div>
                )}
              </div>
              
              <div className="p-4 bg-[#0f0f13] border-t border-white/5 relative">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Ask about a listing, neighborhood, or market trends..." 
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-zinc-500 transition-all"
                    disabled
                  />
                  <button className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                    <Send size={16} className="-ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Search, title: "Hyper-Semantic Search", desc: "Don't just filter by beds and baths. Ask for 'homes with a modern kitchen and lots of natural light' and our AI will analyze listing photos." },
            { icon: Key, title: "Instant Showings", desc: "Found a home you love? The AI concierge directly connects to agent calendars to book a tour in less than 3 seconds." },
            { icon: Home, title: "Automated Comps", desc: "Get real-time CMA (Comparative Market Analysis) reports instantly. Understand the true value of any neighborhood on demand." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <feat.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
