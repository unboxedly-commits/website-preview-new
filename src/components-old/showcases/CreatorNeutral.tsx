"use client";

import { motion } from "framer-motion";
import { PenTool, Layers, Users, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function CreatorNeutralShowcase() {
  return (
    <div className="min-h-[200vh] bg-[#FAFAFA] text-[#2D2D2D] font-sans selection:bg-[#E2E8F0] selection:text-[#2D2D2D] overflow-hidden relative">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8F0FE] rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F3E8FF] rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      {/* Clean Nav */}
      <nav className="fixed w-full flex justify-between items-center px-8 md:px-16 py-6 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-black/5">
        <div className="text-xl font-bold tracking-tight text-[#2D2D2D] flex items-center gap-2">
          <Layers size={20} className="text-[#64748B]" /> Canvas
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[#64748B]">
          <a href="#" className="hover:text-[#2D2D2D] transition-colors">Features</a>
          <a href="#" className="hover:text-[#2D2D2D] transition-colors">Community</a>
          <a href="#" className="hover:text-[#2D2D2D] transition-colors">Pricing</a>
        </div>
        <button className="px-5 py-2.5 bg-[#2D2D2D] text-white text-sm font-medium rounded-full hover:bg-[#1A1A1A] transition-colors shadow-sm">
          Start Creating
        </button>
      </nav>

      <main className="relative z-10 w-full pt-[25vh] px-6 md:px-16 max-w-6xl mx-auto text-center">
        
        {/* Soft, Minimalist Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-[#475569] font-medium text-xs mb-8">
            <Sparkles size={14} /> Empowering independent voices.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 max-w-4xl text-[#1E293B]">
            Your creative work, <br/> seamlessly monetized.
          </h1>
          
          <p className="text-lg text-[#64748B] max-w-2xl font-light leading-relaxed mb-12">
            Canvas provides a quiet, powerful toolkit for writers, designers, and educators to share their knowledge and build a sustainable living online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-3.5 bg-[#1E293B] text-white font-medium rounded-full hover:bg-black transition-colors flex items-center gap-2 shadow-xl shadow-black/10">
              Build your space <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3.5 bg-white text-[#475569] font-medium rounded-full hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors">
              Explore Examples
            </button>
          </div>
        </motion.div>

        {/* Floating Abstract UI Elements */}
        <div className="mt-32 relative h-[500px] w-full bg-white rounded-3xl border border-[#F1F5F9] shadow-2xl shadow-black/5 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
          
          {/* Decorative minimalist shapes representing "UI" */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-64 h-48 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col p-4 gap-3 absolute left-10 md:left-32 top-20"
          >
            <div className="w-1/2 h-4 bg-[#E2E8F0] rounded-full" />
            <div className="w-full h-3 bg-[#F1F5F9] rounded-full" />
            <div className="w-3/4 h-3 bg-[#F1F5F9] rounded-full" />
            <div className="w-full h-24 bg-[#E8F0FE] rounded-lg mt-auto" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="w-72 h-64 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-6 absolute right-10 md:right-32 bottom-10 z-10"
          >
             <div className="flex justify-between items-center mb-6">
                <div className="w-10 h-10 bg-[#F3E8FF] rounded-full flex items-center justify-center"><Users size={16} className="text-[#9333EA]" /></div>
                <div className="w-20 h-6 bg-[#F1F5F9] rounded-full" />
             </div>
             <div className="text-left">
               <div className="text-3xl font-bold mb-1 text-[#1E293B]">4,209</div>
               <div className="text-xs text-[#64748B] mb-6">Active Subscribers</div>
             </div>
             <div className="w-full h-1 bg-[#F1F5F9] rounded-full overflow-hidden">
               <div className="w-3/4 h-full bg-[#9333EA] rounded-full" />
             </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { icon: PenTool, title: "Distraction-Free Editor", desc: "Write, format, and publish in a clean environment that puts your content first." },
            { icon: Users, title: "Community Building", desc: "Foster deep connections with built-in forums, comments, and direct messaging." },
            { icon: Layers, title: "Flexible Memberships", desc: "Offer free, paid, or tiered subscriptions without complex integrations." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-transparent p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] text-[#64748B] flex items-center justify-center mb-6">
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">{feat.title}</h3>
              <p className="text-[#64748B] font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Creator Directory / Network */}
        <section className="mt-32 max-w-7xl mx-auto border-t border-[#F1F5F9] pt-24 px-6 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Join the Network</h2>
            <p className="text-[#64748B] font-light max-w-2xl mx-auto">Discover and collaborate with thousands of independent writers, podcasters, and thinkers who have found their home here.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Atlas Protocol", desc: "Weekly insights on macroeconomics and decentralized finance.", category: "Finance", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a2236a0?q=80&w=400&auto=format&fit=crop" },
              { name: "The Minimalist Kitchen", desc: "Plant-based recipes and culinary philosophy for modern living.", category: "Food & Wellness", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop" },
              { name: "Studio 3B", desc: "Interviews with independent filmmakers and screenwriters.", category: "Arts", img: "https://images.unsplash.com/photo-1512466699220-30234a496836?q=80&w=400&auto=format&fit=crop" },
              { name: "Code & Coffee", desc: "Daily snippets and architectural discussions for software engineers.", category: "Technology", img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop" }
            ].map((creator, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#F1F5F9] hover:shadow-xl transition-shadow cursor-pointer flex flex-col">
                <div className="w-16 h-16 rounded-full bg-slate-200 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${creator.img})` }} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#9333EA] font-semibold mb-2">{creator.category}</div>
                <h4 className="font-bold text-[#1E293B] mb-2">{creator.name}</h4>
                <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-1">{creator.desc}</p>
                <div className="text-sm font-semibold text-[#1E293B] hover:text-[#9333EA] transition-colors flex items-center gap-1">Read Publication <ChevronRight size={14} /></div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Clean & Accessible Footer */}
      <footer className="bg-white border-t border-[#F1F5F9] mt-32 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="font-serif text-2xl font-bold tracking-tight text-[#1E293B] mb-4">
              Canvas.
            </div>
            <p className="text-[#64748B] font-light max-w-sm mb-8 leading-relaxed">
              A serene, beautifully designed space for independent creators to write, publish, and get paid directly by their audience.
            </p>
            <div className="flex gap-4">
              <input type="email" placeholder="Your email address" className="bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#9333EA] transition-colors w-64" />
              <button className="bg-[#1E293B] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0F172A] transition-colors">Subscribe</button>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#1E293B] font-bold text-sm mb-6">Platform</h4>
            <ul className="space-y-3 text-[#64748B] text-sm font-light">
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Publishing</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Custom Domains</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#1E293B] font-bold text-sm mb-6">Resources</h4>
            <ul className="space-y-3 text-[#64748B] text-sm font-light">
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Creator Guide</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#1E293B] font-bold text-sm mb-6">Company</h4>
            <ul className="space-y-3 text-[#64748B] text-sm font-light">
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#9333EA] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#F1F5F9] flex flex-col md:flex-row justify-between items-center text-xs text-[#64748B] font-light">
          <p>© 2026 Canvas Creator Network.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1E293B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1E293B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1E293B] transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
