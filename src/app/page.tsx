import HeaderSection from "@/components/sections/HeaderSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GoldMembershipSection from "@/components/sections/GoldMembershipSection";
import RuralHealthcareSection from "@/components/sections/RuralHealthcareSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: "MediScan - AI Medicine Scanner at Your Fingertips",
  description: "MediScan is your trusted AI-powered health companion designed to simplify medicine identification and understanding, especially for rural healthcare workers.",
  alternates: {
    canonical: "https://mediscan.kethanvr.me"
  },
  keywords: ["medicine scanner", "AI healthcare", "medicine identification", "rural healthcare", "medical app", "health AI", "medicine app", "medication scanner"]
};

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
