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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-500">
        ✨ Introducing MediScan Gold
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Unlock the ultimate MediScan experience! With{" "}
        <span className="font-semibold text-yellow-500">Gold Membership</span>
        , enjoy a stunning gold-themed UI, early access to new features,
        unlimited scans, unlimited uploads, priority support, and so much
        more.
        <br />
        Be more than a user —{" "}
        <span className="font-semibold">be a Gold Member</span>! 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {screenshots.map((screenshot) => (
          <div key={screenshot.src} className="flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </PhoneMockup>
          </div>
        ))}
      </div>
    </section>
  );
}
