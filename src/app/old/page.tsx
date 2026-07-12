import Navbar from "@/components-old/Navbar";
import Hero from "@/components-old/Hero";
import ShowcaseGrid from "@/components-old/ShowcaseGrid";
import HowItWorks from "@/components-old/HowItWorks";
import Pricing from "@/components-old/Pricing";
import ThreatMatrix from "@/components-old/ThreatMatrix";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      
      <section className="py-20 relative z-10">
        <ThreatMatrix />
      </section>

      <HowItWorks />
      <ShowcaseGrid />
      <Pricing />
      
      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-white/40 text-sm font-mono mt-16 bg-black relative z-10">
        <p>© 2026 ZevenBots. Built for scale.</p>
      </footer>
    </main>
  );
}
