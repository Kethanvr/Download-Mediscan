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
    <li className="flex items-start hover:bg-gray-100 p-4 rounded-lg transition-all duration-300 ease-in-out">
      <div className="bg-primary rounded-full p-3 text-white mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg md:text-xl mb-1 text-gray-800">{title}</h4>
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
    <section className="bg-gray-50 py-20 font-poppins">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary tracking-wide">
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
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-800">
              🔍 Features
            </h3>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
         <Image
                        src="/assets/promotion.png"
                        alt="MediScan Home Page"
                        width={300}
                        height={600}
                        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      />
          </div>
        </div>
      </div>
    </section>
  );
}
