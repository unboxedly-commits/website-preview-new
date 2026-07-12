"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, MoveRight, Maximize, Compass, TreePine, SunDim } from "lucide-react";

export default function LandscapingShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Subtle parallax for organic feel
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleHeroImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-[250vh] bg-[#F7F5F0] text-[#1A2F24] font-serif selection:bg-[#4A6B53] selection:text-white overflow-hidden relative">
      
      {/* Top Nav (Very minimal, architectural) */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-50 pointer-events-none">
        <div className="flex flex-col text-sm font-sans tracking-[0.2em] uppercase font-bold pointer-events-auto">
          <span>Terra</span>
          <span className="text-[#8B9D83]">Firma.</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-sans tracking-[0.1em] uppercase font-semibold text-[#4A6B53] pointer-events-auto">
          <a href="#" className="hover:text-[#1A2F24] transition-colors">Projects</a>
          <a href="#" className="hover:text-[#1A2F24] transition-colors">Studio</a>
          <a href="#" className="hover:text-[#1A2F24] transition-colors">Journal</a>
        </div>
        <button className="text-xs font-sans tracking-[0.1em] uppercase font-semibold border-b border-[#1A2F24] pb-1 hover:text-[#8B9D83] hover:border-[#8B9D83] transition-colors pointer-events-auto">
          Initiate Project
        </button>
      </nav>

      <main className="relative z-10">
        
        {/* Split Screen Hero */}
        <div className="h-screen w-full flex flex-col md:flex-row">
          {/* Left Text Side */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-24 pt-32 md:pt-0 relative z-20 bg-[#F7F5F0]">
            <motion.div style={{ y: yHeroText }}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-[#8B9D83] mb-8"
              >
                <Compass size={14} /> Master Planning
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8"
              >
                Architectural <br/>
                <span className="italic font-normal">Landscapes.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="text-lg text-[#4A6B53] font-sans font-light max-w-md leading-relaxed"
              >
                We sculpt the earth. Blending rigid modernist architecture with wild, organic flora to create spaces of profound tranquility.
              </motion.p>
            </motion.div>
          </div>
          
          {/* Right Image Side with Parallax */}
          <div className="flex-1 h-full relative overflow-hidden hidden md:block">
            <motion.div 
              style={{ scale: scaleHeroImg }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center origin-bottom"
            />
            {/* Overlay to soften the image slightly */}
            <div className="absolute inset-0 bg-[#4A6B53]/10 mix-blend-multiply" />
          </div>
        </div>

        {/* Staggered Image Grid Section */}
        <div className="w-full py-40 px-4 md:px-12 bg-[#1A2F24] text-[#F7F5F0]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-4xl md:text-6xl font-light">Selected <br/><span className="italic">Works</span></h2>
              <p className="font-sans font-light text-[#8B9D83] max-w-sm text-sm leading-relaxed">
                Explore our portfolio of high-end residential and commercial outdoor environments, spanning from the Hollywood Hills to the Hamptons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              {/* Project 1 - Spans 7 cols */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:col-span-7 group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-zinc-800 overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                      <Maximize size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start font-sans">
                  <div>
                    <h3 className="text-2xl font-serif mb-1 group-hover:text-[#8B9D83] transition-colors">The Glass Pavilion</h3>
                    <p className="text-xs tracking-widest uppercase text-[#8B9D83]">Beverly Hills, CA</p>
                  </div>
                  <MoveRight className="text-[#8B9D83] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Project 2 - Spans 5 cols, offset down */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="md:col-span-5 md:mt-40 group cursor-pointer"
              >
                <div className="w-full aspect-[3/4] bg-zinc-800 overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                      <Maximize size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start font-sans">
                  <div>
                    <h3 className="text-2xl font-serif mb-1 group-hover:text-[#8B9D83] transition-colors">Desert Modernism</h3>
                    <p className="text-xs tracking-widest uppercase text-[#8B9D83]">Scottsdale, AZ</p>
                  </div>
                  <MoveRight className="text-[#8B9D83] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Philosophy / Features Block */}
        <section className="py-40 px-8 max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-light mb-24">The Elements of Design</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: Leaf, title: "Native Flora", desc: "We source indigenous plants that thrive naturally in their environment, ensuring longevity." },
              { icon: SunDim, title: "Shadow & Light", desc: "Strategic placement of hardscaping to play with the sun's trajectory throughout the day." },
              { icon: TreePine, title: "Verticality", desc: "Utilizing mature trees as structural columns to define outdoor rooms without walls." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full border border-[#8B9D83]/30 flex items-center justify-center mb-6 group-hover:border-[#1A2F24] transition-colors duration-500">
                  <item.icon size={28} className="text-[#4A6B53] group-hover:text-[#1A2F24] transition-colors duration-500" strokeWidth={1} />
                </div>
                <h3 className="text-xl mb-4 font-medium">{item.title}</h3>
                <p className="font-sans text-sm text-[#4A6B53] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Process */}
        <section className="mt-32 max-w-5xl mx-auto px-4 md:px-12 py-24 border-t border-[#8B9D83]/20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-[#1A2F24] mb-4">The Terra Firma Process</h2>
            <p className="font-sans text-[#4A6B53] font-light max-w-xl mx-auto">A meticulous journey from conceptual sketches to the final placement of the last stone.</p>
          </div>
          
          <div className="space-y-16">
            {[
              { phase: "01", title: "Topographical Consultation", desc: "We begin by analyzing the unique micro-climate, soil composition, and solar orientation of your property. We listen to your vision and establish the architectural boundaries." },
              { phase: "02", title: "Conceptual Architecture", desc: "Our landscape architects draft hand-drawn sketches followed by immersive 3D renderings, allowing you to walk through your future garden before a single shovel touches the earth." },
              { phase: "03", title: "Material Sourcing", desc: "We travel to exclusive quarries and nurseries across the continent to hand-select the exact stones, timber, and mature flora that will compose your landscape." },
              { phase: "04", title: "Sculpting the Earth", desc: "Our master craftsmen and horticulturists execute the vision with surgical precision, ensuring drainage, lighting, and irrigation systems are perfectly integrated." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <div className="text-6xl font-light text-[#8B9D83] opacity-50 shrink-0">{step.phase}</div>
                <div>
                  <h3 className="text-2xl font-medium text-[#1A2F24] mb-2">{step.title}</h3>
                  <p className="font-sans text-[#4A6B53] font-light leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#1A2F24] text-[#F7F5F0] py-32 px-4 md:px-12 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-16">Words from our Patrons</h2>
            
            <div className="relative">
              <div className="text-6xl font-serif text-[#8B9D83] absolute -top-8 -left-4 opacity-50">"</div>
              <p className="text-xl md:text-3xl font-light leading-relaxed mb-8 relative z-10 italic">
                Terra Firma didn't just plant a garden; they sculpted an entirely new living space that feels like it has existed in harmony with our home for a century. The attention to detail in the stonework is nothing short of masterful.
              </p>
              <div className="font-sans">
                <div className="font-semibold uppercase tracking-widest text-sm text-[#8B9D83]">The Harrison Estate</div>
                <div className="text-xs font-light text-white/50 mt-1">Atherton, California</div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Expanded Footer */}
      <footer className="bg-[#EAE7DF] pt-24 pb-12 px-8 font-sans border-t border-[#8B9D83]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-2xl font-medium text-[#1A2F24] tracking-tight mb-4">
              Terra Firma
            </div>
            <p className="text-[#4A6B53] text-sm font-light max-w-sm leading-relaxed mb-8">
              Bespoke landscape architecture for luxury estates. We sculpt the earth to create enduring, harmonious outdoor sanctuaries.
            </p>
            <button className="px-8 py-3 bg-[#1A2F24] text-[#F7F5F0] text-xs font-semibold uppercase tracking-widest hover:bg-[#2A3F34] transition-colors">
              Request a Consultation
            </button>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1A2F24] font-semibold mb-6">Studios</h4>
            <ul className="space-y-4 text-sm font-light text-[#4A6B53]">
              <li>Los Angeles, CA</li>
              <li>Santa Barbara, CA</li>
              <li>Montecito, CA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1A2F24] font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-[#4A6B53]">
              <li><a href="#" className="hover:text-[#1A2F24] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#1A2F24] transition-colors">Architectural Digest</a></li>
              <li><a href="#" className="hover:text-[#1A2F24] transition-colors">Press Inquiries</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-[#8B9D83] font-semibold border-t border-[#8B9D83]/20 pt-8">
          <div>© 2026 Terra Firma Landscape Architecture</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1A2F24] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1A2F24] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
