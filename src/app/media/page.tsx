"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Media Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaImages.map((img) => (
            <div
              key={img}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/assets/Media/${img}`}
                alt={img}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <button
                className="absolute -top-12 right-0 text-white text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <Image
                src={`/assets/Media/${selectedImage}`}
                alt={selectedImage}
                width={1200}
                height={1200}
                className="max-h-[90vh] w-auto rounded-lg"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
