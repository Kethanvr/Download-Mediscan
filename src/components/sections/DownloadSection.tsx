'use client';

import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";
import { FaDownload } from "react-icons/fa";

interface AppDetail {
  label: string;
  value: string;
}

const appDetails: AppDetail[] = [
  { label: "Version", value: "v1.0.0-beta" },
  { label: "Size", value: "~6 MB" },
  { label: "Platform", value: "Android 6.0+" },
  { label: "Updated", value: "May 2025" },
];

export default function DownloadSection() {
  return (
    <section className="py-24 relative overflow-hidden font-poppins">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        {/* Download badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            AVAILABLE NOW
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          📱 Get the MediScan App
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Phone Mockup with enhanced visuals */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-full"></div>
              <PhoneMockup className="scale-75 md:scale-100 hover:scale-105 transition-all duration-500 relative z-10">
                <Image
                  src="/assets/Home-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  priority
                />
              </PhoneMockup>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* App Details with enhanced card */}
          <div className="md:w-1/2 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  MediScan <span className="text-primary">(Beta Release)</span>
                </h3>
                <div className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded">v1.0.0</div>
              </div>

              {/* App Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {appDetails.map((detail) => (
                  <div 
                    key={detail.label} 
                    className="border border-gray-100 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-blue-100 transition-colors group"
                  >
                    <div className="text-sm text-gray-500 mb-1">{detail.label}</div>
                    <div className="font-medium text-gray-800 group-hover:text-primary transition-colors">{detail.value}</div>
                  </div>
                ))}
              </div>

              {/* Installation Note */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl mb-8 border border-blue-200">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1 text-xl">ℹ️</div>
                  <div>
                    <div className="font-medium text-blue-700 mb-2 text-lg">
                      Installation Note
                    </div>
                    <p className="text-gray-600">
                      This app requires camera permission for scanning medicine. You may need to enable installation from unknown sources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download buttons with improved styling */}
              <div className="space-y-4">
                <a href="https://mediscan.kethanvr.me" target="_blank" rel="noopener noreferrer" className="block">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200/50"
                  >
                    🌐 Visit Website
                  </button>
                </a>
                <p className="text-sm text-gray-600 italic">
                  Use the website if you encounter any issues with the APK.
                </p>

                <a href="/MediScan.apk" download className="block">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200/50"
                  >
                    <FaDownload className="mr-2" />
                    Download APK
                  </button>
                </a>
              </div>
            </div>

            {/* Coming Soon - iOS Version */}
            <div className="mt-6 bg-yellow-50 p-4 rounded-xl text-center border border-yellow-200">
              <p className="text-yellow-700">
                <span className="font-medium">Coming Soon:</span> iOS Version
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
