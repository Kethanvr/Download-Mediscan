import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms of Service - MediScan",
  description: "Terms and conditions for using MediScan's AI-powered medicine identification application for rural healthcare.",
  alternates: {
    canonical: "https://mediscan.kethanvr.me/terms"
  },
  keywords: ["terms of service", "MediScan terms", "healthcare app terms", "user agreement", "medical app terms"],
  openGraph: {
    title: "Terms of Service - MediScan",
    description: "View MediScan's terms and conditions for using our AI medicine identification application",
    url: "https://mediscan.kethanvr.me/terms",
    type: "article",
  }
};

export default function TermsOfService() {
  return (    <main className="min-h-screen py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
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
            <li aria-current="page" className="text-blue-600">Terms of Service</li>
          </ol>
        </nav>
        
        <div className="flex items-center mb-12">
         <AppLogo className="w-40 h-40" />
          <h1 className="text-3xl md:text-4xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Terms of Service</h1>
        </div>

        {/* Add structured data for Terms page */}
        <Script
          id="terms-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require('../../../public/terms-structured-data.json')),
          }}
        />
        
        {/* Add breadcrumb structured data */}
        <Script
          id="terms-breadcrumb-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require('../../../public/terms-breadcrumb.json')),
          }}
        />
        
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-blue-100 hover:border-blue-200 transition-colors">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-500 mb-6">Last updated: May 2025</p>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Please read these Terms of Service ("Terms") carefully before using the MediScan application ("the Application"). By accessing or using MediScan, you agree to be bound by these Terms. If you do not agree, please do not use the Application.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">About MediScan</h3>
              <p className="mb-4">
                MediScan is an AI-powered medicine identification app built with React, Vite, Supabase, JavaScript, and Tailwind CSS. The app is designed to help users—especially in rural and underserved communities—identify medications, manage schedules, and access essential health information. Some features, such as Medication Reminders, Sync Across Devices, Family Accounts, and Offline Functionality, are available or coming soon.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Use of the Application</h3>
              <p className="mb-4">
                MediScan is intended to support users in identifying medications and managing health information. However, it is a demonstration application and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for any medical concerns.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">AI-Powered and Premium Features</h3>
              <p className="mb-4">
                The Application uses AI to identify medicines and provide information. While we strive for accuracy, results may not always be perfect. Premium features such as Medication Reminders, Family Accounts, and Sync Across Devices are available to Gold members. Offline functionality is provided for core features, but some advanced features may require internet connectivity.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Rural Healthcare and Accessibility</h3>
              <p className="mb-4">
                MediScan is built with a focus on accessibility and rural healthcare empowerment. The app is designed to work in low-connectivity environments and is accessible to users with disabilities.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">User Accounts</h3>
              <p className="mb-4">
                When creating an account, you must provide accurate and current information. You are responsible for maintaining the confidentiality of your account and password. Failure to comply may result in termination of your account.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h3>
              <p className="mb-4">
                The Application and its content are the property of MediScan and its licensors. Unauthorized use is prohibited.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
              <p className="mb-4">
                MediScan is provided as a demonstration. We are not liable for any damages resulting from the use or inability to use the Application.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Changes to Terms</h3>
              <p className="mb-4">
                We may update these Terms at any time. Continued use of the Application after changes constitutes acceptance of the new Terms.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              <p className="mb-4">
                For questions about these Terms, please connect with us on <a href="https://www.linkedin.com/in/kethanvr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
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
