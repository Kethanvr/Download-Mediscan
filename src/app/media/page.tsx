"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import AppLogo from "@/components/AppLogo";
import Script from "next/script";

const mediaImages = [
 
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
   "Mediscan-smarter-than-google.png",
];

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Record<string, string[]>>({});
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Categorize images (simple approach based on filenames)
    const cats: Record<string, string[]> = {
      'all': mediaImages,
      'features': mediaImages.filter(img => img.includes('features') || img.includes('scan') || img.includes('detect')),
      'comparisons': mediaImages.filter(img => img.includes('google') || img.includes('vs')),
      'benefits': mediaImages.filter(img => img.includes('health') || img.includes('save') || img.includes('shield'))
    };
    setCategories(cats);
    setLoading(false);
  }, []);

  const displayImages = categories[activeCategory] || mediaImages;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      {/* Add structured data for Media Gallery page */}
      <Script
        id="media-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(require('../../../public/media-structured-data.json')),
        }}
      />
      <Script
        id="media-breadcrumb-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(require('../../../public/media-breadcrumb.json')),
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            {/* <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link> */}
            
            {/* Breadcrumb navigation for SEO */}
            <nav className="text-sm text-gray-500 mt-2" aria-label="Breadcrumb">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                  <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </li>
                <li aria-current="page" className="text-blue-600">Media Gallery</li>
              </ol>
            </nav>
          </div>
          <AppLogo className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            MediScan Media Gallery
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our collection of promotional materials and screenshots showcasing MediScan's features and benefits.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {Object.keys(categories).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse">
              <AppLogo className="w-16 h-16 opacity-50" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in">
            {displayImages.map((img) => (
              <div
                key={img}
                className="group relative aspect-square rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={`/assets/Media/${img}`}
                  alt={img
                    .replace('.png', '')
                    .replaceAll('-', ' ')
                    .replace('Mediscan ', 'MediScan - ')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <p className="text-sm font-medium line-clamp-2">
                    {img.replace('.png', '').replaceAll('-', ' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[95vw] max-h-[95vh]">
              {/* Close button */}
              {/* Close button removed in fullscreen modal */}
              {/* Download button at bottom right */}
              <a
                href={`/assets/Media/${selectedImage}`}
                download
                className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
                onClick={e => e.stopPropagation()}
                title="Download image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download
              </a>
              <Image
                src={`/assets/Media/${selectedImage}`}
                alt={selectedImage.replace('.png', '').replaceAll('-', ' ')}
                width={1200}
                height={1200}
                className="max-h-[95vh] w-auto rounded-lg shadow-2xl"
                style={{ objectFit: "contain" }}
              />
              {/* Removed white overlay at the bottom of fullscreen modal */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
