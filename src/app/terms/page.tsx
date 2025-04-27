import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-10 bg-gray-50">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-primary transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-center mb-8">
         <AppLogo className="w-40 h-40" />
          <h1 className="text-2xl md:text-3xl font-bold ml-3 text-primary">MediScan Terms of Service</h1>
        </div>
        
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-500 mb-6">Last updated: May 2025</p>
            
            <div className="prose max-w-none">
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
              
              <h3 className="text-xl font-semibold mt-8 mb-4">AI-Powered Features</h3>
              
              <p className="mb-4">
                The Application uses artificial intelligence to identify medicines and provide information about them. While we strive for accuracy, the AI technology is still evolving and may not always provide perfect results. Always verify the identification of any medication with the information on the packaging or with a healthcare professional.
              </p>
              
              <p className="mb-4">
                Our Doc AI chatbot feature provides general information only and should not be used as a substitute for consultation with a healthcare professional.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Rural Healthcare Focus</h3>
              
              <p className="mb-4">
                MediScan is designed with a special focus on rural healthcare empowerment. While we optimize for offline usage and low-resource environments, users should understand the limitations of technology in healthcare settings and use the Application as a supporting tool, not a primary source of healthcare.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">User Accounts</h3>
              
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Application.
              </p>
              
              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the Application and for any activities or actions under your password. We encourage you to use a strong password (a combination of upper and lower case letters, numbers, and symbols) for your account.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h3>
              
              <p className="mb-4">
                The Application and its original content, features, and functionality are and will remain the exclusive property of MediScan Inc. and its licensors. The Application is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MediScan Inc.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Termination</h3>
              
              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <p className="mb-4">
                Upon termination, your right to use the Application will immediately cease. If you wish to terminate your account, you may simply discontinue using the Application, or delete your account through the settings.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
              
              <p className="mb-4">
                In no event shall MediScan Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Application.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Changes</h3>
              
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
              
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <p className="mb-4">
                <strong>Email</strong>: terms@mediscan.app<br />
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
