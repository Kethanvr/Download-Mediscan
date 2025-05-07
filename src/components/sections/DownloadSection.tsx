"use client";

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
    <section className="py-16 md:py-24 font-poppins bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Download badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            AVAILABLE NOW
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
          📱 Get the MediScan App
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Phone Mockup with enhanced visuals */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[300px] md:max-w-[350px]">
              <PhoneMockup className="scale-75 md:scale-100 hover:scale-105 transition-all duration-500 relative z-10">
                <Image
                  src="/assets/Home-gold.png"
                  alt="MediScan Home Page"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  priority
                />
              </PhoneMockup>
            </div>
          </div>

          {/* App Details with enhanced card */}
          <div className="md:w-1/2 text-left">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              {/* App Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {appDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {detail.label}
                    </div>
                    <div className="font-medium text-gray-800">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Installation Note */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl mb-8">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">ℹ️</div>
                  <div>
                    <div className="font-medium text-blue-700 mb-1">
                      Installation Note
                    </div>
                    <p className="text-sm text-gray-600">
                      This app requires camera permission for scanning medicine.
                      You may need to enable installation from unknown sources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download buttons with styling matching the image */}
              <div className="space-y-4">
                <a
                  href="https://mediscan.kethanvr.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    🌐 Visit Website
                  </button>
                </a>
                <p className="text-sm text-gray-600 italic text-center">
                  Use the website if you encounter any issues with the APK.
                </p>

                <a href="/MediScan.apk" download className="block">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaDownload className="mr-2" />
                    Download APK
                  </button>
                </a>
              </div>
            </div>

            {/* Coming Soon - iOS Version */}
            <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl text-center shadow-md">
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
