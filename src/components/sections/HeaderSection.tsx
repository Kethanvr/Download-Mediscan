'use client';

import AppLogo from "@/components/AppLogo";
import PhoneMockup from "@/components/PhoneMockup";
import { FaDownload } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <header className="bg-gradient-to-b from-blue-50 to-white py-16 font-poppins">
      <div className="container mx-auto pt-4 pb-6 text-center">
        {/* App Logo */}
        <div className="flex justify-center mb-8">
          <AppLogo className="w-36 h-36 md:w-40 md:h-40" />
        </div>

        {/* Badge */}
        <div className="inline-block bg-blue-100 text-primary px-6 py-3 rounded-full text-xs md:text-sm font-medium mb-6">
          Built for Rural Healthcare Empowerment
        </div>

        {/* Tagline */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
          AI Medicine Scanner{" "}
          <span className="text-primary">at Your Fingertips</span>
        </h1>

        {/* App Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-600 leading-relaxed">
          Capture a photo and access instant, AI-powered medicine information
          — faster, safer, smarter healthcare for everyone, everywhere.
        </p>
<p className="text-sm text-gray-600 mb-4 italic">
                Use the website if you encounter any issues with the APK.
              </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          
          {/* Visit Website Button */}
          <a
            href="https://mediscan.kethanvr.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
               className="flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg transform hover:scale-105"
            >
              <FaGlobe className="mr-2" />
              Visit Website
            </button>
          </a>

          {/* Download Button */}
          <a href="/MediScan.apk" download>
            <button
              type="button"
              className="flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg transform hover:scale-105"
            >
              <FaDownload className="mr-2" />
              Download APK
            </button>
          </a>
          
        </div>

        {/* Phone Demo */}
        <div className="flex justify-center">
          <PhoneMockup className="scale-75 md:scale-90 lg:scale-100 transform transition-all duration-300 hover:scale-105">
            <div className="bg-blue-500 text-white h-full flex flex-col">
              <Image
                src="/assets/Homage-page.png"
                alt="MediScan Home Page"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </PhoneMockup>
        </div>
      </div>
    </header>
  );
}
