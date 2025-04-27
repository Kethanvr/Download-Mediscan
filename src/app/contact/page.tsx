'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaArrowLeft } from 'react-icons/fa';
import AppLogo from '@/components/AppLogo';
import Link from 'next/link';

const socialLinks = [
  { href: "https://github.com/Kethanvr", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/kethan-vr-433ab532b/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://x.com/VrKethan", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.youtube.com/@kethanvr", icon: FaYoutube, label: "YouTube" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-blue-600 transition-colors">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="flex items-center mb-12">
          <AppLogo className="w-40 h-40" />
          <h1 className="text-3xl md:text-4xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contact Us</h1>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-200 transition-colors">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">About MediScan</h2>
            <p className="text-gray-600 mb-6">
              MediScan is a revolutionary healthcare application designed to make medicine information
              accessible to everyone. Our mission is to improve healthcare accessibility and empower
              users with accurate medical information.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Founded by:</strong> Kethan VR
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}              <a href="mailto:kethanvr@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  kethanvr@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-200 transition-colors">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">Connect With Us</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <link.icon className="h-6 w-6 text-gray-700" />
                  <span className="text-gray-700">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-200 transition-colors">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">Our Location</h2>
          <p className="text-gray-600 mb-4">
            While MediScan is primarily a digital platform, we're always happy to hear from our users
            and partners.
          </p>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
            </p>
            <p className="text-gray-600">
              <strong>Response Time:</strong> We aim to respond to all inquiries within 24 hours
            </p>
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
