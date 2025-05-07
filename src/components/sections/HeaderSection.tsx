"use client";

import AppLogo from "@/components/AppLogo";
import PhoneMockup from "@/components/PhoneMockup";
import { FaDownload } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

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
  const [showGallery, setShowGallery] = useState(false);
  const [fullImage, setFullImage] = useState<string | null>(null);
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
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
        {/* Gallery Button - centered on mobile */}
        <div className="flex justify-center w-full">
          <button
            type="button"
            className="mt-4 mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:from-blue-600 hover:to-cyan-600 transition-colors"
            onClick={() => setShowGallery(true)}
          >
            Gallery
          </button>
        </div>
        {/* Gallery Modal */}
        {showGallery && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            style={{ touchAction: "none" }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-2 p-4 md:p-6 overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-primary text-2xl font-bold"
                onClick={() => setShowGallery(false)}
                aria-label="Close gallery"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                Media Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mediaImages.map((img) => (
                  <div
                    key={img}
                    className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all p-2 flex flex-col items-center relative group"
                  >
                    <img
                      src={`/assets/Media/${img}`}
                      alt={img}
                      className="rounded-lg w-full h-56 object-cover object-center select-none pointer-events-auto mb-2 cursor-pointer"
                      draggable={false}
                      style={{ touchAction: "none" }}
                      onClick={() => setFullImage(img)}
                    />
                    {/* Download overlay button */}
                    <a
                      href={`/assets/Media/${img}`}
                      download
                      className="absolute bottom-2 left-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow opacity-90 group-hover:opacity-100 transition-opacity z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Fullscreen Image Overlay */}
            {fullImage && (
              <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90">
                <div className="relative flex items-center justify-center w-full h-full">
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold z-20"
                    onClick={() => setFullImage(null)}
                    aria-label="Close image"
                  >
                    ×
                  </button>
                  <div className="relative max-w-full max-h-full flex items-center justify-center">
                    <img
                      src={`/assets/Media/${fullImage}`}
                      alt={fullImage}
                      className="max-h-[80vh] max-w-[95vw] rounded-xl shadow-xl object-contain bg-white"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                    <a
                      href={`/assets/Media/${fullImage}`}
                      download
                      className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow z-20"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
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
