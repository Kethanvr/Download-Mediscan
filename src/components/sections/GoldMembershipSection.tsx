'use client';

import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";

const screenshots = [
  {
    src: "/assets/Gold-plan.png",
    alt: "MediScan Gold Plan",
  },
  {
    src: "/assets/Home-gold.png",
    alt: "MediScan Gold Home",
  },
  {
    src: "/assets/Histroy-gold.png",
    alt: "MediScan Gold History",
  },
  {
    src: "/assets/Accunt-gold.png",
    alt: "MediScan Gold Account",
  },
];

export default function GoldMembershipSection() {
  // Scroll to top handler
  const handleGetGoldClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Gold membership features
  const goldFeatures = [
    { title: "Premium UI", description: "Stunning gold-themed interface" },
    { title: "Early Access", description: "Be first to try new features" },
    { title: "Unlimited Scans", description: "No daily scan limits" },
    { title: "Unlimited Uploads", description: "Store all your medical records" },
    { title: "Priority Support", description: "Get help when you need it" },
    { title: "Ad-Free Experience", description: "No interruptions, ever" },
  ];

  return (
    <section className="py-24 font-poppins relative overflow-hidden">
      {/* Gold background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-white -z-10"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Gold badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            PREMIUM MEMBERSHIP
          </div>
        </div>
      
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-600 tracking-wide">
          ✨ Experience MediScan Gold
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          Unlock the ultimate MediScan experience! With{" "}
          <span className="font-bold text-yellow-500">Gold Membership</span>,
          enjoy a premium experience designed for those who want the very best.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {goldFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-yellow-100 group hover:border-yellow-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-600 group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleGetGoldClick}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-amber-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            Upgrade to Gold
          </button>
        </div>

        {/* Screenshots with improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {screenshots.map((screenshot) => (
            <div key={screenshot.src} className="flex justify-center">
              <PhoneMockup className="scale-75 md:scale-90 hover:scale-95 transition-transform duration-300 ease-in-out">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
                  priority
                />
              </PhoneMockup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
