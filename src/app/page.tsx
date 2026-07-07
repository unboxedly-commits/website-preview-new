import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ShowcaseGrid />
      <Pricing />
      
      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-white/40 text-sm font-mono mt-16 bg-black relative z-10">
        <p>© 2026 AGENCY_OS. Built for scale.</p>
      </footer>
    </main>
  );
}
