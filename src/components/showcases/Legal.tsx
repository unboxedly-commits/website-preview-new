"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, FileText, ArrowRight, BookOpen, Briefcase } from "lucide-react";

export default function LegalShowcase() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-slate-300 selection:text-slate-900 overflow-hidden relative">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-slate-900" />
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-slate-900" />
        <div className="absolute left-0 right-0 top-[20%] h-px bg-slate-900" />
      </div>

      {/* Elegant Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between px-8 md:px-24 py-8 relative z-10"
      >
        <div className="text-2xl font-serif font-semibold tracking-tight text-slate-900 flex items-center gap-3">
          <Scale size={28} className="text-slate-700" />
          VANGUARD <span className="font-light text-slate-500">LEGAL</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-slate-600">
          <a href="#practice" className="hover:text-slate-900 transition-colors">Practice Areas</a>
          <a href="#attorneys" className="hover:text-slate-900 transition-colors">Our Attorneys</a>
          <a href="#insights" className="hover:text-slate-900 transition-colors">Insights</a>
        </div>
        <button className="px-6 py-3 text-sm font-semibold tracking-wide bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20">
          Request Consultation
        </button>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-24 pt-24 pb-32">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 text-left pt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="w-8 h-[1px] bg-slate-400" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Uncompromising Advocacy</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-medium text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Precision <br/>
              <span className="text-slate-400 italic font-light">in Practice.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-lg leading-relaxed mb-12 font-light"
            >
              We combine decades of elite legal experience with proprietary AI-driven case analysis to deliver unparalleled results for our clients.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <button className="px-8 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center gap-3 group shadow-xl shadow-slate-900/10">
                Discuss Your Case <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-slate-600 font-medium hover:text-slate-900 transition-colors flex items-center gap-2 underline underline-offset-4">
                View Past Verdicts
              </button>
            </motion.div>
          </div>

          {/* Abstract Legal Imagery / Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden flex flex-col justify-end p-8">
              {/* Decorative architecture lines representing structure/law */}
              <div className="absolute top-0 right-0 w-3/4 h-full border-l border-white/40" />
              <div className="absolute top-1/4 left-0 w-full h-px bg-white/40" />
              <div className="absolute bottom-1/3 left-0 w-full h-px bg-white/40" />
              
              <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 border border-white max-w-sm ml-auto shadow-2xl">
                <ShieldCheck size={32} className="text-slate-800 mb-6" />
                <h3 className="text-xl font-serif font-medium mb-3">AI-Enhanced Discovery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our proprietary systems analyze millions of precedents in seconds, uncovering strategic advantages traditional firms miss.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Practice Areas */}
        <section id="practice" className="mt-40 border-t border-slate-200 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-slate-900 mb-4">Areas of Practice</h2>
              <p className="text-slate-500 max-w-md">Focused expertise for high-stakes corporate and intellectual property litigation.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-slate-800 font-semibold uppercase tracking-widest text-xs hover:text-slate-500 transition-colors">
              All Practices <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {[
              { icon: Briefcase, title: "Corporate Litigation", desc: "Defending enterprise clients in complex multi-jurisdictional disputes." },
              { icon: FileText, title: "Intellectual Property", desc: "Protecting the innovations and patents that drive modern industry." },
              { icon: BookOpen, title: "Regulatory Compliance", desc: "Navigating the labyrinth of federal and international trade regulations." }
            ].map((practice, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#f8f9fa] p-12 hover:bg-white transition-colors cursor-pointer group"
              >
                <practice.icon size={28} className="text-slate-400 mb-6 group-hover:text-slate-800 transition-colors" />
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-4">{practice.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Attorney Profiles */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Leadership & Counsel</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Founded by former federal prosecutors and tech-sector general counsels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { name: "Eleanor Vance, Esq.", role: "Managing Partner", desc: "Former Assistant U.S. Attorney for the SDNY. 15+ years experience in corporate fraud and high-stakes litigation.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
              { name: "Marcus Thorne", role: "Head of Intellectual Property", desc: "Stanford Law, specialized in software patents and AI copyright defense. Successfully defended 3 Fortune 500 tech firms.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" }
            ].map((attorney, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="w-32 h-40 bg-slate-200 overflow-hidden shrink-0 relative filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${attorney.img})` }} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-slate-900">{attorney.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 mt-1">{attorney.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{attorney.desc}</p>
                  <button className="mt-4 text-xs font-semibold uppercase tracking-widest border-b border-slate-900 pb-1">View Full Bio</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Verdicts */}
        <section className="mt-40 bg-slate-900 text-white py-24 px-8 md:px-16 -mx-4 md:-mx-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif mb-12">Representative Matters</h2>
            <div className="space-y-6">
              {[
                { case: "TechCorp vs. State Dept.", result: "Won", amount: "$1.2B Patent Defense", detail: "Successfully defended leading AI firm against antitrust and patent infringement claims." },
                { case: "Global Logistics Merger", result: "Cleared", amount: "Regulatory Approval", detail: "Navigated FTC and EU regulatory bodies to clear a highly contested $4B acquisition." },
                { case: "Doe v. Healthcare Partners", result: "Dismissed", amount: "Class Action Defense", detail: "Secured full dismissal of data breach class action within 90 days of filing." }
              ].map((verdict, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-slate-700 hover:border-slate-500 transition-colors bg-slate-800/50">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-serif font-medium">{verdict.case}</h3>
                    <p className="text-slate-400 text-sm mt-1">{verdict.detail}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">{verdict.result}</div>
                    <div className="text-xl font-medium">{verdict.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Serious Footer */}
      <footer className="bg-[#0f172a] text-slate-300 pt-24 pb-12 px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-semibold tracking-tight text-white mb-6">VANGUARD <span className="font-light text-slate-500">LEGAL</span></div>
            <p className="text-slate-400 font-light text-sm max-w-sm leading-relaxed mb-6">
              Strategic counsel for the modern era. Combining legal brilliance with technological superiority.
            </p>
            <div className="text-sm font-light text-slate-500">
              <p>Phone: +1 (212) 555-0199</p>
              <p>Email: counsel@vanguardlegal.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">Offices</h4>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li>1 World Trade Center, New York, NY</li>
              <li>100 Bishopsgate, London, UK</li>
              <li>Marina Bay Financial Centre, Singapore</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">Legal & Ethical</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Attorney Advertising Notice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
          <p>© 2026 Vanguard Legal LLP. Prior results do not guarantee a similar outcome.</p>
          <p className="mt-4 md:mt-0">Built on the Vanguard Tech Stack.</p>
        </div>
      </footer>
    </div>
  );
}
