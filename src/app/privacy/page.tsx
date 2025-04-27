import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (    <main className="min-h-screen py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        {/* Back to Home Link */}
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-blue-600 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center mb-12">
          <AppLogo className="w-40 h-40" />
          <h1 className="text-3xl md:text-4xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Privacy Policy</h1>
        </div>

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
