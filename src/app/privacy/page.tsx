import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicy() {
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
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: April 2025</p>
            
            <p className="mb-4">
              At MediScan, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h3>
            
            <p className="mb-4">
              We may collect information about you in various ways when you use our application:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Personal Data:</strong> We may collect personal information that you voluntarily provide when using our application, such as your name, email address, and medical information.
              </li>
              <li className="mb-2">
                <strong>Device Information:</strong> We may collect information about your mobile device, including the hardware model, operating system and version, unique device identifiers, and mobile network information.
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> We collect information about how you use our application, such as the features you use, the time spent on the application, and your interactions with the application.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
            
            <p className="mb-4">
              We may use the information we collect for various purposes, including to:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Provide, maintain, and improve our application</li>
              <li className="mb-2">Personalize your experience with our application</li>
              <li className="mb-2">Respond to your comments, questions, and customer service requests</li>
              <li className="mb-2">Send you technical notices, updates, security alerts, and support messages</li>
              <li className="mb-2">Monitor and analyze trends, usage, and activities in connection with our application</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Sharing Your Information</h3>
            
            <p className="mb-4">
              We may share information we collect as follows:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
              </li>
              <li className="mb-2">
                <strong>Compliance with Laws:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </li>
              <li className="mb-2">
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
            
            <p className="mb-6">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Your Choices</h3>
            
            <p className="mb-6">
              You can choose not to provide certain information, but this may limit your ability to use certain features of our application. You can also set your browser to block or alert you about cookies, but our application may not work properly without them.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h3>
            
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
            
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            
            <p>
              <strong>Email:</strong> privacy@mediscan.example.com<br />
              <strong>Address:</strong> 123 MediScan Avenue, Health City, HC 12345
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
