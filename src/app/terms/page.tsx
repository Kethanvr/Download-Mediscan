"use client";

import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto">
        <Link href="/" className="flex items-center text-gray-600 mb-6 hover:text-primary transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-center mb-6">
          <AppLogo width={40} height={40} />
          <h1 className="text-2xl font-bold ml-3">MediScan</h1>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 2025</p>
            
            <p className="mb-4">
              Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the MediScan mobile application (&quot;the Application&quot;) operated by MediScan Inc. (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            
            <p className="mb-4">
              Your access to and use of the Application is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Application.
            </p>
            
            <p className="mb-6">
              By accessing or using the Application, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Application.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Use of the Application</h3>
            
            <p className="mb-4">
              The MediScan application is designed to help users identify medications, track prescriptions, and manage health information. However, the Application is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
            
            <p className="mb-6">
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or seen in the Application.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">User Accounts</h3>
            
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Application.
            </p>
            
            <p className="mb-6">
              You are responsible for safeguarding the password that you use to access the Application and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h3>
            
            <p className="mb-6">
              The Application and its original content, features, and functionality are and will remain the exclusive property of MediScan Inc. and its licensors. The Application is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MediScan Inc.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Links To Other Web Sites</h3>
            
            <p className="mb-6">
              Our Application may contain links to third-party web sites or services that are not owned or controlled by MediScan Inc. MediScan Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that MediScan Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Termination</h3>
            
            <p className="mb-6">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Application will immediately cease. If you wish to terminate your account, you may simply discontinue using the Application.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
            
            <p className="mb-6">
              In no event shall MediScan Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Application; (ii) any conduct or content of any third party on the Application; (iii) any content obtained from the Application; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Changes</h3>
            
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
            
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p>
              <strong>Email:</strong> terms@mediscan.example.com<br />
              <strong>Address:</strong> 123 MediScan Avenue, Health City, HC 12345
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
