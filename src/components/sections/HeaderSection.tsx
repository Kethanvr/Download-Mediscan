"use client";

import AppLogo from "@/components/AppLogo";
import PhoneMockup from "@/components/PhoneMockup";
import { FaDownload } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const mediaImages = [
  "Mediscan-smarter-than-google.png",
  "Mediscan-your-helath-one-tap-away.png",
  "Meidscan-ask-doc.png",
  "Mediscan-no-more-medicine-mumbo-jumbo.png",
  "Mediscan-Say-no-to-google.png",
  "Mediscan-Scan-detect.png",
  "Meidscan-vs-Mysterypill.png",
  "Meidscan-for-elders.png",
  "Mediscan-From-village-to-city-One-health-app.png",
  "Mediscan-Shield-Yourself-withknowledge.png",
  "Mediscan-Better-than-google.png",
  "Mediscan-DOC-Chat-with-AI.png",
  "Mediscan-medicine-records.png",
  "Mediscan-Doc-AI.png",
  "Mediscan-scan-to-save.png",
  "Mediscan-why-Meidscan.png",
  "Mediscan-your-helath-in-your-hands.png",
  "Mediscan-vs -Google.png",
  "Mediscan-Know-what-you-take.png",
  "Mediscan-for-healther-tomorrow.png",
  "Mediscan-Dont-google-it-Mediscan-it.png",
];

export default function HeaderSection() {
  return (
    <header className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-0 font-poppins relative overflow-hidden">
      <div className="container mx-auto pt-4 pb-0 text-center">
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
          Capture a photo and access instant, AI-powered medicine information —
          faster, safer, smarter healthcare for everyone, everywhere.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          Use the website if you encounter any issues with the APK.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">          {/* Visit Website Button */}
          <a
            href="https://mediscan.kethanvr.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Vist Website
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
      
      </div>
      {/* Decorative Curve Behind Phone */}
      <div className="relative mt-8 md:mt-0">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-2xl h-32 md:h-48 z-0 pointer-events-none select-none">
          <svg
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 100 Q400 250 800 100 V200 H0 V100 Z"
              fill="url(#curveGradient)"
            />
            <defs>
              <linearGradient
                id="curveGradient"
                x1="0"
                y1="0"
                x2="800"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0.10" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Phone Demo */}
        <div className="flex justify-center relative z-10">
          <PhoneMockup className="scale-75 md:scale-90 lg:scale-100 transform transition-all duration-300 hover:scale-105">
            <div className="bg-blue-500 text-white h-full flex flex-col">
              <Image
                src="/assets/Mediscan-homepage.png"
                alt="MediScan Home Page"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </PhoneMockup>
        </div>
        
      </div>
        {/* Media Gallery Link */}
        <div className="flex justify-center w-full">
          <Link href="/media">
            <button
              type="button"
              className="mt-4 mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-colors"
            >
              Media Gallery
            </button>
          </Link>
        </div>
    </header>
  );
}
