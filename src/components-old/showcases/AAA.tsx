"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Workflow, Cpu, ArrowRight, Activity, Code2, Zap } from "lucide-react";

export default function AAAShowcase() {
  // Mock data for a "bklit" inspired chart
  const chartData = [40, 65, 45, 80, 55, 90, 75, 110, 85, 120];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-mono selection:bg-cyan-900 selection:text-cyan-100 overflow-hidden relative">
      {/* Cybernetic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Glowing Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between px-8 py-6 relative z-10 border-b border-slate-800/50 bg-[#020617]/50 backdrop-blur-md sticky top-0"
      >
        <div className="flex items-center gap-3 text-cyan-400 font-bold tracking-tight text-xl">
          <Terminal size={24} />
          SYNAPSE.AI
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-slate-500">
          <a href="#agents" className="hover:text-cyan-400 transition-colors">Agents</a>
          <a href="#metrics" className="hover:text-cyan-400 transition-colors">Performance</a>
          <a href="#infrastructure" className="hover:text-cyan-400 transition-colors">Infrastructure</a>
        </div>
        <button className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900 transition-colors flex items-center gap-2">
          <Zap size={14} /> Deploy Cluster
        </button>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Activity size={14} /> System Online
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-6"
            >
              Automate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Impossible.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10"
            >
              We design, deploy, and manage multi-agent Swarm architectures that replace entire operational departments with deterministic, error-free AI pipelines.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button className="px-8 py-4 bg-cyan-500 text-[#020617] font-bold tracking-wide hover:bg-cyan-400 transition-colors flex items-center gap-2">
                Initialize Audit <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold tracking-wide hover:bg-slate-800 transition-colors flex items-center gap-2">
                <Code2 size={18} /> Read Docs
              </button>
            </motion.div>
          </div>

          {/* Right Side: Data Visualization (Bklit inspired) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-2xl blur-xl" />
            <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-cyan-900/20">
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">Throughput / MS</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
              </div>
              
              {/* Animated Chart */}
              <div className="h-64 flex items-end justify-between gap-2 px-2 relative">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between border-b border-slate-800 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full border-t border-slate-800/50 flex-1" />
                  ))}
                </div>

                {chartData.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / 120) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), type: "spring" }}
                    className="w-full bg-gradient-to-t from-blue-600/50 to-cyan-400 relative group cursor-pointer z-10"
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}K
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-between mt-4 text-xs text-slate-500 font-semibold tracking-wider">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features / Capabilities */}
        <section id="agents" className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">Autonomous Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Deploy specialized agents into your tech stack to handle repetitive, high-volume tasks with zero hallucination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Data ETL Pipelines", desc: "Automate extraction, transformation, and loading of raw data across 50+ integrations." },
              { icon: Workflow, title: "Support Triage", desc: "Intelligent routing and resolution of level 1 & 2 support tickets using fine-tuned LLMs." },
              { icon: Activity, title: "Predictive Monitoring", desc: "24/7 anomaly detection in your server infrastructure with automated rollback capabilities." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-950 border border-cyan-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies & Impact */}
        <section className="py-24 max-w-7xl mx-auto px-4 relative z-10 border-t border-slate-800/50 mt-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Quantifiable Impact.</h2>
              <p className="text-slate-400 font-medium mb-8">We don't just build scripts; we build autonomous systems that directly impact your bottom line. See how we scaled operations for our enterprise partners.</p>
              
              <div className="space-y-6">
                {[
                  { metric: "40%", label: "Reduction in Support Overhead", client: "Acme FinTech" },
                  { metric: "120h", label: "Saved per week on manual data entry", client: "Global Logistics Inc." },
                  { metric: "3.5x", label: "Increase in lead qualification speed", client: "SaaS Solutions" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                    <div className="text-3xl font-black text-cyan-400 min-w-[80px]">{stat.metric}</div>
                    <div>
                      <div className="text-white font-bold">{stat.label}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.client}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full bg-[#0a0f1d] border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/5 blur-3xl pointer-events-none" />
              <div className="text-sm font-mono text-cyan-500 mb-4">&gt; EXECUTE CASE_STUDY_01</div>
              <p className="text-slate-300 italic mb-6">"Synapse.AI entirely rebuilt our ticket routing. Their fine-tuned models now handle 60% of our tier 1 support with zero human intervention. The ROI was realized in less than two months."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800" />
                <div>
                  <div className="text-white font-bold text-sm">Sarah Jenkins</div>
                  <div className="text-slate-500 text-xs">CTO, Acme FinTech</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Terminal Footer (Expanded) */}
      <footer className="border-t border-slate-800 bg-[#020617] pt-20 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white font-bold text-lg">
              <Terminal size={20} className="text-cyan-500" /> Synapse.AI
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Pioneering the next generation of autonomous business systems. We build the silent engines that power tomorrow's enterprises.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors text-xs font-mono">Book Audit</button>
              <button className="px-4 py-2 border border-slate-800 hover:border-slate-600 text-slate-300 rounded transition-colors text-xs font-mono">View Docs</button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Platform</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Neural Routing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Data Pipelines</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Predictive Monitoring</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API References</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Company</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono">
          <div>sys.exit(0) // Synapse.AI © 2026. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
