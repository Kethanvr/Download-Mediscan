'use client';

import AppLogo from "@/components/AppLogo";
import PhoneMockup from "@/components/PhoneMockup";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <header className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto pt-4 pb-6 text-center">
        {/* App Logo */}
        <div className="flex justify-center mb-8">
          <AppLogo className="w-40 h-40" />
        </div>

        {/* Badge */}
        <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          Built for Rural Healthcare Empowerment
        </div>

        {/* Tagline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
          AI Medicine Scanner{" "}
          <span className="text-primary">at Your Fingertips</span>
        </h1>

        {/* App Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-600">
          Capture a photo and access instant, AI-powered medicine information
          — faster, safer, smarter healthcare for everyone, everywhere.
        </p>

        {/* Download Button */}
        <a href="/app-release.apk" download>
          <button
            type="button"
            className="flex items-center mx-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg mb-16 hover:bg-blue-600 transition-colors shadow-lg"
          >
            <FaDownload className="mr-2" />
            Download APK
          </button>
        </a>

        {/* Phone Demo */}
        <div className="flex justify-center">
          <PhoneMockup className="scale-75 md:scale-90 lg:scale-100">
            <div className="bg-blue-500 text-white h-full flex flex-col">
              <Image
                src="/assets/Homage-page.png"
                alt="MediScan Home Page"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </PhoneMockup>
        </div>
      </div>
    </header>
  );
}
