import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-10 bg-gray-50">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-primary transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-center mb-8">
          <AppLogo width={48} height={48} />
          <h1 className="text-2xl md:text-3xl font-bold ml-3 text-primary">MediScan Privacy Policy</h1>
        </div>
        
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-500 mb-6">Last updated: May 2023</p>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                At MediScan, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
              
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
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
              
              <p className="mb-4">
                The security of your data is important to us. Your health data and medicine scans are stored locally on your device. Any data sent to our servers for processing is encrypted during transmission and we do not retain image data after processing.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Offline Functionality</h3>
              
              <p className="mb-4">
                MediScan is designed to function offline after initial setup. Core medicine identification features work without an internet connection, though some advanced features may require connectivity.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Rural Healthcare Focus</h3>
              
              <p className="mb-4">
                As part of our commitment to rural healthcare empowerment, we've designed our privacy practices to be mindful of limited connectivity environments and to provide maximum utility while respecting user privacy.
              </p>
              
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
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <p className="mb-4">
                <strong>Email</strong>: privacy@mediscan.app<br />
                <strong>Address</strong>: MediScan Technologies, 123 Health Street, Bangalore, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
