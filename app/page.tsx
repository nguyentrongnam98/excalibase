import InteractiveDemo from "@/app/components/InteractiveDemo";
import {
  AIToolsSection,
  ProductSection,
  IntegrationsSection,
  TestimonialsSection,
} from "@/app/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] font-sans">
      {/* Hero / Interactive Demo */}
      <main className="min-h-screen flex items-start lg:items-center justify-center py-4 sm:py-6 lg:py-8 pt-20 sm:pt-24">
        <InteractiveDemo />
      </main>

      {/* AI Tools Section */}
      <AIToolsSection />

      {/* Product Section */}
      <ProductSection />

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
