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
    <li className="flex items-start">
      <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
}

const features = [
  {
    id: 'scan',
    icon: <MdCameraAlt className="w-5 h-5" />,
    title: "Instant Medicine Scanning",
    description: "Identify all key details with just one click.",
  },
  {
    id: 'ai',
    icon: <MdChat className="w-5 h-5" />,
    title: "AI Assistant (Doc AI Chatbot)",
    description: "Ask any health-related questions about your scanned medicine.",
  },
  {
    id: 'history',
    icon: <MdHistory className="w-5 h-5" />,
    title: "History Tracking",
    description: "Save and manage your scan history for future reference.",
  },
  {
    id: 'upload',
    icon: <MdUpload className="w-5 h-5" />,
    title: "Health Record Upload",
    description: "Securely upload and access your medical records.",
  },
  {
    id: 'ads',
    icon: <RiAdvertisementLine className="w-5 h-5" />,
    title: "No Ads, No Clutter",
    description: "100% ad-free experience.",
  },
  {
    id: 'speed',
    icon: <MdSpeed className="w-5 h-5" />,
    title: "Fast & Lightweight",
    description: "Designed for speed and efficiency.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 font-poppins">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          🩺 About MediScan
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
          MediScan is your trusted AI-powered health companion designed to
          simplify medicine identification and understanding. Whether
          you&apos;re a healthcare professional, a caregiver, or an individual
          from rural areas or senior communities — MediScan empowers you to
          make informed decisions, instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-8">
              🔍 Features
            </h3>
            <ul className="space-y-6">
              {features.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <PhoneMockup>
              <Image
                src="/assets/whtsnew.png"
                alt="MediScan Home Page"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
