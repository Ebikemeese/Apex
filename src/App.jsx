import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import CodeShowcase from "./components/CodeShowcase";
import SystemMetrics from "./components/SystemMetrics";
import TechSpecGrid from "./components/TechSpecGrid";
import PricingGrid from "./components/PricingGrid";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        {/* Section 1: Default Pitch Dark (#090d16) */}
        <Hero />

        {/* Section 2: Standard Dark Grid (#090d16 with Borders) */}
        <BentoGrid />

        {/* Section 3: Deep Indigo Canvas with Grid Pattern Overlay (#0a0f24) */}
        <CodeShowcase />

        {/* Section 4: Translucent Card Overlay (#111827 / 50) */}
        <SystemMetrics />

        {/* Section 5: Tech Spec Layout (#090d16) */}
        <TechSpecGrid />

        {/* Section 6: Radial Gradient Surface (from #090d16 via #111625 to #090d16) */}
        <PricingGrid />

        {/* Section 7: Dark Slate Matte Surface (#0d1322) */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
