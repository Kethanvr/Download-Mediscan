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
  return (
    <section className="py-20 container mx-auto font-poppins">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-yellow-500 tracking-wide">
        ✨ Introducing MediScan Gold
      </h2>
      <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
        Unlock the ultimate MediScan experience! With{" "}
        <span className="font-semibold text-yellow-500">Gold Membership</span>,
        enjoy a stunning gold-themed UI, early access to new features,
        unlimited scans, unlimited uploads, priority support, and so much more.
        <br />
        Be more than a user —{" "}
        <span className="font-semibold text-gray-800">be a Gold Member</span>! 🚀
      </p>

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

      <div className="text-center mt-12">
        <button type="button" className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
          Become a Gold Member Now
        </button>
      </div>
    </section>
  );
}
