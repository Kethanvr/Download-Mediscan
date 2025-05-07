"use client";

import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";
import {
  MdCameraAlt,
  MdChat,
  MdHistory,
  MdSpeed,
  MdUpload,
} from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

interface FeatureItemProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <li className="flex items-start p-5">
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-3 text-white mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">
          {title}
        </h4>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </li>
  );
}

const features = [
  {
    id: "scan",
    icon: <MdCameraAlt className="w-6 h-6" />,
    title: "Instant Medicine Scanning",
    description: "Identify all key details with just one click.",
  },
  {
    id: "ai",
    icon: <MdChat className="w-6 h-6" />,
    title: "AI Assistant (Doc AI Chatbot)",
    description:
      "Ask any health-related questions about your scanned medicine.",
  },
  {
    id: "history",
    icon: <MdHistory className="w-6 h-6" />,
    title: "History Tracking",
    description: "Save and manage your scan history for future reference.",
  },
  {
    id: "upload",
    icon: <MdUpload className="w-6 h-6" />,
    title: "Health Record Upload",
    description: "Securely upload and access your medical records.",
  },
  {
    id: "ads",
    icon: <RiAdvertisementLine className="w-6 h-6" />,
    title: "No Ads, No Clutter",
    description: "100% ad-free experience.",
  },
  {
    id: "speed",
    icon: <MdSpeed className="w-6 h-6" />,
    title: "Fast & Lightweight",
    description: "Designed for speed and efficiency.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 font-poppins bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Features badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            POWERFUL FEATURES
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-gray-800 tracking-wide">
          🩺 About MediScan
        </h2>

        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12 md:mb-16 leading-relaxed">
          MediScan is your trusted AI-powered health companion designed to
          simplify medicine identification and understanding. Whether you're a
          healthcare professional, a caregiver, or an individual from rural
          areas or senior communities — MediScan empowers you to make informed
          decisions, instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
              🔍 Key Features
            </h3>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[300px] md:max-w-[350px]">
              <Image
                src="/assets/promotion.png"
                alt="MediScan Home Page"
                width={350}
                height={650}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
