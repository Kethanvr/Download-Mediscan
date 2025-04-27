import HeaderSection from "@/components/sections/HeaderSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GoldMembershipSection from "@/components/sections/GoldMembershipSection";
import RuralHealthcareSection from "@/components/sections/RuralHealthcareSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderSection />
      <FeaturesSection />
      <GoldMembershipSection />
      <RuralHealthcareSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
