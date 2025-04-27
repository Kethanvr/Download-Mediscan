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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          📱 Download MediScan Today
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <PhoneMockup className="scale-75 md:scale-90">
              <Image
                src="/assets/Home-gold.png"
                alt="MediScan Home Page"
                width={300}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </PhoneMockup>
          </div>

          <div className="md:w-1/2 text-left">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">
                MediScan (Beta Release)
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {appDetails.map((detail) => (
                  <div key={detail.label} className="border rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">{detail.label}</div>
                    <div className="font-medium">{detail.value}</div>
                  </div>
                ))} 
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">ℹ️</div>
                  <div>
                    <div className="font-medium text-blue-700 mb-1">
                      Installation Note
                    </div>
                    <p className="text-sm text-gray-600">
                      This app requires camera permission for scanning
                      medicine. You may need to enable installation from
                      unknown sources.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/app-release.apk" download>
                <button
                  type="button"
                  className="w-full flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download APK
                </button>
              </a>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-600">
                <span className="font-medium">Coming Soon:</span> iOS Version
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
