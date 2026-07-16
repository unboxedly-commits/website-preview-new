"use client";

import { motion } from "framer-motion";
import { Calculator, FileText, PieChart, ShieldCheck, ArrowRight, Mic, Send, MessageSquare, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

export default function AccountantShowcase() {
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", text: "Welcome to Apex CPAs. How can our AI assistant help you today?" },
    { role: "user", text: "Can you help me categorize my recent Q3 expenses for bookkeeping?" },
    { role: "bot", text: "I'd be happy to help. You can upload your Q3 bank statement securely, and I will automatically categorize your transactions into standard IRS expense categories for review." },
    { role: "user", text: "What are the limits for the Section 179 deduction this year?" },
  ]);

  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [
        ...prev, 
        { role: "bot", text: "For the current tax year, the Section 179 deduction limit is $1,220,000. Would you like me to run a quick calculation based on your recent equipment purchases?" }
      ]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden relative">
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between px-8 md:px-24 py-8 relative z-20 bg-white shadow-sm"
      >
        <div className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
          <Calculator size={28} className="text-blue-700" />
          APEX <span className="font-light text-slate-500">CPAs</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-blue-700 transition-colors">Tax Advisory</a>
          <a href="#" className="hover:text-blue-700 transition-colors">Bookkeeping</a>
          <a href="#" className="hover:text-blue-700 transition-colors">Wealth Management</a>
        </div>
        <button className="px-6 py-2.5 text-sm font-bold bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20">
          Client Portal
        </button>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-24 pt-16 pb-32">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <ShieldCheck size={16} /> Certified Public Accountants
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Financial clarity <br/>
              <span className="text-blue-700">powered by AI.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-lg leading-relaxed mb-10 font-medium"
            >
              Experience the future of accounting. Our AI agents handle your daily bookkeeping and tax queries instantly, so our CPAs can focus on high-level strategic advisory.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                Start Free Consultation
              </button>
            </motion.div>
          </div>

          {/* Interactive AI Showcase Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full flex flex-col gap-6"
          >
            {/* AI Chatbot Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[400px]">
              <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Apex Bookkeeping AI</h3>
                    <p className="text-[10px] text-slate-400">Online • Typically replies instantly</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4 text-sm">
                {chatMessages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                    className={`max-w-[85%] p-3 rounded-xl ${msg.role === "bot" ? "bg-white border border-slate-200 text-slate-800 self-start rounded-tl-sm shadow-sm" : "bg-blue-700 text-white self-end rounded-tr-sm shadow-md"}`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white border border-slate-200 text-slate-500 self-start p-3 rounded-xl rounded-tl-sm flex items-center gap-1 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </motion.div>
                )}
              </div>
              
              <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Ask a tax or bookkeeping question..." 
                  className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                  disabled
                />
                <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Send size={16} className="-ml-0.5" />
                </button>
              </div>
            </div>

            {/* Voicebot Mockup */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-xl p-6 text-white flex items-center justify-between relative overflow-hidden border border-slate-700">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div>
                <h3 className="font-bold mb-1 flex items-center gap-2"><PhoneCall size={16} className="text-blue-400" /> Apex Voice Concierge</h3>
                <p className="text-xs text-blue-200 font-medium">"Call anytime to log expenses or ask for tax deadlines."</p>
              </div>
              
              <div className="relative flex items-center justify-center w-14 h-14">
                <motion.div 
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-500/30 rounded-full"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
                  className="absolute inset-2 bg-blue-500/50 rounded-full"
                />
                <div className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg border border-blue-400">
                  <Mic size={18} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: PieChart, title: "Automated Bookkeeping", desc: "Our AI systems automatically ingest, categorize, and reconcile your bank statements with 99.9% accuracy." },
            { icon: Calculator, title: "Proactive Tax Planning", desc: "We use predictive algorithms to model your tax liability throughout the year, ensuring no surprises." },
            { icon: FileText, title: "Instant Audit Readiness", desc: "Every transaction is securely documented and instantly retrievable, keeping you perpetually ready for compliance reviews." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <feat.icon size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
