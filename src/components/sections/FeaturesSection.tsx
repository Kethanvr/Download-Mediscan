'use client';

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
    <li className="flex items-start p-5 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out border border-transparent hover:border-gray-200 group">
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-3 text-white mr-4 mt-1 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </li>
  );
}

const features = [
  {
    id: 'scan',
    icon: <MdCameraAlt className="w-6 h-6" />,
    title: "Instant Medicine Scanning",
    description: "Identify all key details with just one click.",
  },
  {
    id: 'ai',
    icon: <MdChat className="w-6 h-6" />,
    title: "AI Assistant (Doc AI Chatbot)",
    description: "Ask any health-related questions about your scanned medicine.",
  },
  {
    id: 'history',
    icon: <MdHistory className="w-6 h-6" />,
    title: "History Tracking",
    description: "Save and manage your scan history for future reference.",
  },
  {
    id: 'upload',
    icon: <MdUpload className="w-6 h-6" />,
    title: "Health Record Upload",
    description: "Securely upload and access your medical records.",
  },
  {
    id: 'ads',
    icon: <RiAdvertisementLine className="w-6 h-6" />,
    title: "No Ads, No Clutter",
    description: "100% ad-free experience.",
  },
  {
    id: 'speed',
    icon: <MdSpeed className="w-6 h-6" />,
    title: "Fast & Lightweight",
    description: "Designed for speed and efficiency.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden font-poppins">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Features badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 text-primary px-6 py-2 rounded-full text-sm font-bold">
            POWERFUL FEATURES
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary tracking-wide">
          🩺 About MediScan
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          MediScan is your trusted AI-powered health companion designed to
          simplify medicine identification and understanding. Whether
          you're a healthcare professional, a caregiver, or an individual
          from rural areas or senior communities — MediScan empowers you to
          make informed decisions, instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800 relative">
              <span className="relative inline-block">
                🔍 Features
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></span>
              </span>
            </h3>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-400/20 blur-lg rounded-2xl"></div>
              <Image
                src="/assets/promotion.png"
                alt="MediScan Home Page"
                width={350}
                height={650}
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl hover:shadow-blue-200/50 transition-shadow duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-md"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400/10 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
