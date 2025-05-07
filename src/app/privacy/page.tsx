import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy - MediScan",
  description: "Learn about MediScan's privacy practices and how we protect your data when using our AI medicine scanner application.",
  alternates: {
    canonical: "https://mediscan.kethanvr.me/privacy"
  },
  keywords: ["privacy policy", "MediScan privacy", "healthcare app privacy", "data protection", "medical app privacy"],
  openGraph: {
    title: "Privacy Policy - MediScan",
    description: "Learn about MediScan's privacy practices and data protection policies",
    url: "https://mediscan.kethanvr.me/privacy",
    type: "article",
  }
};

export default function PrivacyPolicy() {
  return (    <main className="min-h-screen py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        {/* Back to Home Link */}
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-blue-600 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        {/* Breadcrumb navigation for SEO */}
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li aria-current="page" className="text-blue-600">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex items-center mb-12">
          <AppLogo className="w-40 h-40" />
          <h1 className="text-3xl md:text-4xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Privacy Policy</h1>
        </div>

        {/* Add structured data for Privacy Policy page */}
        <Script
          id="privacy-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require('../../../public/privacy-structured-data.json')),
          }}
        />
        <Script
          id="privacy-breadcrumb-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require('../../../public/privacy-breadcrumb.json')),
          }}
        />

        {/* Content Section */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-blue-100 hover:border-blue-200 transition-colors">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-500 mb-6">Last updated: May 2025</p>

            <div className="prose max-w-none">
              <p className="mb-4">
                At MediScan, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>

              {/* Information We Collect */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h3>
              <p className="mb-4">
                <strong>Personal Data</strong>: When you use our app, we may collect certain personally identifiable information, including but not limited to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Camera data (only during active scanning)</li>
                <li>Device information</li>
                <li>Medicine scan history (stored locally on your device)</li>
                <li>Optional health records you choose to upload</li>
              </ul>

              {/* How We Use Your Information */}
              <h3 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
              <p className="mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To identify medicines through our AI scanning technology</li>
                <li>To provide medicine information and health guidance</li>
                <li>To improve our AI models with anonymized data (only with explicit consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
              </ul>

              {/* Data Security */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
              <p className="mb-4">
                The security of your data is important to us. Your health data and medicine scans are stored locally on your device. Any data sent to our servers for processing is encrypted during transmission and we do not retain image data after processing.
              </p>

              {/* Offline Functionality */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Offline Functionality</h3>
              <p className="mb-4">
                MediScan is designed to function offline after initial setup. Core medicine identification features work without an internet connection, though some advanced features may require connectivity.
              </p>

              {/* Rural Healthcare Focus */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Rural Healthcare Focus</h3>
              <p className="mb-4">
                As part of our commitment to rural healthcare empowerment, we've designed our privacy practices to be mindful of limited connectivity environments and to provide maximum utility while respecting user privacy.
              </p>

              {/* Your Rights */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Your Rights</h3>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Access the personal data we have about you</li>
                <li>Request correction of your personal data</li>
                <li>Delete your data from our systems</li>
                <li>Restrict or object to our processing of your data</li>
                <li>Data portability (receiving your data in a structured format)</li>
              </ul>

              {/* Contact Us */}
              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email</strong>: kethanvr@gmail.com<br />
                <strong>Address</strong>: Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
